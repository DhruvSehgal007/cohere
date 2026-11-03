"use client";

import Image, { type StaticImageData } from "next/image";

import easyToFollowIcon from "@/assets/images/Products/easy-to-follow-icon.svg";
import engagingMultilingualIcon from "@/assets/images/Products/engaging-multilinual-icon.svg";
import employeeAwarenessIcon from "@/assets/images/Products/Employee-awareness-icon.svg";
import managerInterventionIcon from "@/assets/images/Products/manager-intervention-icon.svg";
import faqIcon from "@/assets/images/Products/FAQs-icon.svg";
import customizableIcon from "@/assets/images/Products/Customizable-icon.svg";
import automatedIcon from "@/assets/images/Products/Automated-icon.svg";
import hrIcon from "@/assets/images/Products/HR-icon.svg";
import monthlyUpdatedIcon from "@/assets/images/Products/Monthly-updated-icon.svg";
import realLifeCaseStudyIcon from "@/assets/images/Products/Real-life-case-study-icon.svg";

type NavigationItem = {
  title: string;
  icon: StaticImageData;
  angle: number;
};

const leftItems: NavigationItem[] = [
  {
    title: "Easy to follow, easy to use",
    icon: easyToFollowIcon,
    angle: -126,
  },
  {
    title: "Engaging multilingual videos",
    icon: engagingMultilingualIcon,
    angle: -153,
  },
  {
    title: "Employee awareness",
    icon: employeeAwarenessIcon,
    angle: 180,
  },
  {
    title: "Manager interventions and IC orientation",
    icon: managerInterventionIcon,
    angle: 153,
  },
  {
    title: "FAQs, Resources and Assessments",
    icon: faqIcon,
    angle: 126,
  },
];

const rightItems: NavigationItem[] = [
  {
    title: "Customizable Options",
    icon: customizableIcon,
    angle: -54,
  },
  {
    title: "Automated Certification",
    icon: automatedIcon,
    angle: -27,
  },
  {
    title: "HR Dashboard",
    icon: hrIcon,
    angle: 0,
  },
  {
    title: "Monthly Updated Content",
    icon: monthlyUpdatedIcon,
    angle: 27,
  },
  {
    title: "Real life case studies & illustrations",
    icon: realLifeCaseStudyIcon,
    angle: 54,
  },
];

export default function KeepItRightSection() {
  const radius = 230;

  const getPosition = (angle: number) => {
    const rad = (angle * Math.PI) / 180;

    return {
      x: Math.round(Math.cos(rad) * radius),
      y: Math.round(Math.sin(rad) * radius),
    };
  };

  return (
    <section
      id="keep-it-right"
      className="pb-16 sm:pb-16 md:pb-24 lg:pb-24"
    >
      <div className="container-custom">
        {/* ================= TOP ROW ================= */}
        <div className="mb-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center rounded-br-[8px] rounded-tr-[8px] bg-[#439897] px-3 py-1.5">
                <span className="font-avenir text-[12px] uppercase tracking-[0.2px] text-white sm:text-[14px]">
                  KEEP IT RIGHT®
                </span>
              </div>

              <h2
                className="
                  mt-3
                  w-full
                  font-avenir
                  text-[32px]
                  font-extrabold
                  leading-[1.15]
                  text-[#101C1C]

                  sm:text-[36px]

                  md:mt-4
                  md:text-[40px]

                  lg:max-w-[620px]
                "
              >
                Proprietary web based and LMS suitable e-learning
              </h2>
            </div>

            <p
              className="
                w-full
                font-nunito-sans
                text-[16px]
                leading-6
                text-[#5B5B5B]

                sm:text-[16px]
                sm:leading-7

                md:w-1/2
                md:text-right
                md:text-[16px]

                lg:max-w-[400px]
                lg:text-right
                lg:text-[18px]
              "
            >
              for PoSH & Gender in Workplaces & Educational Institutions
            </p>
          </div>
        </div>

        {/* =====================================================
            DESKTOP RADIAL LAYOUT
        ===================================================== */}
        <div className="mt-[35px] hidden lg:block xl:mt-[50px]">
          <div
            className="
              relative
              mx-auto
              h-[540px]
              w-full
              max-w-[1240px]
              origin-center
              scale-[0.88]

              xl:h-[580px]
              xl:scale-100
            "
          >
            {/* ================= CENTER CIRCLE ================= */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-10

                flex
                h-[279px]
                w-[279px]
                -translate-x-1/2
                -translate-y-1/2

                items-center
                justify-center

                rounded-full
                bg-[#FEBC5A]
                p-[16px]
                text-center
              "
            >
              <span
                className="
                  font-avenir
                  text-[32px]
                  font-[800]
                  leading-[1.1]
                  text-[#0D1E1E]

                  xl:text-[34px]
                "
              >
                Product
                <br />
                Navigation
              </span>
            </div>

            {/* ================= LEFT ITEMS ================= */}
            {leftItems.map((item) => {
              const { x, y } = getPosition(item.angle);

              return (
                <div
                  key={item.title}
                  className="
                    absolute
                    flex
                    -translate-x-full
                    -translate-y-1/2
                    items-center
                    justify-end
                    gap-[16px]
                  "
                  style={{
                    left: `calc(50% + ${x + 40}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  {/* TEXT */}
                  <p
                    className="
                      whitespace-nowrap
                      text-right
                      font-nunito-sans-bold
                      text-[16px]
                      leading-[22px]
                      tracking-[0.02em]
                      text-[#333333]

                      sm:text-[16px]
                      md:text-[18px]
                      lg:text-[20px]
                    "
                  >
                    {item.title}
                  </p>

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-[80px]
                      w-[80px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full
                      border
                      border-[#D5F0F0]
                      bg-[#DEF0F0]

                      transition-all
                      duration-300
                      ease-out

                      hover:-translate-y-[3px]
                      hover:scale-105
                      hover:shadow-[0_10px_25px_rgba(67,152,151,0.16)]
                    "
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={44}
                      height={44}
                      className="
                        h-[44px]
                        w-[44px]
                        object-contain
                      "
                    />
                  </div>
                </div>
              );
            })}

            {/* ================= RIGHT ITEMS ================= */}
            {rightItems.map((item) => {
              const { x, y } = getPosition(item.angle);

              return (
                <div
                  key={item.title}
                  className="
                    absolute
                    flex
                    -translate-y-1/2
                    items-center
                    gap-[16px]
                  "
                  style={{
                    left: `calc(50% + ${x - 40}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-[80px]
                      w-[80px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full
                      border
                      border-[#D5F0F0]
                      bg-[#DEF0F0]

                      transition-all
                      duration-300
                      ease-out

                      hover:-translate-y-[3px]
                      hover:scale-105
                      hover:shadow-[0_10px_25px_rgba(67,152,151,0.16)]
                    "
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={44}
                      height={44}
                      className="
                        h-[44px]
                        w-[44px]
                        object-contain
                      "
                    />
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      whitespace-nowrap
                      font-nunito-sans-bold
                      text-[16px]
                      leading-[22px]
                      tracking-[0.02em]
                      text-[#333333]
                      sm:text-[16px]
                      md:text-[18px]
                      lg:text-[20px]
                    "
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}
        <div className="mt-[40px] lg:hidden">
          {/* CENTER CIRCLE */}
          <div className="flex justify-center">
            <div
              className="
                flex
                h-[200px]
                w-[200px]
                items-center
                justify-center
                rounded-full
                bg-[#FEBC5A]
                p-[16px]
                text-center
              "
            >
              <span
                className="
                  font-avenir
                  text-[26px]
                  font-[800]
                  leading-[1.1]
                  text-[#0D1E1E]
                "
              >
                Product
                <br />
                Navigation
              </span>
            </div>
          </div>

          {/* ITEMS */}
          <div className="mt-[35px] grid grid-cols-1 gap-[16px] sm:grid-cols-2">
            {[...leftItems, ...rightItems].map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  items-center
                  gap-[14px]
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-[60px]
                    w-[60px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full
                    border
                    border-[#D5F0F0]
                    bg-[#DEF0F0]
                  "
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={34}
                    height={34}
                    className="
                      h-[34px]
                      w-[34px]
                      object-contain
                    "
                  />
                </div>

                {/* TEXT */}
                <p
                  className="
                    font-nunito-sans-bold
                    text-[16px]
                    sm:text-[16px]
                    md:text-[18px]
                    lg:text-[20px]
                    leading-[20px]
                    text-[#333333]
                  "
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}