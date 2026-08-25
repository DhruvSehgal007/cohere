"use client";

import Image from "next/image";

import poshIcon from "@/assets/images/Servicepage/POSH-compliance-icon.svg";
import icIcon from "@/assets/images/Servicepage/ICS-support.svg";
import workplaceIcon from "@/assets/images/Servicepage/workplace-icon.svg";
import learningIcon from "@/assets/images/Servicepage/learning-icon.svg";
import annualIcon from "@/assets/images/Servicepage/annual-reporting-icon.svg";
import resourcesIcon from "@/assets/images/Servicepage/resources-icon.svg";

import poshWhiteIcon from "@/assets/images/Servicepage/POSH-compliance-white-icon.svg";
import icWhiteIcon from "@/assets/images/Servicepage/ICS-support-white-icon.svg";
import workplaceWhiteIcon from "@/assets/images/Servicepage/workplace-white-icon.svg";
import learningWhiteIcon from "@/assets/images/Servicepage/learning-white-icon.svg";
import annualWhiteIcon from "@/assets/images/Servicepage/annual-reporting-white-icon.svg";
import resourcesWhiteIcon from "@/assets/images/Servicepage/resources-white-icon.svg";

const cards = [
  {
    icon: poshIcon,
    hoverIcon: poshWhiteIcon,
    title: "PoSH Compliance & Advisory",
    description:
      "Ensure your workplace policies, compliance practices, and statutory obligations align with the requirements of the PoSH Act through practical guidance and ongoing advisory support.",
    items: [
      "PoSH Compliance Guidance",
      "Policy Review",
      "Compliance Audits",
      "Employer Advisory",
    ],
  },
  {
    icon: icIcon,
    hoverIcon: icWhiteIcon,
    title: "Internal Committee Support",
    description:
      "Strengthen your Internal Committee with expert guidance on constitution, capability building, orientation, and compliance responsibilities.",
    items: [
      "Internal Committee Constitution",
      "IC Orientation",
      "IC Capability Building",
      "Practical Advisory Support",
    ],
  },
  {
    icon: workplaceIcon,
    hoverIcon: workplaceWhiteIcon,
    title: "Workplace Investigations",
    description:
      "Support fair, confidential, and legally informed workplace investigations with structured processes and trauma-informed practices.",
    items: [
      "Investigation Guidance",
      "Inquiry Support",
      "Procedural Advisory",
      "Virtual Proceedings Support",
    ],
  },
  {
    icon: learningIcon,
    hoverIcon: learningWhiteIcon,
    title: "Learning & Workshops",
    description:
      "Interactive learning programmes designed for employees, managers, leaders, and Internal Committee members to build awareness and strengthen workplace culture.",
    items: [
      "Employee Awareness",
      "PoSH+ Masterclasses",
      "Leadership Workshops",
      "Internal Committee Training",
    ],
  },
  {
    icon: annualIcon,
    hoverIcon: annualWhiteIcon,
    title: "Annual Reporting & Compliance Resources",
    description:
      "Simplify statutory reporting with practical templates, guidance, and support for annual reports and workplace documentation.",
    items: [
      "Annual Reports",
      "Reporting Guidance",
      "Compliance Templates",
      "Documentation Support",
    ],
  },
  {
    icon: resourcesIcon,
    hoverIcon: resourcesWhiteIcon,
    title: "Resources & Knowledge",
    description:
      "Access practical workplace resources covering compliance, legal updates, trauma-informed practices, government guidance, and workplace awareness.",
    items: [
      "Templates",
      "Legal Updates",
      "Compliance Resources",
      "Practical Guidance",
    ],
  },
];

export default function IntroSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container-custom px-4 sm:px-6">
        {/* TOP CONTENT */}
<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
  <div className="w-full lg:w-1/2">
    <span className="inline-block rounded bg-[#439897] px-3 py-1 font-avenir text-[12px] text-white sm:px-4 sm:text-[14px]">
      INTRODUCTION SECTION
    </span>

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
      Supporting Organisations Across Every Stage of Workplace Compliance
    </h2>
  </div>

  <p
    className="
      w-full
      font-nunito-sans
      text-[14px]
      leading-6
      text-[#5B5B5B]

      sm:text-[15px]
      sm:leading-7

      lg:max-w-[520px]
      lg:w-1/2
      lg:text-right
      lg:text-[16px]
    "
  >
    Our services combine legal insight, practical workplace experience, and
    learning-led solutions to help organisations strengthen compliance,
    support Internal Committees, improve workplace culture, and respond
    confidently to evolving statutory responsibilities.
  </p>
</div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 xl:mt-14 xl:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[16px] border border-[#EFEFEF] bg-white p-5 shadow-[0_6px_14px_rgba(0,0,0,0.16)] transition-all duration-500 ease-in-out sm:p-6 md:p-7 lg:p-8"
            >
              {/* GRADIENT OVERLAY ON HOVER */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(180deg, #439897 0%, #2E262E 100%)",
                }}
              />

              {/* NOISE / TEXTURE OVERLAY ON HOVER */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 ease-in-out group-hover:opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* CONTENT WRAPPER (Keeps elements above absolute overlays) */}
              <div className="relative z-10">
                {/* ICON BOX */}
                <div className="relative mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-[12px] bg-[#f0f7f7] transition-colors duration-500 group-hover:bg-[#1A5C5A] sm:mb-6 sm:h-[78px] sm:w-[78px] md:mb-8 md:h-[78px] md:w-[78px]">
                  {/* Dark Icon */}
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className="object-contain p-2 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-95 group-hover:opacity-0"
                  />

                  {/* White Icon */}
                  <Image
                    src={card.hoverIcon}
                    alt={card.title}
                    fill
                    className="scale-95 object-contain p-2 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>

                {/* TITLE */}
                <h3 className="font-nunito-sans-bold text-[20px] leading-[1.15] text-black transition-colors duration-500 group-hover:text-white sm:text-[20px] md:text-[20px] lg:text-[20px]">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 font-nunito-sans text-[14px] text-[#5B5B5B] transition-colors duration-500 group-hover:text-white/90 sm:mt-5 sm:text-[15px] md:text-[16px]">
                  {card.description}
                </p>

                {/* INCLUDES */}
                <h4 className="mt-6 font-nunito-sans-bold text-[20px] leading-none text-black transition-colors duration-500 group-hover:text-white sm:mt-7 sm:text-[20px] md:mt-8 md:text-[20px]">
                  Includes
                </h4>

                <ul className="mt-4 space-y-2 sm:mt-5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-nunito-sans text-[13px] leading-5 text-[#5B5B5B] transition-colors duration-500 group-hover:text-white/90 sm:text-[14px] md:text-[15px]"
                    >
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
