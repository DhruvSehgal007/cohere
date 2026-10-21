
"use client";

import { useState } from "react";

const ITEMS = [
  {
    label: "Workplace Policies",
    title: "Workplace Policies",
    description:
      "Helping organisations strengthen workplace policies that encourage respectful behaviour, accountability, and compliance.",
  },
  {
    label: "Internal Committee Advisory",
    title: "Internal Committee Advisory",
    description:
      "Guidance on setting up and running internal committees so cases are handled fairly, consistently, and on time.",
  },
  {
    label: "Workplace Investigations",
    title: "Workplace Investigations",
    description:
      "Structured, impartial investigations into workplace complaints, carried out with sensitivity and due process.",
  },
  {
    label: "Compliance Guidance",
    title: "Compliance Guidance",
    description:
      "Practical advice to keep policies aligned with current labour law and regulatory requirements.",
  },
  {
    label: "Learning & Awareness",
    title: "Learning & Awareness",
    description:
      "Training programmes that build awareness of workplace conduct standards across every level of the organisation.",
  },
  {
    label: "Reporting & Documentation",
    title: "Reporting & Documentation",
    description:
      "Clear, defensible documentation and reporting workflows for every stage of a workplace case.",
  },
];

const ANGLES = [-76, -45.5, -15, 15.5, 46, 76.5];

const PETAL_WIDTH = 320;
const PETAL_HEIGHT = 600;

function petalPath(width: number, height: number) {
  return `
    M 18,20
    Q 90,0 162,20
    Q 178,25 170,42
    L 108,290
    Q 90,310 72,290
    L 10,42
    Q 2,25 18,20
    Z
  `
    .replace(/\s+/g, " ")
    .trim();
}

export default function WhatWeSupport() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const active = hovered !== null ? hovered : selected;
  const activeItem = ITEMS[active];

  return (
   <section
  className={`
    w-full
    overflow-x-hidden
    bg-slate-50
    px-4
    pb-32
    pt-8
    md:px-6
    md:pb-48
    md:pt-16
  `}
>
      <div className="container-custom">
        {/* SECTION HEADING */}
        <div className="mb-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center rounded-tr-[8px] rounded-br-[8px] bg-[#439897] px-3 py-1.5">
                <span className="font-avenir text-[12px] uppercase tracking-[0.2px] text-white sm:text-[14px]">
                  What We Support
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
                  lg:max-w-[600px]
                "
              >
                Our Areas of Support
              </h2>
            </div>
          </div>
        </div>

        {/* MOBILE + TABLET: BELOW 900px */}
        <div className="mx-auto block w-full max-w-[1246px] min-[900px]:hidden">
          <div className="space-y-4">
            {ITEMS.map((item, i) => {
              const isActive = i === active;

              return (
                <div
                  key={item.label}
                  className={`
                    w-full
                    overflow-hidden
                    rounded-xl
                    border
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                      isActive
                        ? "border-[#439897] bg-[#439897] shadow-[0_12px_28px_rgba(67,152,151,0.25)]"
                        : "border-slate-200 bg-white shadow-sm hover:border-[#439897]/60 hover:shadow-md"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelected(i);
                      setHovered(null);
                    }}
                    aria-expanded={isActive}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      p-5
                      text-left
                      outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#FEBC5A]
                      focus-visible:ring-inset
                    "
                  >
                    <span
                      className={`
                        font-avenir
                        text-[16px]
                        font-bold
                        transition-colors
                        duration-500
                        sm:text-[18px]
                        ${
                          isActive
                            ? "text-white"
                            : "text-[#2E262E]"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[24px]
                        leading-none
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "rotate-45 bg-white/20 text-white"
                            : "bg-[#439897]/10 text-[#439897]"
                        }
                      `}
                    >
                      +
                    </span>
                  </button>

                  {/* EXPANDABLE DESCRIPTION */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5">
                        <div
                          className={`
                            mb-3
                            h-px
                            w-full
                            ${
                              isActive
                                ? "bg-white/30"
                                : "bg-slate-200"
                            }
                          `}
                        />

                        <p
                          className={`
                            font-nunito-sans
                            text-[14px]
                            leading-[1.7]
                            transition-colors
                            duration-500
                            sm:text-[16px]
                            ${
                              isActive
                                ? "text-white"
                                : "text-[#5B5B5B]"
                            }
                          `}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP: FROM 900px */}
        <div className="mt-8 hidden min-[900px]:block">
          {/* ACTIVE CONTENT CARD */}
          <div
            className="
              h-[173px]
              w-[435px]
              rounded-[16px]
              border
              border-slate-200
              bg-white
              p-[32px]
              shadow-[0_8px_24px_rgba(0,0,0,0.08)]
              transition-shadow
              duration-500
              lg:ml-0
              min-[1350px]:-ml-8
              min-[1450px]:-ml-16
            "
            aria-live="polite"
          >
            <div
  key={active}
  className="animate-in fade-in slide-in-from-bottom-2 duration-500"
>
              <h3
                className="
                  mb-[10px]
                  font-avenir
                  text-[24px]
                  font-extrabold
                  leading-[1.1]
                  text-[#439897]
                "
              >
                {activeItem.title}
              </h3>

              <p
                className="
                  font-nunito-sans
                  text-[16px]
                  font-normal
                  leading-[26px]
                  tracking-[0.04em]
                  text-[#5B5B5B]
                "
              >
                {activeItem.description}
              </p>
            </div>
          </div>

          {/* PETAL FAN */}
          <div
            className="
              relative
              w-full
              origin-top
              transition-transform
              duration-300
              max-[1024px]:scale-[0.72]
              max-[1246px]:scale-[0.8]
            "
          >
            <div
              className="
                h-[540px]
                min-[900px]:max-[1440px]:h-[640px]
              "
            />

            {ITEMS.map((item, i) => {
              const isActive = i === active;
              const angle = ANGLES[i];
              const isFirstThree = i < 3;

              return (
                <button
                  key={item.label}
                  type="button"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  onClick={() => setSelected(i)}
                  aria-label={item.label}
                  aria-pressed={isActive}
                  className="
                    group
                    absolute
                    bottom-0
                    left-1/2
                    cursor-pointer
                    outline-none
                    transition-[filter]
                    duration-500
                    ease-in-out
                    focus-visible:drop-shadow-[0_0_10px_#FEBC5A]
                  "
                  style={{
                    width: PETAL_WIDTH,
                    height: PETAL_HEIGHT,
                    transformOrigin: "50% 100%",
                    transform: `translateX(-50%) rotate(${angle}deg)`,
                    zIndex: isActive ? 20 : 10 + i,
                    filter: isActive
                      ? "drop-shadow(0 18px 24px rgba(15,118,110,0.32))"
                      : "drop-shadow(0 8px 16px rgba(0,0,0,0.05))",
                  }}
                >
                  {/* PETAL SVG */}
                  <svg
                    width={PETAL_WIDTH}
                    height={PETAL_HEIGHT}
                    viewBox="0 0 180 380"
                    preserveAspectRatio="none"
                    className="block"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id={`petalActiveGradient-${i}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#2E262E" />
                        <stop offset="100%" stopColor="#439897" />
                      </linearGradient>
                    </defs>

                    {/* BASE WHITE PETAL */}
                    <path
                      d={petalPath(PETAL_WIDTH, PETAL_HEIGHT)}
                      fill="#FFFFFF"
                      stroke="#EFEFEF"
                      strokeWidth={1.5}
                    />

                    {/* GRADIENT LAYER */}
                    <path
                      d={petalPath(PETAL_WIDTH, PETAL_HEIGHT)}
                      fill={`url(#petalActiveGradient-${i})`}
                      stroke="transparent"
                      className="transition-opacity duration-500 ease-in-out"
                      style={{
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                  </svg>

                  {/* PETAL LABEL */}
                  <span
                    className={`
                      pointer-events-none
                      absolute
                      left-1/2
                      select-none
                      whitespace-nowrap
                      text-center
                      font-avenir
                      font-bold
                      tracking-normal
                      transition-[color,font-size]
                      duration-500
                      ease-in-out
                      ${
                        isActive
                          ? "text-[28px] text-white"
                          : "text-[24px] text-black"
                      }
                    `}
                    style={
                      isFirstThree
                        ? {
                            top: "40%",
                            transform:
                              "translate(-50%, -50%) rotate(90deg)",
                          }
                        : {
                            top: "40%",
                            transform:
                              "translate(-50%, -50%) rotate(-90deg)",
                          }
                    }
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      
    </section>
  );
}
