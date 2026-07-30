"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import columnIcon from "@/assets/images/homepage/column.svg";

const testimonials = [
  {
    quote:
      "What we liked best about Devika and her team was that they were thorough, detail-oriented & highly ethical. They also provided us with very practical advise on how to deal with complex situations in our workplace.",
    name: "FEEDBACK INFRA",
    role: "VP Operations",
  },
  {
    quote:
      "Their strategic guidance transformed how we approach workplace culture. Thorough, insightful and always available when we needed a trusted partner to navigate difficult decisions.",
    name: "NORTHWIND CO.",
    role: "Head of HR",
  },
  {
    quote:
      "A rare blend of empathy and rigor. The team delivered practical frameworks that our leadership still uses today to resolve complex people challenges.",
    name: "ACME LOGISTICS",
    role: "Director, People",
  },
  {
    quote:
      "Professional, ethical and deeply knowledgeable. They helped us build policies that scaled with the business without losing our human-first values.",
    name: "BLUEHARBOR",
    role: "COO",
  },
  {
    quote:
      "The clarity and structure they brought to our review process was outstanding. We saw measurable improvement in team engagement within a quarter.",
    name: "LUMEN GROUP",
    role: "VP Talent",
  },
];

const N = testimonials.length;
const CARD_WIDTH = 468;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;
const REPEATS = 9; // big buffer so we can keep sliding forward for a long time
const loop = Array.from({ length: REPEATS }, () => testimonials).flat();
const START = Math.floor(REPEATS / 2) * N; // start in the middle repeat

export default function TestimonialsSection() {
  // `position` only ever counts forward/backward — never wraps.
  // The visible card is always loop[position], and its neighbors are
  // loop[position - 1] / loop[position + 1].
  const [position, setPosition] = useState(START);
//   const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applyTransform = (pos: number, animate: boolean) => {
    const el = trackRef.current;
    if (!el) return;
    // pos-1 is the left visible slot, so translate so that slot sits at x=0
    const offset = (pos - 1) * STEP;
    el.style.transition = animate ? "transform 700ms ease" : "none";
    el.style.transform = `translate3d(${-offset}px,0,0)`;
  };

  const goTo = (nextPosition: number) => {
    setPosition(nextPosition);
    applyTransform(nextPosition, true);

    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => {
      // once we've drifted a full set away from START, silently snap back
      // by a whole multiple of N (same content, same visual position)
      setPosition((p) => {
        if (Math.abs(p - START) < N) return p;
        const safe = START + (((p - START) % N) + N) % N;
        applyTransform(safe, false);
        return safe;
      });
    }, 720);
  };

  const positionRef = useRef(position);
  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    applyTransform(START, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//   auto-advance forever, one card at a time, every 4s
//   useEffect(() => {
//     if (paused) return;
//     const id = setInterval(() => {
//       goTo(positionRef.current + 1);
//     }, 3000);
//     return () => clearInterval(id);
//   }, [paused]);
useEffect(() => {
  const id = setInterval(() => {
    goTo(positionRef.current + 1);
  }, 2000);
  return () => clearInterval(id);
}, []);

  const next = () => goTo(position + 1);
  const prev = () => goTo(position - 1);
  const activeIndex = (((position - START) % N) + N) % N;

  return (
    <section
      className="w-full bg-white "
    //   onMouseEnter={() => setPaused(true)}
    //   onMouseLeave={() => setPaused(false)}
    >
      <div className="container-custom px-6 py-16">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
           <span className="inline-block w-auto md:w-[150px] bg-[#439897] text-white font-avenir font-normal text-[14px] px-3 py-1 rounded text-left">
  TESTINOMIALS
</span>
            <h2 className="font-avenir font-extrabold text-[40px] leading-tight text-[#0D1E1E] mt-4 max-w-[590px]">
              What Clients Say About Us?
            </h2>
          </div>
          <p className="font-nunito-sans font-normal text-[20px] text-[#5B5B5B] max-w-[500px] ml-auto text-right">
            Discover what our clients say about the impact of our expertise,
            support, and practical solutions.
          </p>
        </div>

        

        {/* Slider */}
        {/* <div
          className="relative overflow-hidden pt-8 mx-auto"
          style={{ width: `${CARD_WIDTH * 3 + GAP * 2}px` }}
        > */}
             <div
          className="relative overflow-hidden pt-8 "
          
        >
          <div ref={trackRef} className="flex gap-6 w-max">
            {loop.map((t, i) => {
            //   const isActive = i === position;
            const isActive = i % N === activeIndex;
              return (
                <div
                  key={i}
                  style={{ width: `${CARD_WIDTH}px` }}
                  className={`relative shrink-0 rounded-2xl p-8 pt-10 transition-colors duration-500 ${
                    isActive
                      ? "bg-[#439897] text-white shadow-2xl"
                      : "bg-white text-[#0D1E1E] shadow-md"
                  }`}
                >
                  {/* Quote icon - top left, partially outside the card */}
                  <div className="absolute -top-6 left-6 w-12 h-12">
                    <Image
                      src={columnIcon}
                      alt=""
                      fill
                      className={`object-contain ${
                        isActive ? "brightness-0" : "brightness-0 opacity-30"
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mb-4 text-lg text-yellow-400 tracking-widest">
                    ★★★★★
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isActive ? "text-white" : "text-neutral-700"
                    }`}
                  >
                    &quot;{t.quote}&quot;
                  </p>

                  <div
                    className={`my-6 h-px w-full ${
                      isActive ? "bg-white/30" : "bg-neutral-200"
                    }`}
                  />

                  <div>
                    <div className="text-sm font-bold tracking-wide">
                      {t.name}
                    </div>
                    <div
                      className={`text-xs ${
                        isActive ? "text-white/80" : "text-neutral-500"
                      }`}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-end">
            {/* <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0D1E1E] text-[#0D1E1E] transition hover:bg-[#0D1E1E] hover:text-white"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0D1E1E] text-[#0D1E1E] transition hover:bg-[#0D1E1E] hover:text-white"
              >
                ›
              </button>
            </div> */}
            <div className="mt-12 flex items-center justify-end gap-1">
  {testimonials.map((_, i) => (
    <button
  key={i}
  onClick={() => goTo(START + i)}
  aria-label={`Go to slide ${i + 1}`}
  className="h-5 w-5 rounded-full border-1 border-[#0D1E1E] flex items-center justify-center
  
  
  
  
  
  
  
  
  "
>
  {i === activeIndex && (
    <span className="h-3 w-3 rounded-full bg-[#439897]" />
  )}
</button>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
}