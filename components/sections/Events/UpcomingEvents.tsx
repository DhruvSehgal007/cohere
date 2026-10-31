"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";




import Searchicon from "@/assets/images/Events/Search-icon.svg";
import Nextwhite from "@/assets/images/Events/Next-white.svg";

import type { EventItem } from "@/utils/eventDefaults";

export default function UpcomingEvents({ events: allEvents, heading = "Upcoming Events" }: { events: EventItem[]; heading?: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const itemsPerPage = 9;

  const filteredEvents = allEvents.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMoreEvents = visibleCount < filteredEvents.length;

  const handleLoadMore = () => {
    setVisibleCount((count) => count + itemsPerPage);
  };

  return (
    <section className="pt-6 sm:pt-10 md:pt-12 pb-16 md:pb-24 bg-white">
      <div className="container-custom">
        {/* Header Row: Title & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-avenir font-bold text-[#0D1E1E] leading-[1.2]">
            {heading}
          </h2>

          {/* Search Bar */}
          <div className="flex w-full items-center sm:w-auto">
  <div
    className="
      flex
      h-[50px]
      w-full
      items-center
      overflow-hidden
      rounded-[8px]
      border
      border-[#BBBBBB]
      bg-white
      transition-all

      focus-within:border-[#439897]

      sm:w-[300px]
    "
  >
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
        setVisibleCount(itemsPerPage);
      }}
      className="
        h-full
        w-full
        flex-1
        bg-transparent
        px-[20px]
        font-nunito-sans
        text-[14px]
        text-[#0D1E1E]
        outline-none

        placeholder:text-[#777777]
      "
    />

    <button
      type="button"
      aria-label="Search"
      onClick={() => setVisibleCount(itemsPerPage)}
      className="
        mr-[5px]
        flex
        h-[34px]
        w-[34px]
        shrink-0
        items-center
        justify-center
        rounded-[3px]
        bg-[linear-gradient(135deg,#439897_0%,#2E262E_100%)]
        transition-all
        duration-300
        hover:opacity-90
      "
    >
      <Image
        src={Searchicon}
        alt=""
        width={18}
        height={18}
        className="h-[18px] w-[18px] object-contain"
      />
    </button>
  </div>
</div>
        </div>

        {/* Events Cards Grid */}
        {visibleEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="group relative flex flex-col justify-between h-[230px] sm:h-[260px] lg:h-[285px] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 bg-white block"
              >
                {/* Background Image with Hover Scale */}
                <div className="absolute inset-0 z-0">
                  <Image
                    unoptimized
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Top spacer */}
                <div className="relative z-10 p-4 flex-1" />

                {/* Bottom Pill Badge / Button */}
                <div className="relative z-10">
  <div
    className="
      w-full
      rounded-[10px]
      px-3
      py-2.5
      text-center
      font-avenir
      text-[16px]
      font-bold
      text-white
      shadow-md
      transition-all
      duration-300
      group-hover:shadow-lg

      sm:py-3
      sm:text-[18px]
      md:text-[20px]
    "
    style={{
      background: "linear-gradient(180deg, #439897 0%, #2E262E 100%)",
    }}
  >
    {event.title}
  </div>
</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F9FAFB] rounded-[16px] border border-gray-100">
            <p className="text-[18px] font-avenir text-gray-500 mb-4">
              No events found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(""); setVisibleCount(itemsPerPage); }}
              className="px-4 py-2 bg-[#439897] text-white rounded-[6px] text-[14px] font-avenir hover:bg-[#357c7b] transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Append the next nine events while keeping existing cards visible. */}
        {hasMoreEvents && (
        <div className="mt-10 flex items-center justify-end sm:mt-12">
  <button
    type="button"
    onClick={handleLoadMore}
    aria-label="Load nine more events"
    className="
      inline-flex
      h-[60px]
      min-w-[220px]
      items-center
      justify-center
      gap-[28px]
      rounded-[10px]
      bg-[linear-gradient(90deg,#439897_0%,#2E262E_100%)]
      px-[42px]
      font-nunito-sans
      text-[18px]
      sm:text-[18px]
      md:text-[20px]
      font-normal
      text-white
      shadow-sm
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:shadow-lg
      sm:h-[60px]
      sm:min-w-[220px]
    "
  >
    <span>Next</span>

    <Image
      src={Nextwhite}
      alt=""
      width={24}
      height={24}
      className="h-[24px] w-[24px] object-contain"
    />
  </button>
</div>
        )}
      </div>
    </section>
  );
}
