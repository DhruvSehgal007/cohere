"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  Share2,
  ExternalLink,
  ThumbsUp,
  Calendar,
  Sparkles,
  Loader2,
  RotateCw,
} from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

type SocialPost = {
  _id: string;
  platform: "linkedin" | "instagram";
  postId: string;
  title: string;
  username: string;
  text: string;
  likes: number;
  image?: string;
  avatar?: string;
  date: string;
  postUrl?: string;
  createdAt?: string;
};

type FormData = {
  platform: "linkedin" | "instagram";
  title: string;
  username: string;
  text: string;
  likes: string;
  image: string;
  avatar: string;
  date: string;
  postUrl: string;
};

/* --- PREVIOUS CODE (Defaulted title and username to Cohere Compliance in emptyForm) ---
const emptyForm: FormData = {
  platform: "linkedin",
  title: "Cohere Compliance",
  username: "@coherecompliance",
  text: "",
  likes: "0",
  image: "",
  avatar: "",
  date: "",
  postUrl: "",
};
--- END PREVIOUS CODE --- */

const emptyForm: FormData = {
  platform: "linkedin",
  title: "",
  username: "",
  text: "",
  likes: "0",
  image: "",
  avatar: "",
  date: "",
  postUrl: "",
};

export default function SocialFeedDashboardPage() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "linkedin" | "instagram">("all");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Quick Import from Link State
  const [importUrl, setImportUrl] = useState("");
  const [fetchingPreview, setFetchingPreview] = useState(false);
  const [importNotice, setImportNotice] = useState("");
  const [platformWarning, setPlatformWarning] = useState("");

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/social-feed", { cache: "no-store" });
      const data = await res.json();
      if (data.success && Array.isArray(data.posts)) {
        setPosts(data.posts);
      } else {
        setPosts([]);
      }
    } catch (err) {
      console.error("Fetch posts error:", err);
      setError("Failed to load social posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const openAddForm = () => {
    setEditingId(null);
    setImportUrl("");
    setImportNotice("");
    setPlatformWarning("");
    setForm({
      ...emptyForm,
      date: new Date().toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "numeric",
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
    setError("");
    setSuccess("");
    setShowForm(true);
  };

  const openEditForm = (post: SocialPost) => {
    setEditingId(post._id);
    setImportUrl(post.postUrl || "");
    setImportNotice("");
    setPlatformWarning("");
    setForm({
      platform: post.platform,
      /* --- PREVIOUS CODE (Defaulted fallback to Cohere Compliance on edit) ---
      title: post.title || "Cohere Compliance",
      username: post.username || "@coherecompliance",
      --- END PREVIOUS CODE --- */
      title: post.title || "",
      username: post.username || "",
      text: post.text || "",
      likes: String(post.likes ?? 0),
      image: post.image || "",
      avatar: post.avatar || "",
      date: post.date || "",
      postUrl: post.postUrl || "",
    });
    setError("");
    setSuccess("");
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
    setImportUrl("");
    setImportNotice("");
    setPlatformWarning("");
    setError("");
  };

  /* --- PREVIOUS CODE (Direct platform switch without cross-platform url check) ---
  const handlePlatformChange = (p: "linkedin" | "instagram") => {
    setForm((prev) => ({ ...prev, platform: p }));
  };
  --- END PREVIOUS CODE --- */

  const handlePlatformChange = (targetPlatform: "linkedin" | "instagram") => {
    if (targetPlatform === form.platform) return;

    setPlatformWarning("");
    setImportNotice("");

    const hasLinkedInLink =
      /linkedin\.com/i.test(importUrl) || /linkedin\.com/i.test(form.postUrl);
    const hasInstagramLink =
      /instagram\.com/i.test(importUrl) || /instagram\.com/i.test(form.postUrl);

    if (targetPlatform === "instagram" && hasLinkedInLink) {
      setPlatformWarning(
        "⚠️ Platform changed to Instagram: The previous LinkedIn link & preview details have been cleared, because LinkedIn links cannot be used for Instagram posts."
      );
      setImportUrl("");
      setForm((prev) => ({
        ...prev,
        platform: "instagram",
        postUrl: "",
        image: "",
        avatar: "",
        text: "",
        title: "Cohere Compliance",
        username: "@coherecompliance",
        likes: "0",
      }));
      return;
    }

    if (targetPlatform === "linkedin" && hasInstagramLink) {
      setPlatformWarning(
        "⚠️ Platform changed to LinkedIn: The previous Instagram link & preview details have been cleared, because Instagram links cannot be used for LinkedIn posts."
      );
      setImportUrl("");
      setForm((prev) => ({
        ...prev,
        platform: "linkedin",
        postUrl: "",
        image: "",
        avatar: "",
        text: "",
        title: "Cohere Compliance",
        username: "@coherecompliance",
        likes: "0",
      }));
      return;
    }

    setForm((prev) => ({ ...prev, platform: targetPlatform }));
  };

  // Auto-fetch post details from URL
  const handleAutoFetch = async () => {
    if (!importUrl.trim()) return;

    try {
      setFetchingPreview(true);
      setImportNotice("");
      setPlatformWarning("");

      const isIg = /instagram\.com/i.test(importUrl.trim());
      const isLi = /linkedin\.com/i.test(importUrl.trim());

      /* --- PREVIOUS CODE (Auto-switched form platform silently on link paste) ---
      if (isIg && form.platform !== "instagram") {
        setForm((prev) => ({ ...prev, platform: "instagram" }));
      } else if (!isIg && /linkedin\.com/i.test(importUrl.trim()) && form.platform !== "linkedin") {
        setForm((prev) => ({ ...prev, platform: "linkedin" }));
      }
      --- END PREVIOUS CODE --- */

      // Strict Cross-Platform Check
      if (form.platform === "linkedin" && isIg) {
        setPlatformWarning(
          "❌ Instagram link detected! You are currently on the LinkedIn post form. Instagram links are not allowed here. Please click the 'Instagram' button above to switch to Instagram."
        );
        return;
      }

      if (form.platform === "instagram" && isLi) {
        setPlatformWarning(
          "❌ LinkedIn link detected! You are currently on the Instagram post form. LinkedIn links are not allowed here. Please click the 'LinkedIn' button above to switch to LinkedIn."
        );
        return;
      }

      const res = await fetch("/api/social-feed/fetch-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: importUrl.trim() }),
      });

      const data = await res.json();
      if (data.success && data.data) {
        const d = data.data;

        /* --- PREVIOUS CODE (Defaulted title and username fallback in handleAutoFetch) ---
        setForm((prev) => ({
          ...prev,
          platform: (d.platform as "linkedin" | "instagram") || prev.platform,
          title: d.title || prev.title,
          username: d.username || prev.username,
          avatar: d.avatar || prev.avatar,
          text: d.text || prev.text,
          likes: d.likes !== undefined ? String(d.likes) : prev.likes,
          image: d.image || prev.image,
          postUrl: d.postUrl || prev.postUrl,
          date: d.date || prev.date,
        }));
        --- END PREVIOUS CODE --- */

        setForm((prev) => ({
          ...prev,
          platform: (d.platform as "linkedin" | "instagram") || prev.platform,
          title: d.title || "",
          username: d.username || "",
          avatar: d.avatar || prev.avatar,
          text: d.text || prev.text,
          likes: d.likes !== undefined ? String(d.likes) : prev.likes,
          image: d.image || prev.image,
          postUrl: d.postUrl || prev.postUrl,
          date: d.date || prev.date,
        }));

        const platformName = (d.platform || (isIg ? "Instagram" : "LinkedIn")) === "instagram" ? "Instagram" : "LinkedIn";
        if (d.fetched && (d.title || d.username || d.text || d.image || d.likes > 0 || d.avatar)) {
          setImportNotice(
            `✨ Auto-filled from ${platformName}: Author "${d.title || d.username || 'Detected'}", Date (${d.date}), & ${d.likes ?? 0} likes!`
          );
        } else {
          setImportNotice(`🔗 ${platformName} link attached! Please fill details below.`);
        }
      } else {
        setImportNotice("Notice: Link attached. Please paste the caption text below.");
      }
    } catch (err) {
      console.error("Auto fetch error:", err);
      setImportNotice("Could not auto-fetch. Please fill the details manually below.");
    } finally {
      setFetchingPreview(false);
    }
  };

  const [syncingId, setSyncingId] = useState<string | null>(null);

  const handleSyncLikes = async (post: SocialPost) => {
    if (!post.postUrl) {
      setError("This post doesn't have a LinkedIn URL to sync from.");
      return;
    }
    try {
      setSyncingId(post._id);
      setError("");
      setSuccess("");

      const previewRes = await fetch("/api/social-feed/fetch-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: post.postUrl }),
      });
      const previewData = await previewRes.json();
      if (!previewData.success || !previewData.data) {
        throw new Error("Could not fetch latest post data from LinkedIn.");
      }

      const d = previewData.data;

      const updateRes = await fetch("/api/social-feed", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: post._id,
          likes: d.likes ?? post.likes,
          title: d.title || post.title,
          username: d.username || post.username,
          avatar: d.avatar || post.avatar,
          date: d.date || post.date,
        }),
        credentials: "include",
      });

      const updateData = await updateRes.json();
      if (updateData.success) {
        setSuccess(`Synced post data (Likes: ${d.likes ?? post.likes}, Author: ${d.title || post.title})!`);
        await fetchPosts();
      } else {
        throw new Error(updateData.message || "Failed to update post.");
      }
    } catch (err: unknown) {
      console.error("Sync likes error:", err);
      setError(err instanceof Error ? err.message : "Failed to sync likes.");
    } finally {
      setSyncingId(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    /* --- PREVIOUS CODE (Submit without checking cross-platform URL mismatch) ---
    if (!form.text.trim()) {
      setError("Post text/caption is required.");
      return;
    }
    --- END PREVIOUS CODE --- */

    if (!form.text.trim()) {
      setError("Post text/caption is required.");
      return;
    }

    const hasLiUrl = /linkedin\.com/i.test(form.postUrl.trim());
    const hasIgUrl = /instagram\.com/i.test(form.postUrl.trim());

    if (form.platform === "linkedin" && hasIgUrl) {
      setError(
        "❌ Validation Error: Instagram link is not allowed for a LinkedIn post! Please switch to the Instagram tab or provide a valid LinkedIn URL."
      );
      return;
    }

    if (form.platform === "instagram" && hasLiUrl) {
      setError(
        "❌ Validation Error: LinkedIn link is not allowed for an Instagram post! Please switch to the LinkedIn tab or provide a valid Instagram URL."
      );
      return;
    }

    try {
      setSaving(true);
      const url = "/api/social-feed";
      const method = editingId ? "PUT" : "POST";
      const payload = editingId ? { _id: editingId, ...form } : form;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Operation failed");
      }

      setSuccess(editingId ? "Post updated successfully!" : "Post added successfully!");
      closeForm();
      await fetchPosts();
    } catch (err: unknown) {
      console.error("Save error:", err);
      setError(err instanceof Error ? err.message : "Failed to save post.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      setError("");
      setSuccess("");
      const res = await fetch(`/api/social-feed?id=${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete post");
      }
      setSuccess("Post deleted successfully.");
      await fetchPosts();
    } catch (err: unknown) {
      console.error("Delete error:", err);
      setError(err instanceof Error ? err.message : "Failed to delete post.");
    }
  };

  const filteredPosts =
    filter === "all" ? posts : posts.filter((p) => p.platform === filter);

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <Share2 size={18} className="text-[#439897]" />
            <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#439897]">
              Social Media Management
            </span>
          </div>
          <h1 className="text-[28px] font-extrabold text-[#0d1e1e]">
            Social Feed Posts
          </h1>
          <p className="text-[14px] text-gray-500">
            Manage LinkedIn and Instagram updates displayed on the homepage slider.
          </p>
        </div>

        <button
          onClick={openAddForm}
          className="inline-flex items-center gap-2 rounded-[10px] bg-[#439897] px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#357a79]"
        >
          <Plus size={18} />
          <span>Add New Post</span>
        </button>
      </div>

      {/* Notifications */}
      {error && (
        <div className="mb-6 rounded-[10px] border border-red-200 bg-red-50 p-4 text-[14px] text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-6 rounded-[10px] border border-green-200 bg-green-50 p-4 text-[14px] text-green-700">
          {success}
        </div>
      )}

      {/* Filter Tabs */}
      <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-gray-200 pb-3">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-lg px-4 py-1.5 text-[13px] font-semibold transition cursor-pointer ${filter === "all"
              ? "bg-[#439897] text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          All Posts ({posts.length})
        </button>
        <button
          onClick={() => setFilter("linkedin")}
          className={`flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-[13px] font-semibold transition cursor-pointer ${filter === "linkedin"
              ? "bg-[#0A66C2] text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          <FaLinkedinIn size={14} />
          <span>LinkedIn ({posts.filter((p) => p.platform === "linkedin").length})</span>
        </button>
        <button
          onClick={() => setFilter("instagram")}
          className={`flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-[13px] font-semibold transition cursor-pointer ${filter === "instagram"
              ? "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          <FaInstagram size={14} />
          <span>Instagram ({posts.filter((p) => p.platform === "instagram").length})</span>
        </button>
      </div>

      {/* Post Grid */}
      {loading ? (
        <div className="py-20 text-center text-gray-400">Loading social posts...</div>
      ) : filteredPosts.length === 0 ? (
        <div className="rounded-[16px] border border-dashed border-gray-300 bg-white p-12 text-center">
          <Sparkles className="mx-auto mb-3 text-gray-300" size={40} />
          <h3 className="text-[16px] font-bold text-gray-700">No posts found</h3>
          <p className="mt-1 text-[13px] text-gray-500">
            Click &ldquo;Add New Post&rdquo; to add your first LinkedIn or Instagram card.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div
              key={post._id}
              className="flex flex-col justify-between rounded-[16px] border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div>
                {/* Header info */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {post.avatar ? (
                      <img
                        src={post.avatar}
                        alt={post.title}
                        className="h-8 w-8 rounded-full object-cover border border-gray-200 shrink-0"
                      />
                    ) : null}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[13px] font-bold text-[#0d1e1e] leading-tight line-clamp-1">
                          {post.title}
                        </span>
                        {post.platform === "instagram" ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] px-1.5 py-0.5 text-[9px] font-bold text-white shrink-0">
                            <FaInstagram size={9} />
                            IG
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#0A66C2] px-1.5 py-0.5 text-[9px] font-bold text-white shrink-0">
                            <FaLinkedinIn size={9} />
                            LI
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-gray-400">{post.username}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {post.postUrl && (
                      <button
                        onClick={() => handleSyncLikes(post)}
                        disabled={syncingId === post._id}
                        className="rounded p-1.5 text-blue-500 hover:bg-blue-50 hover:text-blue-700 disabled:opacity-50"
                        title={post.platform === "instagram" ? "Sync latest live likes from Instagram" : "Sync latest live likes from LinkedIn"}
                      >
                        <RotateCw
                          size={15}
                          className={syncingId === post._id ? "animate-spin text-blue-600" : ""}
                        />
                      </button>
                    )}
                    <button
                      onClick={() => openEditForm(post)}
                      className="rounded p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      title="Edit"
                    >
                      <Pencil size={15} />
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="rounded p-1.5 text-red-400 hover:bg-red-50 hover:text-red-600"
                      title="Delete"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                {/* Post Caption */}
                <p className="line-clamp-4 text-[13px] leading-relaxed text-[#2B3545]">
                  {post.text}
                </p>

                {/* Optional Image Preview */}
                {post.image && (
                  <div className="mt-3 overflow-hidden rounded-[10px] border border-gray-100 bg-gray-50">
                    <img
                      src={post.image}
                      alt="Post preview"
                      className="h-32 w-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Footer info */}
              <div className="mt-4 border-t border-gray-100 pt-3">
                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#0d1e1e]">
                    <ThumbsUp size={13} className="text-[#439897]" />
                    {post.likes}
                  </span>
                </div>
                {post.postUrl && (
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#439897] hover:underline"
                  >
                    <span>View original post</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[20px] bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
              <h2 className="text-[18px] font-bold text-[#0d1e1e]">
                {editingId ? "Edit Social Post" : "Add New Social Post"}
              </h2>
              <button
                onClick={closeForm}
                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>

            {/* Cross-Platform Conflict Warning Banner */}
            {platformWarning && (
              <div className="mb-4 rounded-[12px] border border-amber-300 bg-amber-50 p-3 text-[12px] font-medium text-amber-900 flex items-start gap-2.5 shadow-xs">
                <span className="text-[16px] shrink-0 leading-none">⚠️</span>
                <div className="flex-1 leading-snug">{platformWarning}</div>
              </div>
            )}

            {/* Auto-Fetch from Link Tool */}
            <div className="mb-4 rounded-[14px] border border-[#439897]/30 bg-[#439897]/5 p-3.5">
              <label className="mb-1.5 flex items-center gap-1.5 text-[12px] font-bold uppercase text-[#0d1e1e]">
                <Sparkles size={14} className="text-[#439897]" />
                Auto-Fill from Post Link
              </label>
              <div className="flex gap-2">
                {/* --- PREVIOUS CODE (Direct platform switch on importUrl change) ---
                <input
                  type="url"
                  value={importUrl}
                  onChange={(e) => {
                    const val = e.target.value;
                    setImportUrl(val);
                    if (/instagram\.com/i.test(val)) {
                      setForm((prev) => ({ ...prev, platform: "instagram" }));
                    } else if (/linkedin\.com/i.test(val)) {
                      setForm((prev) => ({ ...prev, platform: "linkedin" }));
                    }
                  }}
                  ...
                />
                --- END PREVIOUS CODE --- */}
                <input
                  type="url"
                  value={importUrl}
                  onChange={(e) => {
                    const val = e.target.value;
                    setImportUrl(val);
                    setPlatformWarning("");
                    if (form.platform === "linkedin" && /instagram\.com/i.test(val)) {
                      setPlatformWarning(
                        "⚠️ Instagram link entered, but LinkedIn tab is active! Click 'Instagram' button below to switch."
                      );
                    } else if (form.platform === "instagram" && /linkedin\.com/i.test(val)) {
                      setPlatformWarning(
                        "⚠️ LinkedIn link entered, but Instagram tab is active! Click 'LinkedIn' button below to switch."
                      );
                    }
                  }}
                  placeholder={
                    form.platform === "instagram"
                      ? "Paste Instagram link e.g. https://www.instagram.com/p/..."
                      : "Paste LinkedIn link e.g. https://www.linkedin.com/posts/..."
                  }
                  className="flex-1 rounded-[10px] border border-gray-200 bg-white px-3 py-2 text-[13px] focus:border-[#439897] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleAutoFetch}
                  disabled={fetchingPreview || !importUrl.trim()}
                  className="inline-flex items-center gap-1.5 rounded-[10px] bg-[#439897] px-4 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#357a79] disabled:opacity-50"
                >
                  {fetchingPreview ? (
                    <>
                      <Loader2 size={13} className="animate-spin" />
                      <span>Fetching...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={13} />
                      <span>Auto-Fill</span>
                    </>
                  )}
                </button>
              </div>
              {importNotice && (
                <p className="mt-2 text-[11px] font-medium text-[#439897]">{importNotice}</p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between rounded-[12px] bg-gray-50 border border-gray-200 p-2.5">
                <span className="text-[12px] font-bold text-gray-700">Platform:</span>
                <div className="flex items-center gap-2">
                  {/* --- PREVIOUS CODE (Direct setForm without conflict warning & link clearing) ---
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, platform: "linkedin" })}
                    ...
                  >
                    <FaLinkedinIn size={12} />
                    <span>LinkedIn</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, platform: "instagram" })}
                    ...
                  >
                    <FaInstagram size={12} />
                    <span>Instagram</span>
                  </button>
                  --- END PREVIOUS CODE --- */}
                  <button
                    type="button"
                    onClick={() => handlePlatformChange("linkedin")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[12px] font-bold transition cursor-pointer ${form.platform === "linkedin"
                        ? "bg-[#0A66C2] text-white shadow-sm scale-102"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                      }`}
                  >
                    <FaLinkedinIn size={12} />
                    <span>LinkedIn</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePlatformChange("instagram")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[12px] font-bold transition cursor-pointer ${form.platform === "instagram"
                        ? "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm scale-102"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                      }`}
                  >
                    <FaInstagram size={12} />
                    <span>Instagram</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  {/* --- PREVIOUS CODE (Author / Display Name label) ---
                  <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                    Author / Display Name
                  </label>
                  --- END PREVIOUS CODE --- */}
                  <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                    Author
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. Cohere Compliance"
                    className="w-full rounded-[10px] border border-gray-200 p-2.5 text-[13px] focus:border-[#439897] focus:outline-none"
                  />
                </div>
                <div>
                  {/* --- PREVIOUS CODE (Username / Handle label) ---
                  <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                    Username / Handle
                  </label>
                  --- END PREVIOUS CODE --- */}
                  <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                    Username
                  </label>
                  <input
                    type="text"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    placeholder="e.g. @coherecompliance"
                    className="w-full rounded-[10px] border border-gray-200 p-2.5 text-[13px] focus:border-[#439897] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                {/* --- PREVIOUS CODE (Avatar / Profile Picture label) ---
                <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                  {form.platform === "instagram" ? "Profile Picture / Avatar URL" : "Author Profile Picture / Avatar URL"}
                </label>
                --- END PREVIOUS CODE --- */}
                <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                  Profile Picture URL
                </label>
                <div className="flex items-center gap-2">
                  {form.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={form.avatar}
                      alt="Avatar preview"
                      className="h-9 w-9 rounded-full object-cover border border-gray-200 shrink-0"
                    />
                  ) : null}
                  <input
                    type="url"
                    value={form.avatar}
                    onChange={(e) => setForm({ ...form, avatar: e.target.value })}
                    placeholder="https://... profile picture URL (auto-filled from link)"
                    className="flex-1 rounded-[10px] border border-gray-200 p-2.5 text-[13px] focus:border-[#439897] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                {/* --- PREVIOUS CODE (Post Caption / Content label) ---
                <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                  Post Caption / Content *
                </label>
                --- END PREVIOUS CODE --- */}
                <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                  Content *
                </label>
                <textarea
                  rows={4}
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  placeholder="Paste or write the post content here..."
                  className="w-full rounded-[10px] border border-gray-200 p-2.5 text-[13px] focus:border-[#439897] focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                    Likes Count
                  </label>
                  <input
                    type="number"
                    value={form.likes}
                    onChange={(e) => setForm({ ...form, likes: e.target.value })}
                    className="w-full rounded-[10px] border border-gray-200 p-2.5 text-[13px] focus:border-[#439897] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                    Date Text
                  </label>
                  <input
                    type="text"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    placeholder="e.g. 10:30 AM Oct 29, 2024"
                    className="w-full rounded-[10px] border border-gray-200 p-2.5 text-[13px] focus:border-[#439897] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                  Image URL (Optional)
                </label>
                <input
                  type="url"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="https://... image link"
                  className="w-full rounded-[10px] border border-gray-200 p-2.5 text-[13px] focus:border-[#439897] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-[12px] font-bold uppercase text-gray-600">
                  {form.platform === "instagram"
                    ? "Instagram Post URL / Reel Link (Optional)"
                    : "LinkedIn Post URL / Embed Link (Optional)"}
                </label>
                <input
                  type="text"
                  value={form.postUrl}
                  onChange={(e) => setForm({ ...form, postUrl: e.target.value })}
                  placeholder={
                    form.platform === "instagram"
                      ? "e.g. https://www.instagram.com/p/... or https://www.instagram.com/reel/..."
                      : "e.g. https://www.linkedin.com/posts/... or embed code"
                  }
                  className="w-full rounded-[10px] border border-gray-200 p-2.5 text-[13px] focus:border-[#439897] focus:outline-none"
                />
                {form.platform === "linkedin" && /instagram\.com/i.test(form.postUrl) && (
                  <p className="mt-1 text-[11px] font-bold text-red-600 bg-red-50 p-2 rounded-[6px] border border-red-200">
                    ❌ Cross-Platform Conflict: Instagram links are not allowed for a LinkedIn post! Please switch to the Instagram tab.
                  </p>
                )}
                {form.platform === "instagram" && /linkedin\.com/i.test(form.postUrl) && (
                  <p className="mt-1 text-[11px] font-bold text-red-600 bg-red-50 p-2 rounded-[6px] border border-red-200">
                    ❌ Cross-Platform Conflict: LinkedIn links are not allowed for an Instagram post! Please switch to the LinkedIn tab.
                  </p>
                )}

              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-[10px] border border-gray-200 px-4 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-[10px] bg-[#439897] px-5 py-2 text-[13px] font-semibold text-white shadow hover:bg-[#357a79] disabled:opacity-50"
                >
                  {saving ? "Saving..." : editingId ? "Update Post" : "Save Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
