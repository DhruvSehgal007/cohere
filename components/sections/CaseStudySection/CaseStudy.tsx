// src/sections/CaseStudySection/CaseStudy.tsx

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

import {
  CASES,
  DETAIL_ICONS,
  HEX_CLIP,
} from "@/components/CaseStudy/CaseStudy.data";

import attorneyPhoto from "@/assets/images/CaseStudy/summay-image.png";
import clientIcon from "@/assets/images/CaseStudy/client-icon.svg";
import summaryimage from "@/assets/images/CaseStudy/summay-image.png";
import attorneyBackground from "@/assets/images/CaseStudy/attorney-background.png";
import attorneySideImage from "@/assets/images/CaseStudy/Attorney-side-image.png";

export function CaseStudy() {
  const [activeId, setActiveId] = useState(CASES[0]!.id);
  const [activeSolution, setActiveSolution] = useState(0);

  const active = CASES.find((c) => c.id === activeId)!;

  const detailItems = [
    {
      label: "Client",
      value: active.details.client,
      icon: clientIcon,
    },
    {
      label: "Attorney",
      value: active.details.attorney,
      icon: clientIcon,
    },
    {
      label: "Case Start",
      value: active.details.start,
      icon: clientIcon,
    },
    {
      label: "Execution Time",
      value: active.details.time,
      icon: clientIcon,
    },
    {
      label: "Result",
      value: active.details.result,
      icon: clientIcon,
    },
    {
      label: "Other",
      value: active.details.other,
      icon: clientIcon,
    },
  ];

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.985,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      y: -18,
      scale: 0.99,
      filter: "blur(2px)",
    },
  };

  const solutionVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <main className="bg-background pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      {/* =====================================================
          TOP HEADING
      ===================================================== */}
      <div className="container-custom mb-10 px-4 sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center rounded-br-[8px] rounded-tr-[8px] bg-[#439897] px-3 py-1.5">
              <span className="font-avenir text-[12px] uppercase tracking-[0.2px] text-white sm:text-[14px]">
                CATEGORIES
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

                lg:max-w-[600px]
              "
            >
              Explore Case Study Categories
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

              lg:max-w-[520px]
              lg:text-right
              lg:text-[18px]
            "
          >
            Browse expert case studies, practical resources, compliance
            updates, & workplace insights designed to help organizations build
            safer, more inclusive, & legally compliant workplaces.
          </p>
        </div>
      </div>

      {/* =====================================================
          CATEGORY TABS
      ===================================================== */}
      <nav className="container-custom flex flex-col items-center gap-5">
        {/* First row */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:gap-[37px]">
          {CASES.slice(0, 4).map((c) => {
            const isActive = c.id === activeId;

            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveId(c.id);
                  setActiveSolution(0);
                }}
                aria-pressed={isActive}
                className={`
                  flex
                  h-[70px]
                  w-full
                  items-center
                  justify-center
                  rounded-[5px]
                  border
                  px-5
                  font-nunito-sans-bold
                  text-[14px]
                  leading-[20px]
                  tracking-[2%]

                  transition-all
                  duration-300
                  ease-out

                  sm:h-[80px]
                  sm:text-[16px]
                  sm:leading-[23px]

                  lg:h-[91px]
                  lg:w-[348px]
                  lg:text-[18px]
                  lg:leading-[26px]
                  lg:tracking-[4%]

                  ${
                    isActive
                      ? "scale-[1.015] border-transparent bg-[#FEBC5A] text-black shadow-[0_8px_20px_rgba(254,188,90,0.22)]"
                      : "border-[#D9D9D9] bg-white text-[#5B5B5B] shadow-[0_3px_8px_rgba(0,0,0,0.12)] hover:-translate-y-[2px] hover:border-transparent hover:bg-[#FEBC5A] hover:text-black hover:shadow-[0_8px_18px_rgba(254,188,90,0.2)]"
                  }
                `}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Second row */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-[37px]">
          {CASES.slice(4, 7).map((c) => {
            const isActive = c.id === activeId;

            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveId(c.id);
                  setActiveSolution(0);
                }}
                aria-pressed={isActive}
                className={`
                  flex
                  h-[70px]
                  w-full
                  items-center
                  justify-center
                  rounded-[5px]
                  border
                  px-5
                  font-nunito-sans-bold
                  text-[14px]
                  leading-[20px]
                  tracking-[2%]

                  transition-all
                  duration-300
                  ease-out

                  sm:h-[80px]
                  sm:text-[16px]
                  sm:leading-[23px]

                  lg:h-[91px]
                  lg:w-[348px]
                  lg:text-[18px]
                  lg:leading-[26px]
                  lg:tracking-[4%]

                  ${
                    isActive
                      ? "scale-[1.015] border-transparent bg-[#FEBC5A] text-black shadow-[0_8px_20px_rgba(254,188,90,0.22)]"
                      : "border-[#D9D9D9] bg-white text-[#5B5B5B] shadow-[0_3px_8px_rgba(0,0,0,0.12)] hover:-translate-y-[2px] hover:border-transparent hover:bg-[#FEBC5A] hover:text-black hover:shadow-[0_8px_18px_rgba(254,188,90,0.2)]"
                  }
                `}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* =====================================================
          ALL CHANGING CASE CONTENT
      ===================================================== */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* =================================================
              HERO
          ================================================= */}
          <section className="relative mt-24 bg-[#439897] pt-8 pb-24 sm:pt-10 sm:pb-28 lg:pt-10 lg:pb-32">
            <div className="container-custom relative z-10 flex flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:text-left">
              <h1 className="font-avenir tracking-tight text-white">
                <span className="text-[32px] font-bold leading-[40px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px]">
                  Case
                </span>{" "}
                <span className="text-[32px] font-normal leading-[40px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px]">
                  Study
                </span>
              </h1>

              <motion.p
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.08,
                }}
                className="font-nunito-sans-bold text-[16px] leading-[22px] tracking-[2%] text-white sm:text-[17px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]"
              >
                {active.badge}
              </motion.p>
            </div>
          </section>

          {/* =================================================
              CASE DETAILS
          ================================================= */}
          <section className="casestudydiv">
            <div className="container-custom relative z-20 -top-[100px] lg:-top-[100px]">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[5px] bg-white px-6 py-6 shadow-[0_4px_12px_rgba(0,0,0,0.12)] sm:px-8 sm:py-7 lg:px-11 lg:py-8"
              >
                <h2 className="font-nunito-sans-bold text-[28px] leading-[36px] text-[#0D1E1E] sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[48px]">
                  Case Details
                </h2>

                <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-9 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-0">
                  {detailItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.08 + index * 0.05,
                      }}
                      className="flex flex-col items-center text-center"
                    >
                      <span className="flex h-[60px] w-[60px] items-center justify-center rounded-[5px] bg-[#439897] sm:h-[70px] sm:w-[70px] lg:h-[80px] lg:w-[80px]">
                        <img
                          src={item.icon.src}
                          alt=""
                          className="h-[34px] w-[34px] object-contain sm:h-[40px] sm:w-[40px] lg:h-[44px] lg:w-[44px]"
                        />
                      </span>

                      <span className="mt-3 font-nunito-sans text-[14px] leading-[20px] tracking-[2%] text-[#5B5B5B] sm:text-[16px] sm:leading-[23px] lg:mt-4 lg:text-[20px] lg:leading-[26px] lg:tracking-[4%]">
                        {item.label}
                      </span>

                      <span className="mt-1 font-nunito-sans-bold text-[14px] leading-[20px] tracking-[2%] text-[#439897] sm:text-[16px] sm:leading-[23px] lg:text-[20px] lg:leading-[26px] lg:tracking-[4%]">
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* BROCHURE */}
                <div className="mt-7 flex flex-col gap-5 border-t border-[#E5E5E5] pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-8 lg:pt-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                    <span className="font-nunito-sans-bold text-[28px] leading-[36px] text-[#0D1E1E] sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[48px]">
                      BROCHURE
                    </span>

                    <span className="max-w-[380px] font-nunito-sans text-[18px] tracking-[2%] text-[#5B5B5B] sm:text-[16px] lg:text-[18px] lg:tracking-[4%]">
                      Service documents and brochures will be available here.
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-[14px]">
                    <button
                      type="button"
                      className="
                        inline-flex
                        h-[50px]
                        w-full
                        max-w-[260px]
                        items-center
                        justify-center
                        gap-3
                        rounded-[5px]
                        bg-gradient-to-r
                        from-[#FEBC5A]
                        to-[#FEBC5A]
                        px-4
                        font-nunito-sans
                        text-[15px]
                        tracking-[2%]
                        text-black

                        transition-all
                        duration-300

                        hover:-translate-y-[2px]
                        hover:shadow-lg

                        sm:h-[55px]
                        sm:text-[16px]
                        sm:tracking-[3%]

                        lg:w-[260px]
                        lg:text-[18px]
                        lg:tracking-[4%]
                      "
                    >
                      BROCHURE.DOC

                      <Mail className="h-[18px] w-[18px] sm:h-[21px] sm:w-[21px] lg:h-[24px] lg:w-[24px]" />
                    </button>

                    <button
                      type="button"
                      className="
                        inline-flex
                        h-[50px]
                        w-full
                        max-w-[260px]
                        items-center
                        justify-center
                        gap-3
                        rounded-[5px]
                        bg-gradient-to-r
                        from-[#FEBC5A]
                        to-[#FEBC5A]
                        px-4
                        font-nunito-sans
                        text-[15px]
                        tracking-[2%]
                        text-black

                        transition-all
                        duration-300

                        hover:-translate-y-[2px]
                        hover:shadow-lg

                        sm:h-[55px]
                        sm:text-[16px]
                        sm:tracking-[3%]

                        lg:w-[260px]
                        lg:text-[18px]
                        lg:tracking-[4%]
                      "
                    >
                      BROCHURE.PDF

                      <Mail className="h-[18px] w-[18px] sm:h-[21px] sm:w-[21px] lg:h-[24px] lg:w-[24px]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* =================================================
              SUMMARY
          ================================================= */}
          <section className="container-custom mx-auto grid min-w-0 max-w-full gap-10 overflow-hidden px-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-[70px]">
            {/* IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full min-w-0 max-w-[430px] overflow-hidden"
            >
              <Image
                src={summaryimage}
                alt={`Case work for ${active.badge}`}
                width={900}
                height={900}
                sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 430px, 430px"
                className="h-auto w-full max-w-full object-contain"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full min-w-0 max-w-full"
            >
              <h2 className="font-avenir text-[28px] font-extrabold leading-[36px] tracking-normal text-[#0D1E1E] sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[49px]">
                Summary Of The{" "}
                <span className="text-[#439897]">
                  {active.summaryTitle.replace("Summary Of The ", "")}
                </span>
              </h2>

              <div className="mt-5 space-y-4">
                {active.intro.map((p) => (
                  <p
                    key={p}
                    className="font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[15px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <h3 className="mt-8 font-nunito-sans-bold text-[17px] leading-[23px] tracking-[0.04em] text-[#000000] sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[26px]">
                {active.problemTitle}
              </h3>

              <p className="mt-3 font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[15px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]">
                {active.problem}
              </p>

              <ul className="mt-4 space-y-2">
                {active.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[15px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]"
                  >
                    <span className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#000000]">
                      <span className="h-[8px] w-[8px] rounded-full bg-[#439897]" />
                    </span>

                    <span>
                      {b.includes("2 million dollars") ? (
                        <>
                          Litigation amount up to{" "}
                          <span className="text-[#439897]">
                            2 million dollars
                          </span>
                        </>
                      ) : (
                        b
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-nunito-sans-bold text-[17px] leading-[23px] tracking-[0.04em] text-[#000000] sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[26px]">
                {active.approachTitle}
              </h3>

              <p className="mt-3 font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[15px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]">
                {active.approach}
              </p>
            </motion.div>
          </section>

          {/* =================================================
              ATTORNEY
          ================================================= */}
          <section
            className="mt-14 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${attorneyBackground.src})`,
            }}
          >
            <div className="container-custom mx-auto flex min-h-[300px] items-center px-4 py-12 sm:min-h-[330px] sm:py-14 lg:min-h-[360px] lg:py-16">
              <div className="flex w-full min-w-0 flex-col gap-8 sm:flex-row sm:items-center sm:justify-between lg:gap-20">
                {/* CONTENT */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                  className="w-full max-w-[900px] min-w-0"
                >
                  <h2 className="font-avenir text-[28px] font-extrabold leading-[36px] text-[#0D1E1E] sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[49px]">
                    Attorney In This Case:
                  </h2>

                  <p className="mt-5 font-nunito-sans-bold text-[16px] leading-[22px] tracking-[0.04em] text-[#006C6E] sm:mt-6 sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[26px]">
                    {active.attorney.name}
                  </p>

                  <p className="mt-1 font-nunito-sans text-[14px] leading-[21px] tracking-[0.04em] text-[#5B5B5B] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]">
                    {active.attorney.role}
                  </p>

                  <p className="mt-5 max-w-[850px] font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:mt-6 sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]">
                    <span className="font-nunito-sans-bold text-[#0D1E1E]">
                      Why choose this Lawyer:
                    </span>{" "}
                    {active.attorney.why}
                  </p>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                  className="relative mx-auto h-auto w-full max-w-[300px] shrink-0 sm:max-w-[345px] lg:h-[340px] lg:w-[380px] lg:max-w-none"
                >
                  <Image
                    src={attorneySideImage}
                    alt={active.attorney.name}
                    width={380}
                    height={340}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 345px, 380px"
                    className="h-auto w-full object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* =================================================
              SOLUTIONS
          ================================================= */}
          <section className="container-custom mx-auto mt-16 px-4 sm:mt-20 lg:mt-24">
            {/* Tabs */}
            <div className="flex justify-start lg:justify-end">
              <div className="flex w-fit border-b border-dashed border-[#8A8A8A]">
                {active.solutions.map((s, i) => {
                  const isActive = i === activeSolution;

                  return (
                    <button
                      key={s.label}
                      onClick={() => setActiveSolution(i)}
                      className={`
                        relative
                        min-w-[95px]
                        px-4
                        pb-3
                        text-center
                        font-nunito-sans-bold
                        text-[16px]
                        leading-[18px]
                        tracking-[0.04em]

                        transition-all
                        duration-300

                        sm:min-w-[110px]
                        sm:text-[18px]
                        sm:leading-[20px]

                        lg:min-w-[125px]
                        lg:px-5
                        lg:pb-3
                        lg:text-[20px]
                        lg:leading-[22px]

                        ${
                          isActive
                            ? "text-[#006C6E]"
                            : "text-[#2E262E] hover:text-[#006C6E]"
                        }
                      `}
                    >
                      {s.label}

                      {isActive && (
                        <motion.span
                          layoutId="solution-active-line"
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 35,
                          }}
                          className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#006C6E]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SOLUTION CONTENT */}
            <div className="mt-7 sm:mt-8 lg:mt-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSolution}
                  variants={solutionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >
                  <p className="font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]">
                    {active.solutions[activeSolution]!.body}
                  </p>

                  <h3 className="mt-7 font-nunito-sans-bold text-[17px] leading-[23px] tracking-[0.04em] text-[#000000] sm:mt-8 sm:text-[18px] sm:leading-[24px] lg:mt-9 lg:text-[20px] lg:leading-[26px]">
                    {active.solutions[activeSolution]!.heading}
                  </h3>

                  <p className="mt-3 font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]">
                    {active.solutions[activeSolution]!.outcome}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}