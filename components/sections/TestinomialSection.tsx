
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import columnIcon from "@/assets/images/homepage/column.svg";
import Righticon from "@/assets/images/homepage/Right-icon.svg";
import Lefticon from "@/assets/images/homepage/Left-icon.svg";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
const REPEATS = 9;

const loop = Array.from(
  { length: REPEATS },
  () => testimonials
).flat();

const START = Math.floor(REPEATS / 2) * N;

export default function TestimonialsSection() {
  const [position, setPosition] = useState(START);

  const trackRef = useRef<HTMLDivElement>(null);

  const resetTimeout = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const stepRef = useRef(0);

  const positionRef = useRef(position);

  // ================= MEASURE CARD WIDTH =================
  const measureStep = () => {
    const track = trackRef.current;

    if (!track || !track.children[0]) return;

    const cardEl = track.children[0] as HTMLElement;

    stepRef.current =
      cardEl.getBoundingClientRect().width + GAP;
  };

  // ================= SLIDER TRANSFORM =================
  const applyTransform = (
    pos: number,
    animate: boolean
  ) => {
    const el = trackRef.current;

    if (!el) return;

    const offset = (pos - 1) * stepRef.current;

    el.style.transition = animate
      ? "transform 700ms ease"
      : "none";

    el.style.transform = `translate3d(${-offset}px,0,0)`;
  };

  // ================= SLIDE NAVIGATION =================
  const goTo = (nextPosition: number) => {
    positionRef.current = nextPosition;
    setPosition(nextPosition);

    applyTransform(nextPosition, true);

    if (resetTimeout.current) {
      clearTimeout(resetTimeout.current);
    }

    resetTimeout.current = setTimeout(() => {
      const p = positionRef.current;

      if (Math.abs(p - START) < N) return;

      const safe =
        START + (((p - START) % N) + N) % N;

      positionRef.current = safe;
      setPosition(safe);
      applyTransform(safe, false);
    }, 720);
  };

  // ================= INITIALIZE SLIDER =================
  useEffect(() => {
    measureStep();
    applyTransform(START, false);

    const onResize = () => {
      measureStep();
      applyTransform(positionRef.current, false);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);

      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }
    };
  }, []);

  // ================= AUTO SLIDE =================
  useEffect(() => {
    const id = setInterval(() => {
      goTo(positionRef.current + 1);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  const activeIndex =
    (((position - START) % N) + N) % N;

  return (
    <section className="w-full bg-white pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center rounded-tr-[8px] rounded-br-[8px] bg-[#439897] px-3 py-1.5">
              <span className="font-avenir text-[12px] uppercase tracking-[0.2px] text-white sm:text-[14px]">
                TESTIMONIALS
              </span>
            </div>

            <h2
              className="
                mt-3
                w-full
                font-avenir
                text-[32px]
                font-extrabold
                leading-[1.15]
                text-[#101C1C]
                sm:text-[36px]
                md:mt-4
                md:text-[40px]
                lg:max-w-[590px]
              "
            >
              What Clients Say About Us?
            </h2>
          </div>

          <p
            className="
              w-full
              font-nunito-sans
              text-[16px]
              leading-6
              text-[#5B5B5B]
              sm:leading-7
              md:w-1/2
              md:text-right
              lg:max-w-[500px]
              lg:text-[18px]
            "
          >
            Discover what our clients say about the impact
            of our expertise, support, and practical solutions.
          </p>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative w-full overflow-hidden pt-8">

          <div
            ref={trackRef}
            className="flex items-stretch gap-6"
          >
            {loop.map((t, i) => {
              const isActive = i % N === activeIndex;

              return (
                <div
                  key={i}
                  className={`
                    relative
                    flex
                    h-[430px]
                    w-full
                    shrink-0
                    flex-col
                    rounded-2xl
                    px-6
                    pb-8
                    pt-10
                    transition-colors
                    duration-500

                    sm:h-[450px]
                    sm:px-8

                    min-[600px]:w-[calc(50%-12px)]

                    md:h-[470px]

                    min-[1024px]:w-[calc((100%-48px)/3)]

                    lg:h-[440px]

                    xl:h-[420px]

                    ${
                      isActive
                        ? "bg-[#439897] text-white shadow-2xl"
                        : "bg-white text-[#0D1E1E] shadow-md"
                    }
                  `}
                >

                  {/* ================= QUOTE ICON ================= */}
                  <div className="absolute -top-6 left-6 h-12 w-12">
                    <Image
                      src={columnIcon}
                      alt=""
                      fill
                      aria-hidden="true"
                      className={`
                        object-contain
                        ${
                          isActive
                            ? "brightness-0 opacity-60"
                            : "brightness-0 opacity-30"
                        }
                      `}
                    />
                  </div>

                  {/* ================= STARS ================= */}
                  <div
                    className="
                      mb-5
                      flex
                      items-center
                      gap-[3px]
                      text-[28px]
                      leading-none
                      text-[#FFB800]

                      sm:text-[34px]
                    "
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex}>★</span>
                    ))}
                  </div>

                  {/* ================= TESTIMONIAL TEXT ================= */}
                  <p
                    className={`
                      font-nunito-sans
                      text-[16px]
                      font-normal
                      leading-[1.7]

                      md:text-[17px]
                      lg:text-[16px]
                      xl:text-[18px]

                      ${
                        isActive
                          ? "text-white"
                          : "text-neutral-700"
                      }
                    `}
                  >
                    &quot;{t.quote}&quot;
                  </p>

                  {/* ================= BOTTOM CONTENT ================= */}
                  {/* mt-auto keeps divider and name aligned */}
                  <div className="mt-auto pt-6">

                    {/* DIVIDER */}
                    <div
                      className={`
                        mb-6
                        h-px
                        w-full
                        bg-[#B4D6D5]
                        ${
                          isActive
                            ? "bg-[#B4D6D5]"
                            : "bg-neutral-200"
                        }
                      `}
                    />

                    {/* CLIENT NAME */}
                    <div
                      className={`
                        font-markaziBold
                        text-[20px]
                        text-[#1A243F]
                        font-bold
                        tracking-wide
                        sm:text-[24px]

                         ${
                          isActive
                            ? "text-white"
                            : "text-neutral-500"
                        }
                      `}
                    >
                      {t.name}
                    </div>

                    {/* CLIENT ROLE */}
                    <div
                      className={`
                        font-nunito-sans
                        text-[14px]
                        sm:text-[15px]
                        text-[#1B3D3C]

                        ${
                          isActive
                            ? "text-white/80"
                            : "text-neutral-500"
                        }
                      `}
                    >
                      {t.role}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* ================= SLIDER DOTS ================= */}
          
{/* ================= SLIDER ARROWS + DOTS ================= */}

{/* ================= SLIDER ARROWS + DOTS ================= */}
<div className="mt-12 flex items-center justify-end gap-2">

  {/* LEFT ARROW */}
  <button
    type="button"
    onClick={() => goTo(positionRef.current - 1)}
    aria-label="Previous testimonial"
    className="flex h-[48px] w-[48px] shrink-0 items-center justify-center"
  >
    <Image
      src={Lefticon}
      alt="Previous"
      width={32}
      height={32}
      className="h-full w-full object-contain"
    />
  </button>

  {/* DOTS */}
  <div className="flex items-center gap-1">
    {testimonials.map((_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => goTo(START + i)}
        aria-label={`Go to slide ${i + 1}`}
        aria-current={i === activeIndex ? "true" : undefined}
        className="
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          border
          border-[#0D1E1E]
        "
      >
        {i === activeIndex && (
          <span className="h-3 w-3 rounded-full bg-[#439897]" />
        )}
      </button>
    ))}
  </div>

  {/* RIGHT ARROW */}
  <button
    type="button"
    onClick={() => goTo(positionRef.current + 1)}
    aria-label="Next testimonial"
    className="flex h-[48px] w-[48px] shrink-0 items-center justify-center"
  >
    <Image
      src={Righticon}
      alt="Next"
      width={32}
      height={32}
      className="h-full w-full object-contain"
    />
  </button>

</div>



        </div>
      </div>
    </section>
  );
}
