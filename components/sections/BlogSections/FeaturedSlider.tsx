"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FeaturedArticle {
  id: number;
  title: string;
  description: string;
  link: string;
}

const featuredArticles: FeaturedArticle[] = [
  {
    id: 1,
    title: "Preparing for Maharashtra's New PoSH Inspection Framework",
    description:
      "Stay informed about the latest inspection requirements, compliance expectations, and practical steps organisations can take to prepare for workplace inspections under the PoSH Act.",
    link: "#",
  },
  {
    id: 2,
    title: "Key Compliance Checklists for Internal Committees (IC)",
    description:
      "Essential audit points, documentation standards, and reporting protocols every employer needs to verify prior to government authority visits.",
    link: "#",
  },
  {
    id: 3,
    title: "Navigating Annual PoSH Filings & Statutory Inquiries",
    description:
      "A comprehensive roadmap on submitting district officer reports, managing inquiries confidentially, and adhering strictly to legal mandates.",
    link: "#",
  },
  {
    id: 4,
    title: "Workplace Discrimination & Legal Safeguards 2026",
    description:
      "Understanding corporate liability, protective provisions, and employer defense mechanisms under modern labor statutes.",
    link: "#",
  },
  {
    id: 5,
    title: "Trauma-Informed Inquiry Guidelines for IC Members",
    description:
      "Best practices for conducting sensitive interviews, preserving psychological safety, and ensuring unbiased findings.",
    link: "#",
  },
];

export default function FeaturedSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Duplicated list for continuous infinite seamless scrolling
  const allArticles = [
    ...featuredArticles,
    ...featuredArticles,
    ...featuredArticles,
    ...featuredArticles,
  ];

  return (
    <section className="pt-4 md:pt-6 pb-8 md:pb-12 bg-white">
      <div className="container-custom">
        {/* Featured Article Section Header (Figma Frame 374) */}
        <div className="mb-10">
          <div className="inline-flex items-center bg-[#439897] text-white text-[14px] font-avenir font-normal uppercase pl-[6px] pr-[10px] py-[1px] h-[27px] rounded-r-[5px] rounded-l-none shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">
            BLOG
          </div>
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-avenir font-bold text-[#0D1E1E] leading-[1.22] mt-[15px]">
            Featured Article
          </h2>
        </div>

        {/* Auto Scrolling Track (Inside container-custom, pauses on hover) */}
        <div
          className="w-full overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIdx(null);
          }}
        >
          <div
            className={`flex gap-6 w-max py-4 transition-all ${
              isPaused ? "pause-marquee" : ""
            }`}
            style={{
              animation: "blogMarquee 35s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              willChange: "transform",
            }}
          >
            {allArticles.map((article, idx) => {
              // Default first card highlighted unless hovered
              const isActive =
                hoveredIdx !== null ? hoveredIdx === idx : idx === 0;

              return (
                <div
                  key={`${article.id}-${idx}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`flex-none w-[88vw] sm:w-[520px] md:w-[611px] h-[336px] flex flex-col justify-between p-[32px] rounded-[12px] border select-none transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#FEBC5A] border-[#F9A426] shadow-sm"
                      : "bg-white border-[#EFEFEF] hover:bg-[#FEBC5A] hover:border-[#F9A426] shadow-xs"
                  }`}
                >
                  {/* Top content block with gap */}
                  <div className="space-y-3.5">
                    <h3
                      className={`text-lg sm:text-[21px] font-avenir font-bold leading-snug transition-colors duration-200 ${
                        isActive ? "text-[#0D1E1E]" : "text-black"
                      }`}
                    >
                      {article.title}
                    </h3>
                    <p
                      className={`text-[15px] sm:text-[16px] font-nunito-sans leading-relaxed transition-colors duration-200 ${
                        isActive ? "text-[#2D3748]" : "text-[#5B5B5B]"
                      }`}
                    >
                      {article.description}
                    </p>
                  </div>

                  {/* Bottom link separated by Frame 544's vertical gap */}
                  <div className="pt-4 mt-auto">
                    <Link
                      href={article.link}
                      className={`inline-flex items-center gap-1.5 text-[15px] font-avenir font-bold transition-colors duration-200 group ${
                        isActive ? "text-[#0D1E1E]" : "text-[#439897]"
                      }`}
                    >
                      Read Article
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS Keyframes for smooth infinite animation */}
      <style jsx>{`
        @keyframes blogMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .pause-marquee {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
