"use client";

import { useState } from "react";
import Image from "next/image";

import serviceIcon from "@/assets/images/Servicepage/POSH-compliance-icon.svg";
import serviceIconWhite from "@/assets/images/Servicepage/POSH-compliance-white-icon.svg";
import bigImg from "@/assets/images/AntisexualHarassment/Posh-compliance.png";
import smallImg from "@/assets/images/AntisexualHarassment/Posh-masterclass.png";
import Internalcommitee from "@/assets/images/AntisexualHarassment/Internal-commitee.png";
import Awarenessprogramm from "@/assets/images/AntisexualHarassment/Awareness-programm.png";
import Workplaceinvestigation from "@/assets/images/AntisexualHarassment/Workplace-investigation.png";
import Annualreporting from "@/assets/images/AntisexualHarassment/Annual-reporting.png";

export default function OurServiceSection() {
  const [activeCard, setActiveCard] = useState(0);

  const isActive = (index: number) => activeCard === index;

  const cardStyle = (index: number) =>
    `rounded-[16px] border-[1.7px] border-[#A9A9A9] p-6 shadow-[2px_2px_10px_4px_#00000024] transition-colors duration-500 ease-in-out ${
      isActive(index) ? "bg-[#FEBC5A]" : "bg-white"
    }`;

  const headingStyle = (index: number) =>
    `font-avenir text-[24px] font-extrabold transition-colors duration-500 ${
      isActive(index) ? "text-[#2C5D5D]" : "text-[#439897]"
    }`;

  return (
    <section className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom px-6">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
                <span className="uppercase font-avenir text-[12px] sm:text-[14px] tracking-[0.2px] text-white">
                  Our Services
                </span>
              </div>

              <h2
                className="
                  mt-3
                  w-full
                  font-avenir
                  font-extrabold
                  leading-[1.15]
                  text-[#101C1C]
                  md:mt-4
                  lg:max-w-[600px]
                  text-[32px]
                  sm:text-[36px]
                  md:text-[40px]
                "
              >
                How We Support Your Organisation
              </h2>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-2 gap-5">
          {/* ================= LEFT ================= */}
          <div className="flex flex-col gap-5">
            {/* BIG CARD */}
            <div
              className={cardStyle(0)}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(0)}
              onClick={() => setActiveCard(0)}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[45%] shrink-0">
                  <Image
                    src={bigImg}
                    alt=""
                    className="w-full object-contain rounded-[12px]"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <h3 className={headingStyle(0)}>PoSH Compliance</h3>

                  <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] tracking-[0.04em] text-[#5B5B5B]">
                    Supporting organisations in understanding and implementing
                    workplace compliance responsibilities under the PoSH
                    framework.
                  </p>
                </div>
              </div>
            </div>

            {/* SMALLS */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
              <div
                className={cardStyle(2)}
                onMouseEnter={() => setActiveCard(2)}
                onMouseLeave={() => setActiveCard(0)}
                onClick={() => setActiveCard(2)}
              >
                <Image
                  src={smallImg}
                  alt=""
                  className="w-full object-contain rounded-[12px]"
                />

                <h3 className={`mt-5 ${headingStyle(2)}`}>
                  PoSH Masterclasses
                </h3>

                <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] text-[#5B5B5B]">
                  Advanced learning programmes for HR professionals, Internal
                  Committee members, managers, and workplace leaders.
                </p>
              </div>
              {/* Small Card 1 */}
              <div
                className={cardStyle(4)}
                onMouseEnter={() => setActiveCard(4)}
                onMouseLeave={() => setActiveCard(0)}
                onClick={() => setActiveCard(4)}
              >
                <Image
                  src={Workplaceinvestigation}
                  alt=""
                  className="w-full object-contain rounded-[12px]"
                />

                <h3 className={`mt-5 ${headingStyle(4)}`}>
                  Workplace Investigations
                </h3>

                <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] text-[#5B5B5B]">
                  Structured, confidential, and trauma-informed investigation
                  support that encourages fairness and procedural integrity.
                </p>
              </div>

              {/* Small Card 2 */}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex flex-col gap-5">
            {/* SMALLS */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
              {/* Small Card 3 */}
              <div
                className={cardStyle(3)}
                onMouseEnter={() => setActiveCard(3)}
                onMouseLeave={() => setActiveCard(0)}
                onClick={() => setActiveCard(3)}
              >
                <Image
                  src={Internalcommitee}
                  alt=""
                  className="w-full object-contain rounded-[12px]"
                />

                <h3 className={`mt-5 ${headingStyle(3)}`}>
                  Internal Committee Support
                </h3>

                <p className="font-nunito-sans text-[16px] leading-[26px] text-[#5B5B5B]">
                  Guidance on Internal Committee constitution, orientation,
                  capability building, and ongoing advisory support.
                </p>
              </div>

              {/* Small Card 4 */}
             
              <div
                className={cardStyle(1)}
                onMouseEnter={() => setActiveCard(1)}
                onMouseLeave={() => setActiveCard(0)}
                onClick={() => setActiveCard(1)}
              >
                <Image
                  src={Awarenessprogramm}
                  alt=""
                  className="w-full object-contain rounded-[12px]"
                />

                <h3 className={`mt-5 ${headingStyle(1)}`}>
                  Awareness Programmes
                </h3>

                <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] text-[#5B5B5B]">
                  Interactive employee awareness sessions promoting respectful
                  workplace behaviour.
                </p>
              </div>
            </div>

            {/* BIG CARD */}
            <div
              className={cardStyle(5)}
              onMouseEnter={() => setActiveCard(5)}
              onMouseLeave={() => setActiveCard(0)}
              onClick={() => setActiveCard(5)}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[45%] shrink-0">
                  <Image
                    src={Annualreporting}
                    alt=""
                    className="w-full object-contain rounded-[12px]"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <h3 className={headingStyle(5)}>
                    Annual Reporting & Resources
                  </h3>

                  <p className="mt-5 font-nunito-sans text-[16px] leading-[26px] tracking-[0.04em] text-[#5B5B5B]">
                    Practical guidance, templates and workplace resources to
                    strengthen organisational compliance.
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
