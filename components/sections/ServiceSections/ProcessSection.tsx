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
    <section className="py-20">
      <div className="container-custom px-6">
        {/* Heading */}

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded bg-[#439897] px-4 py-1 font-avenir text-[14px] text-white">
              PROCESS SECTION
            </span>

            <h2 className="mt-4 max-w-[620px] font-avenir text-[40px] font-extrabold leading-tight text-black">
              How We Support Organisations
            </h2>
          </div>

          <p className="max-w-[520px] font-nunito-sans text-[16px] leading-7 text-[#5B5B5B] md:text-right">
            Understanding your organisation's workplace requirements and
            compliance priorities.
          </p>
        </div>

        {/* Process Cards */}

        <div className="mx-auto mt-20 flex max-w-[1400px] flex-col gap-10">

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