"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Check, X } from "lucide-react";

export default function EventAddedDialog({
  title,
  onDone,
}: {
  title: string;
  onDone: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => element?.close();
  }, []);
  return (
    <dialog
      ref={dialog}
      aria-labelledby="event-added-title"
      aria-describedby="event-added-description"
      onCancel={(event) => {
        event.preventDefault();
        onDone();
      }}
      className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-md rounded-[24px] border-0 bg-white p-0 text-[#0d1e1e] shadow-2xl backdrop:bg-[#0d1e1e]/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative overflow-hidden p-8 text-center sm:p-10">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#295f63] to-[#63b9ad]" />
        <button
          type="button"
          aria-label="Close and view all events"
          onClick={onDone}
          className="absolute right-4 top-5 rounded-full p-2 text-gray-500 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-[#439897]"
        >
          <X size={20} />
        </button>
        <div className="mx-auto mb-6 mt-3 flex h-20 w-20 items-center justify-center rounded-full bg-[#439897]/10 ring-8 ring-[#439897]/5">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#439897] text-white">
            <Check size={32} strokeWidth={3} />
          </span>
        </div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#367f7e]">
          Saved successfully
        </p>
        <h2 id="event-added-title" className="text-2xl font-bold">
          Your event has been added!
        </h2>
        <p
          id="event-added-description"
          className="mt-3 break-words text-sm leading-6 text-gray-600"
        >
          <strong className="font-semibold text-[#0d1e1e]">{title}</strong> is
          now available on your Events page.
        </p>
        <button
          type="button"
          onClick={onDone}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#439897] px-5 py-3.5 font-semibold text-white transition hover:bg-[#367f7e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#439897]"
        >
          View All Events
          <ArrowRight size={18} />
        </button>
      </div>
    </dialog>
  );
}
