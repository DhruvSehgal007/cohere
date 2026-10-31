import mongoose, { Model, Schema } from "mongoose";

interface Subscriber {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<Subscriber>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
}, { timestamps: true });

const NewsletterSubscriber: Model<Subscriber> = mongoose.models.NewsletterSubscriber || mongoose.model<Subscriber>("NewsletterSubscriber", schema);
export default NewsletterSubscriber;
