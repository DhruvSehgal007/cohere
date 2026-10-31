import mongoose, { Model, Schema } from "mongoose";

interface RateLimit { _id: string; hits: number; expiresAt: Date }
const schema = new Schema<RateLimit>({
  _id: { type: String, required: true },
  hits: { type: Number, required: true },
  expiresAt: { type: Date, required: true, expires: 0 },
});

const NewsletterRateLimit: Model<RateLimit> = mongoose.models.NewsletterRateLimit || mongoose.model<RateLimit>("NewsletterRateLimit", schema);
export default NewsletterRateLimit;
