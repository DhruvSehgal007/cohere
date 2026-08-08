// src/sections/CaseStudySection/CaseStudy.tsx
"use client";
import { useState } from "react";
import { Download, Check } from "lucide-react";
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
import Image from "next/image";

export function CaseStudy() {
  const [activeId, setActiveId] = useState(CASES[0]!.id);
  const [activeSolution, setActiveSolution] = useState(0);
  const active = CASES.find((c) => c.id === activeId)!;

  const detailItems = [
    { label: "Client", value: active.details.client, icon: clientIcon },
    { label: "Attorney", value: active.details.attorney, icon: clientIcon },
    { label: "Case Start", value: active.details.start, icon: clientIcon },
    { label: "Execution Time", value: active.details.time, icon: clientIcon },
    { label: "Result", value: active.details.result, icon: clientIcon },
    { label: "Other", value: active.details.other, icon: clientIcon },
  ];

  return (
    <main className="bg-background pb-20 mt-20 py-20">
      <div className="container-custom">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block w-auto md:w-[220px] bg-[#439897] text-white font-avenir font-normal text-[14px] pl-3 pr-8 py-1 rounded text-left">
              CATEGORIES
            </span>
            <h2 className="font-avenir font-extrabold text-[40px] leading-tight text-[#0D1E1E] mt-4 max-w-[380px] md:max-[1200px]:text-[32px]">
              Explore Case Study Categories
            </h2>
          </div>
          <p className="font-nunito-sans font-normal text-[20px] text-[#2E262E] max-w-[680px] ml-auto text-right max-[767px]:ml-0 max-[767px]:text-left max-[767px]:text-[16px] md:max-[1200px]:text-[16px]">
            Browse expert case studies, practical resources, compliance updates,
            & workplace insights designed to help organizations build safer,
            more inclusive, & legally compliant workplaces.
          </p>
        </div>
      </div>
      {/* Tabs */}
      <nav className="container-custom flex flex-col items-center gap-5">
        {/* First row - 4 buttons */}
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
                className={`flex h-[70px] w-full items-center justify-center rounded-[5px] border px-5 font-nunito-sans-bold text-[14px] leading-[20px] tracking-[2%] transition-colors sm:h-[80px] sm:text-[16px] sm:leading-[23px] lg:h-[91px] lg:w-[348px] lg:text-[18px] lg:leading-[26px] lg:tracking-[4%] ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-[#439897] to-[#2E262E] text-white shadow-sm"
                    : "border-[#D9D9D9] bg-white text-[#2E262E] shadow-[0_3px_8px_rgba(0,0,0,0.12)] hover:border-transparent hover:bg-gradient-to-r hover:from-[#439897] hover:to-[#2E262E] hover:text-white"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Second row - 3 buttons */}
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
                className={`flex h-[70px] w-full items-center justify-center rounded-[5px] border px-5 font-nunito-sans-bold text-[14px] leading-[20px] tracking-[2%] transition-colors sm:h-[80px] sm:text-[16px] sm:leading-[23px] lg:h-[91px] lg:w-[348px] lg:text-[18px] lg:leading-[26px] lg:tracking-[4%] ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-[#439897] to-[#2E262E] text-white shadow-sm"
                    : "border-[#D9D9D9] bg-white text-[#2E262E] shadow-[0_3px_8px_rgba(0,0,0,0.12)] hover:border-transparent hover:bg-gradient-to-r hover:from-[#439897] hover:to-[#2E262E] hover:text-white"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Hero */}
      {/* Hero + Case Details */}
      <section className="mt-24 relative bg-[#439897] pt-8 pb-24 sm:pt-10 sm:pb-28 lg:pt-10 lg:pb-32">
        {/* Hero content */}
        <div className="container-custom relative z-10 flex flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:text-left">
          <h1 className="font-avenir tracking-tight text-white">
            <span className="font-bold text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px]">
              Case
            </span>{" "}
            <span className="font-normal text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px]">
              Study
            </span>
          </h1>

          <p className="font-nunito-sans-bold text-[16px] leading-[22px] tracking-[2%] text-white sm:text-[17px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]">
            {active.badge}
          </p>
        </div>

        {/* Case Details Card */}
      </section>

      <section className="casestudydiv">
        <div className="container-custom relative z-20 -top-[100px] lg:-top-[100px]">
          <div className="rounded-[5px] bg-white px-6 py-6 shadow-[0_4px_12px_rgba(0,0,0,0.12)] sm:px-8 sm:py-7 lg:px-11 lg:py-8">
            {/* Heading */}
            <h2 className="font-nunito-sans-bold text-[28px] leading-[36px] text-[#0D1E1E] sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[48px]">
              Case Details
            </h2>

            {/* Details */}
            {/* Details */}
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-9 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-0">
              {detailItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center"
                >
                  {/* Same SVG icon for now */}
                  <span className="flex h-[60px] w-[60px] items-center justify-center rounded-[5px] bg-[#439897] sm:h-[70px] sm:w-[70px] lg:h-[80px] lg:w-[80px]">
                    <img
                      src={clientIcon.src}
                      alt=""
                      className="h-[34px] w-[34px] object-contain sm:h-[40px] sm:w-[40px] lg:h-[44px] lg:w-[44px]"
                    />
                  </span>

                  {/* Label */}
                  <span className="mt-3 font-nunito-sans text-[14px] leading-[20px] tracking-[2%] text-[#5B5B5B] sm:text-[16px] sm:leading-[23px] lg:mt-4 lg:text-[20px] lg:leading-[26px] lg:tracking-[4%]">
                    {item.label}
                  </span>

                  {/* Value */}
                  <span className="mt-1 font-nunito-sans-bold text-[14px] leading-[20px] tracking-[2%] text-[#439897] sm:text-[16px] sm:leading-[23px] lg:text-[20px] lg:leading-[26px] lg:tracking-[4%]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Brochure */}
            <div className="mt-7 flex flex-col gap-5 border-t border-[#E5E5E5] pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-8 lg:pt-7">
              {/* Brochure text */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                <span className="font-nunito-sans-bold text-[28px] leading-[36px] text-[#0D1E1E] sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[48px]">
                  BROCHURE
                </span>

                <span className="max-w-[380px] font-nunito-sans text-[18px] tracking-[2%] text-[#5B5B5B] sm:text-[16px] lg:text-[18px]  lg:tracking-[4%]">
                  Download our documents to see specific data of the service and
                  how we work.
                </span>
              </div>

              {/* Brochure buttons */}
              <div className="flex flex-wrap gap-[14px]">
                <a
                  href="#"
                  className="inline-flex h-[50px] w-full max-w-[260px] items-center justify-center gap-3 rounded-[5px] bg-gradient-to-r from-[#439897] to-[#2E262E] px-4 font-nunito-sans text-[15px] leading-auto tracking-[2%] text-white transition-opacity hover:opacity-90 sm:h-[55px] sm:text-[16px] sm:tracking-[3%] lg:w-[260px] lg:text-[18px] lg:tracking-[4%]"
                >
                  BROCHURE.DOC
                  <Download className="h-[18px] w-[18px] sm:h-[21px] sm:w-[21px] lg:h-[24px] lg:w-[24px]" />
                </a>

                <a
                  href="#"
                  className="inline-flex h-[50px] w-full max-w-[260px] items-center justify-center gap-3 rounded-[5px] bg-gradient-to-r from-[#439897] to-[#2E262E] px-4 font-nunito-sans text-[15px] leading-auto tracking-[2%] text-white transition-opacity hover:opacity-90 sm:h-[55px] sm:text-[16px] sm:tracking-[3%] lg:w-[260px] lg:text-[18px] lg:tracking-[4%]"
                >
                  BROCHURE.PDF
                  <Download className="h-[18px] w-[18px] sm:h-[21px] sm:w-[21px] lg:h-[24px] lg:w-[24px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      {/* Summary */}
      <section className="container-custom mx-auto grid min-w-0 max-w-full gap-10 overflow-hidden px-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-[70px]">
        {/* Hexagon Image */}
       <div className="relative mx-auto w-full min-w-0 max-w-[430px] overflow-hidden">
    <Image
      src={summaryimage}
      alt={`Case work for ${active.badge}`}
      width={900}
      height={900}
      sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 430px, 430px"
      className="h-auto w-full max-w-full object-contain"
    />
  </div>

        {/* Content */}
        <div className="w-full min-w-0 max-w-full">
          {/* Main Heading */}
          <h2 className="font-avenir font-extrabold text-[28px] leading-[36px] tracking-normal text-[#0D1E1E] sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[49px]">
            Summary Of The{" "}
            <span className="text-[#439897]">
              {active.summaryTitle.replace("Summary Of The ", "")}
            </span>
          </h2>

          {/* Intro Paragraphs */}
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

          {/* Problems Heading */}
          <h3 className="mt-8 font-nunito-sans-bold text-[17px] leading-[23px] tracking-[0.04em] text-[#000000] sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[26px]">
            {active.problemTitle}
          </h3>

          {/* Problem */}
          <p className="mt-3 font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[15px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]">
            {active.problem}
          </p>

          {/* Bullet Points */}
          {/* Bullet Points */}
<ul className="mt-4 space-y-2">
  {active.bullets.map((b) => (
    <li
      key={b}
      className="flex items-center gap-3 font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[15px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]"
    >
      {/* Reference-style bullet */}
      <span className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#000000]">
        <span className="h-[8px] w-[8px] rounded-full bg-[#439897]" />
      </span>

      <span>
        {b.includes("2 million dollars") ? (
          <>
            Litigation amount up to{" "}
            <span className="text-[#439897]">2 million dollars</span>
          </>
        ) : (
          b
        )}
      </span>
    </li>
  ))}
</ul>

          {/* Approach Heading */}
          <h3 className="mt-8 font-nunito-sans-bold text-[17px] leading-[23px] tracking-[0.04em] text-[#000000] sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[26px]">
            {active.approachTitle}
          </h3>

          {/* Approach */}
          <p className="mt-3 font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[15px] sm:leading-[24px] lg:text-[16px] lg:leading-[26px]">
            {active.approach}
          </p>
        </div>
      </section>

      {/* Attorney */}
{/* Attorney */}
{/* Attorney */}
<section
  className="mt-14 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${attorneyBackground.src})`,
  }}
>
  <div className="container-custom mx-auto flex min-h-[300px] items-center px-4 py-12 sm:min-h-[330px] sm:py-14 lg:min-h-[360px] lg:py-16">
    <div className="flex w-full min-w-0 flex-col gap-8 sm:flex-row sm:items-center sm:justify-between lg:gap-20">

      {/* Content */}
      <div className="w-full max-w-[900px] min-w-0">
        {/* Heading */}
        <h2 className="font-avenir font-extrabold text-[28px] leading-[36px] text-[#0D1E1E] sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[49px]">
          Attorney In This Case:
        </h2>

        {/* Attorney Name */}
        <p className="mt-5 font-nunito-sans-bold text-[16px] leading-[22px] tracking-[0.04em] text-[#006C6E] sm:mt-6 sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[26px]">
          {active.attorney.name}
        </p>

        {/* Role */}
        <p className="mt-1 font-nunito-sans text-[14px] leading-[21px] tracking-[0.04em] text-[#5B5B5B] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]">
          {active.attorney.role}
        </p>

        {/* Why choose */}
        <p className="mt-5 max-w-[850px] font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:mt-6 sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]">
          <span className="font-nunito-sans-bold text-[#0D1E1E]">
            Why choose this Lawyer:
          </span>{" "}
          {active.attorney.why}
        </p>
      </div>

      {/* Attorney Image */}
    <div className="relative mx-auto h-auto w-full max-w-[300px] shrink-0 sm:max-w-[345px] lg:h-[340px] lg:w-[380px] lg:max-w-none">
  <Image
    src={attorneySideImage}
    alt={active.attorney.name}
    width={380}
    height={340}
    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 345px, 380px"
    className="h-auto w-full object-contain"
  />
</div>
    </div>
  </div>
</section>

      {/* Solutions tabs */}
      {/* Solutions */}
{/* Solutions */}
<section className="container-custom mx-auto mt-16 px-4 sm:mt-20 lg:mt-24">

  {/* Tabs - right aligned */}
  <div className="flex justify-start lg:justify-end">
    <div className="flex w-fit border-b border-dashed border-[#8A8A8A]">
      {active.solutions.map((s, i) => {
        const isActive = i === activeSolution;

        return (
          <button
            key={s.label}
            onClick={() => setActiveSolution(i)}
            className={`relative min-w-[95px] px-4 pb-3 text-center font-nunito-sans-bold text-[16px] leading-[18px] tracking-[0.04em] transition-colors sm:min-w-[110px] sm:text-[18px] sm:leading-[20px] lg:min-w-[125px] lg:px-5 lg:pb-3 lg:text-[20px] lg:leading-[22px] ${
              isActive
                ? "font-nunito-sans-bold text-[#006C6E]"
                : "text-[#2E262E] hover:text-[#006C6E]"
            }`}
          >
            {s.label}

            {/* Active underline */}
            {isActive && (
              <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#006C6E]" />
            )}
          </button>
        );
      })}
    </div>
  </div>

  {/* Solution Content */}
  <div className="mt-7 sm:mt-8 lg:mt-9">

    {/* Body */}
    <p className="font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]">
      {active.solutions[activeSolution]!.body}
    </p>

    {/* Heading */}
    <h3 className="mt-7 font-nunito-sans-bold text-[17px] leading-[23px] tracking-[0.04em] text-[#000000] sm:mt-8 sm:text-[18px] sm:leading-[24px] lg:mt-9 lg:text-[20px] lg:leading-[26px]">
      {active.solutions[activeSolution]!.heading}
    </h3>

    {/* Outcome */}
    <p className="mt-3 font-nunito-sans text-[14px] leading-[22px] tracking-[0.04em] text-[#5B5B5B] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[26px]">
      {active.solutions[activeSolution]!.outcome}
    </p>

  </div>
</section>
    </main>
  );
}
