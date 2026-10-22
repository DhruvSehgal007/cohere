"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const pastEvents = [
  {
    id: 1,
    day: "5",
    monthYear: "DEC 2024",
    location: "GURUGRAM",
    category: "POSH MASTERCLASS",
    title: "PoSH+ Masterclass",
    description:
      "A learning programme focused on practical workplace knowledge, discussions, and case-based understanding.",
  },
  {
    id: 2,
    day: "12",
    monthYear: "DEC 2024",
    location: "DELHI",
    category: "POSH MASTERCLASS",
    title: "Workplace Awareness",
    description:
      "A learning programme focused on practical workplace knowledge, discussions, and case-based understanding.",
  },
  {
    id: 3,
    day: "18",
    monthYear: "JAN 2025",
    location: "MUMBAI",
    category: "POSH MASTERCLASS",
    title: "IC Training Session",
    description:
      "A learning programme focused on practical workplace knowledge, discussions, and case-based understanding.",
  },
  {
    id: 4,
    day: "24",
    monthYear: "JAN 2025",
    location: "BENGALURU",
    category: "POSH MASTERCLASS",
    title: "PoSH+ Masterclass",
    description:
      "A learning programme focused on practical workplace knowledge, discussions, and case-based understanding.",
  },
];

export default function PastEvents() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstSetRef = useRef<HTMLDivElement | null>(null);

  const positionRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);

  const dragStartXRef = useRef(0);
  const dragStartPositionRef = useRef(0);

  const [, forceRender] = useState(0);

  /* =========================================
     MOVE TRACK
  ========================================= */
  const updateTrack = () => {
    if (!trackRef.current) return;

    trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
  };

  /* =========================================
     KEEP POSITION INSIDE INFINITE LOOP
  ========================================= */
  const normalizePosition = () => {
    if (!firstSetRef.current) return;

    const setWidth = firstSetRef.current.offsetWidth;

    if (!setWidth) return;

    while (positionRef.current <= -setWidth) {
      positionRef.current += setWidth;
    }

    while (positionRef.current > 0) {
      positionRef.current -= setWidth;
    }
  };

  /* =========================================
     AUTO MARQUEE
  ========================================= */
  useEffect(() => {
    const SPEED = 60;

    const animate = (time: number) => {
      if (previousTimeRef.current === null) {
        previousTimeRef.current = time;
      }

      const delta = time - previousTimeRef.current;
      previousTimeRef.current = time;

      if (!isPausedRef.current && !isDraggingRef.current) {
        positionRef.current -= (SPEED * delta) / 1000;

        normalizePosition();
        updateTrack();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  /* =========================================
     HOVER
  ========================================= */
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
    isDraggingRef.current = false;
    previousTimeRef.current = null;

    forceRender((value) => value + 1);
  };

  /* =========================================
     DRAG START
  ========================================= */
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    isPausedRef.current = true;

    dragStartXRef.current = e.clientX;
    dragStartPositionRef.current = positionRef.current;

    e.currentTarget.setPointerCapture(e.pointerId);

    forceRender((value) => value + 1);
  };

  /* =========================================
     DRAG MOVE
  ========================================= */
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const difference = e.clientX - dragStartXRef.current;

    positionRef.current = dragStartPositionRef.current + difference;

    normalizePosition();
    updateTrack();
  };

  /* =========================================
     DRAG END
  ========================================= */
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // pointer already released
    }

    /*
      If mouse is still over slider,
      keep paused.

      If user moves mouse outside,
      handleMouseLeave resumes autoplay.
    */

    forceRender((value) => value + 1);
  };

  return (
    <section className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      {/* =========================================
          TOP CONTENT
      ========================================= */}
      <div className="container-custom px-4 sm:px-6 mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
              Past Events
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
From Our Learning Calendar            </h2>
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
           Take a look back at previous workshops, masterclasses, and learning programmes conducted with organisations across India.
          </p>

        </div>
      </div>

      {/* =========================================
          SLIDER CONTAINER
      ========================================= */}
      <div className="mt-8">
        {/* VIEWPORT */}
        <div
          className="
            w-full
            overflow-hidden
            touch-pan-y
            cursor-grab
            active:cursor-grabbing
          "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* MOVING TRACK */}
          <div
            ref={trackRef}
            className="
              flex
              w-max
              will-change-transform
            "
          >
            {/* =========================================
                FIRST CARD SET
            ========================================= */}
            <div ref={firstSetRef} className="flex shrink-0 gap-5 pr-5">
              {pastEvents.map((event) => (
                <EventCard key={`first-${event.id}`} event={event} />
              ))}
            </div>

            {/* =========================================
                DUPLICATE SET FOR INFINITE LOOP
            ========================================= */}
            <div aria-hidden="true" className="flex shrink-0 gap-5 pr-5">
              {pastEvents.map((event) => (
                <EventCard key={`second-${event.id}`} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   EVENT CARD
===================================================== */

type EventItem = {
  id: number;
  day: string;
  monthYear: string;
  location: string;
  category: string;
  title: string;
  description: string;
};

function EventCard({ event }: { event: EventItem }) {
  return (
    <div
      className="
        flex
        w-[calc(100vw-60px)]
max-w-[640px]
        shrink-0
        flex-col
        justify-between
        rounded-[14px]
        bg-gradient-to-r
        from-[#439897]
        to-[#2E3038]
        p-6

        sm:w-[360px]
        md:w-[640px]
      "
    >
      {/* CARD TOP */}
      <div className="flex flex-col gap-4 sm:gap-8 min-[769px]:flex-row">
        {/* DATE */}
        <div
          className="
            flex
            h-[110px]
            w-[110px]
            md:h-[134px]
            md:w-[134px]
            shrink-0
            flex-col
            items-center
            justify-center
            rounded-[9px]
            bg-white
            px-2
            text-center
          "
        >
          <span className="font-nunito-sans-extra-bold text-[32px] sm:text-[36px] md:text-[42px] lg:text-[54px] xl:text-[64px] font-extrabold leading-none text-[#024241]">
            {event.day}
          </span>

          <span className="mt-2 font-nunito-sans-extra-bold text-[16px] sm:text-[16px] font-bold text-[#20ADA9]">
            {event.monthYear}
          </span>

          <span className="mt-1 font-avenir text-[14px] text-[#439897]">
            {event.location}
          </span>
        </div>

        {/* DETAILS */}
        <div className="min-w-0 flex-1">
          <span
            className="
              inline-block
              rounded-full
              bg-[#439897]
              px-3
              py-1
              font-avenir
              text-[14px]
              md:text-[16px] 
              lg:text-[16px]
              font-bold
              text-[#88FFFE]
            "
          >
            {event.category}
          </span>

          <h3 className="mt-2 font-avenir text-[18px] sm:text-[20px] md:text-[24px] lg:text-[24px] font-bold text-white">
            {event.title}
          </h3>

          <p
            className=" mt-3
    w-full
    max-w-full
    break-words
    whitespace-normal
    font-nunito-sans
    text-[16px]
    tracking-[0.04em]
    text-[#E6E6E6]
    sm:text-[14px]
    md:text-[16px]
    lg:text-[16px]"
          >
            {event.description}
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <Link href="/events"
        className="inline-flex items-center justify-center text-center
          mt-6
          sm:mt-10
          w-full
          rounded-[8px]
          bg-[#FEBC5A]
          px-4
          py-3
          font-avenir
          text-[16px]
          font-bold
          text-black
          transition-colors
          duration-200
          hover:bg-[#F4A936]
        "
      >
        View Events →
      </Link>
    </div>
  );
}
