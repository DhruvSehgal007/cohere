import bcrypt from "bcryptjs";

import User from "../models/User";
import { connectDB } from "../modules/db";
import { createToken, verifyToken } from "../modules/auth";

export async function loginUser(
  email: string,
  password: string
) {
  if (!email || !password) {
    return {
      status: 400,
      data: {
        success: false,
        message: "Email and password are required",
      },
    };
  }

  await connectDB();

  const user = await User.findOne({
    email: email.toLowerCase().trim(),
  });

  if (!user) {
    return {
      status: 401,
      data: {
        success: false,
        message: "Invalid email or password",
      },
    };
  }

  if (user.role !== "admin") {
    return {
      status: 403,
      data: {
        success: false,
        message: "Access denied",
      },
    };
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    return {
      status: 401,
      data: {
        success: false,
        message: "Invalid email or password",
      },
    };
  }

  const token = await createToken({
    id: user._id.toString(),
    role: user.role,
    email: user.email,
  });

  return {
    status: 200,
    token,
    data: {
      success: true,
      message: "Login successful",
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  };
}

export async function verifyUser(token: string | undefined) {
  if (!token) {
    return {
      status: 401,
      data: {
        success: false,
        message: "Not authenticated",
      },
    };
  }

  try {
    const decoded = await verifyToken(token);

    return {
      status: 200,
      data: {
        success: true,
        user: decoded,
      },
    };
  } catch {
    return {
      status: 401,
      data: {
        success: false,
        message: "Invalid or expired token",
      },
    };
  }
}