
"use client";

import Link from "next/link";
import Image from "next/image";
import keepitimage from "@/assets/images/Keepitright/keepitright-image.png";
import summaryimage from "@/assets/images/CaseStudy/summay-image.png";
import downloadIcon from "@/assets/images/Keepitright/download-icon.png";

const resourceCategories = [
  "PoSH Setup Kits",
  "Awareness Posters",
  "Compliance Checklists",
  "Policies & Templates",
  "Guides & Toolkits",
  "Workplace Awareness Resources",
];

export default function ResourcesCasestudy() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container-custom px-4 sm:px-6 mt-[100px]">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8

            md:gap-10
            lg:grid-cols-2
            lg:gap-12
            xl:gap-16
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex w-full min-w-0 flex-col items-start">
            {/* LABEL */}
            <span
              className="
                inline-block
                rounded-[2px]
                bg-[#439897]
                px-3
                py-1
                font-avenir
                text-[12px]
                font-normal
                text-white

                sm:text-[13px]
                lg:text-[14px]
                uppercase
              "
            >
              Case Studies
            </span>

            {/* HEADING */}
            <h2
              className="
                mt-4
                w-full lg:max-w-[700px]
                font-avenir
                text-[32px]
                font-normal
                leading-[1.12]
                tracking-[-0.5px]
                text-[#101C1C]

                sm:text-[34px]
                md:text-[40px]
                lg:text-[48px]
                xl:text-[64px]
              "
            >
              Real Challenges. Practical Solutions.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                w-full
                w-full lg:max-w-[700px]
                font-nunito-sans
                text-[16px]
                font-normal
                leading-[1.6]
                tracking-[0.01em]
                text-[#5B5B5B]

                sm:text-[16px]
                md:text-[16px]
                lg:text-[18px]
                xl:text-[20px]
              "
            >
              Explore how organizations have navigated complex workplace challenges with Cohere's expertise. Our case studies highlight real-world approaches to investigations, PoSH compliance, conflict management, workplace culture, and organizational change.
            </p>
            <div
  className="
    mt-4
    grid
    grid-cols-1
    gap-x-6
    gap-y-3
    sm:grid-cols-2
    lg:gap-x-8
  "
>
  {resourceCategories.map((category, index) => (
    <div
      key={index}
      className="flex items-start gap-3"
    >
      {/* FIGMA BULLET ICON */}
      <span
        className="
          mt-[5px]
          flex
          h-[16px]
          w-[16px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border-[1px]
          border-[#2E262E]
          bg-white
        "
      >
        <span
          className="
            h-[8px]
            w-[8px]
            rounded-full
            bg-[#439897]
          "
        />
      </span>

      {/* CATEGORY NAME */}
      <span
        className="
          font-nunito-sans
          text-[16px]
          leading-[1.5]
          text-[#5B5B5B]
          sm:text-[18px]
        "
      >
        {category}
      </span>
    </div>
  ))}
</div>
<Link href="/resources#downloadable-resources"
              className="inline-flex items-center justify-center text-center
                mt-12
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-[8px]
                bg-[#FEBC5A]
                px-8
                py-3
                font-nunito-sans
                text-[16px]
                text-[#101C1C]
                transition-colors
                duration-200
                hover:bg-[#F4A936]
                sm:text-[20px]
              "
            >
              EXPLORE RESOURCES

              <Image
                src={downloadIcon}
                alt=""
                width={18}
                height={18}
                className="h-[24px] w-[24px] object-contain"
              />
            </Link>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            className="
              hidden
              flex
              w-full
              min-w-0
              items-center
              justify-center
              lg:flex 
              lg:justify-end
            "
          >
            <Image
              src={summaryimage}
              alt="Illustration of workplace guidance, learning resources and professional tools"
              className="
                block
                h-auto
                w-full
                max-w-[567px]
                object-contain
              "
              sizes="(max-width: 1023px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
