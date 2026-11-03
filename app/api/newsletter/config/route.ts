import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  // Alias process.env to prevent Next.js from inlining NEXT_PUBLIC_* at build time.
  const runtimeEnv = process.env;
  const siteKey = runtimeEnv.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim();
  const configured = siteKey && runtimeEnv.RECAPTCHA_SECRET_KEY?.trim();
  const headers = { "Cache-Control": "no-store" };
  if (!configured) {
    return NextResponse.json({ message: "Newsletter verification is not configured yet. Please try again later." }, { status: 503, headers });
  }
  // The site key is public. Never return the server's secret key.
  return NextResponse.json({ siteKey }, { headers });
}
