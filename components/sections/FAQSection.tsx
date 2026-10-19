"use client";

import { useEffect, useState } from "react";
import FAQ from "@/components/common/faq";

type FAQItem = {
  _id: string;
  question: string;
  answer: string;
  order: number;
};

export default function FAQSection() {
  const [faqData, setFaqData] = useState<FAQItem[]>([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch("/api/faqs", {
          cache: "no-store",
        });

        const data = await response.json();

        if (data.success) {
          setFaqData(data.faqs);
        }
      } catch (error) {
        console.error(
          "Failed to load FAQs:",
          error
        );
      }
    };

    fetchFAQs();
  }, []);

  return (
    <section className="pb-12 md:pb-16 lg:pb-20">
      <div className="container-custom px-4 sm:px-6 mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
               FREQUENTLY ASKED QUESTIONS
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
                md:mt-4
                text-[32px]
                sm:text-[36px]
                md:text-[40px]
              "
            >
              Client Popular Question
            </h2>
          </div>
        </div>
      </div>

      <div className="container-custom px-4 sm:px-6">
        <FAQ data={faqData} />
      </div>
    </section>
  );
}