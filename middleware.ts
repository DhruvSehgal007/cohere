import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { verifyToken } from "@/utils/modules/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("cohere_token")?.value;

  // Protect dashboard
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }

    try {
      const decoded = await verifyToken(token);

      // Only admins can access dashboard
      if (decoded.role !== "admin") {
        return NextResponse.redirect(
          new URL("/login", request.url)
        );
      }

      const response = NextResponse.next();

      response.headers.set(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, proxy-revalidate"
      );

      response.headers.set(
        "Pragma",
        "no-cache"
      );

      response.headers.set(
        "Expires",
        "0"
      );

      return response;
    } catch {
      const response = NextResponse.redirect(
        new URL("/login", request.url)
      );

      response.cookies.delete("cohere_token");

      return response;
    }
  }

  // Logged-in user shouldn't access login
  if (pathname === "/login" && token) {
    try {
      const decoded = await verifyToken(token);

      if (decoded.role === "admin") {
        return NextResponse.redirect(
          new URL("/dashboard", request.url)
        );
      }
    } catch {
      const response = NextResponse.next();

      response.cookies.delete("cohere_token");

      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
  ],
};