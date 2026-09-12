"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  HelpCircle,
} from "lucide-react";

type FAQ = {
  _id: string;
  question: string;
  answer: string;
  order: number;
};

type FormData = {
  question: string;
  answer: string;
  order: string;
};

const emptyForm: FormData = {
  question: "",
  answer: "",
  order: "",
};

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(
    null
  );

  const [form, setForm] = useState<FormData>(emptyForm);

  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // =========================
  // GET FAQs
  // =========================

  const fetchFAQs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/faqs", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch FAQs"
        );
      }

      setFaqs(data.faqs || []);
    } catch (error) {
      console.error("Fetch FAQs error:", error);

      setError(
        "Unable to load FAQs. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  // =========================
  // ADD
  // =========================

  const openAddForm = () => {
    setEditingId(null);

    setForm({
      question: "",
      answer: "",
      order: String(faqs.length + 1),
    });

    setError("");
    setSuccess("");
    setShowForm(true);
  };

  // =========================
  // EDIT
  // =========================

  const openEditForm = (faq: FAQ) => {
    setEditingId(faq._id);

    setForm({
      question: faq.question,
      answer: faq.answer,
      order: String(faq.order),
    });

    setError("");
    setSuccess("");
    setShowForm(true);
  };

  // =========================
  // CLOSE
  // =========================

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
    setError("");
  };

  // =========================
  // SAVE
  // =========================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const url = editingId
        ? `/api/faqs/${editingId}`
        : "/api/faqs";

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          question: form.question,
          answer: form.answer,
          order: Number(form.order),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to save FAQ"
        );
      }

      setSuccess(
        editingId
          ? "FAQ updated successfully."
          : "FAQ added successfully."
      );

      closeForm();

      await fetchFAQs();
    } catch (error) {
      console.error("Save FAQ error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to save FAQ."
      );
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // DELETE
  // =========================

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this FAQ?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");
      setSuccess("");

      const response = await fetch(
        `/api/faqs/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete FAQ"
        );
      }

      setSuccess("FAQ deleted successfully.");

      await fetchFAQs();
    } catch (error) {
      console.error("Delete FAQ error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to delete FAQ."
      );
    }
  };

  return (
    <div className="p-6 md:p-8">
      {/* ================= HEADER ================= */}

      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <HelpCircle
              size={18}
              strokeWidth={2}
              className="text-[#ffffff]"
            />

            <span className="font-nunito-sans-bold text-[11px]  uppercase tracking-[1.5px] text-[#ffffff]">
              Content Management
            </span>
          </div>

          <h1 className="font-nunito-sans-bold text-[28px] font-extrabold leading-tight text-[#0d1e1e]">
            FAQs
          </h1>

          <p className="mt-2 max-w-[550px] font-nunito-sans text-[14px] leading-6 text-[#0d1e1e]">
            Manage the frequently asked questions displayed
            on your website.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddForm}
          className="flex h-[44px] shrink-0 items-center justify-center gap-2 rounded-[9px] bg-[#439897] px-5 font-nunito-sans-bold text-[16px]  text-white transition hover:bg-[#367f7e]"
        >
          <Plus size={17} />
          Add FAQ
        </button>
      </div>

      {/* ================= SUCCESS ================= */}

      {success && (
        <div className="mb-5 rounded-[8px] border border-[#439897]/20 bg-[#439897] px-4 py-3">
          <p className="font-nunito-sans text-[16px] text-[#ffffff]">
            {success}
          </p>
        </div>
      )}

      {/* ================= ERROR ================= */}

      {error && !showForm && (
        <div className="mb-5 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3">
          <p className="font-nunito-sans text-[16px] text-red-600">
            {error}
          </p>
        </div>
      )}

      {/* ================= FORM ================= */}

      {showForm && (
        <div className="mb-8 rounded-[14px] border border-[#439897]/20 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#439897]/10 px-6 py-5">
            <div>
              <h2 className="font-nunito-sans-bold text-[18px] font-extrabold text-[#0d1e1e]">
                {editingId ? "Edit FAQ" : "Add FAQ"}
              </h2>

              <p className="mt-1 font-nunito-sans text-[16px] text-[#0d1e1e]/55">
                Add the question and answer that should
                appear on your website.
              </p>
            </div>

            <button
              type="button"
              onClick={closeForm}
              className="flex h-9 w-9 items-center justify-center rounded-[8px] text-[#0d1e1e]/50 transition hover:bg-[#439897] hover:text-[#ffffff]"
            >
              <X size={18} />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6"
          >
            <div className="grid grid-cols-1 gap-5">
              {/* QUESTION */}

              <div>
                <label className="mb-2 block font-nunito-sans-bold text-[16px]  text-[#0d1e1e]">
                  Question
                </label>

                <input
                  type="text"
                  required
                  value={form.question}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      question: e.target.value,
                    })
                  }
                  placeholder="Enter FAQ question"
                  className="h-[48px] w-full rounded-[8px] border border-[#439897]/30 bg-white px-4 font-nunito-sans text-[14px] text-[#0d1e1e] outline-none transition focus:border-[#439897] focus:ring-2 focus:ring-[#439897]/10"
                />
              </div>

              {/* ANSWER */}

              <div>
                <label className="mb-2 block font-nunito-sans-bold text-[16px]  text-[#0d1e1e]">
                  Answer
                </label>

                <textarea
                  required
                  rows={5}
                  value={form.answer}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      answer: e.target.value,
                    })
                  }
                  placeholder="Enter FAQ answer"
                  className="w-full resize-y rounded-[8px] border border-[#439897]/30 bg-white px-4 py-3 font-nunito-sans text-[14px] leading-6 text-[#0d1e1e] outline-none transition focus:border-[#439897] focus:ring-2 focus:ring-[#439897]/10"
                />
              </div>

              {/* ORDER */}

              <div className="max-w-[250px]">
                <label className="mb-2 block font-nunito-sans-bold text-[16px]  text-[#0d1e1e]">
                  Display Order
                </label>

                <input
                  type="number"
                  min="1"
                  required
                  value={form.order}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      order: e.target.value,
                    })
                  }
                  placeholder="1"
                  className="h-[46px] w-full rounded-[8px] border border-[#439897]/30 bg-white px-4 font-nunito-sans text-[14px] text-[#0d1e1e] outline-none transition focus:border-[#439897] focus:ring-2 focus:ring-[#439897]/10"
                />
              </div>
            </div>

            {/* FORM ERROR */}

            {error && (
              <div className="mt-5 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3">
                <p className="font-nunito-sans text-[16px] text-red-600">
                  {error}
                </p>
              </div>
            )}

            {/* BUTTONS */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={saving}
                className="h-[44px] rounded-[8px] bg-[#439897] px-6 font-nunito-sans-bold text-[16px]  text-white transition hover:bg-[#367f7e] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editingId
                  ? "Update FAQ"
                  : "Add FAQ"}
              </button>

              <button
                type="button"
                onClick={closeForm}
                className="h-[44px] rounded-[8px] border border-[#439897]/30 px-6 font-nunito-sans-bold text-[16px]  text-[#0d1e1e] transition hover:bg-[#439897]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ================= CURRENT FAQs ================= */}

      <div className="overflow-hidden rounded-[14px] border border-[#439897]/15 bg-white shadow-sm">
        <div className="border-b border-[#439897]/10 px-6 py-5">
          <h2 className="font-nunito-sans-bold text-[16px] font-extrabold text-[#0d1e1e]">
            Current FAQs
          </h2>

          <p className="mt-1 font-nunito-sans text-[16px] text-[#0d1e1e]/50">
            {faqs.length} FAQ
            {faqs.length === 1 ? "" : "s"} currently
            available.
          </p>
        </div>

        {/* LOADING */}

        {loading && (
          <div className="px-6 py-12 text-center">
            <p className="font-nunito-sans text-[14px] text-[#0d1e1e]/50">
              Loading FAQs...
            </p>
          </div>
        )}

        {/* EMPTY */}

        {!loading && faqs.length === 0 && (
          <div className="px-6 py-14 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#439897]">
              <HelpCircle
                size={20}
                className="text-[#ffffff]"
              />
            </div>

            <h3 className="font-nunito-sans-bold text-[18px]  text-[#0d1e1e]">
              No FAQs yet
            </h3>

            <p className="mx-auto mt-1 max-w-[400px] font-nunito-sans text-[16px] text-[#0d1e1e]/50">
              Add your first FAQ to start managing the
              FAQ section.
            </p>
          </div>
        )}

        {/* FAQ LIST */}

        {!loading && faqs.length > 0 && (
          <div className="divide-y divide-[#439897]/10">
            {faqs.map((faq, index) => (
              <div
                key={faq._id}
                className="flex flex-col gap-5 px-6 py-6"
              >
                <div className="flex gap-4">
                  {/* NUMBER */}

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#439897] font-nunito-sans-bold text-[12px]  text-[#ffffff]">
                    {index + 1}
                  </div>

                  {/* CONTENT */}

                  <div className="min-w-0 flex-1">
                    <h3 className="font-nunito-sans-bold text-[18px]  leading-6 text-[#0d1e1e]">
                      {faq.question}
                    </h3>

                    <p className="mt-2 font-nunito-sans text-[16px] leading-6 text-[#0d1e1e]">
                      {faq.answer}
                    </p>

                    <span className="mt-3 inline-block rounded-full bg-[#439897] px-3 py-1 font-nunito-sans text-[11px] font-medium text-[#ffffff]">
                      Order {faq.order}
                    </span>
                  </div>

                  {/* ACTIONS */}

                  <div className="flex shrink-0 items-start gap-1">
                    <button
                      type="button"
                      onClick={() =>
                        openEditForm(faq)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-[8px] text-[#0d1e1e]/50 transition hover:bg-[#439897] hover:text-[#ffffff]"
                      aria-label="Edit FAQ"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(faq._id)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-[8px] text-[#0d1e1e]/50 transition hover:bg-red-50 hover:text-red-600"
                      aria-label="Delete FAQ"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}