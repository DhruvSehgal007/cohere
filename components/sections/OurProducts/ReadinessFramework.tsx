"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Regulatory Drivers",
    description:
      "Evolving laws, inspection frameworks, NCV advisories and state guidelines driving higher governance expectations across India.",
  },
  {
    number: "02",
    title: "Five Pillars of Inspection Readiness",
    list: [
      "Governance",
      "Statutory Compliance",
      "Internal Committee",
      "Complaint Management",
      "Workplace Readiness",
    ],
  },
  {
    number: "03",
    title: "Assessment",
    description:
      "Comprehensive assessment across all pillars, documentation, processes, capability and implementation effectiveness.",
  },
  {
    number: "04",
    title: "Inspection Readiness Score",
    description:
      "Cohere Readiness™ Scorecard with Red-Amber-Green dashboard and risk heat map.",
  },
  {
    number: "05",
    title: "Governance Roadmap",
    description:
      "Prioritised action plan with immediate, medium-term and long-term interventions for sustainable improvement.",
  },
];

export default function ReadinessFramework() {
  const [activeStep, setActiveStep] = useState(0);

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        {
          threshold: 0.55,
          rootMargin: "-15% 0px -35% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="w-full bg-[#F7F8FA] py-[70px] md:py-[90px]">
      <div className="container-custom">
        <div
          className="
            grid
            grid-cols-1
            gap-[50px]
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-[80px]
          "
        >
          {/* LEFT STICKY SIDE */}
          <div className="lg:relative">
            <div className="lg:sticky lg:top-[110px]">
              {/* Label */}
              <div
                className="
                  inline-flex
                  min-h-[28px]
                  items-center
                  rounded-tr-[5px]
                  rounded-br-[5px]
                  bg-[#439897]
                  px-[9px]
                  shadow-[2px_2px_5px_rgba(0,0,0,0.22)]
                "
              >
                <span
                  className="
                    font-avenir
                    text-[13px]
                    font-normal
                    uppercase
                    leading-[22px]
                    text-white
                    md:text-[14px]
                  "
                >
                  Cohere Readiness™
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  mt-[14px]
                  max-w-[410px]
                  font-avenir
                  text-[30px]
                  font-[800]
                  leading-[1.15]
                  text-[#0D1E1E]
                  md:text-[36px]
                  lg:text-[40px]
                "
              >
                The CohereReadiness™
                <br />
                Framework
              </h2>

              {/* Sub text */}
              <p
                className="
                  mt-[18px]
                  max-w-[360px]
                  font-nunito-sans
                  text-[14px]
                  leading-[22px]
                  tracking-[0.04em]
                  text-[#5B5B5B]
                  md:text-[15px]
                "
              >
                A structured journey towards Inspection Ready Governance
              </p>
            </div>
          </div>

          {/* RIGHT STEPS */}
          <div className="relative">
            {/* Vertical timeline */}
            <div
              className="
                absolute
                left-[24px]
                top-[30px]
                bottom-[30px]
                w-[2px]
                bg-[#D9DDDD]
                md:left-[28px]
              "
            />

            {/* Active green line */}
            <div
              className="
                absolute
                left-[24px]
                top-[30px]
                w-[2px]
                bg-[#439897]
                transition-all
                duration-500
                md:left-[28px]
              "
              style={{
                height: `${(activeStep / (steps.length - 1)) * 100}%`,
                maxHeight: "calc(100% - 60px)",
              }}
            />

            <div className="space-y-[70px] md:space-y-[90px]">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPassed = index < activeStep;

                return (
                  <div
                    key={step.number}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className="
                      relative
                      grid
                      min-h-[220px]
                      grid-cols-[50px_1fr]
                      gap-[20px]
                      md:grid-cols-[58px_1fr]
                      md:gap-[26px]
                    "
                  >
                    {/* Pointer */}
                    <div className="relative z-10 flex justify-center">
                      <div
                        className={`
                          flex
                          h-[48px]
                          w-[48px]
                          items-center
                          justify-center
                          rounded-full
                          font-nunito-sans-bold
                          text-[16px]
                          transition-all
                          duration-500
                          md:h-[56px]
                          md:w-[56px]
                          ${
                            isActive || isPassed
                              ? "bg-[#439897] text-white"
                              : "bg-[#E2E2E2] text-[#333333]"
                          }
                        `}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Step Card */}
                    <div
                      className={`
                        self-start
                        rounded-[12px]
                        px-[22px]
                        py-[20px]
                        transition-all
                        duration-500
                        md:px-[26px]
                        md:py-[24px]
                        ${
                          isActive
                            ? "bg-[#FEBC5A]"
                            : "bg-transparent"
                        }
                      `}
                    >
                      <h3
                        className="
                          font-nunito-sans-bold
                          text-[17px]
                          leading-[24px]
                          text-[#0D1E1E]
                          md:text-[18px]
                        "
                      >
                        {step.title}
                      </h3>

                      {step.description && (
                        <p
                          className="
                            mt-[8px]
                            max-w-[720px]
                            font-nunito-sans
                            text-[14px]
                            leading-[22px]
                            tracking-[0.03em]
                            text-[#5B5B5B]
                            md:text-[15px]
                          "
                        >
                          {step.description}
                        </p>
                      )}

                      {step.list && (
                        <ul
                          className="
                            mt-[10px]
                            space-y-[3px]
                            pl-[18px]
                            font-nunito-sans
                            text-[14px]
                            leading-[20px]
                            tracking-[0.03em]
                            text-[#5B5B5B]
                          "
                        >
                          {step.list.map((item) => (
                            <li
                              key={item}
                              className="list-disc marker:text-[#439897]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}