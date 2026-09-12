import { NextRequest, NextResponse } from "next/server";

import { verifyUser } from "@/utils/controllers/authController";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("cohere_token")?.value;

    const result = await verifyUser(token);

    return NextResponse.json(
      result.data,
      { status: result.status }
    );
  } catch (error) {
    console.error("Verify API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}