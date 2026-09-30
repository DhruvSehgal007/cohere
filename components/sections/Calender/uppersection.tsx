"use client";

export default function UpperSection() {
  return (
    <section className="w-full bg-white pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20">
      <div className="container-custom">
        <div className="max-w-[650px]">

          {/* Label */}
          <div className="inline-flex items-center bg-[#439897] px-2.5 py-1 rounded-[2px] mb-4">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white">
              EVENTS & PROGRAMMES
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-avenir font-normal text-[#2E262E] text-[34px] sm:text-[42px] md:text-[64px] lg:text-[64px] leading-[1.05] tracking-[-1px]">
            Learn. Engage. Build
            <br />
            Better Workplaces.
          </h1>

          {/* Description */}
          <p className="font-nunito-sans font-normal text-[#6B6B6B] text-[14px] sm:text-[13px] md:text-[20px] leading-[1.35] mt-5 max-w-[500px]">
            Explore upcoming PoSH+ Masterclasses, workplace workshops,
            awareness programmes, Internal Committee training, and
            expert-led learning sessions by Cohere Consultants.
          </p>

          {/* Button */}
          <div className="mt-7">
          <button
  type="button"
  className="bg-[#FFB84D] hover:bg-[#F4A936] transition-colors duration-200 text-[#2E262E] font-avenir font-[800] text-[14px] sm:text-[16px] py-[12px] px-[10px] w-[240px] rounded-[8px]"
>
  View Upcoming Events
</button>
          </div>

        </div>
      </div>
    </section>
  );
}