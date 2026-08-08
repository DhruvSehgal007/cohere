"use client";

import Image from "next/image";

import serviceIcon from "@/assets/images/Servicepage/POSH-compliance-icon.svg";
import serviceIconWhite from "@/assets/images/Servicepage/POSH-compliance-white-icon.svg";
import bigImg from "@/assets/images/AntisexualHarassment/Posh-compliance.png";
import smallImg from "@/assets/images/AntisexualHarassment/Posh-masterclass.png";

export default function OurServiceSection() {
  return (
    <section className="py-20">
      <div className="container-custom px-6">
        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded bg-[#439897] px-4 py-1 font-avenir text-[14px] text-white">
              OUR SERVICES
            </span>

            <h2 className="mt-4 max-w-[620px] font-avenir text-[30px] font-extrabold leading-tight text-black md:text-[40px]">
              How We Support Your Organisation
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-2 gap-5">
          {/* ================= LEFT ================= */}
          {/* ================= LEFT ================= */}

          <div className="flex flex-col gap-5">
            {/* BIG CARD */}

            <div className="rounded-[16px] bg-[#439897] p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[45%] shrink-0">
                  <Image
                    src={bigImg}
                    alt=""
                    className="
            w-full
    object-contain
    rounded-[12px]
          "
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="font-avenir text-[24px] font-extrabold text-white">
                    PoSH Compliance
                  </h3>

                  <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] tracking-[0.04em] text-[#E5E5E5]">
                    Supporting organisations in understanding and implementing workplace compliance responsibilities under the PoSH framework.
                  </p>
                </div>
              </div>
            </div>

            {/* SMALLS */}

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
              {/* Small Card 1 */}

              <div className="rounded-[16px] bg-[#439897] p-6">
                <Image
                  src={smallImg}
                  alt=""
                  className="w-full
    object-contain
    rounded-[12px]"
                />

                <h3 className="mt-5 font-avenir text-[24px] font-extrabold text-white">
                  Awareness Programmes
                </h3>

                <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] text-[#E5E5E5]">
                  Interactive employee awareness sessions promoting respectful
                  workplace behaviour.
                </p>
              </div>

              {/* Small Card 2 */}

              <div className="rounded-[16px] bg-[#439897] p-6">
                <Image
                  src={smallImg}
                  alt=""
                  className="w-full
    object-contain
    rounded-[12px]"
                />

                <h3 className="mt-5 font-avenir text-[24px] font-extrabold text-white">
                  PoSH Masterclasses
                </h3>

                <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] text-[#E5E5E5]">
                 Advanced learning programmes for HR professionals, Internal Committee members, managers, and workplace leaders.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          {/* ================= RIGHT ================= */}
          {/* ================= RIGHT ================= */}

<div className="flex flex-col gap-5">

  {/* SMALLS */}

  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">

    <div className="rounded-[16px] bg-[#439897] p-6">

      <Image
        src={smallImg}
        alt=""
        className="w-full
    object-contain
    rounded-[12px]"
      />

      <h3 className="mt-5 font-avenir text-[24px] font-extrabold text-white">
        Internal Committee Support
      </h3>

      <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] text-[#E5E5E5]">
        Advanced learning programmes for HR professionals, Internal Committee members, managers, and workplace leaders.
      </p>

    </div>

    <div className="rounded-[16px] bg-[#439897] p-6">

      <Image
        src={smallImg}
        alt=""
        className="w-full
    object-contain
    rounded-[12px]"
      />

      <h3 className="mt-5 font-avenir text-[24px] font-extrabold text-white">
        Workplace Investigations
      </h3>

      <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] text-[#E5E5E5]">
        Advanced learning programmes for HR professionals, Internal Committee members, managers, and workplace leaders.
      </p>

    </div>

  </div>

  {/* BIG */}

  <div className="rounded-[16px] bg-[#439897] p-6">

    <div className="flex flex-col lg:flex-row gap-6">

      <div className="w-full lg:w-[45%] shrink-0">

        <Image
          src={bigImg}
          alt=""
          className="
            w-full
    object-contain
    rounded-[12px]
          "
        />

      </div>

      <div className="flex flex-1 flex-col justify-center">

        <h3 className="font-avenir text-[24px] font-extrabold text-white">
          Annual Reporting & Resources
        </h3>

        <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] tracking-[0.04em] text-[#E5E5E5]">
          Practical guidance, templates and workplace resources to strengthen organisational compliance.
        </p>

      </div>

    </div>

  </div>

</div>
        </div>
      </div>
    </section>
  );
}
