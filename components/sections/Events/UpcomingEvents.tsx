"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import upcomingEvent1 from "@/assets/images/Blogs/InnerBlog/upcomingevent1.png";
import upcomingEvent2 from "@/assets/images/Blogs/InnerBlog/upcomingevent2.png";
import upcomingEvent3 from "@/assets/images/Blogs/InnerBlog/upcomingevent3.png";

interface EventItem {
  id: number;
  title: string;
  image: any;
  slug: string;
}

const allEvents: EventItem[] = [
  {
    id: 1,
    title: "Keep It Right - website based training",
    image: upcomingEvent1,
    slug: "keep-it-right-website-based-training",
  },
  {
    id: 2,
    title: "The Keep it Right App",
    image: upcomingEvent2,
    slug: "the-keep-it-right-app",
  },
  {
    id: 3,
    title: "STOP by Cohere @ Keep It Right",
    image: upcomingEvent3,
    slug: "stop-by-cohere-keep-it-right",
  },
  {
    id: 4,
    title: "Keep It Right - website based training",
    image: upcomingEvent1,
    slug: "keep-it-right-website-based-training-2",
  },
  {
    id: 5,
    title: "The Keep it Right App",
    image: upcomingEvent2,
    slug: "the-keep-it-right-app-2",
  },
  {
    id: 6,
    title: "STOP by Cohere @ Keep It Right",
    image: upcomingEvent3,
    slug: "stop-by-cohere-keep-it-right-2",
  },
  {
    id: 7,
    title: "Keep It Right - website based training",
    image: upcomingEvent1,
    slug: "keep-it-right-website-based-training-3",
  },
  {
    id: 8,
    title: "The Keep it Right App",
    image: upcomingEvent2,
    slug: "the-keep-it-right-app-3",
  },
  {
    id: 9,
    title: "STOP by Cohere @ Keep It Right",
    image: upcomingEvent3,
    slug: "stop-by-cohere-keep-it-right-3",
  },
];

export default function UpcomingEvents() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredEvents = allEvents.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage) || 1;
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage(1);
    }
  };

  return (
    <section className="pt-6 sm:pt-10 md:pt-12 pb-16 md:pb-24 bg-white">
      <div className="container-custom">
        {/* Header Row: Title & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-avenir font-bold text-[#0D1E1E] leading-[1.2]">
            Upcoming Events
          </h2>

          {/* Search Bar */}
          <div className="flex items-center w-full sm:w-auto">
            <div className="flex items-center w-full sm:w-auto rounded-[4px] border border-[#C9D6D6] overflow-hidden focus-within:border-[#439897] focus-within:ring-1 focus-within:ring-[#439897] transition-all bg-white">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-3.5 py-1.5 sm:py-2 text-[14px] sm:text-[15px] font-nunito-sans text-[#0D1E1E] placeholder:text-[#9CA3AF] focus:outline-none w-full sm:w-[220px]"
              />
              <button
                type="button"
                aria-label="Search"
                className="bg-[#439897] hover:bg-[#357c7b] text-white px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Events Cards Grid */}
        {paginatedEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {paginatedEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="group relative flex flex-col justify-between h-[230px] sm:h-[260px] lg:h-[285px] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 bg-white block"
              >
                {/* Background Image with Hover Scale */}
                <div className="absolute inset-0 z-0">
                  <Image
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
                <div className="relative z-10 p-3 sm:p-4">
                  <div
                    className="w-full text-center py-2.5 sm:py-3 px-3 rounded-[10px] text-white text-[13px] sm:text-[15px] font-avenir font-bold shadow-md transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(90deg, #1C4447 0%, #295F63 50%, #1C4447 100%)",
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
              onClick={() => setSearchQuery("")}
              className="px-4 py-2 bg-[#439897] text-white rounded-[6px] text-[14px] font-avenir hover:bg-[#357c7b] transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Bottom Pagination / Next Button */}
        <div className="mt-10 sm:mt-12 flex justify-end items-center">
          <button
            type="button"
            onClick={handleNextPage}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-[4px] bg-[#295F63] hover:bg-[#1C4447] text-white text-[14px] sm:text-[15px] font-avenir font-medium transition-colors shadow-sm cursor-pointer"
          >
            <span>Next</span>
            <span className="text-[16px] leading-none">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
