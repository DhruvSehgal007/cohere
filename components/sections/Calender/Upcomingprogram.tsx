"use client";

import Image from "next/image";
import upcomingProgramme from "@/assets/images/Calender/upcomingprogramme.png";
import upcomingProgrammeTablet from "@/assets/images/Calender/upcomingprogramme-tablets.png";
import locationicon from "@/assets/images/Calender/location-icon.svg";

export default function Upcomingprogram() {
  return (
    <section id="training-workshops" className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">

      {/* =========================
          HEADING
      ========================= */}
      <div className="container-custom px-4 sm:px-6 mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
              Upcoming Events
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
                lg:max-w-[600px]
                text-[32px]
                sm:text-[36px]
                md:text-[40px]
              "
            >
              Upcoming Programmes
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
            Find upcoming sessions designed to help employees, Internal
            Committee members, HR teams, and workplace leaders build practical
            knowledge and strengthen workplace practices.
          </p>

        </div>
      </div>


      


      {/* =========================
          UPCOMING PROGRAMME CARD
      ========================= */}
   <div className="container-custom px-4 sm:px-6">
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
        py-5

        sm:px-8
        sm:py-8

        min-[901px]:px-8
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
          text-[32px]
          font-bold
          leading-none
          text-white

          sm:text-[36px]
          md:text-[40px]
        "
      >
        5 DECEMBER 2024
      </h3>

      {/* LOCATION */}
      <div className="mt-3 flex items-center gap-1">
  <Image
    src={locationicon}
    alt="Location"
    width={16}
    height={16}
    className="h-[18px] w-[18px] object-contain"
  />

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
          text-[#004140]

          sm:text-[16px]
          md:text-[18px]
          sm:text-[18px]
        "
      >
        An interactive learning experience focused on workplace sexual
        harassment, practical case discussions, and better understanding
        of PoSH responsibilities.
      </p>

      {/* AUDIENCE */}
      
<ul
  className="
    mt-5
    flex
    flex-col
    gap-2
    font-nunito-sans
    text-[16px]
    font-bold
    leading-[1.5]
    text-[#003232]

    sm:flex-row
    sm:flex-wrap
    sm:items-center
    sm:gap-x-2

    min-[901px]:text-[16px]
    min-[1201px]:text-[16px]
  "
>
  <li className="list-none">
    For: HR Professionals
  </li>

  <li className="list-none before:mr-2 before:content-['•'] sm:before:content-none">
    <span className="hidden sm:inline">• </span>
    IC Members
  </li>

  <li className="list-none before:mr-2 before:content-['•'] sm:before:content-none">
    <span className="hidden sm:inline">• </span>
    Workplace Leaders
  </li>
</ul>


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
          text-[#003232]
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