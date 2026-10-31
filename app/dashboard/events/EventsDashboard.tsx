"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { prepareEventImage } from "@/utils/eventImage";
import EventAddedDialog from "./EventAddedDialog";
import EventContentEditor from "./EventContentEditor";
import {
  paragraphsToEventContent,
  normalizeEventContent,
} from "@/utils/eventContent";
import type { EventItem, EventSettings } from "@/utils/eventDefaults";

const inputClass =
  "mt-2 w-full rounded-lg border border-[#439897]/30 bg-white p-3 text-[#0d1e1e]";
function ImageField({
  label,
  value,
  onChange,
  onBusyChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBusyChange: (change: number) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  return (
    <div>
      <label className="block font-medium">
        {label}
        <input
          className={inputClass}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          required={!value}
          disabled={busy}
          aria-invalid={!!error}
          onChange={async (e) => {
            const input = e.currentTarget;
            const file = input.files?.[0];
            if (!file) return;
            setBusy(true);
            setError("");
            onBusyChange(1);
            try {
              onChange(await prepareEventImage(file));
            } catch (error) {
              setError(
                error instanceof Error
                  ? error.message
                  : "Unable to prepare image.",
              );
              input.value = "";
            } finally {
              setBusy(false);
              onBusyChange(-1);
            }
          }}
        />
      </label>
      <p className="mt-2 text-xs text-gray-500">
        PNG, JPEG, WebP or GIF, up to 10 MB. Large images are reduced
        automatically.
      </p>
      {busy && (
        <p role="status" className="mt-2 text-sm text-[#367f7e]">
          Preparing image...
        </p>
      )}
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
      {value && (
        <div className="mt-3 rounded-lg border border-[#439897]/20 bg-[#f7f9f8] p-3">
          <Image
            unoptimized
            width={240}
            height={112}
            src={value}
            alt={`${label} preview`}
            className="h-28 max-w-full rounded-lg object-contain"
          />
          <p className="mt-2 text-xs font-medium text-[#367f7e]">
            Image selected
          </p>
        </div>
      )}
    </div>
  );
}
const emptyEvent = (): EventItem => ({
  id: "",
  title: "",
  slug: "",
  image: "",
  heroImage: "",
  paragraphs: [""],
  content: paragraphsToEventContent([""]),
  speakers: [],
  order: 1,
});

export default function EventsDashboard({
  mode = "all",
}: {
  mode?: "all" | "add";
}) {
  const router = useRouter();
  const isAdd = mode === "add";
  const [events, setEvents] = useState<EventItem[]>([]);
  const [settings, setSettings] = useState<EventSettings | null>(null);
  const [form, setForm] = useState<EventItem | null>(() =>
    isAdd ? emptyEvent() : null,
  );
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploads, setUploads] = useState(0);
  const [addedTitle, setAddedTitle] = useState<string | null>(null);
  function changeUploads(change: number) {
    setUploads((count) => Math.max(0, count + change));
  }
  const [success, setSuccess] = useState("");
  async function load() {
    const res = await fetch("/api/events", { cache: "no-store" });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Unable to load events.");
    setEvents(data.events);
    setSettings(data.settings);
  }
  useEffect(() => {
    let active = true;
    fetch("/api/events", { cache: "no-store" })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Unable to load events.");
        if (active) {
          setEvents(data.events);
          setSettings(data.settings);
          if (isAdd)
            setForm((current) =>
              current
                ? {
                    ...current,
                    order:
                      data.events.reduce(
                        (max: number, event: EventItem) =>
                          Math.max(max, event.order),
                        0,
                      ) + 1,
                  }
                : current,
            );
        }
      })
      .catch((e) => {
        if (active) setError(e.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [isAdd]);
  async function save(method: string, body: object) {
    if (saving || uploads > 0 || addedTitle) return;
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/events", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok)
        throw new Error(
          data?.message ||
            (res.status === 413
              ? "The selected images are too large. Please choose smaller images."
              : "Unable to save events. Please try again."),
        );
      if (isAdd && method === "POST") {
        setAddedTitle(form?.title || "Your event");
        return;
      }
      await load();
      setForm(null);
      setSuccess("Changes saved. The website now uses the updated content.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to save events.");
    } finally {
      setSaving(false);
    }
  }
  function start(event?: EventItem) {
    setEditing(!!event);
    setError("");
    setSuccess("");
    setForm(
      event
        ? {
            ...structuredClone(event),
            content:
              event.content || paragraphsToEventContent(event.paragraphs),
          }
        : {
            id: "",
            title: "",
            slug: "",
            image: "",
            heroImage: "",
            paragraphs: [""],
            content: paragraphsToEventContent([""]),
            speakers: [],
            order: events.reduce((max, e) => Math.max(max, e.order), 0) + 1,
          },
    );
  }
  return (
    <div className="p-6 md:p-8 text-[#0d1e1e]">
      {addedTitle && (
        <EventAddedDialog
          title={addedTitle}
          onDone={() => router.push("/dashboard/events")}
        />
      )}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            {isAdd ? "Add Event" : "All Events"}
          </h1>
          <p className="mt-2">
            {isAdd
              ? "Create an event with images, paragraphs and speakers."
              : "Manage your events and the Events page content."}
          </p>
        </div>
        {!isAdd && (
          <Link
            className="rounded-lg bg-[#439897] px-5 py-3 text-white"
            href="/dashboard/events/add"
          >
            Add Event
          </Link>
        )}
      </div>
      {error && (
        <p role="alert" className="mb-5 rounded-lg bg-red-50 p-4 text-red-700">
          {error}
        </p>
      )}
      {success && (
        <p
          role="status"
          className="mb-5 rounded-lg bg-green-50 p-4 text-green-800"
        >
          {success}
        </p>
      )}
      {loading && <p>Loading events...</p>}
      {!loading && !settings && (
        <button
          onClick={() => {
            setLoading(true);
            load()
              .catch((e) => setError(e.message))
              .finally(() => setLoading(false));
          }}
        >
          Retry loading
        </button>
      )}
      {!isAdd && settings && !form && (
        <details className="mb-6 rounded-xl border border-[#439897]/20 bg-white p-6">
          <summary className="cursor-pointer font-bold">
            Events page banner and headings
          </summary>
          <form
            className="mt-5 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              void save("PUT", { settings });
            }}
          >
            <fieldset disabled={saving} className="space-y-5">
              <label className="block">
                Banner heading
                <input
                  required
                  maxLength={250}
                  className={inputClass}
                  value={settings.heading}
                  onChange={(e) =>
                    setSettings({ ...settings, heading: e.target.value })
                  }
                />
              </label>
              <label className="block">
                Banner paragraph
                <textarea
                  maxLength={2000}
                  className={inputClass}
                  value={settings.description}
                  onChange={(e) =>
                    setSettings({ ...settings, description: e.target.value })
                  }
                />
              </label>
              <label className="block">
                Events section heading
                <input
                  required
                  maxLength={150}
                  className={inputClass}
                  value={settings.listingHeading}
                  onChange={(e) =>
                    setSettings({ ...settings, listingHeading: e.target.value })
                  }
                />
              </label>
              <ImageField
                label="Banner image"
                value={settings.image}
                onChange={(image) =>
                  setSettings((current) =>
                    current ? { ...current, image } : current,
                  )
                }
                onBusyChange={changeUploads}
              />
              <button
                disabled={uploads > 0 || saving || !!addedTitle}
                className="rounded-lg bg-[#439897] px-5 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {uploads > 0
                  ? "Preparing images..."
                  : saving
                    ? "Saving..."
                    : "Save page settings"}
              </button>
            </fieldset>
          </form>
        </details>
      )}
      {!loading && settings && form && (
        <form
          className="mb-8 rounded-xl border border-[#439897]/20 bg-white p-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (!normalizeEventContent(form.content)) {
              setError("Please enter the event content before saving.");
              return;
            }
            void save(editing ? "PUT" : "POST", { event: form });
          }}
        >
          <h2 className="mb-5 text-xl font-bold">
            {editing ? "Edit event" : "Add event"}
          </h2>
          <fieldset disabled={saving} className="space-y-5">
            <label className="block">
              Event heading / card name
              <input
                required
                maxLength={250}
                className={inputClass}
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                    ...(!editing
                      ? {
                          slug: e.target.value
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-|-$/g, ""),
                        }
                      : {}),
                  })
                }
              />
            </label>
            <label className="block">
              URL slug
              <input
                required
                pattern="[a-z0-9]+(-[a-z0-9]+)*"
                maxLength={250}
                className={inputClass}
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
              />
              <span className="text-sm text-gray-500">
                /events/{form.slug} - changing this changes the event link.
              </span>
            </label>
            <label className="block">
              Display order
              <input
                required
                type="number"
                min={0}
                step={1}
                className={inputClass}
                value={form.order}
                onChange={(e) =>
                  setForm({ ...form, order: Number(e.target.value) })
                }
              />
            </label>
            <div className="grid gap-5 md:grid-cols-2">
              <ImageField
                label="Listing card image"
                value={form.image}
                onChange={(image) =>
                  setForm((current) =>
                    current ? { ...current, image } : current,
                  )
                }
                onBusyChange={changeUploads}
              />
              <ImageField
                label="Event detail banner image"
                value={form.heroImage}
                onChange={(heroImage) =>
                  setForm((current) =>
                    current ? { ...current, heroImage } : current,
                  )
                }
                onBusyChange={changeUploads}
              />
            </div>
            <EventContentEditor
              key={form.id || "new-event"}
              value={form.content || paragraphsToEventContent(form.paragraphs)}
              disabled={saving}
              onChange={(content) =>
                setForm((current) =>
                  current ? { ...current, content } : current,
                )
              }
            />
            <h3 className="font-bold">Speakers / experts</h3>
            {form.speakers.map((speaker, i) => (
              <div key={i} className="space-y-3 rounded-lg border p-4">
                <label className="block">
                  Speaker name
                  <input
                    required
                    maxLength={150}
                    className={inputClass}
                    value={speaker.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        speakers: form.speakers.map((s, j) =>
                          j === i ? { ...s, name: e.target.value } : s,
                        ),
                      })
                    }
                  />
                </label>
                <label className="block">
                  Role
                  <input
                    maxLength={250}
                    className={inputClass}
                    value={speaker.role}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        speakers: form.speakers.map((s, j) =>
                          j === i ? { ...s, role: e.target.value } : s,
                        ),
                      })
                    }
                  />
                </label>
                <ImageField
                  label="Speaker photo"
                  value={speaker.image}
                  onBusyChange={changeUploads}
                  onChange={(image) =>
                    setForm((current) =>
                      current
                        ? {
                            ...current,
                            speakers: current.speakers.map((s, j) =>
                              j === i ? { ...s, image } : s,
                            ),
                          }
                        : current,
                    )
                  }
                />
                <button
                  type="button"
                  disabled={uploads > 0}
                  className="text-red-600 disabled:opacity-50"
                  onClick={() =>
                    setForm({
                      ...form,
                      speakers: form.speakers.filter((_, j) => j !== i),
                    })
                  }
                >
                  Remove speaker
                </button>
              </div>
            ))}
            <button
              type="button"
              className="block text-[#367f7e]"
              disabled={form.speakers.length >= 20}
              onClick={() =>
                setForm({
                  ...form,
                  speakers: [
                    ...form.speakers,
                    { name: "", role: "", image: "" },
                  ],
                })
              }
            >
              + Add speaker
            </button>
            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}
            <div className="flex gap-4">
              <button
                disabled={uploads > 0 || saving || !!addedTitle}
                className="rounded-lg bg-[#439897] px-5 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {uploads > 0
                  ? "Preparing images..."
                  : saving
                    ? "Saving..."
                    : "Save event"}
              </button>
              <button
                type="button"
                onClick={() => {
                  if (isAdd) router.push("/dashboard/events");
                  else {
                    setForm(null);
                    setError("");
                  }
                }}
              >
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      )}
      {!isAdd && !loading && !form && (
        <div className="space-y-4">
          {events.length === 0 && (
            <p>No events yet. Add your first event above.</p>
          )}
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-wrap items-center gap-5 rounded-xl border border-[#439897]/20 bg-white p-5"
            >
              <Image
                unoptimized
                width={128}
                height={80}
                src={event.image}
                alt=""
                className="h-20 w-32 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <h2 className="font-bold">{event.title}</h2>
                <p className="text-sm text-gray-500">Order {event.order}</p>
                <p className="text-sm text-gray-500">
                  Created at:{" "}
                  {event.createdAt ? (
                    <time dateTime={event.createdAt}>
                      {new Intl.DateTimeFormat("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                        timeZone: "Asia/Kolkata",
                      }).format(new Date(event.createdAt))}{" "}
                      IST
                    </time>
                  ) : (
                    "Not recorded (existing event)"
                  )}
                </p>
                <Link
                  className="text-[#367f7e] underline"
                  href={`/events/${event.slug}`}
                  target="_blank"
                >
                  View event
                </Link>
              </div>
              <button disabled={saving} onClick={() => start(event)}>
                Edit
              </button>
              <button
                disabled={saving}
                className="text-red-600"
                onClick={() => {
                  if (
                    window.confirm(
                      `Delete "${event.title}"? Its detail page will also be removed.`,
                    )
                  )
                    void save("DELETE", { id: event.id });
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
