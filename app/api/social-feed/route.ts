import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/modules/db";
import SocialPost from "@/utils/models/SocialPost";
import { verifyToken } from "@/utils/modules/auth";

// Check if user is authenticated admin or has CRON_SECRET authorization
async function isAuthorized(request: NextRequest) {
  // 1. Check CRON_SECRET header or query
  const authHeader = request.headers.get("authorization");
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const expectedSecret = process.env.CRON_SECRET;

  if (
    expectedSecret &&
    (authHeader === `Bearer ${expectedSecret}` || secret === expectedSecret)
  ) {
    return true;
  }

  // 2. Check admin session cookie
  const token = request.cookies.get("cohere_token")?.value;
  if (token) {
    try {
      const decoded = await verifyToken(token);
      if (decoded && (decoded.role === "admin" || decoded.role === "user")) {
        return true;
      }
    } catch {
      // invalid token
    }
  }

  return false;
}

// ===============================
// GET SOCIAL FEED POSTS (Public API)
// ===============================
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const platform = searchParams.get("platform");

    const query: { platform?: "linkedin" | "instagram" } = {};
    if (platform === "linkedin" || platform === "instagram") {
      query.platform = platform;
    }

    const posts = await SocialPost.find(query)
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    return NextResponse.json({
      success: true,
      count: posts.length,
      posts,
    });
  } catch (error: unknown) {
    console.error("Error fetching social posts:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch social posts",
        error: error instanceof Error ? error.message : "Unknown error",
        posts: [],
      },
      { status: 500 }
    );
  }
}

// ===============================
// CREATE OR UPSERT POST (Admin / API)
// ===============================
export async function POST(request: NextRequest) {
  try {
    const authorized = await isAuthorized(request);
    if (!authorized) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Admin login or valid secret required." },
        { status: 401 }
      );
    }

    await connectDB();
    const body = await request.json();

    /* --- PREVIOUS CODE (Body destructuring without avatar / embedUrl) ---
    const {
      platform = "linkedin",
      text,
      title = "Cohere Compliance",
      username = "@coherecompliance",
      likes = 0,
      image = "",
      date,
      postUrl = "",
      postId,
    } = body;
    --- END PREVIOUS CODE --- */

    const {
      platform = "linkedin",
      text,
      title = "Cohere Compliance",
      username = "@coherecompliance",
      likes = 0,
      image = "",
      avatar = "",
      date,
      postUrl = "",
      embedUrl = "",
      postId,
    } = body;

    if (!text || !text.trim()) {
      return NextResponse.json(
        { success: false, message: "Post text is required." },
        { status: 400 }
      );
    }

    // Auto-detect or use embedUrl
    const computedEmbedUrl =
      embedUrl && embedUrl.trim()
        ? embedUrl.trim()
        : postUrl.match(/src=["'](https:\/\/[^"']+)["']/i)?.[1] ||
          (postUrl.includes("/embed/feed/update/")
            ? postUrl.trim()
            : postUrl.match(/urn:li:(share|activity|ugcPost):\d+/i)
            ? `https://www.linkedin.com/embed/feed/update/${postUrl.match(/urn:li:(share|activity|ugcPost):\d+/i)![0]}`
            : postUrl.match(/activity-?(\d+)/i)
            ? `https://www.linkedin.com/embed/feed/update/urn:li:activity:${postUrl.match(/activity-?(\d+)/i)![1]}`
            : "");

    const formattedDate =
      date && date.trim()
        ? date.trim()
        : new Date().toLocaleDateString("en-US", {
            hour: "numeric",
            minute: "numeric",
            month: "short",
            day: "numeric",
            year: "numeric",
          });

    const generatedPostId =
      postId && postId.trim()
        ? postId.trim()
        : `${platform}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const newPost = await SocialPost.findOneAndUpdate(
      { postId: generatedPostId },
      {
        platform,
        postId: generatedPostId,
        title: title.trim(),
        username: username.trim(),
        text: text.trim(),
        likes: Number(likes) || 0,
        image: image.trim(),
        avatar: avatar ? avatar.trim() : "",
        date: formattedDate,
        postUrl: postUrl.trim(),
        embedUrl: computedEmbedUrl,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    return NextResponse.json({
      success: true,
      message: "Post saved successfully!",
      post: newPost,
    });
  } catch (error: unknown) {
    console.error("Error creating social post:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to save social post",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// ===============================
// UPDATE POST (Admin / API)
// ===============================
export async function PUT(request: NextRequest) {
  try {
    const authorized = await isAuthorized(request);
    if (!authorized) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    await connectDB();
    const body = await request.json();
    const { _id, postId, ...updates } = body;

    const query = _id ? { _id } : postId ? { postId } : null;
    if (!query) {
      return NextResponse.json(
        { success: false, message: "Post ID (_id or postId) is required." },
        { status: 400 }
      );
    }

    const updatedPost = await SocialPost.findOneAndUpdate(query, updates, {
      new: true,
    });

    if (!updatedPost) {
      return NextResponse.json(
        { success: false, message: "Post not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post updated successfully!",
      post: updatedPost,
    });
  } catch (error: unknown) {
    console.error("Error updating social post:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update social post",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// ===============================
// DELETE POST (Admin / API)
// ===============================
export async function DELETE(request: NextRequest) {
  try {
    const authorized = await isAuthorized(request);
    if (!authorized) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const postId = searchParams.get("postId");

    const query = id ? { _id: id } : postId ? { postId } : null;
    if (!query) {
      return NextResponse.json(
        { success: false, message: "Please provide 'id' or 'postId' to delete." },
        { status: 400 }
      );
    }

    const deleted = await SocialPost.findOneAndDelete(query);
    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Post not found or already deleted." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post deleted successfully!",
    });
  } catch (error: unknown) {
    console.error("Error deleting social post:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete social post",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
