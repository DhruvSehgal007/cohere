import { normalizeEventContent, eventContentText } from "@/utils/eventContent";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { verifyToken } from "@/utils/modules/auth";
import { getEventSection } from "@/utils/modules/events";
import EventSection from "@/utils/models/EventSection";

export async function GET() {
 try { return NextResponse.json(await getEventSection()); }
 catch (error) { console.error("Load events", error); return NextResponse.json({ message: "Unable to load events." }, { status: 500 }); }
}
const text = (v: unknown, max: number, required = true): v is string => typeof v === "string" && (!required || !!v.trim()) && v.length <= max;
const image = (v: unknown) => text(v, 2800000) && (/^\/(?!\/)[^\s]+$/.test(v) || /^data:image\/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/.test(v));
async function mutate(request: NextRequest) {
 try {
  const token = request.cookies.get("cohere_token")?.value;
  const admin = token ? await verifyToken(token).catch(() => null) : null;
  if (admin?.role !== "admin") return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const raw = await request.text();
  if (raw.length > 12000000) return NextResponse.json({ message: "Please use smaller images (maximum 12 MB per event)." }, { status: 413 });
  let body;
  try { body = JSON.parse(raw); } catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }
  if (!body || typeof body !== "object") return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  await getEventSection();
  if (body.settings) {
   const s = body.settings;
   if (!text(s.heading, 250) || !text(s.description, 2000, false) || !text(s.listingHeading, 150) || !image(s.image)) return NextResponse.json({ message: "Enter valid page headings, description and banner image." }, { status: 400 });
   await EventSection.updateOne({ _id: "events" }, { $set: { settings: { heading: s.heading.trim(), description: s.description.trim(), listingHeading: s.listingHeading.trim(), image: s.image } } });
  } else if (request.method === "DELETE") {
   if (!text(body.id, 100)) return NextResponse.json({ message: "Invalid event ID." }, { status: 400 });
   const result = await EventSection.updateOne({ _id: "events", "events.id": body.id }, { $pull: { events: { id: body.id } } });
   if (!result.matchedCount) return NextResponse.json({ message: "Event not found." }, { status: 404 });
  } else {
   const e = body.event;
   const content = e?.content !== undefined ? normalizeEventContent(e.content) : null;
   if (e?.content !== undefined && !content) return NextResponse.json({ message: "Enter event content with valid formatting and links." }, { status: 400 });
   const paragraphs = content ? [eventContentText(content)] : e?.paragraphs;
   if (!e || !text(e.title, 250) || !text(e.slug, 250) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.slug) || !image(e.image) || !image(e.heroImage) || !Number.isSafeInteger(e.order) || e.order < 0 || !Array.isArray(paragraphs) || paragraphs.length > 100 || !paragraphs.length || !paragraphs.every((p: unknown) => text(p, content ? 200000 : 20000)) || !Array.isArray(e.speakers) || e.speakers.length > 20 || !e.speakers.every((s: {name: unknown; role: unknown; image: unknown}) => s && text(s.name, 150) && text(s.role, 250, false) && image(s.image))) return NextResponse.json({ message: "Check event title, URL slug, images, paragraphs, speakers and display order." }, { status: 400 });
   const id = request.method === "POST" ? randomUUID() : e.id;
   if (!text(id, 100)) return NextResponse.json({ message: "Invalid event ID." }, { status: 400 });
   const event = { id, ...(request.method === "POST" ? { createdAt: new Date() } : {}), title: e.title.trim(), slug: e.slug, image: e.image, heroImage: e.heroImage, paragraphs, ...(content ? { content } : {}), speakers: e.speakers.map((s: {name: string; role: string; image: string}) => ({ name: s.name.trim(), role: s.role.trim(), image: s.image })), order: e.order };
   const filter = { _id: "events", events: { $not: { $elemMatch: { slug: e.slug, id: { $ne: id } } } } };
   const update = request.method === "POST" ? { $push: { events: event } } : { $set: Object.fromEntries(Object.entries(event).map(([key, value]) => [`events.$[event].${key}`, value])) };
   const result = await EventSection.updateOne({ ...filter, ...(request.method === "POST" ? {} : { "events.id": id }) }, update, { arrayFilters: request.method === "POST" ? undefined : [{ "event.id": id }] });
   if (!result.matchedCount) return NextResponse.json({ message: "This URL slug is already used, or the event no longer exists." }, { status: 409 });
  }
  return NextResponse.json({ success: true });
 } catch (error) { console.error("Save event", error); return NextResponse.json({ message: "Unable to save. Please try smaller images or try again." }, { status: 500 }); }
}
export const POST = mutate;
export const PUT = mutate;
export const DELETE = mutate;
