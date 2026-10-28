import Link from "next/link";
import Image from "next/image";
import getInTouchBg from "@/assets/images/homepage/sdfrgdfg.png";
import getInTouchBganother from "@/assets/images/homepage/get-in-touch-bg.png";
import { ArrowRight } from "lucide-react";


export default function Featuredprogram() {
  return (
    <section id="featured-programmes" className="relative overflow-hidden ">
      <Image
        src={getInTouchBganother}
        alt=""
        fill
        priority
        className="-z-10 object-cover object-center"
      />

      <div className="container-custom flex min-h-[420px] md:min-h-[500px] xl:min-h-[560px] flex-col items-center justify-center px-5 sm:px-6 py-14 sm:py-16 lg:py-20 text-center">

        <span className="inline-block w-full max-w-[210px] rounded-[5px] bg-white px-4 py-2 font-avenir text-[14px] sm:text-[14px]font-normal text-[#439897]">
          FEATURED PROGRAMMES
        </span>

        <h3 className="mt-4 font-avenir font-bold text-white leading-tight text-[32px] sm:text-[36px] md:text-[40px]">
          PoSH+ Masterclasses
        </h3>

        <h6 className="mt-4 font-avenir font-extrabold text-white leading-tight text-[16px] sm:text-[20px] md:text-[24px]">
          Practical Learning. Real Workplace Context.
        </h6>

        <p className="mt-8 sm:mt-8 md:mt-14 max-w-[1000px] font-nunito-sans font-normal text-white leading-relaxed text-[16px] sm:text-[16px] md:text-[18px]">
          Our PoSH+ Masterclasses bring practical workplace learning, discussions, case studies, and expert insights together for professionals working on workplace compliance and culture.
        </p>

        <div className="mt-10 lg:mt-14 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">

         <Link href="/calender#training-workshops"
  className="inline-flex items-center justify-center text-center
    inline-flex
    w-full
    max-w-[300px]
    items-center
    justify-center
    gap-2
    rounded-[8px]
    bg-[#FEBC5A]
    px-[12px]
    py-[12px]
    sm:px-[12px]
    sm:py-[12px]
    md:px-[16px]
    md:py-[16px]
    font-nunito-sans-extra-bold
    text-[14px]
    sm:text-[14px]
    md:text-[16px]
    text-[#0D1E1E]
    transition-colors
    duration-200
    hover:bg-[#F4A936]
  "
>
  EXPLORE MASTERCLASSES
  <span className="text-[20px] leading-none font-bold">→</span>
</Link>

        </div>
      </div>
    </section>
  );
}