"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import volumeBg from "@/assets/images/homepage/volume_background.png";

import { Lightbulb, Users, Sprout, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const steps: Step[] = [
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

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  right: boolean;
};

export default function ProcessStep({
  number,
  title,
  description,
  Icon,
  right,
}: ProcessStepProps) {
  return (
    <section className="py-16">
      <div className="container-custom px-6">

        {/* ================= HEADING ================= */}

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded bg-[#439897] px-4 py-1 font-avenir text-[14px] text-white">
              PROCESS SECTION
            </span>

            <h2 className="mt-4 max-w-[620px] font-avenir text-[30px] font-extrabold leading-tight text-black md:text-[40px]">
              How We Support Organisations
            </h2>
          </div>

          <p className="max-w-[520px] font-nunito-sans text-[16px] leading-7 text-[#5B5B5B] md:text-right">
            Understanding your organisation's workplace requirements and
            compliance priorities.
          </p>
        </div>

        {/* ================= PROCESS STEPS ================= */}

        <div className="mx-auto mt-20 flex max-w-[900px] flex-col gap-12">

          {steps.map((step, index) => {
            const right = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  x: right ? 180 : -180,
                  scale: 0.92,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative h-[170px] md:h-[180px] ${
                  right
                    ? "md:ml-[14%]"
                    : "md:mr-[14%]"
                }`}
              >

                {/* ================= TEXTURED GREEN CAPSULE ================= */}

                <div
                  className="
                    absolute
                    inset-0
                    overflow-hidden
                    rounded-[100px]
                    shadow-[0_35px_80px_rgba(0,0,0,.18)]
                  "
                >
                  <Image
                    src={volumeBg}
                    alt=""
                    fill
                    className="object-cover"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg,rgba(255,255,255,.12),transparent 40%,rgba(0,0,0,.18))",
                      mixBlendMode: "soft-light",
                    }}
                  />

                  <span
                    className="
                      relative
                      z-10
                      font-avenir
                      text-[100px]
                      font-extrabold
                      leading-none
                      text-white
                      md:text-[120px]
                    "
                    style={{
                      textShadow: "0 6px 18px rgba(0,0,0,.25)",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* ================= WHITE CONTENT CARD ================= */}

                <div
                  className={`
                    absolute
                    top-4
                    bottom-4
                    flex
                    items-center
                    gap-7
                    rounded-[42px]
                    bg-white
                    px-10
                    shadow-[0_40px_90px_rgba(0,0,0,.18)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_55px_110px_rgba(0,0,0,.24)]

                    ${
                      right
                        ? "left-4 right-[24%]"
                        : "left-[24%] right-4 flex-row-reverse"
                    }
                  `}
                >

                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[82px]
                      w-[82px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F4F7F6]
                      shadow-inner
                    "
                  >
                    <step.Icon
                      className="h-8 w-8 text-[#1B3D3C]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* TEXT */}

                  <div className={right ? "" : "text-right"}>

                    <h3 className="font-avenir text-[34px] font-extrabold leading-tight text-black">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-[330px] font-nunito-sans text-[16px] leading-7 text-[#5B5B5B]">
                      {step.description}
                    </p>

                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}