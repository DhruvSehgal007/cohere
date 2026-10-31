import mongoose, { Schema } from "mongoose";
const speaker = new Schema({ name: String, role: String, image: String }, { _id: false });
const event = new Schema({ createdAt: Date, id: String, title: String, slug: String, image: String, heroImage: String, paragraphs: [String], content: Schema.Types.Mixed, speakers: [speaker], order: Number }, { _id: false });
const schema = new Schema({ _id: String, settings: { heading: String, description: String, image: String, listingHeading: String }, events: [event] });
// Next.js can retain the old model across development hot reloads.
// Recompile once when the cached schema predates event creation dates.
if (mongoose.models.EventSection && (!mongoose.models.EventSection.schema.path("events.createdAt") || !mongoose.models.EventSection.schema.path("events.content"))) {
  mongoose.deleteModel("EventSection");
}
export default mongoose.models.EventSection || mongoose.model("EventSection", schema);
