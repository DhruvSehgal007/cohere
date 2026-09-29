import React from "react";

export default function BlogHero() {
  return (
    <section className="pt-28 md:pt-36 pb-6 md:pb-8 bg-white">
      <div className="container-custom">
        <div className="max-w-[742px]">
          {/* Badge: Frame 371 */}
          <div className="inline-flex items-center bg-[#439897] text-white text-[14px] font-avenir font-normal uppercase pl-[6px] pr-[10px] py-[1px] h-[27px] rounded-r-[5px] rounded-l-none shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">
            INSIGHTS & RESOURCES
          </div>

          {/* Heading (Figma: Avenir Roman 64px, weight 400, leading 67.7px) */}
          <h1 className="text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-avenir font-normal text-[#070F0F] tracking-normal leading-[1.06] mt-[24px]">
            Practical Knowledge for Safer, More Compliant Workplaces
          </h1>

          {/* Subtitle (Figma: Nunito Sans 20px, tracking 0.8px, leading 26px) */}
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-nunito-sans font-normal text-[#5B5B5B] tracking-[0.8px] leading-[26px] mt-[32px]">
            Explore expert insights, workplace guidance, legal updates, practical templates, trauma-informed resources, and learning materials designed to support organisations, Internal Committees, HR teams, and workplace leaders.
          </p>
        </div>
      </div>
    </section>
  );
}
