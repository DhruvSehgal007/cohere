import { NextRequest, NextResponse } from "next/server";

import {
  updateFAQ,
  deleteFAQ,
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
// UPDATE FAQ
// ===============================

export async function PUT(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
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

    const { id } = await context.params;

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

    const faq = await updateFAQ(id, {
      question: question.trim(),
      answer: answer.trim(),
      order: Number(order) || 0,
    });

    if (!faq) {
      return NextResponse.json(
        {
          success: false,
          message: "FAQ not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "FAQ updated successfully",
      faq,
    });
  } catch (error) {
    console.error("Update FAQ error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update FAQ",
      },
      {
        status: 500,
      }
    );
  }
}

// ===============================
// DELETE FAQ
// ===============================

export async function DELETE(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
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

    const { id } = await context.params;

    const faq = await deleteFAQ(id);

    if (!faq) {
      return NextResponse.json(
        {
          success: false,
          message: "FAQ not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "FAQ deleted successfully",
    });
  } catch (error) {
    console.error("Delete FAQ error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete FAQ",
      },
      {
        status: 500,
      }
    );
  }
}