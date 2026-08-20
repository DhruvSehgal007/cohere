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
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-custom px-4 sm:px-6">

        {/* HEADING */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span
              className="
                inline-block
                rounded
                bg-[#439897]
                px-3
                py-1
                font-avenir
                text-[11px]
                font-normal
                text-white
                sm:px-4
                sm:text-[14px]
              "
            >
              PROCESS SECTION
            </span>

            <h2
              className="
                mt-3
                max-w-[620px]
                font-avenir
                text-[30px]
                font-extrabold
                leading-[1.1]
                text-black
                sm:text-[36px]
                lg:mt-4
                lg:text-[40px]
              "
            >
              How We Support Organisations
            </h2>
          </div>

          <p
            className="
              max-w-[520px]
              font-nunito-sans
              text-[14px]
              leading-6
              text-[#5B5B5B]
              sm:text-[15px]
              sm:leading-7
              md:text-right
              lg:text-[16px]
            "
          >
            Understanding your organisation&apos;s workplace requirements and
            compliance priorities.
          </p>
        </div>

        {/* PROCESS CARDS */}
        <div
          className="
            mx-auto
            mt-20
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