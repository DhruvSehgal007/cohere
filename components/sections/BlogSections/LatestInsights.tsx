"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import blogImage from "@/assets/images/Blogs/BlogImage.jpg";

interface InsightCard {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
}

const initialInsights: InsightCard[] = [
  {
    id: 1,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: blogImage,
  },
  {
    id: 2,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: blogImage,
  },
  {
    id: 3,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: blogImage,
  },
  {
    id: 4,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: blogImage,
  },
  {
    id: 5,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: blogImage,
  },
  {
    id: 6,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: blogImage,
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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        {/* Section Heading (Figma: Avenir Bold 40px, leading 49px) */}
        <div className="mb-10">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-avenir font-bold text-[#0D1E1E] leading-[1.22] tracking-tight">
            Latest Insights
          </h2>
        </div>

        {/* Stable Cards Grid (Figma: 3 columns, 24px gap, cards 484x550) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {cards.map((card, index) => {
            const isActive =
              hoveredIdx !== null ? hoveredIdx === index : index === 0;

            return (
              <div
                key={`${card.id}-${index}`}
                onMouseEnter={() => setHoveredIdx(index)}
                className={`group relative flex flex-col justify-between w-full max-w-[484px] h-[550px] p-[32px] rounded-[16px] overflow-hidden select-none transition-all duration-500 ease-in-out cursor-pointer shadow-[2px_2px_8px_0px_rgba(0,0,0,0.10)] hover:shadow-[2px_6px_16px_0px_rgba(0,0,0,0.15)] hover:-translate-y-1 animate-fade-in ${isActive ? "bg-[#254f55]" : "bg-white"
                  }`}
              >
                {/* GRADIENT OVERLAY (Active/Hover state: #439897 to #2E262E) */}
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? "opacity-100" : "opacity-0"
                    }`}
                  style={{
                    background:
                      "linear-gradient(180deg, #439897 0%, #2E262E 100%)",
                  }}
                />

                {/* NOISE / TEXTURE OVERLAY */}
                <div
                  className={`pointer-events-none absolute inset-0 mix-blend-overlay transition-opacity duration-500 ease-in-out ${isActive ? "opacity-20" : "opacity-0"
                    }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* CONTENT WRAPPER */}
                <div className="relative z-10 flex flex-col justify-between h-full gap-[24px]">
                  {/* Top Text Block */}
                  <div className="space-y-3">
                    <h3
                      className={`text-lg sm:text-[21px] font-avenir font-bold leading-[1.3] transition-colors duration-500 ${isActive ? "text-white" : "text-[#0D1E1E]"
                        }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-[15px] sm:text-[16px] font-nunito-sans leading-[1.55] transition-colors duration-500 ${isActive ? "text-white/90" : "text-[#5B5B5B]"
                        }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Image Container (Figma: rounded-12px, ~268px height) */}
                  <div className="relative w-full h-[268px] rounded-[12px] overflow-hidden mt-auto flex-shrink-0 isolate [transform:translateZ(0)]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 484px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 transform-gpu will-change-transform"
                      priority={index < 3}
                    />
                  </div>
                </div>
              </div>
            );
          })}
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
