"use client";

import { useMemo, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, MapPin, Video } from "lucide-react";

type Programme = {
  name: string;
  badge: string;
  title: string;
  description: string;
  date: string;
  location: string;
  format: string;
};

const programmes: Programme[] = [
  {
    name: "PoSH+ Masterclasses",
    badge: "POSH MASTERCLASS",
    title: "PoSH+ Masterclass",
    description: "Practical learning and case-based discussions for workplace professionals.",
    date: "5 DECEMBER 2024",
    location: "Gurugram",
    format: "In-person",
  },
  {
    name: "Workshops",
    badge: "WORKSHOPS",
    title: "Workplace Workshops",
    description: "Interactive workshops focused on safer and more inclusive workplaces.",
    date: "DATE TO BE ANNOUNCED",
    location: "To be announced",
    format: "In-person",
  },
  {
    name: "Employee Awareness",
    badge: "EMPLOYEE AWARENESS",
    title: "Employee Awareness",
    description: "Practical awareness sessions on workplace rights and responsibilities.",
    date: "DATE TO BE ANNOUNCED",
    location: "To be announced",
    format: "Online / In-person",
  },
  {
    name: "Internal Committee Training",
    badge: "IC TRAINING",
    title: "Internal Committee Training",
    description: "Training sessions for Internal Committee members and workplace leaders.",
    date: "DATE TO BE ANNOUNCED",
    location: "To be announced",
    format: "Online / In-person",
  },
  {
    name: "Expert Sessions",
    badge: "EXPERT SESSIONS",
    title: "Expert Sessions",
    description: "Learn from experienced legal, HR and workplace compliance experts.",
    date: "DATE TO BE ANNOUNCED",
    location: "To be announced",
    format: "Online / In-person",
  },
];

const filterNames = ["All Programmes", ...programmes.map((item) => item.name)];
const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function Programmes() {
  const [month, setMonth] = useState(new Date(2026, 7, 1));
  const [selectedDay, setSelectedDay] = useState(5);
  const [selectedFilter, setSelectedFilter] = useState("All Programmes");

  const dates = useMemo(() => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const first = new Date(year, monthIndex, 1);
    const offset = (first.getDay() + 6) % 7;
    const count = Math.ceil((offset + new Date(year, monthIndex + 1, 0).getDate()) / 7) * 7;
    return Array.from({ length: count }, (_, index) => {
      const date = new Date(year, monthIndex, index - offset + 1);
      return { date, current: date.getMonth() === monthIndex };
    });
  }, [month]);

  const displayedProgramme =
    programmes.find((item) => item.name === selectedFilter) ?? programmes[0];

  const changeMonth = (amount: number) => {
    setMonth((current) => new Date(current.getFullYear(), current.getMonth() + amount, 1));
    setSelectedDay(0);
  };

  return (
    <section className="w-full bg-white pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-[1fr_2.05fr_1fr] lg:gap-5">
          {/* PROGRAMME FILTERS */}
          <aside className="rounded-[15px] border border-[#EBEEEE] bg-white p-5 shadow-[0_8px_16px_rgba(17,36,39,0.12)] sm:p-6">
            <h2 className="mb-5 font-avenir font-bold text-[20px] sm:text-[24px] font-bold text-[#439897]">
              Find a Programme
            </h2>
            <div className="flex flex-col gap-[7px]">
              {filterNames.map((name) => {
                const isActive = selectedFilter === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setSelectedFilter(name)}
                    aria-pressed={isActive}
                    className={`flex min-h-[36px] w-full items-center gap-2 rounded-[9px] border px-2 py-2 text-left font-avenir font-bold text-[14px] transition-colors sm:text-[14px] ${
                      isActive
                        ? "border-[#439897] bg-[#439897] text-white"
                        : "border-[#B8D5D5] bg-white text-[#439897] hover:bg-[#E9F6F5]"
                    }`}
                  >
                    <span className={`h-[24px] w-[24px] shrink-0 rounded-[2px] ${isActive ? "bg-[#1B3D3C]" : "bg-[#174C4C]"}`} />
                    <span className="min-w-0 flex-1">{name}</span>
                    <ChevronRight size={18} strokeWidth={1.7} className="shrink-0" />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* CALENDAR */}
          <div className="overflow-hidden rounded-[15px] border border-[#EBEEEE] bg-white px-4 pb-4 pt-5 shadow-[0_8px_16px_rgba(17,36,39,0.12)] sm:px-6 sm:pb-6">
            <div className="mb-3 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                className="inline-flex items-center gap-1 font-avenir font-bold text-[13px] text-[#439897] hover:text-[#1B6261] sm:text-[13px]"
                aria-label="Previous month"
              >
                <ChevronLeft size={15} /> Previous Month
              </button>
              <h2 className="font-avenir font-bold text-[20px] sm:text-[24px] uppercase text-[#439897]">
                {month.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </h2>
              <button
                type="button"
                onClick={() => changeMonth(1)}
                className="inline-flex items-center gap-1 font-avenir font-bold text-[13px] text-[#439897] hover:text-[#1B6261] sm:text-[13px]"
                aria-label="Next month"
              >
                Next Month <ChevronRight size={15} />
              </button>
            </div>
            <div className="grid grid-cols-7 border-y border-[#E3ECEC] py-2">
              {weekDays.map((day) => (
                <span key={day} className="text-center font-nunito-sans text-[10px] font-semibold text-[#439897] sm:text-[12px]">
                  {day}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {dates.map(({ date, current }, index) => {
                const active = current && date.getDate() === selectedDay;
                return (
                  <button
                    key={`${date.toISOString()}-${index}`}
                    type="button"
                    onClick={() => {
                      if (!current) {
                        setMonth(new Date(date.getFullYear(), date.getMonth(), 1));
                      }
                      setSelectedDay(date.getDate());
                    }}
                    aria-label={date.toDateString()}
                    aria-pressed={active}
                    className="flex h-[45px] items-center justify-center font-avenir font-bold text-[14px] text-[#1B3D3C] transition-colors hover:bg-[#E9F6F5] sm:h-[54px] sm:text-[14px]"
                  >
                    <span className={`flex h-[27px] w-[27px] font-avenir font-bold text-[14px] items-center justify-center rounded-[8px] ${active ? "bg-[#FEBC5A] text-[#1B3D3C]" : ""}`}>
                      {date.getDate()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PROGRAMME DETAILS */}
          <aside className="flex flex-col rounded-[15px] border border-[#EBEEEE] bg-white p-5 shadow-[0_8px_16px_rgba(17,36,39,0.12)] sm:p-6 md:col-span-2 lg:col-span-1 lg:min-h-[388px]">
            <span className="mb-3 w-fit rounded-[50px] bg-[#439897] px-3 py-1 font-avenir font-semibold text-[14px] sm:text-[16px] uppercase text-[#88FFFE]">
              {displayedProgramme.badge}
            </span>
            <h3 className="font-avenir font-bold text-[20px] font-bold text-[#101010] sm:text-[24px]">
              {displayedProgramme.title}
            </h3>
            <p className="mt-3 font-nunito-sans text-[13px] leading-[1.6] text-[#777777] sm:text-[16px] tracking-[0.04em]">
              {displayedProgramme.description}
            </p>
            <div className="mt-3 flex flex-col items-start gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D8FFFF] px-2 py-1 font-nunito-sans-extra-bold text-[12px] font-semibold text-[#20ADA9]">
                <CalendarDays size={13} /> {displayedProgramme.date}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D8FFFF] px-2 py-1 font-nunito-sans-extra-bold text-[12px] font-semibold text-[#20ADA9]">
                <MapPin size={13} /> {displayedProgramme.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D8FFFF] px-2 py-1 font-nunito-sans-extra-bold text-[12px] font-semibold text-[#20ADA9]">
                <Video size={13} /> {displayedProgramme.format}
              </span>
            </div>
            <button
              type="button"
              onClick={() => document.getElementById("programme-details")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 flex min-h-[48px] w-full items-center justify-center rounded-[7px] bg-[#FEBC5A] px-4 font-nunito-sans text-[14px] font-bold text-black transition-colors hover:bg-[#F2AD43] lg:mt-auto"
            >
              View Details →
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
