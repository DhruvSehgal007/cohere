"use client";

import Image from "next/image";
import upcomingProgramme from "@/assets/images/Calender/upcomingprogramme.png";
import upcomingProgrammeTablet from "@/assets/images/Calender/upcomingprogramme-tablets.png";

export default function Upcomingprogram() {
  return (
    <section className="py-10 sm:py-12 md:py-16">

      {/* =========================
          HEADING
      ========================= */}
      <div className="container-custom px-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

          <div className="w-full lg:w-1/2">
            <span
              className="
                inline-block
                rounded
                bg-[#439897]
                px-3
                py-1
                font-avenir
                text-[12px]
                text-white
                sm:px-4
                sm:text-[14px]
              "
            >
              UPCOMING EVENTS
            </span>

            <h2
              className="
                mt-3
                w-full
                font-avenir
                text-[22px]
                font-extrabold
                leading-[1.15]
                text-[#101C1C]
                sm:text-[30px]
                md:mt-4
                md:text-[36px]
                lg:max-w-[540px]
                lg:text-[40px]
              "
            >
              Upcoming Programmes
            </h2>
          </div>

          <p
            className="
              w-full
              font-nunito-sans
              text-[14px]
              leading-6
              text-[#5B5B5B]
              sm:text-[15px]
              sm:leading-7
              lg:w-1/2
              lg:max-w-[520px]
              lg:text-right
              lg:text-[16px]
            "
          >
            Find upcoming sessions designed to help employees, Internal
            Committee members, HR teams, and workplace leaders build practical
            knowledge and strengthen workplace practices.
          </p>

        </div>
      </div>


      {/* =========================
          UPCOMING PROGRAMME CARD
      ========================= */}
   <div className="container-custom mt-10 px-4 sm:px-6">
  <div
    className="
      grid
      w-full
      grid-cols-1
      overflow-hidden
      bg-[#439897]

      min-[901px]:grid-cols-[60%_34%]
      min-[1201px]:grid-cols-[40%_60%]
    "
  >
    {/* ================= LEFT CONTENT ================= */}
    <div
      className="
        relative
        z-10
        flex
        min-w-0
        flex-col
        justify-center

        px-5
        py-8

        sm:px-7
        md:px-8

        min-[901px]:px-6
        min-[901px]:py-8

        min-[1201px]:px-10
        min-[1201px]:py-10
      "
    >
      {/* LABEL */}
      <span
        className="
          mb-4
          w-fit
          rounded-full
          bg-[#59CAC9]
          px-3
          py-1
          font-avenir
          text-[12px]
          font-bold
          uppercase
          text-white
        "
      >
        POSH+ MASTERCLASS
      </span>

      {/* DATE */}
      <h3
        className="
          font-avenir
          text-[28px]
          font-bold
          leading-none
          text-white

          sm:text-[32px]
          min-[901px]:text-[28px]
          min-[1100px]:text-[32px]
          min-[1201px]:text-[40px]
        "
      >
        5 DECEMBER 2024
      </h3>

      {/* LOCATION */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[12px] text-white">
          ●
        </span>

        <span
          className="
            font-avenir
            text-[14px]
            font-bold
            uppercase
            text-white
          "
        >
          GURUGRAM
        </span>
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          mt-6
          w-full
          max-w-[500px]
          font-nunito-sans
          text-[16px]
          leading-[1.55]
          tracking-[0.02em]
          text-[#174E4D]

          sm:text-[18px]

          min-[901px]:text-[16px]
          min-[1201px]:text-[18px]
        "
      >
        An interactive learning experience focused on workplace sexual
        harassment, practical case discussions, and better understanding
        of PoSH responsibilities.
      </p>

      {/* AUDIENCE */}
      <p
        className="
          mt-5
          font-nunito-sans
          text-[16px]
          font-bold
          leading-[1.5]
          text-[#003232]

          min-[901px]:text-[14px]
          min-[1201px]:text-[16px]
        "
      >
        For: HR Professionals • IC Members • Workplace Leaders
      </p>

      {/* BUTTON */}
      <button
        type="button"
        className="
          mt-7
          w-fit
          rounded-[6px]
          bg-[#FFB84D]
          px-5
          py-3
          font-avenir
          text-[14px]
          font-bold
          text-[#101C1C]
          transition-colors
          duration-200

          hover:bg-[#F4A936]

          sm:text-[16px]
        "
      >
        Book Your Seat →
      </button>
    </div>

    {/* ================= RIGHT IMAGE ================= */}
    {/* ================= RIGHT IMAGE ================= */}
<div
  className="
    relative
    hidden
    min-w-0
    w-full
    overflow-hidden

    min-[901px]:block
  "
>
  {/* TABLET IMAGE: 901px–1200px */}
  <div className="absolute inset-0 hidden min-[901px]:block min-[1201px]:hidden">
    <Image
      src={upcomingProgrammeTablet}
      alt="Upcoming programme artwork"
      fill
      className="object-contain object-right"
    />
  </div>

  {/* DESKTOP IMAGE: 1201px+ */}
  <div className="absolute inset-0 hidden min-[1201px]:block">
    <Image
      src={upcomingProgramme}
      alt="Upcoming programme artwork"
      fill
      className="object-fill"
      priority
    />
  </div>
</div>
  </div>
</div>

    </section>
  );
}