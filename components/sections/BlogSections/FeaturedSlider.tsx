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

  // Duplicated list for continuous infinite seamless scrolling
  const allArticles = [
    ...featuredArticles,
    ...featuredArticles,
    ...featuredArticles,
    ...featuredArticles,
  ];

  return (
    <section className="pt-28 md:pt-36 pb-8 md:pb-12 bg-white">
      <div className="container-custom">
        {/* Top Header Badge & Title */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-[12px] font-avenir font-bold tracking-wider uppercase rounded bg-[#439897] text-white">
            BLOG
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-avenir font-bold text-[#0D1E1E] tracking-tight mt-3">
            Featured Article
          </h2>
        </div>

        {/* Auto Scrolling Track (Inside container-custom, NO manual scrollbar, pauses on hover) */}
        <div
          className="w-full overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
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
            {allArticles.map((article, idx) => (
              <div
                key={`${article.id}-${idx}`}
                className="flex-none w-[320px] sm:w-[400px] md:w-[460px] flex flex-col justify-between rounded-2xl p-7 select-none transition-all duration-300 transform group cursor-pointer bg-white border border-gray-200/80 text-gray-900 shadow-xs hover:bg-[#f5a647] hover:border-[#f5a647] hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-avenir font-bold leading-snug text-black transition-colors duration-300 group-hover:text-gray-950">
                    {article.title}
                  </h3>
                  <p className="text-sm font-nunito-sans leading-relaxed text-[#5B5B5B] transition-colors duration-300 group-hover:text-gray-900">
                    {article.description}
                  </p>
                </div>

                <div className="pt-6 mt-auto">
                  <Link
                    href={article.link}
                    className="inline-flex items-center gap-1.5 text-sm font-avenir font-bold text-[#439897] transition-all duration-300 group-hover:text-gray-950 group-hover:underline"
                  >
                    Read Article
                    <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
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
