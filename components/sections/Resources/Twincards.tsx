
"use client";

import Image from "next/image";
import downloadIcon from "@/assets/images/Keepitright/download-icon.png";


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
      <div className="container-custom !px-0 md:!px-[clamp(15px,3vw,50px)]">
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
                mt-[40px]
                inline-block
                rounded-[3px]
                bg-white
                px-2
                py-1
                font-avenir
                text-[14px]
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
                text-[24px]
                font-bold
                leading-[1.2]
                text-white
                mt-[13px]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[40px]
              "
            >
              Understanding the Law Through Landmark Judgments
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                font-nunito-sans
                text-[16px]
                font-normal
                leading-[1.6]
                text-white
                mt-[30px]
                sm:mt-[24px]
                sm:text-[16px]
                lg:text-[20px]
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
                mt-[32px]
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-[8px]
                bg-[#FEBC5A]
                px-3
                sm:px-8
                py-3
                font-nunito-sans
                text-[14px]
                text-[#101C1C]
                transition-colors
                duration-200
                hover:bg-[#F4A936]
                sm:text-[16px]
                lg:text-[20px]
                uppercase
              "
            >
              Explore Judgments 

              <Image
                src={downloadIcon}
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] object-contain"
              />
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
                mt-[40px]
                inline-block
                rounded-[3px]
                bg-[#439897]
                px-2
                py-1
                font-avenir
                text-[14px]
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
                mt-[13px]
                font-avenir
                text-[24px]
                font-bold
                leading-[1.2]
                text-[#101C1C]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[40px]
              "
            >
              Timely Guidance for Changing Workplaces
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[30px]
                sm:mt-[24px]
                font-nunito-sans
                text-[16px]
                font-normal
                leading-[1.6]
                text-[#101C1C]
                sm:text-[16px]
                lg:text-[20px]
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
                mt-[32px]
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-[8px]
                bg-[#439897]
                px-3
                sm:px-8
                py-3
                font-nunito-sans
                text-[14px]
                text-[#000000]
                transition-colors
                duration-200
                hover:bg-[#367F7E]
                sm:text-[16px]
                lg:text-[20px]
                uppercase
              "
            >
              Explore Judgments 

              <Image
                src={downloadIcon}
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] sm:h-[24px] sm:w-[24px] object-contain"
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
