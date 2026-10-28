"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import type { ClientLogo } from "@/utils/clientDefaults";

export default function ClientsPage() {
  const [clients, setClients] = useState<ClientLogo[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [editing, setEditing] = useState<ClientLogo | null>(null);
  const [name, setName] = useState("");
  const [row, setRow] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [fileKey, setFileKey] = useState(0);

  async function load() {
    const response = await fetch("/api/clients", { cache: "no-store" });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    setClients(data.clients);
  }
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clients", { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setClients(data.clients);
      })
      .catch((err: Error) => { if (!controller.signal.aborted) setError(err.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);

  function reset() {
    setEditing(null); setName(""); setRow(1); setFile(null); setFileKey((key) => key + 1);
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setError(""); setMessage("");
    try {
      let image: string | undefined;
      if (file) {
        if (file.size > 2 * 1024 * 1024 || !["image/png", "image/jpeg", "image/webp", "image/gif"].includes(file.type)) {
          throw new Error("Choose a PNG, JPEG, WebP or GIF image under 2 MB.");
        }
        image = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = () => reject(new Error("Unable to read image."));
          reader.readAsDataURL(file);
        });
      }
      const response = await fetch("/api/clients", {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editing?._id, name, row, image }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      reset();
      await load();
      setMessage("Client saved. Your website now uses the updated logo and row.");
    } catch (err) { setError(err instanceof Error ? err.message : "Unable to save client."); }
    finally { setBusy(false); }
  }

  async function remove(client: ClientLogo) {
    if (!window.confirm(`Remove ${client.name} from the website?`)) return;
    setBusy(true); setError(""); setMessage("");
    try {
      const response = await fetch("/api/clients", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: client._id }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      if (editing?._id === client._id) reset();
      await load(); setMessage("Client removed.");
    } catch (err) { setError(err instanceof Error ? err.message : "Unable to remove client."); }
    finally { setBusy(false); }
  }

  const inputClass = "mt-2 w-full rounded-lg border border-gray-300 bg-white p-3";
  return (
    <div className="p-6 md:p-8 text-[#0d1e1e]">
      <h1 className="text-3xl font-bold">Clients</h1>
      <p className="mt-2 mb-6 text-gray-600">Manage the logos in Our Clients. Choose which scrolling row each client appears in.</p>
      {error && <p role="alert" className="mb-4 rounded-lg bg-red-50 p-4 text-red-700">{error}</p>}
      {message && <p role="status" className="mb-4 rounded-lg bg-teal-50 p-4 text-teal-800">{message}</p>}
      <form onSubmit={save} className="mb-8 rounded-xl border border-[#439897]/20 bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">{editing ? "Edit client" : "Add client"}</h2>
        <fieldset disabled={busy || loading} className="grid gap-5 md:grid-cols-2 disabled:opacity-60">
          <label>Client name<input required maxLength={120} value={name} onChange={(event) => setName(event.target.value)} className={inputClass} /></label>
          <label>Display row<select value={row} onChange={(event) => setRow(Number(event.target.value))} className={inputClass}><option value={1}>First row</option><option value={2}>Second row</option></select></label>
          <label className="md:col-span-2">Logo image<input key={fileKey} type="file" accept="image/png,image/jpeg,image/webp,image/gif" required={!editing} onChange={(event) => setFile(event.target.files?.[0] ?? null)} className={inputClass} /><span className="mt-2 block text-sm text-gray-500">PNG, JPEG, WebP or GIF, up to 2 MB.{editing && " Leave empty to keep the current logo."}</span></label>
          <div className="flex gap-3"><button type="submit" className="rounded-lg bg-[#439897] px-5 py-3 text-white">{busy ? "Saving…" : editing ? "Save changes" : "Add client"}</button>{editing && <button type="button" onClick={reset} className="rounded-lg border px-5 py-3">Cancel</button>}</div>
        </fieldset>
      </form>
      {loading ? <p role="status">Loading clients…</p> : [1, 2].map((displayRow) => (
        <section key={displayRow} className="mb-8">
          <h2 className="mb-4 text-xl font-bold">{displayRow === 1 ? "First row" : "Second row"}</h2>
          {!clients.some((client) => client.row === displayRow) && <p className="text-gray-500">No clients in this row. Add one above.</p>}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{clients.filter((client) => client.row === displayRow).map((client) => (
            <article key={client._id} className="rounded-xl border border-[#439897]/20 bg-white p-5">
              <div className="relative mb-4 h-24"><Image src={client.image} alt={client.name} fill unoptimized sizes="300px" className="object-contain" /></div>
              <h3 className="font-semibold">{client.name}</h3>
              <div className="mt-4 flex gap-4"><button disabled={busy} type="button" onClick={() => { setEditing(client); setName(client.name); setRow(client.row); setFile(null); setFileKey((key) => key + 1); setError(""); setMessage(""); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-teal-700 disabled:opacity-50" aria-label={`Edit ${client.name}`}>Edit</button><button disabled={busy} type="button" onClick={() => remove(client)} className="text-red-600 disabled:opacity-50" aria-label={`Remove ${client.name}`}>Remove</button></div>
            </article>
          ))}</div>
        </section>
      ))}
    </div>
  );
}
