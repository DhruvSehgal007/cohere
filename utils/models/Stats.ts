import mongoose, { Model, Schema } from "mongoose";

export interface IStat {
  value: number;
  suffix: string;
  label: string;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const statsSchema = new Schema<IStat>(
  {
    value: {
      type: Number,
      required: true,
      min: 0,
    },

    suffix: {
      type: String,
      default: "+",
      trim: true,
    },

    label: {
      type: String,
      required: true,
      trim: true,
    },

    order: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Stats: Model<IStat> =
  mongoose.models.Stats ||
  mongoose.model<IStat>("Stats", statsSchema);

export default Stats;