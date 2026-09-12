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
      <div className="container-custom pb-8 md:pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6">

        <div>
          <span className="inline-block w-auto rounded bg-[#439897] px-3 py-2 font-avenir text-[12px] sm:text-[13px] lg:text-[14px] font-normal text-white md:w-[260px]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-4 font-avenir font-extrabold leading-tight text-[#0D1E1E] text-[30px] sm:text-[34px] md:text-[40px]">
            Client Popular Question
          </h2>
        </div>

      </div>

      <div className="container-custom px-4 sm:px-6">
        <FAQ data={faqData} />
      </div>
    </section>
  );
}