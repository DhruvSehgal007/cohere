"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
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

// 5 sets to create a seamless infinite loop in both directions
const SETS_COUNT = 5;
const allArticles = Array.from({ length: SETS_COUNT }).flatMap((_, setIdx) =>
  featuredArticles.map((article, articleIdx) => ({
    ...article,
    uniqueId: `set-${setIdx}-item-${article.id}`,
    originalIndex: articleIdx,
  }))
);

export default function FeaturedSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Start with middle set's first article (id: 1)
  const initialIndex = featuredArticles.length * 2;
  const [closestIdx, setClosestIdx] = useState(initialIndex);

  // Dragging state
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Calculate which card is currently at the start (left edge) of the viewport
  const updateActiveCard = useCallback(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const containerLeft = container.scrollLeft;

    let minDiff = Infinity;
    let bestIdx = initialIndex;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardLeft = card.offsetLeft - container.offsetLeft;
      const diff = Math.abs(cardLeft - containerLeft);
      if (diff < minDiff) {
        minDiff = diff;
        bestIdx = idx;
      }
    });

    setClosestIdx(bestIdx);
  }, [initialIndex]);

  // Seamlessly keep the slider centered in the middle sets so it never ends
  const normalizeScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card0 = cardRefs.current[0];
    const cardSet1 = cardRefs.current[featuredArticles.length];
    if (!card0 || !cardSet1) return;

    const setWidth = cardSet1.offsetLeft - card0.offsetLeft;
    if (setWidth <= 0) return;

    const set2Start = setWidth * 2;
    const set3Start = setWidth * 3;

    if (container.scrollLeft >= set3Start) {
      container.scrollLeft -= setWidth;
      updateActiveCard();
    } else if (container.scrollLeft < set2Start) {
      container.scrollLeft += setWidth;
      updateActiveCard();
    }
  }, [updateActiveCard]);

  // Mount setup: center into middle set
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const initialCard = cardRefs.current[initialIndex];
    if (initialCard) {
      container.scrollLeft = initialCard.offsetLeft - container.offsetLeft;
      setClosestIdx(initialIndex);
    }
  }, [initialIndex]);

  // Scroll listener for real-time active card tracking and loop normalization
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      updateActiveCard();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        normalizeScroll();
      }, 150);
    };

    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      normalizeScroll();
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("scrollend", handleScrollEnd);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("scrollend", handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, [updateActiveCard, normalizeScroll]);

  // Smooth scroll to target card
  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;
    const targetCard = cardRefs.current[index];
    if (targetCard) {
      const targetLeft = targetCard.offsetLeft - sliderRef.current.offsetLeft;
      sliderRef.current.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    scrollToCard(closestIdx - 1);
  };

  const handleNext = () => {
    scrollToCard(closestIdx + 1);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setIsDragging(false);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 4) {
      setIsDragging(true);
    }
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isMouseDown) {
      setIsMouseDown(false);
      normalizeScroll();
      setTimeout(() => {
        setIsDragging(false);
      }, 60);
    }
  };

  return (
    <section className="pt-4 md:pt-6 pb-8 md:pb-12 bg-white">
      <div className="container-custom">
        {/* Featured Article Section Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center bg-[#439897] text-white text-[14px] font-avenir font-normal uppercase pl-[6px] pr-[10px] py-[1px] h-[27px] rounded-r-[5px] rounded-l-none shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">
              BLOG
            </div>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-avenir font-bold text-[#0D1E1E] leading-[1.22] mt-[15px]">
              Featured Article
            </h2>
          </div>

          {/* Infinite Slider Navigation Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous article"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-[#439897] hover:text-[#439897] hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next article"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-[#439897] hover:text-[#439897] hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Infinite Hand Slider Track */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-6 overflow-x-auto py-2 select-none ${
            isMouseDown
              ? "cursor-grabbing snap-none"
              : "cursor-grab snap-x snap-mandatory"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {allArticles.map((article, idx) => {
            // Whichever card is at the start of the slider is active in yellow
            const isActive = closestIdx === idx;

            return (
              <div
                key={article.uniqueId}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => {
                  if (!isDragging) {
                    scrollToCard(idx);
                  }
                }}
                className={`snap-start flex-none w-[88vw] sm:w-[520px] md:w-[611px] h-[336px] flex flex-col justify-between p-[32px] rounded-[12px] border select-none transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#FEBC5A] border-[#F9A426] shadow-sm"
                    : "bg-white border-[#EFEFEF] shadow-xs"
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
                    onClick={(e) => {
                      if (isDragging) {
                        e.preventDefault();
                      }
                    }}
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
    </section>
  );
}
