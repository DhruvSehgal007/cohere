"use client";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <section className="w-full bg-white pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24">
      <div className="container-custom">
        <div className="max-w-[540px] sm:max-w-[540px] md:max-w-[800px] lg:max-w-[800px] xl:max-w-[800px]">

          {/* Label */}
          <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px] mb-4">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white ">
              OUR SERVICES
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-avenir font-normal text-[#2E262E] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[54px] xl:text-[64px] leading-[1.05] tracking-[-1px] max-w-[500px] sm:max-w-[380px] md:max-w-[690px]">
            Workplace Compliance. Practical Guidance. Lasting Impact.
          </h1>

          {/* Description */}
          <p className="font-nunito-sans font-normal text-[#6B6B6B] text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.35] mt-6 mb-6 sm:mt-10 sm:mb-10 max-w-[690px]">
            At Cohere Consultants, we bring unparalleled expertise and a proven track record in workplace legal compliance, PoSH training, and advisory services. Our deep industry knowledge, commitment to ethical practices, and pan-India support make us the preferred choice for organizations seeking comprehensive and compliant solutions.
          </p>

          {/* Button */}
          
{/* Buttons */}
<div className="flex flex-wrap items-center gap-4">
  {/* First Button */}
  <Link
    href="/#contact"
    className="inline-flex items-center justify-center bg-[#FFB84D] hover:bg-[#F4A936] transition-colors duration-200 text-[#2E262E] font-avenir font-[800] text-[14px] sm:text-[16px] py-[12px] px-[12px] md:py-[14px] md:px-[20px] lg:py-[14px] lg:px-[20px] max-w-[200px] sm:max-w-[220px] md:max-w-[220px] lg:max-w-[220px] rounded-[8px]"
  >
    Talk to an Expert
  </Link>

  {/* Second Button */}
  <Link
    href="/service"
    className="inline-flex items-center justify-center bg-white hover:bg-[#F5F5F5] border border-[#1B3D3C] transition-colors duration-200 text-[#1B3D3C] font-avenir font-[800] text-[14px] sm:text-[16px] py-[12px] px-[12px] md:py-[14px] md:px-[20px] lg:py-[14px] lg:px-[20px] max-w-[200px] sm:max-w-[220px] md:max-w-[220px] lg:max-w-[220px] rounded-[8px]"
  >
    Explore Our Services
  </Link>
</div>


        </div>
      </div>
    </section>
  );
}