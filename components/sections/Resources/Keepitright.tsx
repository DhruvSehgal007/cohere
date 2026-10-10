
"use client";

import Image from "next/image";
import keepitimage from "@/assets/images/Keepitright/keepitright-image.png";

export default function Keepitright() {
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
              "
            >
              KEEP IT RIGHT™
            </span>

            {/* HEADING */}
            <h2
              className="
                mt-4
                max-w-[700px]
                font-avenir
                text-[28px]
                font-normal
                leading-[1.12]
                tracking-[-0.5px]
                text-[#101C1C]

                sm:text-[34px]
                md:text-[40px]
                lg:text-[58px]
                xl:text-[64px]
              "
            >
              Knowledge. Guidance. Tools for Better Workplaces.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                w-full
                max-w-[700px]
                font-nunito-sans
                text-[16px]
                font-normal
                leading-[1.6]
                tracking-[0.01em]
                text-[#5B5B5B]

                sm:text-[18px]
                md:text-[18px]
                lg:text-[18px]
                xl:text-[20px]
              "
            >
              Stay informed and better equipped to navigate workplace
              compliance, PoSH, employment law, investigations, and
              organizational culture. Explore Cohere&apos;s curated
              resources for practical guidance, legal updates, expert
              perspectives, and tools designed for organizations and
              professionals.
            </p>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            className="
              flex
              w-full
              min-w-0
              items-center
              justify-center

              lg:justify-end
            "
          >
            <Image
              src={keepitimage}
              alt="Illustration of workplace guidance, learning resources and professional tools"
              className="
                block
                h-auto
                w-full
                max-w-[650px]
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
