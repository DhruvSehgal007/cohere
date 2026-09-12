import { NextRequest, NextResponse } from "next/server";

import {
  getFAQs,
  createFAQ,
} from "@/utils/controllers/faqController";

import { verifyToken } from "@/utils/modules/auth";

// Check admin login
async function isAdmin(request: NextRequest) {
  const token = request.cookies.get("cohere_token")?.value;

  if (!token) {
    return false;
  }

  try {
    const decoded = await verifyToken(token);

    return decoded.role === "admin";
  } catch {
    return false;
  }
}

// ===============================
// GET ALL FAQs
// Public API
// ===============================

export async function GET() {
  try {
    const faqs = await getFAQs();

    return NextResponse.json({
      success: true,
      faqs,
    });
  } catch (error) {
    console.error("Get FAQs error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch FAQs",
      },
      {
        status: 500,
      }
    );
  }
}

// ===============================
// CREATE FAQ
// Admin only
// ===============================

export async function POST(request: NextRequest) {
  try {
    const admin = await isAdmin(request);

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const body = await request.json();

    const {
      question,
      answer,
      order,
    } = body;

    if (
      !question ||
      !question.trim() ||
      !answer ||
      !answer.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Question and answer are required",
        },
        {
          status: 400,
        }
      );
    }

    const faq = await createFAQ({
      question: question.trim(),
      answer: answer.trim(),
      order: Number(order) || 0,
    });

    return NextResponse.json(
      {
        success: true,
        message: "FAQ added successfully",
        faq,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Create FAQ error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create FAQ",
      },
      {
        status: 500,
      }
    );
  }
}