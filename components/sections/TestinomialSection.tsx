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
const GAP = 24;
const REPEATS = 9; // big buffer so we can keep sliding forward for a long time
const loop = Array.from({ length: REPEATS }, () => testimonials).flat();
const START = Math.floor(REPEATS / 2) * N; // start in the middle repeat

export default function TestimonialsSection() {
  const [position, setPosition] = useState(START);
  const trackRef = useRef<HTMLDivElement>(null);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepRef = useRef(0); // measured card width + gap, updates per breakpoint

  const measureStep = () => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const cardEl = track.children[0] as HTMLElement;
    stepRef.current = cardEl.getBoundingClientRect().width + GAP;
  };

  const applyTransform = (pos: number, animate: boolean) => {
    const el = trackRef.current;
    if (!el) return;
    const offset = (pos - 1) * stepRef.current;
    el.style.transition = animate ? "transform 700ms ease" : "none";
    el.style.transform = `translate3d(${-offset}px,0,0)`;
  };

  const goTo = (nextPosition: number) => {
    setPosition(nextPosition);
    applyTransform(nextPosition, true);

    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => {
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
    measureStep();
    applyTransform(START, false);

    const onResize = () => {
      measureStep();
      applyTransform(positionRef.current, false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      goTo(positionRef.current + 1);
    }, 4000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeIndex = (((position - START) % N) + N) % N;

  return (
    <section className="w-full bg-white">
      <div className="container-custom px-6 py-16">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block w-auto md:w-[150px] bg-[#439897] text-white font-avenir font-normal text-[14px] px-3 py-1 rounded text-left">
              TESTIMONIALS
            </span>
            <h2 className="font-avenir font-extrabold text-[40px] leading-tight text-[#0D1E1E] mt-4 max-w-[590px]">
              What Clients Say About Us?
            </h2>
          </div>
          <p className="font-nunito-sans font-normal text-[20px] text-[#2E262E] max-w-[500px] ml-auto text-right">
            Discover what our clients say about the impact of our expertise,
            support, and practical solutions.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden pt-8 w-full">
          <div ref={trackRef} className="flex gap-6">
            {loop.map((t, i) => {
              const isActive = i % N === activeIndex;
              return (
                <div
                  key={i}
                  className={`relative shrink-0 rounded-2xl p-8 pt-10 transition-colors duration-500 w-full min-[600px]:w-[calc(50%-12px)] min-[1024px]:w-[calc((100%-48px)/3)] ${
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

          {/* Dots */}
          <div className="mt-12 flex items-center justify-end gap-1">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(START + i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-5 w-5 rounded-full border border-[#0D1E1E] flex items-center justify-center"
              >
                {i === activeIndex && (
                  <span className="h-3 w-3 rounded-full bg-[#439897]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}