
"use client";

import Image from "next/image";
import keepitimage from "@/assets/images/Keepitright/keepitright-image.png";

export default function Keepitright() {
  return (
    <section className="w-full bg-white pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24">
      <div className="container-custom px-4 sm:px-6">
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
           <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
              KEEP IT RIGHT™
            </span>
          </div>

            {/* HEADING */}
            <h2
              className="
                mt-4
                max-w-[700px]
                font-avenir
                text-[32px]
                font-normal
                leading-[1.12]
                tracking-[-0.5px]
                text-[#101C1C]

                sm:text-[32px]
                md:text-[40px]
                lg:text-[48px]
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

                sm:text-[16px]
                md:text-[16px]
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
