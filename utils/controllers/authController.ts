import bcrypt from "bcryptjs";

import User from "../models/User";
import { connectDB } from "../modules/db";
import { createToken, verifyToken } from "../modules/auth";

export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  if (!name || !email || !password) {
    return {
      status: 400,
      data: {
        success: false,
        message: "Name, email and password are required",
      },
    };
  }

  if (password.length < 6) {
    return {
      status: 400,
      data: {
        success: false,
        message: "Password must be at least 6 characters long",
      },
    };
  }

  await connectDB();

  const normalizedEmail = email.toLowerCase().trim();
  const existingUser = await User.findOne({
    email: normalizedEmail,
  });

  if (existingUser) {
    return {
      status: 409,
      data: {
        success: false,
        message: "An account with this email already exists",
      },
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name: name.trim(),
    email: normalizedEmail,
    password: hashedPassword,
    role: "admin",
  });

  const token = await createToken({
    id: newUser._id.toString(),
    role: newUser.role,
    email: newUser.email,
  });

  return {
    status: 201,
    token,
    data: {
      success: true,
      message: "Account created successfully",
      user: {
        id: newUser._id.toString(),
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    },
  };
}

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