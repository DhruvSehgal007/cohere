import { NextRequest, NextResponse } from "next/server";

import {
  updateStat,
  deleteStat,
} from "@/utils/controllers/statsController";

import { verifyToken } from "@/utils/modules/auth";

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
      value,
      suffix,
      label,
      order,
    } = body;

    if (
      value === undefined ||
      value === "" ||
      !label ||
      !label.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Number and label are required",
        },
        {
          status: 400,
        }
      );
    }

    const stat = await updateStat(id, {
      value: Number(value),
      suffix: suffix?.trim() || "+",
      label: label.trim(),
      order: Number(order) || 0,
    });

    if (!stat) {
      return NextResponse.json(
        {
          success: false,
          message: "Statistic not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Statistic updated successfully",
      stat,
    });
  } catch (error) {
    console.error("Update stat error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update statistic",
      },
      {
        status: 500,
      }
    );
  }
}

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

    const stat = await deleteStat(id);

    if (!stat) {
      return NextResponse.json(
        {
          success: false,
          message: "Statistic not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Statistic deleted successfully",
    });
  } catch (error) {
    console.error("Delete stat error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete statistic",
      },
      {
        status: 500,
      }
    );
  }
}