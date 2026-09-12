import { NextRequest, NextResponse } from "next/server";

import {
  getStats,
  createStat,
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

export async function GET() {
  try {
    const stats = await getStats();

    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error("Get stats error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch stats",
      },
      {
        status: 500,
      }
    );
  }
}

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

    const stat = await createStat({
      value: Number(value),
      suffix: suffix?.trim() || "+",
      label: label.trim(),
      order: Number(order) || 0,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Statistic added successfully",
        stat,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Create stat error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create statistic",
      },
      {
        status: 500,
      }
    );
  }
}