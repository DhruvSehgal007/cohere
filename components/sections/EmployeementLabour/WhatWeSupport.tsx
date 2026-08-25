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

// Rotation of each petal
const ANGLES = [-76, -45.5, -15, 15.5, 46, 76.5];

const PETAL_WIDTH = 320;
const PETAL_HEIGHT = 600;

// Petal SVG shape
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
      className="
        w-full
        bg-slate-50
        px-4
        pb-32
        pt-8
        md:px-6
        md:pb-48
        md:pt-16
        overflow-x-hidden
      "
    >
      <div className="container-custom">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
  <div className="w-full lg:w-1/2">
    <span className="inline-block rounded bg-[#439897] px-3 py-1 font-avenir text-[12px] text-white sm:px-4 sm:text-[14px]">
      What We Support
    </span>

    <h2
      className="
        mt-3
        w-full
        font-avenir
        text-[22px]
        font-extrabold
        leading-[1.15]
        text-black

        sm:text-[30px]
        md:mt-4
        md:text-[36px]

        lg:max-w-[540px]
        lg:text-[40px]
      "
    >
      Our Areas of Support
    </h2>
  </div>

</div>
        {/* =====================================================
            MOBILE + TABLET
            Visible below 900px
        ====================================================== */}
        <div className="mx-auto block w-full max-w-[1246px] min-[900px]:hidden">
          <div className="space-y-4">
            {ITEMS.map((item, i) => {
              const isActive = i === active;

              return (
                <div
                  key={item.label}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(i)}
                  className={`
                    w-full
                    cursor-pointer
                    rounded-xl
                    border
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "border-teal-600 ring-1 ring-teal-600"
                        : "border-slate-200"
                    }
                  `}
                >
                  {/* HEADER */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`
                        text-base
                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "font-bold text-teal-700"
                            : "font-semibold text-slate-800"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`
                        text-xl
                        font-bold
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "rotate-45 text-teal-700"
                            : "text-slate-400"
                        }
                      `}
                    >
                      +
                    </span>
                  </div>

                  {/* BODY */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ease-in-out

                      ${
                        isActive
                          ? "mt-3 max-h-40 border-t border-slate-100 pt-3 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <p className="text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            DESKTOP
            Visible from 900px
        ====================================================== */}
        <div className="hidden min-[900px]:block mt-8">
          {/* ACTIVE CONTENT CARD */}
          <div
  className="
    w-[435px]
    h-[173px]
    rounded-[16px]
    border
    border-slate-200
    bg-white
    p-[32px]
    shadow-sm

    lg:ml-0

    min-[1350px]:-ml-8
    min-[1450px]:-ml-16
  "
>
  <h2
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
  </h2>

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

          {/* =================================================
              PETAL FAN
          ================================================= */}
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
  {/* Spacer */}
<div
  className="
    h-[540px]
    min-[900px]:max-[1440px]:h-[640px]
  "
/>

  {ITEMS.map((item, i) => {
    const isActive = i === active;
    const angle = ANGLES[i];

    // First three labels rotate clockwise,
    // last three labels rotate counter-clockwise.
    const isFirstThree = i < 3;

    return (
      <button
        key={item.label}
        type="button"
        onClick={() => setSelected(i)}
        aria-pressed={isActive}
        className="
          absolute
          bottom-0
          left-1/2
          cursor-pointer
          outline-none
          focus:outline-none
        "
        style={{
          width: PETAL_WIDTH,
          height: PETAL_HEIGHT,
          transformOrigin: "50% 100%",
          transform: `translateX(-50%) rotate(${angle}deg)`,
          zIndex: isActive ? 20 : 10 + i,
          filter: isActive
            ? "drop-shadow(0 12px 20px rgba(15, 118, 110, 0.25))"
            : "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.05))",
        }}
      >
        {/* PETAL SVG */}
        <svg
          width={PETAL_WIDTH}
          height={PETAL_HEIGHT}
          viewBox="0 0 180 380"
          preserveAspectRatio="none"
          className="block"
        >
          <defs>
  <linearGradient
  id={`petalActiveGradient-${i}`}
  x1="0%"
  y1="0%"
  x2="100%"
  y2="100%"
>
  <stop
    offset="0%"
    stopColor="#2E262E"
  />

  <stop
    offset="100%"
    stopColor="#439897"
  />
</linearGradient>
</defs>

         <path
  d={petalPath(PETAL_WIDTH, PETAL_HEIGHT)}
  fill={
    isActive
      ? `url(#petalActiveGradient-${i})`
      : "#ffffff"
  }
  stroke={
    isActive
      ? "transparent"
      : "#EFEFEF"
  }
  strokeWidth={1.5}
  className="transition-colors duration-300"
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
            font-normal
            tracking-normal

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