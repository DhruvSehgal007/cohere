import Image from "next/image";
import Counter from "@/components/common/Counter";
import calendarIcon from "@/assets/images/homepage/calender.svg";
import filesIcon from "@/assets/images/homepage/files.svg";
import organizationIcon from "@/assets/images/homepage/organization.svg";
import peopleIcon from "@/assets/images/homepage/people.svg";
import counterBg from "@/assets/images/homepage/counter-background.png";

const stats = [
  {
    icon: calendarIcon,
    end: 25,
    suffix: "+",
    label: "Years",
    numberClass: "text-[74px]",
    labelClass: "text-[20px] tracking-[20px]",
  },
  {
    icon: filesIcon,
    end: 9000,
    suffix: "+",
    label: "Matters",
    numberClass: "text-[44px]",
    labelClass: "text-[20px] tracking-[10px]",
  },
  {
    icon: organizationIcon,
    end: 100,
    suffix: "+",
    label: "Organizations",
    numberClass: "text-[56px]",
    labelClass: "text-[20px]",
  },
  {
    icon: peopleIcon,
    end: 550000,
    suffix: "+",
    label: "People Trained",
    numberClass: "text-[32px]",
    labelClass: "text-[20px]",
  },
];

export default function StatsSection() {
  return (
   <section className="relative overflow-hidden">
  <Image
    src={counterBg}
    alt=""
    fill
    priority
    className="object-cover object-center -z-10"
  />
      <div className="container-custom flex flex-wrap items-center justify-between gap-y-8 px-6 py-10 md:py-14">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4">
            <Image
              src={stat.icon}
              alt=""
              className=" shrink-0"
              aria-hidden="true"
            />
           <div className="flex flex-col text-white">
  <span
    className={`font-avenir font-extrabold leading-none ${stat.numberClass}`}
  >
    <Counter end={stat.end} suffix={stat.suffix} />
  </span>

  <span
    className={`mt-1 font-avenir font-normal ${stat.labelClass}`}
  >
    {stat.label}
  </span>
</div>
          </div>
        ))}
      </div>
    </section>
  );
}
