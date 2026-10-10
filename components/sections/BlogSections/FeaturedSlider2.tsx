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
    link: "/Blog/preparing-for-maharashtras-new-posh-inspection-framework",
  },
  {
    id: 2,
    title: "Key Compliance Checklists for Internal Committees (IC)",
    description:
      "Essential audit points, documentation standards, and reporting protocols every employer needs to verify prior to government authority visits.",
    link: "/Blog/key-compliance-checklists-for-internal-committees",
  },
  {
    id: 3,
    title: "Navigating Annual PoSH Filings & Statutory Inquiries",
    description:
      "A comprehensive roadmap on submitting district officer reports, managing inquiries confidentially, and adhering strictly to legal mandates.",
    link: "/Blog/navigating-annual-posh-filings-statutory-inquiries",
  },
  {
    id: 4,
    title: "Workplace Discrimination & Legal Safeguards 2026",
    description:
      "Understanding corporate liability, protective provisions, and employer defense mechanisms under modern labor statutes.",
    link: "/Blog/workplace-discrimination-legal-safeguards-2026",
  },
  {
    id: 5,
    title: "Trauma-Informed Inquiry Guidelines for IC Members",
    description:
      "Best practices for conducting sensitive interviews, preserving psychological safety, and ensuring unbiased findings.",
    link: "/Blog/trauma-informed-inquiry-guidelines-for-ic-members",
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

export default function FeaturedSlider2() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Start with middle set's first article (id: 1)
  const initialIndex = featuredArticles.length * 2;
  const [closestIdx, setClosestIdx] = useState(initialIndex);

  // Hover and pause state
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

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

  const animRef = useRef<number | null>(null);

  // High-performance smooth scroll to target card with exact timing (< 450ms)
  const scrollToCard = useCallback(
    (index: number, duration = 450) => {
      if (!sliderRef.current) return;
      let targetIndex = index;
      if (targetIndex >= allArticles.length) {
        targetIndex = initialIndex;
      } else if (targetIndex < 0) {
        targetIndex = initialIndex;
      }
      const targetCard = cardRefs.current[targetIndex];
      if (!targetCard) return;

      const container = sliderRef.current;
      const startLeft = container.scrollLeft;
      const targetLeft = targetCard.offsetLeft - container.offsetLeft;
      const distance = targetLeft - startLeft;

      if (Math.abs(distance) < 1) return;

      if (animRef.current !== null) {
        cancelAnimationFrame(animRef.current);
      }

      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Fast start with silky smooth cubic ease-out landing
        const ease = 1 - Math.pow(1 - progress, 3);

        container.scrollLeft = startLeft + distance * ease;

        if (progress < 1) {
          animRef.current = requestAnimationFrame(step);
        } else {
          container.scrollLeft = targetLeft;
          animRef.current = null;
          updateActiveCard();
          normalizeScroll();
        }
      };

      animRef.current = requestAnimationFrame(step);
    },
    [initialIndex, updateActiveCard, normalizeScroll]
  );

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animRef.current !== null) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, []);

  // Automatic sliding interval: pauses on hover, drag, or tab switch
  useEffect(() => {
    if (isPaused || isMouseDown || isDragging || hoveredIdx !== null) return;

    const interval = setInterval(() => {
      scrollToCard(closestIdx + 1, 450);
    }, 1500);

    return () => clearInterval(interval);
  }, [closestIdx, isPaused, isMouseDown, isDragging, hoveredIdx, scrollToCard]);

  // Pause when the browser tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
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
    <section className="pt-4 md:pt-6 pb-8 md:pb-12 bg-white w-full overflow-hidden">
      {/* Featured Article Section Header inside container */}
      <div className="container-custom">
        <div className="mb-8">
          <div className="inline-flex items-center bg-[#439897] text-white text-[14px] font-avenir font-normal uppercase pl-[6px] pr-[10px] py-[1px] h-[27px] rounded-r-[5px] rounded-l-none shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">
            BLOG
          </div>
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-avenir font-bold text-[#0D1E1E] leading-[1.22] mt-[15px]">
            Featured Article (Full Width)
          </h2>
        </div>
      </div>

      {/* Full Width Infinite Hand Slider Track without side spacing */}
      <div className="w-full">
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            handleMouseUpOrLeave();
            setIsPaused(false);
            setHoveredIdx(null);
          }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setIsPaused(false);
            normalizeScroll();
          }}
          className={`flex gap-6 overflow-x-auto py-2 select-none w-full ${
            isMouseDown ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {allArticles.map((article, idx) => {
            // Whichever card is hovered is active (yellow); otherwise, the front/closest card is active
            const isActive =
              hoveredIdx !== null ? hoveredIdx === idx : closestIdx === idx;

            return (
              <div
                key={article.uniqueId}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setHoveredIdx(null);
                }}
                onClick={() => {
                  if (!isDragging) {
                    scrollToCard(idx);
                  }
                }}
                className={`snap-start flex-none w-[88vw] sm:w-[520px] md:w-[611px] h-[336px] flex flex-col justify-between p-[32px] rounded-[12px] border select-none transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#FEBC5A] border-[#F9A426] shadow-sm -translate-y-0.5"
                    : "bg-white border-[#EFEFEF] shadow-xs hover:border-[#FEBC5A]/40"
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
