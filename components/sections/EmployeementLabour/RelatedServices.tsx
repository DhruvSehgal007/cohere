"use client";

import Image from "next/image";

import annualIcon from "@/assets/images/AntisexualHarassment/annual-reporting.svg";
import annualWhiteIcon from "@/assets/images/AntisexualHarassment/annual-reporting-white.svg";

import workplaceIcon from "@/assets/images/AntisexualHarassment/workplace.svg";
import workplaceWhiteIcon from "@/assets/images/AntisexualHarassment/workplace-white.svg";

import traumaIcon from "@/assets/images/AntisexualHarassment/trauma-informed.svg";
import traumaWhiteIcon from "@/assets/images/AntisexualHarassment/trauma-informed-white.svg";

import legalIcon from "@/assets/images/AntisexualHarassment/legal-updates.svg";
import legalWhiteIcon from "@/assets/images/AntisexualHarassment/legal-updates-white.svg";

export default function RelatedServices() {
  return (
    <section className="py-20">
      <div className="container-custom px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full lg:w-1/2">
            {/* <span className="inline-block rounded bg-[#439897] px-3 py-1 font-avenir text-[12px] text-white sm:px-4 sm:text-[14px]">
      What We Support
    </span> */}

            <h2
              className="
        mt-3
        w-full
        font-avenir
        text-[22px]
        font-extrabold
        leading-[1.15]
        text-black

        sm:text-[30px]
        md:mt-4
        md:text-[36px]

        lg:max-w-[540px]
        lg:text-[40px]
      "
            >
              Related Services
            </h2>
          </div>
        </div>
        <div className="mt-[50px] grid grid-cols-1 gap-y-14 gap-x-4 min-[600px]:grid-cols-2 min-[600px]:gap-y-16 md:gap-y-16 xl:mt-[110px] xl:grid-cols-4">
          {/* ================= CARD 1 ================= */}

          <div className="group relative rounded-[16px] bg-white p-6 min-[600px]:p-7 xl:p-8 shadow-[4px_10px_18px_0px_#00000021] transition-all duration-300 hover:bg-[#439897]">
            <div
              className="absolute
-top-8
right-0
flex
h-[72px]
w-[72px]
min-[600px]:-top-8
min-[600px]:right-0
min-[600px]:h-[70px]
min-[600px]:w-[70px]
md:-top-10
md:right-0
md:h-[80px]
md:w-[80px]
xl:-top-14
xl:right-0
xl:h-[120px]
xl:w-[120px]
items-center
justify-center
rounded-full
bg-[#98BCBB]
transition-all
duration-300
group-hover:bg-[#1B3D3C]"
            >
              <Image
                src={annualIcon}
                alt=""
                className="
block
group-hover:hidden
w-8
h-8
min-[600px]:w-10
min-[600px]:h-10
xl:w-14
xl:h-14
object-contain
"
              />

              <Image
                src={annualWhiteIcon}
                alt=""
                className="
hidden
group-hover:block
w-8
h-8
min-[600px]:w-10
min-[600px]:h-10
xl:w-14
xl:h-14
object-contain
"
              />
            </div>

            <h3 className="min-h-[58px] max-w-[190px] font-avenir text-[20px] min-[600px]:text-[22px] xl:text-[24px] font-extrabold leading-tight text-[#1B3D3C] transition-colors duration-300 group-hover:text-white">
              Annual Reporting
            </h3>

            <p className="mt-5 font-nunito-sans text-[16px] min-[600px]:text-[16px] leading-7 text-[#5B5B5B] transition-colors duration-300 group-hover:text-white">
              Templates and practical guidance for statutory reporting.
            </p>
          </div>

          {/* ================= CARD 2 ================= */}

          <div className="group relative rounded-[16px] bg-white p-6 min-[600px]:p-7 xl:p-8 shadow-[4px_10px_18px_0px_#00000021] transition-all duration-300 hover:bg-[#439897]">
            <div
              className="absolute
-top-8
right-0
flex
h-[72px]
w-[72px]
min-[600px]:-top-8
min-[600px]:right-0
min-[600px]:h-[70px]
min-[600px]:w-[70px]
md:-top-10
md:right-0
md:h-[80px]
md:w-[80px]
xl:-top-14
xl:right-0
xl:h-[120px]
xl:w-[120px]
items-center
justify-center
rounded-full
bg-[#98BCBB]
transition-all
duration-300
group-hover:bg-[#1B3D3C]"
            >
              <Image
                src={workplaceIcon}
                alt=""
                className="
block
group-hover:hidden
w-8
h-8
min-[600px]:w-10
min-[600px]:h-10
xl:w-14
xl:h-14
object-contain
"
              />

              <Image
                src={workplaceWhiteIcon}
                alt=""
                className="
hidden
group-hover:block
w-8
h-8
min-[600px]:w-10
min-[600px]:h-10
xl:w-14
xl:h-14
object-contain
"
              />
            </div>

            <h3 className=" min-h-[58px] max-w-[190px] font-avenir text-[20px] min-[600px]:text-[22px] xl:text-[24px] font-extrabold leading-tight text-[#1B3D3C] transition-colors duration-300 group-hover:text-white">
              Workplace Guidance
            </h3>

            <p className="mt-5 font-nunito-sans text-[16px] min-[600px]:text-[16px] leading-7 text-[#5B5B5B] transition-colors duration-300 group-hover:text-white">
              Resources supporting compliance, awareness, and workplace
              learning.
            </p>
          </div>

          {/* ================= CARD 3 ================= */}

          <div className="group relative rounded-[16px] bg-white p-6 min-[600px]:p-7 xl:p-8 shadow-[4px_10px_18px_0px_#00000021] transition-all duration-300 hover:bg-[#439897]">
            <div
              className="absolute
-top-8
right-0
flex
h-[72px]
w-[72px]
min-[600px]:-top-8
min-[600px]:right-0
min-[600px]:h-[70px]
min-[600px]:w-[70px]
md:-top-10
md:right-0
md:h-[80px]
md:w-[80px]
xl:-top-14
xl:right-0
xl:h-[120px]
xl:w-[120px]
items-center
justify-center
rounded-full
bg-[#98BCBB]
transition-all
duration-300
group-hover:bg-[#1B3D3C]"
            >
              <Image
                src={traumaIcon}
                alt=""
                className="
block
w-8
h-8
min-[600px]:w-10
min-[600px]:h-10
xl:w-14
xl:h-14
object-contain
group-hover:hidden
"
              />

              <Image
                src={traumaWhiteIcon}
                alt=""
                className="
hidden
group-hover:block
w-8
h-8
min-[600px]:w-10
min-[600px]:h-10
xl:w-14
xl:h-14
object-contain
"
              />
            </div>

            <h3 className="min-h-[58px] max-w-[210px] font-avenir text-[20px] min-[600px]:text-[22px] xl:text-[24px] font-extrabold leading-tight text-[#1B3D3C] transition-colors duration-300 group-hover:text-white">
              Trauma-Informed Practice
            </h3>

            <p className="mt-5 font-nunito-sans text-[16px] min-[600px]:text-[16px] leading-7 text-[#5B5B5B] transition-colors duration-300 group-hover:text-white">
              Understanding trauma responses to improve workplace
              investigations.
            </p>
          </div>

          {/* ================= CARD 4 ================= */}

          <div className="group relative rounded-[16px] bg-white p-6 min-[600px]:p-7 xl:p-8 shadow-[4px_10px_18px_0px_#00000021] transition-all duration-300 hover:bg-[#439897]">
            <div
              className="absolute
-top-8
right-0
flex
h-[72px]
w-[72px]
min-[600px]:-top-8
min-[600px]:right-0
min-[600px]:h-[70px]
min-[600px]:w-[70px]
md:-top-10
md:right-0
md:h-[80px]
md:w-[80px]
xl:-top-14
xl:right-0
xl:h-[120px]
xl:w-[120px]
items-center
justify-center
rounded-full
bg-[#98BCBB]
transition-all
duration-300
group-hover:bg-[#1B3D3C]"
            >
              <Image
                src={legalIcon}
                alt=""
                className="
block
w-8
h-8
min-[600px]:w-10
min-[600px]:h-10
xl:w-14
xl:h-14
object-contain
group-hover:hidden
"
              />

              <Image
                src={legalWhiteIcon}
                alt=""
                className="
hidden
group-hover:block
w-8
h-8
min-[600px]:w-10
min-[600px]:h-10
xl:w-14
xl:h-14
object-contain
"
              />
            </div>

            <h3 className="min-h-[58px] max-w-[190px] font-avenir text-[20px] min-[600px]:text-[22px] xl:text-[24px] font-extrabold leading-tight text-[#1B3D3C] transition-colors duration-300 group-hover:text-white">
              Legal Updates
            </h3>

            <p className="mt-5 font-nunito-sans text-[16px] min-[600px]:text-[16px] leading-7 text-[#5B5B5B] transition-colors duration-300 group-hover:text-white">
              Practical insights and workplace guidance based on evolving
              compliance practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
