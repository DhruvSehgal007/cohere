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
    <section className="py-16">
      <div className="container-custom px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded bg-[#439897] px-4 py-1 font-avenir text-[14px] text-white">
              THE COHERE ADVANTAGE
            </span>

            <h2 className="mt-4 max-w-[620px] font-avenir text-[30px] font-extrabold leading-tight text-black md:text-[40px]">
              Everything You Need to Build a Better Workplace
            </h2>
          </div>

          <p className="max-w-[520px] font-nunito-sans text-[16px] leading-7 text-[#5B5B5B] md:text-right">
            From legal guidance and workplace investigations to compliance and
            trusted advisory services, we provide the expertise organizations
            rely on at every stage.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group rounded-[16px] border border-[#EFEFEF] bg-white p-8 shadow-[0_6px_14px_rgba(0,0,0,0.16)] transition-all duration-300 hover:bg-[#439897]"
            >
             <div className="relative mb-8 h-[90px] w-[132px]">
  {/* Dark Icon */}
  <Image
    src={card.icon}
    alt={card.title}
    fill
    className="
      object-contain
      transition-all
      duration-500
      ease-in-out
      opacity-100
      group-hover:opacity-0
      group-hover:scale-95
    "
  />

  {/* White Icon */}
  <Image
    src={card.hoverIcon}
    alt={card.title}
    fill
    className="
      object-contain
      transition-all
      duration-500
      ease-in-out
      opacity-0
      scale-95
      group-hover:opacity-100
      group-hover:scale-100
    "
  />
</div>

              <h3 className="font-avenir text-[40px] font-extrabold leading-tight text-black transition-colors duration-300 group-hover:text-white">
                {card.title}
              </h3>

              <p className="mt-5 font-nunito-sans text-[16px] leading-7 text-[#5B5B5B] transition-colors duration-300 group-hover:[color:#D9D9D9]">
                {card.description}
              </p>

              <h4 className="mt-8 font-avenir text-[36px] font-extrabold leading-none text-[#1B3D3C]">
                Includes
              </h4>

              <ul className="mt-5 space-y-2">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-nunito-sans text-[15px] text-[#5B5B5B] transition-colors duration-300 group-hover:[color:#D9D9D9]"
                  >
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
