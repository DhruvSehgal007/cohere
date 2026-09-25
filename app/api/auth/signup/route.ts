import { NextRequest, NextResponse } from "next/server";

import { registerUser } from "@/utils/controllers/authController";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    const result = await registerUser(name, email, password);

    if (!result.token) {
      return NextResponse.json(result.data, {
        status: result.status,
      });
    }

    const response = NextResponse.json(result.data, {
      status: result.status,
    });

    response.cookies.set({
      name: "cohere_token",
      value: result.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    console.error("Signup API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
