"use client";

import { Lightbulb, Users, Sprout, Headphones } from "lucide-react";
import ProcessStep from "./ProcessStep";

const steps = [
  {
    number: "1",
    title: "Understand",
    description:
      "Understanding your organisation's workplace requirements and compliance priorities.",
    Icon: Lightbulb,
  },
  {
    number: "2",
    title: "Strengthen",
    description:
      "Supporting policies, Internal Committees, and workplace processes.",
    Icon: Users,
  },
  {
    number: "3",
    title: "Build Capability",
    description:
      "Delivering workshops, awareness programmes, and practical learning.",
    Icon: Sprout,
  },
  {
    number: "4",
    title: "Support",
    description:
      "Providing ongoing advisory, resources, and workplace guidance.",
    Icon: Headphones,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-custom px-4 sm:px-6">
        {/* HEADING */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded bg-[#439897] px-3 py-1 font-avenir text-[11px] font-normal text-white sm:px-4 sm:text-[14px]">
              PROCESS SECTION
            </span>

            <h2 className="mt-3 max-w-[620px] font-avenir text-[30px] font-extrabold leading-[1.1] text-black sm:text-[36px] lg:mt-4 lg:text-[40px]">
              How We Support Organisations
            </h2>
          </div>

          <p className="max-w-[520px] font-nunito-sans text-[14px] leading-6 text-[#5B5B5B] sm:text-[15px] sm:leading-7 md:text-right lg:text-[16px]">
            Understanding your organisation&apos;s workplace requirements and
            compliance priorities.
          </p>
        </div>

        {/* PROCESS CARDS */}
       <div className="mx-auto mt-20 flex w-full max-w-[1500px] flex-col gap-10">
  {steps.map((step, index) => (
    <ProcessStep
      key={step.number}
      number={step.number}
      title={step.title}
      description={step.description}
      Icon={step.Icon}
      right={index % 2 === 0}
    />
  ))}
</div>
      </div>
    </section>
  );
}