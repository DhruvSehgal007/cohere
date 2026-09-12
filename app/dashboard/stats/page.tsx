"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  BarChart3,
} from "lucide-react";

type Stat = {
  _id: string;
  value: number;
  suffix: string;
  label: string;
  order: number;
};

type FormData = {
  value: string;
  suffix: string;
  label: string;
  order: string;
};

const emptyForm: FormData = {
  value: "",
  suffix: "+",
  label: "",
  order: "",
};

export default function StatsPage() {
  const [stats, setStats] = useState<Stat[]>([]);
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
  // GET STATS
  // =========================

  const fetchStats = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/stats", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch statistics"
        );
      }

      setStats(data.stats || []);
    } catch (error) {
      console.error("Fetch stats error:", error);

      setError(
        "Unable to load statistics. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // =========================
  // OPEN ADD FORM
  // =========================

  const openAddForm = () => {
    setEditingId(null);

    setForm({
      ...emptyForm,
      order: String(stats.length + 1),
    });

    setError("");
    setSuccess("");
    setShowForm(true);
  };

  // =========================
  // OPEN EDIT FORM
  // =========================

  const openEditForm = (stat: Stat) => {
    setEditingId(stat._id);

    setForm({
      value: String(stat.value),
      suffix: stat.suffix,
      label: stat.label,
      order: String(stat.order),
    });

    setError("");
    setSuccess("");
    setShowForm(true);
  };

  // =========================
  // CLOSE FORM
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
        ? `/api/stats/${editingId}`
        : "/api/stats";

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          value: Number(form.value),
          suffix: form.suffix,
          label: form.label,
          order: Number(form.order),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to save statistic"
        );
      }

      setSuccess(
        editingId
          ? "Statistic updated successfully."
          : "Statistic added successfully."
      );

      closeForm();

      await fetchStats();
    } catch (error) {
      console.error("Save stat error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to save statistic."
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
      "Are you sure you want to delete this statistic?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");
      setSuccess("");

      const response = await fetch(
        `/api/stats/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete statistic"
        );
      }

      setSuccess(
        "Statistic deleted successfully."
      );

      await fetchStats();
    } catch (error) {
      console.error("Delete stat error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to delete statistic."
      );
    }
  };

  return (
    <div className="p-6 md:p-8">
      {/* ================= HEADER ================= */}

      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <BarChart3
              size={18}
              strokeWidth={2}
              className="text-[#ffffff]"
            />

            <span className="font-avenir text-[11px] font-bold uppercase tracking-[1.5px] text-[#ffffff]">
              Content Management
            </span>
          </div>

          <h1 className="font-avenir text-[28px] font-extrabold leading-tight text-[#0d1e1e]">
            Statistics
          </h1>

          <p className="mt-2 max-w-[550px] font-nunito-sans text-[14px] leading-6 text-[#0d1e1e]/60">
            Manage the numbers and information displayed
            in the statistics section of your website.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddForm}
          className="flex h-[44px] shrink-0 items-center justify-center gap-2 rounded-[9px] bg-[#439897] px-5 font-avenir text-[13px] font-bold text-white transition hover:bg-[#367f7e]"
        >
          <Plus size={17} />
          Add Statistic
        </button>
      </div>

      {/* ================= MESSAGES ================= */}

      {success && (
        <div className="mb-5 rounded-[8px] border border-[#439897]/20 bg-[#439897] px-4 py-3">
          <p className="font-nunito-sans text-[13px] text-[#0d1e1e]">
            {success}
          </p>
        </div>
      )}

      {error && !showForm && (
        <div className="mb-5 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3">
          <p className="font-nunito-sans text-[13px] text-red-600">
            {error}
          </p>
        </div>
      )}

      {/* ================= FORM ================= */}

      {showForm && (
        <div className="mb-8 rounded-[14px] border border-[#439897]/20 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#439897]/10 px-6 py-5">
            <div>
              <h2 className="font-avenir text-[18px] font-extrabold text-[#0d1e1e]">
                {editingId
                  ? "Edit Statistic"
                  : "Add Statistic"}
              </h2>

              <p className="mt-1 font-nunito-sans text-[13px] text-[#0d1e1e]/55">
                Update the number and text shown on your
                website.
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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* NUMBER */}

              <div>
                <label className="mb-2 block font-avenir text-[13px] font-bold text-[#0d1e1e]">
                  Number
                </label>

                <input
                  type="number"
                  min="0"
                  required
                  value={form.value}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      value: e.target.value,
                    })
                  }
                  placeholder="25"
                  className="h-[46px] w-full rounded-[8px] border border-[#439897]/30 bg-white px-4 font-nunito-sans text-[14px] text-[#0d1e1e] outline-none transition focus:border-[#439897] focus:ring-2 focus:ring-[#439897]/10"
                />
              </div>

              {/* SUFFIX */}

              <div>
                <label className="mb-2 block font-avenir text-[13px] font-bold text-[#0d1e1e]">
                  Suffix
                </label>

                <input
                  type="text"
                  value={form.suffix}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      suffix: e.target.value,
                    })
                  }
                  placeholder="+"
                  className="h-[46px] w-full rounded-[8px] border border-[#439897]/30 bg-white px-4 font-nunito-sans text-[14px] text-[#0d1e1e] outline-none transition focus:border-[#439897] focus:ring-2 focus:ring-[#439897]/10"
                />

                <p className="mt-1.5 font-nunito-sans text-[11px] text-[#0d1e1e]/45">
                  Example: +, %, K+
                </p>
              </div>

              {/* LABEL */}

              <div>
                <label className="mb-2 block font-avenir text-[13px] font-bold text-[#0d1e1e]">
                  Text / Label
                </label>

                <input
                  type="text"
                  required
                  value={form.label}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      label: e.target.value,
                    })
                  }
                  placeholder="Years"
                  className="h-[46px] w-full rounded-[8px] border border-[#439897]/30 bg-white px-4 font-nunito-sans text-[14px] text-[#0d1e1e] outline-none transition focus:border-[#439897] focus:ring-2 focus:ring-[#439897]/10"
                />
              </div>

              {/* ORDER */}

              <div>
                <label className="mb-2 block font-avenir text-[13px] font-bold text-[#0d1e1e]">
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

            {error && (
              <div className="mt-5 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3">
                <p className="font-nunito-sans text-[13px] text-red-600">
                  {error}
                </p>
              </div>
            )}

            {/* FORM BUTTONS */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={saving}
                className="h-[44px] rounded-[8px] bg-[#439897] px-6 font-avenir text-[13px] font-bold text-white transition hover:bg-[#367f7e] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editingId
                  ? "Update Statistic"
                  : "Add Statistic"}
              </button>

              <button
                type="button"
                onClick={closeForm}
                className="h-[44px] rounded-[8px] border border-[#439897]/30 px-6 font-avenir text-[13px] font-bold text-[#0d1e1e] transition hover:bg-[#439897]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ================= CURRENT STATS ================= */}

      <div className="overflow-hidden rounded-[14px] border border-[#439897]/15 bg-white shadow-sm">
        <div className="border-b border-[#439897]/10 px-6 py-5">
          <h2 className="font-avenir text-[16px] font-extrabold text-[#0d1e1e]">
            Current Statistics
          </h2>

          <p className="mt-1 font-nunito-sans text-[13px] text-[#0d1e1e]/50">
            {stats.length} statistic
            {stats.length === 1 ? "" : "s"} currently
            available.
          </p>
        </div>

        {/* LOADING */}

        {loading && (
          <div className="px-6 py-12 text-center">
            <p className="font-nunito-sans text-[14px] text-[#0d1e1e]/50">
              Loading statistics...
            </p>
          </div>
        )}

        {/* EMPTY */}

        {!loading && stats.length === 0 && (
          <div className="px-6 py-14 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#439897]">
              <BarChart3
                size={20}
                className="text-[#ffffff]"
              />
            </div>

            <h3 className="font-avenir text-[15px] font-bold text-[#0d1e1e]">
              No statistics yet
            </h3>

            <p className="mx-auto mt-1 max-w-[400px] font-nunito-sans text-[13px] text-[#0d1e1e]/50">
              Add your first statistic to start managing
              the statistics section.
            </p>
          </div>
        )}

        {/* LIST */}

        {!loading && stats.length > 0 && (
          <div className="divide-y divide-[#439897]/10">
            {stats.map((stat, index) => (
              <div
                key={stat._id}
                className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                {/* LEFT */}

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-[#439897] font-avenir text-[12px] font-bold text-[#ffffff]">
                    {index + 1}
                  </div>

                  <div>
                    <p className="font-avenir text-[24px] font-extrabold leading-none text-[#0d1e1e]">
                      {stat.value}
                      {stat.suffix}
                    </p>

                    <p className="mt-1.5 font-nunito-sans text-[14px] text-[#0d1e1e]/60">
                      {stat.label}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}

                <div className="flex items-center gap-2 sm:justify-end">
                  <span className="mr-2 rounded-full bg-[#439897] px-3 py-1 font-nunito-sans text-[11px] font-medium text-[#ffffff]">
                    Order {stat.order}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      openEditForm(stat)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-[8px] text-[#0d1e1e]/55 transition hover:bg-[#439897] hover:text-[#ffffff]"
                    aria-label={`Edit ${stat.label}`}
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(stat._id)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-[8px] text-[#0d1e1e]/55 transition hover:bg-red-50 hover:text-red-600"
                    aria-label={`Delete ${stat.label}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}