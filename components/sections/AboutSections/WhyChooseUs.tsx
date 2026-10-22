import Image from "next/image";

import img1 from "@/assets/images/About/Whychoose1.svg";
import img2 from "@/assets/images/About/Whychoose2.svg";
import img3 from "@/assets/images/About/Whychose3.svg";

interface Feature {
  id: string;
  title: string;
  description: string;
  type: "teal" | "orange";
  icon: any;
}

const features: Feature[] = [
  {
    id: "01",
    title: "THE BEST QUALITY",
    description:
      "PowerLegal always works with the criteria for top quality work. the discipline and profession",
    type: "teal",
    icon: img1,
  },
  {
    id: "02",
    title: "LEGAL EXPERIENCE",
    description:
      "We have the best skilled lawyers with many years of background knowledge and experience.",
    type: "orange",
    icon: img2,
  },
  {
    id: "03",
    title: "AWARD & CERTIFICATES",
    description:
      "It's ideal for hanging on any wall in your law firms' office. Your clients will notice it very easily",
    type: "teal",
    icon: img3,
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const isOrange = feature.type === "orange";

  return (
    <div
      className={`
        relative flex flex-col items-center text-center  mt-20
    md:mt-60
        ${index === 1 ? "lg:-translate-y-55" : ""}
      `}
    >
      {/* Vertical line */}
      <div
        className={`
    absolute -top-30 left-1/2 z-10
    h-40 w-8 md:w-10 -translate-x-1/2
    ${
      isOrange
        ? "bg-gradient-to-t from-[#F2AD35] via-[#F2AD35]/40 to-white"
        : "bg-gradient-to-t from-[#439897] via-[#439897]/40 to-white"
    }
  `}
      />

      {/* Main visual */}
      <div className="relative h-[300px] w-[300px] ">
        {/* Large background circle */}
        <div
          className={`
            absolute left-1/2 top-[30px] md:top-[35px]
            h-[171px] w-[171px] md:h-[201px] md:w-[201px] lg:h-[241px] lg:w-[241px]
            -translate-x-1/2 rounded-full
            z-1
            ${isOrange ? "bg-[#FAD79A]" : "bg-[#8EC1C1]"}
          `}
        />

        {/* Dashed outer circle */}
        <div
          className={`
            absolute left-1/2 top-[50px] md:top-[55px]
            h-[206px] w-[206px] md:h-[236px] md:w-[236px] lg:h-[276px] lg:w-[276px]
            -translate-x-1/2 rounded-full
            border-[4px] border-dashed
            ${isOrange ? "border-[#F1AC35]" : "border-[#439897]"}
          `}
        />

        {/* Bottom shadow/depth circle */}
        <div
          className={`
            absolute left-1/2 top-[33px] md:top-[38px]
            h-[115px] w-[115px] md:h-[145px] md:w-[145px] lg:h-[185px] lg:w-[185px]
            -translate-x-1/2 rounded-full
            z-2
            shadow-[0_15px_20px_rgba(0,0,0,0.15)]
            ${isOrange ? "bg-[#F4AE35]" : "bg-[#439897]"}
          `}
        />

        {/* Top circle */}
        <div
          className={`
            absolute left-1/2 top-[20px] md:top-[25px]
            z-20 flex h-[94px] w-[94px] md:h-[124px] md:w-[124px] lg:h-[164px] lg:w-[164px]
            -translate-x-1/2 items-center justify-center
            rounded-full 
            shadow-[0_8px_18px_rgba(0,0,0,0.12)]
            ${isOrange ? "bg-[#FDEFD7]" : "bg-[#D9EAEA]"}
          `}
        >
          <Image
            src={feature.icon}
            alt={feature.title}
            width={90}
            height={90}
            className="
    h-[60px] w-[60px]
    sm:h-[60px] sm:w-[60px]
    md:h-[78px] md:w-[78px]
    lg:h-[90px] lg:w-[90px]
    object-contain
  "
          />
        </div>

        {/* Number */}
        <div
          className={`
            absolute bottom-8  md:-bottom-1 lg:-bottom-11 left-1/2 z-30
            -translate-x-1/2
            bg-white px-3 text-bold
            text-[35px] font-medium leading-none
            ${isOrange ? "text-[#1B3D3C]" : "text-[#1B3D3C]"}
            
          `}
        >
          {feature.id}
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 md:mt-10 lg:mt-15 max-w-[330px] px-3">
        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold font-avenir leading-tight text-[#1B3D3C]">
          {feature.title}
        </h3>

        <p className="mt-4 text-[14px]  lg:text-[16px] font-nunito-sans leading-6 tracking-[0.2px] text-[#2E262E]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function WhyChooeUs() {
  return (
    <section className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom px-4 sm:px-6">
        {/* TOP CONTENT */}
       <div className=" mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="uppercase font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
              why choose us
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
              The First Choice For Your Problem
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
            A key focus of Cohere Consultants LLP is on education and awareness. The firm specializes in conducting workshops tailored for senior management, HR managers, Internal Complaints Committee (ICC) members, line managers, and employees. These workshops address issues related to gender discrimination and workplace diversity.
          </p>

        </div>
      </div>

        <div className="grid grid-cols-1 gap-15 md:grid-cols-3 md:gap-8 lg:gap-12 mt-22 md:mt-0 lg:mt-40">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
