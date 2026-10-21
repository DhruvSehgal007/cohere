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
    <section className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom px-6">

<div className="mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">

          <div className="w-full">
            <h2
              className="
                w-full
                font-avenir
                font-extrabold
                leading-[1.15]
                text-[#101C1C]
                lg:max-w-[600px]
                text-[32px]
                sm:text-[36px]
                md:text-[40px]
              "
            >
              Related Services
            </h2>
          </div>



        </div>
      </div>




        <div className="grid grid-cols-1 gap-y-14 gap-x-4 min-[600px]:grid-cols-2 min-[600px]:gap-y-16 md:gap-y-16 xl:grid-cols-4 mt-[64px] sm:mt-[80px] md:mt-[80px] lg:mt-[100px]">
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

            <h3 className="max-w-[190px] font-avenir text-[20px] min-[600px]:text-[22px] xl:text-[24px] font-extrabold leading-tight text-[#1B3D3C] transition-colors duration-300 group-hover:text-white">
              Employee Awareness Workshops
            </h3>

            <p className="mt-5 font-nunito-sans text-[16px] min-[600px]:text-[16px] leading-7 text-[#5B5B5B] transition-colors duration-300 group-hover:text-white">
              Interactive programmes focused on workplace behaviour and respectful communication.
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

            <h3 className="max-w-[220px] lg:max-w-[190px] xl:max-w-[220px] font-avenir text-[20px] min-[600px]:text-[22px] xl:text-[24px] font-extrabold leading-tight text-[#1B3D3C] transition-colors duration-300 group-hover:text-white">
              Internal Committee Training
            </h3>

            <p className="mt-5 font-nunito-sans text-[16px] min-[600px]:text-[16px] leading-7 text-[#5B5B5B] transition-colors duration-300 group-hover:text-white">
              Building confident Internal Committees through practical guidance.
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

            <h3 className="max-w-[210px] lg:max-w-[190px] xl:max-w-[210px] font-avenir text-[20px] min-[600px]:text-[22px] xl:text-[24px] font-extrabold leading-tight text-[#1B3D3C] transition-colors duration-300 group-hover:text-white">
              Workplace Investigations
            </h3>

            <p className="mt-5 font-nunito-sans text-[16px] min-[600px]:text-[16px] leading-7 text-[#5B5B5B] transition-colors duration-300 group-hover:text-white">
              Structured and fair investigation support.
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

            <h3 className="max-w-[190px] font-avenir text-[20px] min-[600px]:text-[22px] xl:text-[24px] font-extrabold leading-tight text-[#1B3D3C] transition-colors duration-300 group-hover:text-white">
              Compliance Advisory
            </h3>

            <p className="mt-5 font-nunito-sans text-[16px] min-[600px]:text-[16px] leading-7 text-[#5B5B5B] transition-colors duration-300 group-hover:text-white">
              Supporting workplace policies and organisational compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
