
"use client";

import { ArrowUpRight } from "lucide-react";

export default function Twincards() {
  return (
    <section
      className="
        relative
        w-full
        bg-[#439897]
        md:bg-[linear-gradient(to_right,#439897_50%,#FEBC5A_50%)]
      "
    >
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* ================= LEFT CARD ================= */}
          <div
            className="
              flex
              flex-col
              items-start
              bg-[#439897]
              px-4
              py-10

              sm:px-6
              sm:py-12

              md:bg-transparent
              md:py-14
              md:pr-8

              lg:pr-12
              lg:py-16
            "
          >
            {/* IMAGE PLACEHOLDER */}
            <div
              className="
                w-full max-w-[680px] aspect-[680/328]
                rounded-[12px]
                bg-[#D9D9D9]
              "
            />

            {/* CATEGORY LABEL */}
            <span
              className="
                mt-5
                inline-block
                rounded-[3px]
                bg-white
                px-2
                py-1
                font-avenir
                text-[11px]
                font-normal
                uppercase
                text-[#439897]
              "
            >
              JUDGMENTS
            </span>

            {/* HEADING */}
            <h2
              className="
                mt-3
                font-avenir
                text-[26px]
                font-bold
                leading-[1.2]
                text-white

                sm:text-[28px]
                lg:text-[40px]
              "
            >
              Understanding the Law Through Landmark Judgments
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                font-nunito-sans
                text-[14px]
                font-normal
                leading-[1.6]
                text-white

                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Stay updated with important court judgments and legal
              developments shaping workplace compliance. Explore
              simplified insights and practical takeaways from
              significant cases related to PoSH, employment law,
              workplace rights, and organizational responsibility.
            </p>

            {/* BUTTON */}
            <button
              type="button"
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-[6px]
                bg-[#FEBC5A]
                px-5
                py-3
                font-nunito-sans
                text-[14px]
                font-semibold
                text-[#101C1C]
                transition-colors
                hover:bg-[#F4A936]
              "
            >
              EXPLORE JUDGMENTS
              <ArrowUpRight size={17} />
            </button>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div
            className="
              flex
              flex-col
              items-start
              bg-[#FEBC5A]
              px-4
              py-10

              sm:px-6
              sm:py-12

              md:bg-transparent
              md:py-14
              md:pl-8

              lg:pl-12
              lg:py-16
            "
          >
            {/* IMAGE PLACEHOLDER */}
            <div
              className="
                w-full max-w-[680px] aspect-[680/328]
                rounded-[12px]
                bg-[#D9D9D9]
              "
            />

            {/* CATEGORY LABEL */}
            <span
              className="
                mt-5
                inline-block
                rounded-[3px]
                bg-[#439897]
                px-2
                py-1
                font-avenir
                text-[11px]
                font-normal
                uppercase
                text-white
              "
            >
              ADVISORIES
            </span>

            {/* HEADING */}
            <h2
              className="
                mt-3
                font-avenir
                text-[26px]
                font-bold
                leading-[1.2]
                text-[#101C1C]
                sm:text-[28px]
                lg:text-[40px]
              "
            >
              Timely Guidance for
              <br />
              Changing Workplaces
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                font-nunito-sans
                text-[14px]
                font-normal
                leading-[1.6]
                text-[#101C1C]

                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Keep pace with evolving workplace regulations, legal
              developments, and compliance requirements. Our advisories
              provide clear, practical guidance to help organizations
              understand what has changed, why it matters, and what
              action may be required.
            </p>

            {/* BUTTON */}
            <button
              type="button"
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-[6px]
                bg-[#439897]
                px-5
                py-3
                font-nunito-sans
                text-[14px]
                font-semibold
                text-[#101C1C]
                transition-colors
                hover:bg-[#367F7E]
              "
            >
              EXPLORE JUDGMENTS
              <ArrowUpRight size={17} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
