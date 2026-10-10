
"use client";

import Image from "next/image";

import ideaForSuccess from "@/assets/images/Keepitright/idea-for-success.png";
import downloadIcon from "@/assets/images/Keepitright/download-icon.png";

const resourceCategories = [
  "PoSH Setup Kits",
  "Awareness Posters",
  "Compliance Checklists",
  "Policies & Templates",
  "Guides & Toolkits",
  "Workplace Awareness Resources",
];

export default function Resourcecategories() {
  return (
    <section className="py-10 sm:py-12 md:py-20">
      <div className="container-custom px-4 sm:px-6">
        <div
          className="
            grid
            grid-cols-1
            gap-8
            items-center
            md:gap-10
            lg:grid-cols-2
            lg:gap-12
            xl:gap-16
          "
        >
          {/* ================= LEFT IMAGE ================= */}
          <div
            className="
              flex
              w-full
              min-w-0
              items-center
              justify-center
            "
          >
            <Image
              src={ideaForSuccess}
              alt="Idea for success illustration"
              className="
                block
                h-auto
                w-full
                max-w-[507px]
                object-contain
              "
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex w-full min-w-0 flex-col items-start">
            {/* HEADING */}
            
<h2
  className="
    bg-gradient-to-r
    from-[#439897]
    to-[#2E262E]
    bg-clip-text
    font-avenir
    text-[24px]
    font-bold
    leading-[1.2]
    text-transparent
    sm:text-[28px]
    md:text-[32px]
    lg:text-[30px]
    xl:text-[34px]
  "
>
  Practical Tools for Workplace Compliance
</h2>


            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                font-nunito-sans
                text-[16px]
                font-normal
                leading-[1.6]
                tracking-[0.01em]
                text-[#5B5B5B]

                sm:text-[18px]
                lg:text-[20px]
              "
            >
              Access ready-to-use resources that help organizations build
              and strengthen their workplace compliance framework.
              From PoSH setup kits and awareness posters to checklists,
              guides, templates, and other practical resources.
            </p>

            {/* RESOURCE CATEGORIES */}
       <h3 className="mt-10 mb-1 font-nunito-sans-bold text-[18px] font-bold text-[#101C1C] sm:text-[20px]">
  Resource categories:
</h3>     
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
          text-[18px]
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


            {/* BUTTON */}
            <button
              type="button"
              className="
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
