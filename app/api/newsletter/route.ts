import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/modules/auth";
import { connectDB } from "@/utils/modules/db";
import NewsletterSubscriber from "@/utils/models/NewsletterSubscriber";
import { newsletterLimit } from "@/utils/modules/newsletterCaptcha";
import { normalizeNewsletterEmail } from "@/utils/newsletter";

export const runtime = "nodejs";
const json = (body: unknown, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: NextRequest) {
  try {
    if (Number(request.headers.get("content-length")) > 8192) return json({ message: "Request too large." }, 413);
    let body;
    try { body = await request.json(); } catch { return json({ message: "Invalid request." }, 400); }
    if (!body || typeof body !== "object") return json({ message: "Invalid request." }, 400);
    const email = normalizeNewsletterEmail(body.email);
    if (!email) return json({ message: "Please enter a valid email address." }, 400);
    if (body.website) return json({ message: "Unable to accept this submission." }, 400);
    if (typeof body.captchaToken !== "string" || !body.captchaToken.trim() || body.captchaToken.length > 4096) {
      return json({ message: "Please check the reCAPTCHA checkbox." }, 400);
    }
    const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
    if (!secret) return json({ message: "Newsletter verification is not configured yet. Please try again later." }, 503);
    await connectDB();
    const retryAfter = await newsletterLimit(request, "signup", 10);
    if (retryAfter) {
      const response = json({ message: "Too many attempts. Please try again in 10 minutes." }, 429);
      response.headers.set("Retry-After", String(retryAfter));
      return response;
    }
    let verification;
    try {
      const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: body.captchaToken }),
        signal: AbortSignal.timeout(10000),
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Verification unavailable");
      verification = await response.json();
    } catch {
      return json({ message: "Unable to verify reCAPTCHA. Please try again." }, 503);
    }
    const allowedHosts = process.env.RECAPTCHA_ALLOWED_HOSTNAMES?.split(",").map((host) => host.trim()).filter(Boolean);
    if (verification?.success !== true || (allowedHosts?.length && !allowedHosts.includes(verification.hostname))) {
      return json({ message: "reCAPTCHA failed or expired. Please check the checkbox again." }, 400);
    }
    // Wait for the unique index before accepting writes, including concurrent first submissions.
    await NewsletterSubscriber.init();
    try {
      await NewsletterSubscriber.updateOne({ email }, { $setOnInsert: { email } }, { upsert: true });
    } catch (error) {
      if (!(error && typeof error === "object" && "code" in error && error.code === 11000)) throw error;
    }
    // Same response for existing addresses to avoid exposing the subscriber list.
    return json({ message: "Thank you! You are subscribed to our newsletter." });
  } catch (error) {
    console.error("Newsletter signup failed:", error instanceof Error ? error.name : "Unknown error");
    return json({ message: "Unable to subscribe right now. Please try again." }, 500);
  }
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get("cohere_token")?.value;
  const admin = token ? await verifyToken(token).catch(() => null) : null;
  if (admin?.role !== "admin") return json({ message: "Unauthorized" }, 401);
  const page = Number(request.nextUrl.searchParams.get("page") || 1);
  if (!Number.isSafeInteger(page) || page < 1 || page > 100000) return json({ message: "Invalid page." }, 400);
  try {
    await connectDB();
    const pageSize = 50;
    const [subscribers, total] = await Promise.all([
      NewsletterSubscriber.find({}, { email: 1, createdAt: 1 }).sort({ createdAt: -1, _id: -1 }).skip((page - 1) * pageSize).limit(pageSize).lean(),
      NewsletterSubscriber.countDocuments(),
    ]);
    return json({ subscribers, total, page, pageSize });
  } catch {
    return json({ message: "Unable to load newsletter emails. Please try again." }, 500);
  }
}
