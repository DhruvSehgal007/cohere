"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { normalizeNewsletterEmail } from "@/utils/newsletter";

type Recaptcha = {
  ready: (callback: () => void) => void;
  render: (container: HTMLElement, options: Record<string, unknown>) => number;
  reset: (id: number) => void;
};
declare global { interface Window { grecaptcha?: Recaptcha } }

export default function NewsletterForm() {
  const [siteKey, setSiteKey] = useState("");
  const [loadingConfig, setLoadingConfig] = useState(true);
  const [retry, setRetry] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<number | null>(null);
  const submitting = useRef(false);
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/newsletter/config", { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok || !data.siteKey) throw new Error(data.message || "Unable to load newsletter verification.");
        setSiteKey(data.siteKey);
      })
      .catch((err: Error) => { if (!controller.signal.aborted) setError(err.message); })
      .finally(() => { if (!controller.signal.aborted) setLoadingConfig(false); });
    return () => controller.abort();
  }, [retry]);

  const renderCaptcha = useCallback(() => {
    if (!siteKey || !container.current || !window.grecaptcha || widget.current !== null) return;
    widget.current = window.grecaptcha.render(container.current, {
      sitekey: siteKey,
      theme: "light",
      size: container.current.clientWidth < 304 ? "compact" : "normal",
      callback: (value: string) => { setToken(value); setError(""); },
      "expired-callback": () => setToken(""),
      "error-callback": () => { setToken(""); setError("reCAPTCHA could not load. Please refresh and try again."); },
    });
  }, [siteKey]);

  useEffect(() => {
    if (siteKey) window.grecaptcha?.ready(renderCaptcha);
  }, [siteKey, renderCaptcha]);

  useEffect(() => () => {
    if (widget.current !== null) window.grecaptcha?.reset(widget.current);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    setError(""); setMessage("");
    const form = event.currentTarget;
    const fields = new FormData(form);
    const email = normalizeNewsletterEmail(fields.get("email"));
    if (!email) { setError("Please enter a valid email address, such as name@company.com."); return; }
    if (!token) { setError("Please check the reCAPTCHA checkbox."); return; }
    submitting.current = true;
    setBusy(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, captchaToken: token, website: fields.get("website") }),
        signal: AbortSignal.timeout(25000),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to subscribe. Please try again.");
      setMessage(data.message);
      form.reset();
    } catch (err) {
      setError(err instanceof Error && err.name !== "TimeoutError" ? err.message : "Unable to subscribe right now. Please try again.");
    } finally {
      setToken("");
      if (widget.current !== null) window.grecaptcha?.reset(widget.current);
      submitting.current = false;
      setBusy(false);
    }
  }

  const inputClass = "h-[60px] w-full rounded-xl border border-black bg-transparent px-5 font-nunito-sans text-[16px] text-black outline-none placeholder:text-black focus:ring-2 focus:ring-black/30 disabled:opacity-60 md:text-[18px]";
  return (
    <form onSubmit={submit} className="mt-5 flex min-w-0 flex-col gap-4" aria-busy={busy}>
      <input type="email" name="email" autoComplete="email" aria-label="Your work email" required maxLength={254} disabled={busy}
        placeholder="Enter your work email" aria-describedby="newsletter-feedback" className={inputClass} />
      <div className="hidden" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {siteKey ? <>
        <Script id="newsletter-recaptcha" src="https://www.google.com/recaptcha/api.js?render=explicit"
          onReady={() => window.grecaptcha?.ready(renderCaptcha)} onError={() => setError("reCAPTCHA could not load. Please refresh and try again.")} />
        <div ref={container} className="min-h-[78px] w-full" />
      </> : loadingConfig ? <p role="status" className="text-sm">Loading reCAPTCHA...</p> :
        <button type="button" className="text-left text-sm underline" onClick={() => { setError(""); setLoadingConfig(true); setRetry((value) => value + 1); }}>Retry loading reCAPTCHA</button>}
      <button type="submit" disabled={busy || !siteKey || !token}
        className="h-[60px] shrink-0 rounded-xl bg-white font-nunito-sans-extra-bold text-[16px] text-black transition hover:bg-[#F4F4F4] disabled:cursor-not-allowed disabled:opacity-60 md:text-[18px]">
        {busy ? "SUBMITTING..." : "SUBMIT"}
      </button>
      <div id="newsletter-feedback" aria-live="polite">
        {error && <p role="alert" className="text-sm font-semibold text-red-950">{error}</p>}
        {message && <p role="status" className="text-sm font-semibold text-[#024948]">{message}</p>}
      </div>
    </form>
  );
}
