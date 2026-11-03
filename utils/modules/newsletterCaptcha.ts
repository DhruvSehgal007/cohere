import { createHmac } from "node:crypto";
import type { NextRequest } from "next/server";
import NewsletterRateLimit from "@/utils/models/NewsletterRateLimit";

export async function newsletterLimit(request: NextRequest, scope: "signup", max: number) {
  // The deployment proxy must overwrite this header instead of trusting client input.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const windowMs = 10 * 60 * 1000;
  const window = Math.floor(Date.now() / windowMs);
  const digest = createHmac("sha256", process.env.JWT_SECRET!).update(ip).digest("hex");
  const filter = { _id: `${scope}:${digest}:${window}` };
  const update = { $inc: { hits: 1 }, $setOnInsert: { expiresAt: new Date((window + 1) * windowMs) } };
  let limit;
  try {
    limit = await NewsletterRateLimit.findOneAndUpdate(filter, update, { upsert: true, returnDocument: "after" });
  } catch (error) {
    if (!(error && typeof error === "object" && "code" in error && error.code === 11000)) throw error;
    limit = await NewsletterRateLimit.findOneAndUpdate(filter, { $inc: { hits: 1 } }, { returnDocument: "after" });
  }
  return limit && limit.hits <= max ? 0 : Math.ceil(((window + 1) * windowMs - Date.now()) / 1000);
}
