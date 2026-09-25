"use client";

import React, { useState } from "react";
import Image from "next/image";

interface InsightCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const initialInsights: InsightCard[] = [
  {
    id: 1,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: "/images/posh-inspection.jpg",
  },
  {
    id: 2,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: "/images/posh-inspection.jpg",
  },
  {
    id: 3,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: "/images/posh-inspection.jpg",
  },
  {
    id: 4,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: "/images/posh-inspection.jpg",
  },
  {
    id: 5,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: "/images/posh-inspection.jpg",
  },
  {
    id: 6,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: "/images/posh-inspection.jpg",
  },
];

const additionalInsights: InsightCard[] = [
  {
    id: 7,
    title: "Audit Protocols for Workplace Safety Committees",
    description:
      "Key metrics, evidence collection procedures, and statutory records required during mandatory regulatory investigations.",
    image: "/images/posh-inspection.jpg",
  },
  {
    id: 8,
    title: "Best Practices for Documentation & Annual Filings",
    description:
      "A step-by-step roadmap to compiling case registers, conducting sensitization sessions, and filing returns seamlessly.",
    image: "/images/posh-inspection.jpg",
  },
  {
    id: 9,
    title: "Legal Liabilities & Non-Compliance Penalties",
    description:
      "Detailed review of business exposure, judicial precedents, and preventive governance frameworks under the PoSH mandate.",
    image: "/images/posh-inspection.jpg",
  },
];

export default function LatestInsights() {
  const [cards, setCards] = useState<InsightCard[]>(initialInsights);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasLoadedAll, setHasLoadedAll] = useState(false);

  const handleViewMore = () => {
    if (hasLoadedAll) return;
    setIsLoadingMore(true);

    // Simulate realistic smooth loading
    setTimeout(() => {
      setCards((prev) => [...prev, ...additionalInsights]);
      setIsLoadingMore(false);
      setHasLoadedAll(true);
    }, 450);
  };

  return (
    <section className="py-10 md:py-16">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Latest Insights
          </h2>
        </div>

        {/* Stable Cards Grid with IntroSection Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] border border-[#EFEFEF] bg-white p-6 shadow-[0_6px_14px_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out cursor-pointer hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 animate-fade-in"
            >
              {/* GRADIENT OVERLAY ON HOVER (Exact match with IntroSection) */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(180deg, #439897 0%, #2E262E 100%)",
                }}
              />

              {/* NOISE / TEXTURE / BLURRY VOLUME OVERLAY ON HOVER */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 ease-in-out group-hover:opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* CONTENT WRAPPER (Keeps elements above absolute overlays) */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="space-y-3.5 mb-6">
                  <h3 className="text-lg font-nunito-sans-bold leading-snug text-black transition-colors duration-500 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm font-nunito-sans leading-relaxed text-[#5B5B5B] transition-colors duration-500 group-hover:text-white/90">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Image Container */}
                <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden mt-auto bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index < 3}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button Section */}
        <div className="mt-12 md:mt-16 flex flex-col items-center justify-center gap-3">
          {!hasLoadedAll ? (
            <button
              onClick={handleViewMore}
              disabled={isLoadingMore}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm text-gray-900 bg-white border border-gray-300/90 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md active:scale-98 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoadingMore ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin text-[#254f55]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  <span>Loading More Insights...</span>
                </>
              ) : (
                <>
                  <span>View More</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          ) : (
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                All {cards.length} Insights Loaded
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
