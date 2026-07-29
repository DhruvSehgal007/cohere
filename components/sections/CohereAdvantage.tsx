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
    <section className="w-full bg-white">
      <div className="max-w-[1500px] mx-auto px-6 py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="inline-block w-auto md:w-[220px] bg-[#439897] text-white font-avenir font-normal text-[14px] px-3 py-1 rounded text-left">
            THE COHERE ADVANTAGE
          </span>
          <h2 className="font-avenir font-extrabold text-[40px] leading-tight text-[#0D1E1E] mt-4 max-w-[588px]">
            Everything You Need to Build a Better Workplace
          </h2>
        </div>
        <p className="font-nunito-sans font-normal text-[20px] text-[#5B5B5B] max-w-[524px] ml-auto text-right">
          From legal guidance and workplace investigations to compliance and
          trusted advisory services, we provide the expertise organizations rely
          on at every stage.
        </p>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 pb-20">
        <div className="flex gap-4 h-[420px] w-full">
          {cards.map((card, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={card.title}
                onMouseEnter={() => setActiveIndex(i)}
                style={{ backgroundColor: isActive ? "#439897" : card.bg }}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer
                  transition-[flex-grow,flex-basis,background-color] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${isActive ? "flex-[6]" : "flex-[1]"}
                `}
              >
                {/* Expanded content */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-between py-[36px] px-[39px]
                    transition-opacity duration-500
                    ${isActive ? "opacity-100 delay-200" : "opacity-0 pointer-events-none"}
                  `}
                >
                  <div className="max-w-[240px]">
                    <h3 className="font-avenir font-extrabold text-white text-[48px] leading-[1.1]">
                      {card.title}
                    </h3>
                    <p className="font-avenir font-normal text-white text-[20px] mt-4 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div
                    className="absolute right-0 w-[310px] h-[370px] text-transparent"
                    
                  >
                    <Image
                      src={legalExpertise}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Collapsed vertical title */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center
                    transition-opacity duration-300
                    ${isActive ? "opacity-0" : "opacity-100 delay-300"}
                  `}
                >
                  <span
                    className="font-avenir font-extrabold text-[#2E262E] text-[36px] whitespace-pre text-center"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {card.closedTitle.split("|").map((line, idx, arr) => (
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
