"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import resourcesImg from "@/assets/images/Blogs/resources.svg";

export default function Supportresources() {
  return (
    <section className="pt-4 pb-12 md:pt-6 md:pb-16 bg-white">
      <div className="container-custom">

        <div className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[39px] overflow-hidden min-h-[480px] lg:h-[530px] flex flex-col lg:flex-row items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.10)] bg-[#254f55]">

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #439897 0%, #2E262E 100%)",
            }}
          />


          <div
            className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />


          <div className="relative z-10 w-full lg:w-[48%] xl:w-[50%] p-6 sm:p-10 lg:p-0 lg:pl-[60px] xl:pl-[80px] 2xl:pl-[100px] flex flex-col items-start justify-center text-left">
            {/* Heading: Resources That Support Better / Decisions */}
            <h2 className="text-[26px] sm:text-[34px] xl:text-[40px] font-avenir font-bold text-white leading-[1.2] tracking-tight text-left">
              <span className="inline-block">Resources That Support Better</span>{" "}
              <br className="hidden sm:inline" />
              <span className="inline-block">Decisions</span>
            </h2>

            {/* Description: Poppins 400 18px, Color #FFFFFF, Width 420px */}
            <p className="mt-5 sm:mt-6 font-poppins font-normal text-[15px] sm:text-[16px] lg:text-[18px] text-white leading-[1.5] max-w-[420px] text-left">
              Access practical guidance, legal updates, compliance resources,
              templates, and educational content created to strengthen
              workplace policies and practices.
            </p>


            <Link
              href="#resources"
              className="mt-6 sm:mt-8 w-[200px] sm:w-[220px] h-[52px] sm:h-[60px] bg-[#439897] hover:bg-[#3ca3a2] text-[#0D1E1E] font-poppins font-medium text-[15px] sm:text-[16px] rounded-[8px] flex items-center justify-center transition-all duration-200 hover:shadow-md active:scale-98 cursor-pointer text-center"
            >
              Browse All Resources
            </Link>
          </div>


          <div className="relative lg:absolute lg:left-[46%] xl:left-[48%] lg:bottom-0 w-full lg:w-[54%] xl:w-[664px] h-[320px] sm:h-[400px] lg:h-full flex items-end justify-center lg:justify-start pointer-events-none select-none">
            <Image
              src={resourcesImg}
              alt="Resources That Support Better Decisions"
              priority
              className="w-full h-full object-contain object-bottom lg:object-left-bottom pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
