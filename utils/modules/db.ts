import mongoose from "mongoose";

declare global {
  var mongooseConnection:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const cached = global.mongooseConnection || {
  conn: null,
  promise: null,
};

global.mongooseConnection = cached;

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in .env.local");
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI);
  }

  cached.conn = await cached.promise;

  console.log("MongoDB connected successfully");

  return cached.conn;
}