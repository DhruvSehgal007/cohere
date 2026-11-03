import mongoose, { Model, Schema } from "mongoose";

/* --- PREVIOUS CODE (Original ISocialPost without avatar / embedUrl) ---
export interface ISocialPost {
  platform: "linkedin" | "instagram";
  postId: string;
  title: string;
  username: string;
  text: string;
  likes: number;
  image: string;
  date: string;
  postUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
--- END PREVIOUS CODE --- */

export interface ISocialPost {
  platform: "linkedin" | "instagram";
  postId: string;
  title: string;
  username: string;
  text: string;
  likes: number;
  image: string;
  avatar?: string;
  date: string;
  postUrl?: string;
  embedUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const socialPostSchema = new Schema<ISocialPost>(
  {
    platform: {
      type: String,
      enum: ["linkedin", "instagram"],
      required: true,
      index: true,
    },
    postId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      default: "Cohere Compliance",
    },
    username: {
      type: String,
      required: true,
      trim: true,
      default: "@coherecompliance",
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
    avatar: {
      type: String,
      required: false,
      default: "",
    },
    date: {
      type: String,
      required: true,
    },
    postUrl: {
      type: String,
      required: false,
      default: "",
    },
    embedUrl: {
      type: String,
      required: false,
      default: "",
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

if (process.env.NODE_ENV !== "production" && mongoose.models.SocialPost) {
  delete (mongoose.models as any).SocialPost;
}

const SocialPost: Model<ISocialPost> =
  mongoose.models.SocialPost ||
  mongoose.model<ISocialPost>("SocialPost", socialPostSchema);

export default SocialPost;
