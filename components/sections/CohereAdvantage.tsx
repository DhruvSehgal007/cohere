
"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import legalExpertise from "@/assets/images/homepage/legal-expertise.svg";

const cards = [
  {
    title: "Legal Expertise",
    closedTitle: "Legal Expertise",
    description:
      "Advocates and workplace law specialists with over two decades of experience.",
    bg: "#439897",
  },
  {
    title: "Investigation First",
    closedTitle: "Investigation First",
    description:
      "Advocates and workplace law specialists with over two decades of experience.",
    bg: "#69ADAC",
  },
  {
    title: "Built Around Natural Justice",
    closedTitle: "Built Around|Natural Justice",
    description:
      "Advocates and workplace law specialists with over two decades of experience.",
    bg: "#8EC1C1",
  },
  {
    title: "Beyond Compliance",
    closedTitle: "Beyond Compliance",
    description:
      "Advocates and workplace law specialists with over two decades of experience.",
    bg: "#B4D6D5",
  },
  {
    title: "Technology Enabled",
    closedTitle: "Technology Enabled",
    description:
      "Advocates and workplace law specialists with over two decades of experience.",
    bg: "#C7E0E0",
  },
  {
    title: "Trusted Advisors",
    closedTitle: "Trusted Advisors",
    description:
      "Advocates and workplace law specialists with over two decades of experience.",
    bg: "#D9EAEA",
  },
];

export default function CohereAdvantage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white pb-16 sm:pb-16 md:pb-20 lg:pb-24">

      {/* ================= SECTION HEADING ================= */}
      <div className="container-custom mb-10 px-4 sm:px-6 lg:mb-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center rounded-tr-[8px] rounded-br-[8px] bg-[#439897] px-3 py-1.5">
              <span className="font-avenir text-[12px] uppercase tracking-[0.2px] text-white sm:text-[14px]">
                THE COHERE ADVANTAGE
              </span>
            </div>

            <h2
              className="
                mt-3
                w-full
                font-avenir
                font-extrabold
                leading-[1.15]
                text-[#101C1C]
                text-[28px]
                sm:text-[34px]
                md:mt-4
                md:text-[36px]
                lg:max-w-[560px]
                lg:text-[40px]
              "
            >
              Everything You Need to Build a Better Workplace
            </h2>
          </div>

          <p
            className="
              w-full
              font-nunito-sans
              text-[16px]
              leading-[1.6]
              text-[#5B5B5B]
              md:w-1/2
              md:text-right
              lg:max-w-[524px]
              lg:text-[18px]
            "
          >
            From legal guidance and workplace investigations to compliance
            technology and trusted advisory services, we provide the
            expertise organizations rely on at every stage.
          </p>

        </div>
      </div>

      {/* ================= MOBILE ACCORDION ================= */}
      {/* Mobile and smaller tablets: below 768px */}

      <div className="container-custom px-4 sm:px-6 md:hidden">
        <div className="flex flex-col gap-4">

          {cards.map((card, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={card.title}
                className="
                  overflow-hidden
                  rounded-[14px]
                  transition-colors
                  duration-500
                "
                style={{
                  backgroundColor: isActive ? "#439897" : card.bg,
                }}
              >
                {/* ACCORDION HEADER */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isActive ? -1 : i)
                  }
                  aria-expanded={isActive}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-5
                    py-5
                    text-left
                    sm:px-6
                  "
                >
                  <h3
                    className={`
                      font-avenir
                      font-extrabold
                      text-[20px]
                      leading-[1.2]
                      transition-colors
                      duration-300
                      sm:text-[24px]
                      ${
                        isActive
                          ? "text-white"
                          : "text-[#2E262E]"
                      }
                    `}
                  >
                    {card.title}
                  </h3>

                  <span
                    className={`
                      shrink-0
                      text-[28px]
                      leading-none
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-[#2E262E]"
                      }
                    `}
                  >
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {/* ACCORDION CONTENT */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6">
                      <div
                        className="
                          flex
                          flex-col
                          items-center
                          gap-5
                          min-[480px]:flex-row
                          min-[480px]:items-center
                          min-[480px]:gap-6
                        "
                      >
                        {/* MOBILE IMAGE */}
                        <div
                          className="
                            relative
                            h-[170px]
                            w-[170px]
                            shrink-0
                            sm:h-[200px]
                            sm:w-[200px]
                          "
                        >
                          <Image
                            src={legalExpertise}
                            alt={card.title}
                            fill
                            className="object-contain"
                            sizes="200px"
                          />
                        </div>

                        {/* MOBILE DESCRIPTION */}
                        <p
                          className="
                            w-full
                            font-avenir
                            text-[15px]
                            font-normal
                            leading-[1.5]
                            text-white
                            text-center
                            min-[480px]:text-left
                            sm:text-[16px]
                          "
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* ================= TABLET / LAPTOP / DESKTOP ================= */}
      {/* Accordion starts from 768px */}

      <div className="container-custom hidden px-4 sm:px-6 md:block">

        <div
          className="
            flex
            h-[340px]
            w-full
            gap-2

            lg:h-[380px]
            lg:gap-3

            xl:h-[420px]
            xl:gap-4
          "
        >
          {cards.map((card, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={card.title}
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                style={{
                  backgroundColor: isActive
                    ? "#439897"
                    : card.bg,
                }}
                className={`
                  relative
                  min-w-0
                  cursor-pointer
                  overflow-hidden
                  rounded-[12px]
                  border
                  border-[#2E262E]/20
                  transition-[flex-grow,flex-basis,background-color]
                  duration-[700ms]
                  ease-[cubic-bezier(0.4,0,0.2,1)]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#439897]

                  ${
                    isActive
                      ? "flex-[6]"
                      : "flex-[1]"
                  }
                `}
              >

                {/* ================= EXPANDED CONTENT ================= */}
                <div
                  className={`
                    absolute
                    inset-0
                    flex
                    items-center
                    transition-opacity
                    duration-500

                    ${
                      isActive
                        ? "opacity-100 delay-200"
                        : "pointer-events-none opacity-0"
                    }
                  `}
                >
                  {/* TEXT CONTENT */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      w-[58%]
                      flex-col
                      justify-center
                      px-4
                      py-5

                      lg:w-[55%]
                      lg:px-6

                      xl:w-[54%]
                      xl:px-7

                      2xl:px-9
                    "
                  >
                    {/* EXPANDED HEADING */}
                    <h3
                      className="
                        max-w-[260px]
                        font-avenir
                        font-extrabold
                        text-white
                        leading-[1.08]

                        text-[24px]
                        lg:text-[32px]
                        xl:text-[34px]
                        2xl:text-[40px]
                      "
                    >
                      {card.title}
                    </h3>

                    {/* EXPANDED DESCRIPTION */}
                    <p
                      className="
                        mt-8
                        max-w-[280px]
                        font-avenir
                        font-normal
                        text-white
                        leading-[1.25]

                        text-[16px]
                        lg:mt-10
                        lg:text-[18px]

                        xl:mt-12
                        xl:text-[20px]

                        2xl:text-[20px]
                      "
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* EXPANDED IMAGE */}
                  
{/* ================= EXPANDED IMAGE ================= */}
<div
  className="
    absolute
    right-4
    top-1/2
    h-[70%]
    w-[38%]
    -translate-y-1/2

    lg:right-5
    lg:h-[76%]
    lg:w-[38%]

    xl:right-6
    xl:h-[84%]
    xl:w-[38%]

    2xl:right-8
    2xl:h-[84%]
    2xl:w-[38%]
  "
>
  <Image
    src={legalExpertise}
    alt={card.title}
    fill
    className="object-contain object-center"
    sizes="(max-width: 1023px) 180px, (max-width: 1279px) 230px, 310px"
  />
</div>

                </div>

                {/* ================= COLLAPSED TITLE ================= */}
                <div
                  className={`
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    transition-opacity
                    duration-300

                    ${
                      isActive
                        ? "pointer-events-none opacity-0"
                        : "opacity-100 delay-300"
                    }
                  `}
                >
                  <span
                    className="
                      font-avenir
                      font-extrabold
                      text-[#2E262E]
                      whitespace-pre
                      text-center
                      leading-[1.1]

                      text-[17px]
                      lg:text-[22px]
                      xl:text-[28px]
                      2xl:text-[32px]
                    "
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {card.closedTitle
                      .split("|")
                      .map((line, idx, arr) => (
                        <Fragment key={idx}>
                          {line}
                          {idx < arr.length - 1 && <br />}
                        </Fragment>
                      ))}
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
