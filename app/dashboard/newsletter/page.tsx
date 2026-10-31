"use client";

import { useEffect, useState } from "react";

type Subscriber = { _id: string; email: string; createdAt: string };
type NewsletterData = { subscribers: Subscriber[]; total: number; pageSize: number };

export default function NewsletterPage() {
  const [data, setData] = useState<NewsletterData | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/newsletter?page=${page}`, { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Unable to load newsletter emails.");
        setData(result);
      })
      .catch((err: Error) => { if (!controller.signal.aborted) setError(err.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [page, refresh]);

  function changePage(next: number) { setLoading(true); setError(""); setPage(next); }

  return (
    <div className="p-6 text-[#0d1e1e] md:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div><h1 className="text-3xl font-bold">Newsletter mails</h1><p className="mt-2 text-gray-600">Email addresses subscribed through the homepage newsletter form.</p></div>
        <button disabled={loading} onClick={() => { setLoading(true); setError(""); setRefresh((value) => value + 1); }} className="rounded-lg bg-[#439897] px-5 py-3 text-white disabled:opacity-50">Refresh</button>
      </div>
      {error && <p role="alert" className="mb-4 rounded-lg bg-red-50 p-4 text-red-700">{error}</p>}
      {loading ? <p role="status">Loading newsletter emails...</p> : !error && data && <>
        <p className="mb-4 font-semibold">{data.total} {data.total === 1 ? "subscriber" : "subscribers"}</p>
        {data.subscribers.length === 0 ? <p className="rounded-xl border bg-white p-6 text-gray-600">No newsletter emails on this page yet.</p> : <div className="overflow-x-auto rounded-xl border border-[#439897]/20 bg-white">
          <table className="w-full text-left">
            <caption className="sr-only">Newsletter subscribers and signup dates</caption>
            <thead className="bg-[#439897]/10"><tr><th scope="col" className="p-4">Email address</th><th scope="col" className="p-4">Subscribed on</th></tr></thead>
            <tbody>{data.subscribers.map((subscriber) => <tr key={subscriber._id} className="border-t border-gray-100">
              <td className="break-all p-4">{subscriber.email}</td>
              <td className="whitespace-nowrap p-4"><time dateTime={subscriber.createdAt}>{new Date(subscriber.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</time></td>
            </tr>)}</tbody>
          </table>
        </div>}
        <div className="mt-5 flex items-center gap-4">
          <button disabled={page <= 1} onClick={() => changePage(page - 1)} className="rounded-lg border px-4 py-2 disabled:opacity-40">Previous</button>
          <span>Page {page} of {Math.max(1, Math.ceil(data.total / data.pageSize))}</span>
          <button disabled={page * data.pageSize >= data.total} onClick={() => changePage(page + 1)} className="rounded-lg border px-4 py-2 disabled:opacity-40">Next</button>
        </div>
      </>}
    </div>
  );
}
