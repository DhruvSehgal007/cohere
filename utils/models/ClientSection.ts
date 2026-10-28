import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  row: { type: Number, enum: [1, 2], required: true },
});

const schema = new Schema({
  _id: { type: String },
  clients: [clientSchema],
});

export default mongoose.models.ClientSection || mongoose.model("ClientSection", schema);
