// components/CoreServicesArea.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import numOne from "@/assets/images/homepage/one.svg";
import numTwo from "@/assets/images/homepage/two.svg";
import numThree from "@/assets/images/homepage/three.svg";

const services = [
  {
    number: numOne,
    title: "Anti Sexual Harassment",
    description:
      "Our team of experienced Lawyers & SMEs act as external members on company internal committees. We provide end-to-end support for PoSH complaint management, conciliations & investigations, train IC members, leaders & employees & ensure regulatory compliances.",
  },
  {
    number: numTwo,
    title: "Workplace Discrimination",
    description:
      "We use experienced facilitators providing DE&I training programs and awareness sessions to customize sensitization programs. We work closely with clients for policy review, audits & consultations with a customized approach aligned with best practices.",
  },
  {
    number: numThree,
    title: "Employment and Labour",
    description:
      "Our expertise in drafting, dispute resolution, secondment & thorough workplace investigations. Our team's track record on complex Employment & Labour litigation, high stakes advisory work, contracting, while mitigating risks & bring highly coveted expertise to the table.",
  },
];

interface CardProps {
  service: (typeof services)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ServiceCard({ service, index, total, progress }: CardProps) {
  // Each card gets a slice of the scroll. Card 0 is visible from the start.
  // Card i (i>0) fades/scales in during slice [(i-1)/total, i/total].
  const inStart = index === 0 ? 0 : (index - 1) / total;
  const inEnd = index === 0 ? 0.0001 : index / total;

  // Opacity: fade in on top of previous card
  const opacity = useTransform(
    progress,
    [inStart, inEnd],
    [index === 0 ? 1 : 0, 1]
  );

  // Subtle upward fade (not a big slide from bottom)
  const y = useTransform(
    progress,
    [inStart, inEnd],
    [index === 0 ? 0 : 40, 0]
  );

  // Slight scale-in for a soft "settle" feel
  const scale = useTransform(
    progress,
    [inStart, inEnd],
    [index === 0 ? 1 : 0.98, 1]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        zIndex: index + 10,
      }}
      className="sticky top-28"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#0f4c4b] text-white px-10 md:px-14 py-12 md:py-16 shadow-2xl">
        {/* Big faded number in background */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-90 pointer-events-none select-none">
          <Image
            src={service.number}
            alt=""
            width={220}
            height={220}
            className="w-[160px] md:w-[220px] h-auto"
          />
        </div>

        <div className="relative max-w-2xl">
          <h3 className="font-avenir font-bold text-white text-[28px] md:text-[34px] leading-tight mb-5">
            {service.title}
          </h3>
          <p className="font-nunito-sans text-[16px] leading-[1.7] text-white/85 mb-8">
            {service.description}
          </p>

          <button
            aria-label="Learn more"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#0f4c4b] hover:scale-105 transition-transform"
          >
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoreServicesArea() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="w-full bg-white">
      {/* Heading */}
      <div className="max-w-[1500px] mx-auto px-6 pt-16 pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="inline-block bg-[#439897] text-white font-avenir font-normal text-[14px] px-3 py-1 rounded">
            Core Services Area
          </span>
          <h2 className="font-avenir font-extrabold text-[40px] leading-[1.1] mt-4 text-[#0f4c4b]">
            Our Core Services Area
          </h2>
        </div>
        <p className="font-nunito-sans text-[16px] text-gray-600 max-w-md">
          From workplace investigations to compliance and trusted advisory
          services, we provide the expertise organizations rely on at every
          stage.
        </p>
      </div>

      {/* Stack area: give it enough height so scroll drives the stack transitions */}
      <div
        ref={containerRef}
        className="relative max-w-[1500px] mx-auto px-6"
        style={{ height: `${services.length * 100}vh` }}
      >
        {/* Decorative stack lines behind card 1 (visible before/while first card sits) */}
        <div className="sticky top-28 pointer-events-none">
          <div className="relative">
            {/* two thin "paper" layers peeking from behind the top card */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-[96%] h-8 rounded-2xl bg-[#0f4c4b]/25" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-[98%] h-8 rounded-2xl bg-[#0f4c4b]/45" />
          </div>
        </div>

        {/* Sticky stacked cards */}
        <div className="relative -mt-16">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              total={services.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
