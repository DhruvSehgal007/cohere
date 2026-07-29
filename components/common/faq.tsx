"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  data: FAQItem[];
}

export default function FAQ({ data }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border border-[#B0D3D2] rounded-[4px] overflow-hidden bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <h3 className="font-nunito-sans font-bold text-[20px] text-[#2E262E]">
                {item.question}
              </h3>

              {/* Animated Plus / Minus */}
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span className="absolute w-5 h-[2px] bg-[#439897] rounded-full"></span>

                <span
                  className={`absolute w-[2px] h-5 bg-[#439897] rounded-full transition-all duration-300 ${
                    isOpen
                      ? "rotate-90 opacity-0"
                      : "rotate-0 opacity-100"
                  }`}
                ></span>
              </div>
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`px-6 transition-all duration-500 ${
                    isOpen ? "pb-6 opacity-100" : "pb-0 opacity-0"
                  }`}
                >
                  <p className="font-nunito-sans text-[18px] leading-[32px] text-[#5B5B5B]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}