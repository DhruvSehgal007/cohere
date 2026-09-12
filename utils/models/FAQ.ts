import mongoose, { Model, Schema } from "mongoose";

export interface IFAQ {
  question: string;
  answer: string;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const faqSchema = new Schema<IFAQ>(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },

    answer: {
      type: String,
      required: true,
      trim: true,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const FAQ: Model<IFAQ> =
  mongoose.models.FAQ ||
  mongoose.model<IFAQ>("FAQ", faqSchema);

export default FAQ;