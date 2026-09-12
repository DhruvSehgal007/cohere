"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Counter from "@/components/common/Counter";

import calendarIcon from "@/assets/images/homepage/calender.svg";
import filesIcon from "@/assets/images/homepage/files.svg";
import organizationIcon from "@/assets/images/homepage/organization.svg";
import peopleIcon from "@/assets/images/homepage/people.svg";

import counterBg from "@/assets/images/homepage/counter-background.png";

type Stat = {
  _id: string;
  value: number;
  suffix: string;
  label: string;
  order: number;
};

const statIcons = [
  calendarIcon,
  filesIcon,
  organizationIcon,
  peopleIcon,
];

export default function StatsSection() {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats", {
          cache: "no-store",
        });

        const data = await response.json();

        if (data.success) {
          setStats(data.stats);
        }
      } catch (error) {
        console.error(
          "Failed to load stats:",
          error
        );
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="relative overflow-hidden">
      <Image
        src={counterBg}
        alt=""
        fill
        priority
        className="object-cover object-center -z-10"
      />

      <div className="container-custom py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat._id}
              className="flex items-center justify-center xl:justify-start gap-4 text-center xl:text-left"
            >
              <Image
                src={statIcons[index]}
                alt=""
                aria-hidden="true"
                className="w-12 sm:w-14 lg:w-auto h-auto shrink-0"
              />

              <div className="flex flex-col text-white">
                <span
                  className={`font-avenir font-extrabold leading-none text-[40px] sm:text-[52px] ${
                    index === 0
                      ? "lg:text-[74px]"
                      : index === 1
                      ? "lg:text-[44px]"
                      : index === 2
                      ? "lg:text-[56px]"
                      : "lg:text-[32px]"
                  }`}
                >
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </span>

                <span
                  className={`mt-2 font-avenir font-normal text-[16px] sm:text-[18px] lg:text-[20px] ${
                    index === 0
                      ? "lg:tracking-[20px]"
                      : index === 1
                      ? "lg:tracking-[10px]"
                      : ""
                  }`}
                >
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}