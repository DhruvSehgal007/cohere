import EventSection from "@/utils/models/EventSection";
import { connectDB } from "@/utils/modules/db";
import { defaultEvents, defaultSettings, type EventItem, type EventSettings } from "@/utils/eventDefaults";
export async function getEventSection(): Promise<{ settings: EventSettings; events: EventItem[] }> {
 await connectDB();
 const section = await EventSection.findOneAndUpdate({ _id: "events" }, { $setOnInsert: { settings: defaultSettings, events: defaultEvents.map(event => ({ ...event, createdAt: new Date() })) } }, { upsert: true, returnDocument: "after" });
 const data = section.toObject();
 return { settings: data.settings, events: data.events.sort((a: EventItem, b: EventItem) => a.order - b.order) };
}
