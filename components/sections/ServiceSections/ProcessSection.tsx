"use client";

import ProcessStep from "./ProcessStep";

import understandIcon from "@/assets/images/Servicepage/uderstand-icon.svg";
import strengthenIcon from "@/assets/images/Servicepage/strengthen-icon.svg";
import buildCapabilityIcon from "@/assets/images/Servicepage/build-capability-icon.svg";
import supportIcon from "@/assets/images/Servicepage/support-icon.svg";

import cardWhiteImage from "@/assets/images/Servicepage/crads-white-image.svg";

const steps = [
  {
    number: "1",
    title: "Understand",
    description:
      "Understanding your organisation's workplace requirements and compliance priorities.",
    icon: understandIcon,
  },
  {
    number: "2",
    title: "Strengthen",
    description:
      "Supporting policies, Internal Committees, and workplace processes.",
    icon: strengthenIcon,
  },
  {
    number: "3",
    title: "Build Capability",
    description:
      "Delivering workshops, awareness programmes, and practical learning.",
    icon: buildCapabilityIcon,
  },
  {
    number: "4",
    title: "Support",
    description:
      "Providing ongoing advisory, resources, and workplace guidance.",
    icon: supportIcon,
  },
];

export default function ProcessSection() {
  return (
    <section className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom px-4 sm:px-6">

        {/* HEADING */}
<div className="mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="uppercase font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
              Process Section
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
                lg:max-w-[340px]
                text-[32px]
                sm:text-[36px]
                md:text-[40px]
              "
            >
              How We Support Organisations
            </h2>
          </div>

          <p
            className="
              w-full
              font-nunito-sans
              leading-6
              text-[#5B5B5B]
              sm:leading-7
              md:w-1/2
              lg:max-w-[520px]
              text-left
              md:text-right
              lg:text-right
              text-[16px]
              sm:text-[16px]
              md:text-[16px]
              lg:text-[18px]
            "
          >
            Understanding your organisation's workplace requirements and compliance priorities.
          </p>

        </div>
      </div>

        {/* PROCESS CARDS */}
        <div
          className="
            mx-auto
            mt-8
            sm:mt-10
            md:mt-20
            flex
            w-full
            max-w-[1246px]
            flex-col
            gap-10
          "
        >
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              cardBackground={cardWhiteImage}
              right={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}