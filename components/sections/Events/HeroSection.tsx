import React from "react";
import Image from "next/image";
import heroBannerImage from "@/assets/images/Blogs/InnerBlog/bloginner.jpg";

export default function HeroSection() {
  return (
    <section className="pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-6 md:pb-8 bg-white">
      <div className="container-custom">
        {/* Banner with Rounded Corners */}
        <div className="relative w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-[460px] rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-sm">
          {/* Background Image */}
          <Image
            src={heroBannerImage}
            alt="Supporting Organisations Beyond Compliance"
            fill
            priority
            className="object-cover object-[center_35%]"
          />

          {/* Dark Overlay Gradient on left for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/15 z-10" />

          {/* Banner Text Content */}
          <div className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 max-w-[900px] lg:max-w-[1000px]">
            <h1 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-avenir font-bold text-white leading-[1.18] mb-3 md:mb-4 tracking-[-0.01em]">
              <span className="sm:whitespace-nowrap">Supporting Organisations Beyond</span>{" "}
              <br className="hidden sm:inline" />
              <span>Compliance</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-nunito-sans font-normal text-white/90 leading-relaxed max-w-[560px]">
              <span className="sm:whitespace-nowrap">We believe that creating safer workplaces requires more than</span>{" "}
              <br className="hidden sm:inline" />
              <span>meeting statutory obligations.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
