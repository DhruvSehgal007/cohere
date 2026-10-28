import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import ClientSection from "@/utils/models/ClientSection";
import { connectDB } from "@/utils/modules/db";
import { verifyToken } from "@/utils/modules/auth";
import { defaultClients } from "@/utils/clientDefaults";

async function initialize() {
  await connectDB();
  return ClientSection.findOneAndUpdate(
    { _id: "homepage" },
    { $setOnInsert: { clients: defaultClients } },
    { upsert: true, new: true }
  );
}

export async function GET() {
  try {
    const section = await initialize();
    return NextResponse.json({ clients: section.clients });
  } catch (error) {
    console.error("Load clients:", error);
    return NextResponse.json({ message: "Unable to load clients. Please try again." }, { status: 500 });
  }
}

async function mutate(request: NextRequest) {
  try {
    const token = request.cookies.get("cohere_token")?.value;
    const admin = token ? await verifyToken(token).catch(() => null) : null;
    if (admin?.role !== "admin") return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    if (Number(request.headers.get("content-length")) > 3000000) {
      return NextResponse.json({ message: "Image must be smaller than 2 MB." }, { status: 413 });
    }
    const body = await request.json();
    const { id, name, row, image } = body;
    if (request.method !== "POST" && (typeof id !== "string" || !mongoose.isValidObjectId(id))) {
      return NextResponse.json({ message: "Invalid client ID." }, { status: 400 });
    }
    if (request.method !== "DELETE") {
      if (typeof name !== "string" || !name.trim() || name.length > 120 || ![1, 2].includes(row)) {
        return NextResponse.json({ message: "Enter a client name and select the first or second row." }, { status: 400 });
      }
      if (image !== undefined && (typeof image !== "string" || image.length > 2800000 || !/^data:image\/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/.test(image))) {
        return NextResponse.json({ message: "Upload a PNG, JPEG, WebP or GIF image under 2 MB." }, { status: 400 });
      }
      if (request.method === "POST" && !image) return NextResponse.json({ message: "Choose a logo image." }, { status: 400 });
    }
    await initialize();
    if (request.method === "POST") {
      await ClientSection.updateOne({ _id: "homepage" }, { $push: { clients: { name: name.trim(), row, image } } });
    } else {
      const update = request.method === "DELETE"
        ? { $pull: { clients: { _id: id } } }
        : { $set: { "clients.$.name": name.trim(), "clients.$.row": row, ...(image ? { "clients.$.image": image } : {}) } };
      const result = await ClientSection.updateOne({ _id: "homepage", "clients._id": id }, update);
      if (!result.matchedCount) return NextResponse.json({ message: "Client not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Save client:", error);
    return NextResponse.json({ message: "Unable to save clients. Please try again." }, { status: 500 });
  }
}

export const POST = mutate;
export const PUT = mutate;
export const DELETE = mutate;
