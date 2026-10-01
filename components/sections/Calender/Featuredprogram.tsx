import Image from "next/image";
import getInTouchBg from "@/assets/images/homepage/sdfrgdfg.png";

export default function Featuredprogram() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={getInTouchBg}
        alt=""
        fill
        priority
        className="-z-10 object-cover object-center"
      />

      <div className="container-custom flex min-h-[420px] md:min-h-[500px] xl:min-h-[560px] flex-col items-center justify-center px-5 sm:px-6 py-14 sm:py-16 lg:py-20 text-center">

        <span className="inline-block w-full max-w-[210px] rounded-[5px] bg-white px-4 py-2 font-avenir text-[14px] sm:text-[14px] lg:text-[14px] font-normal text-[#439897]">
          FEATURED PROGRAMMES
        </span>

        <h3 className="mt-4 font-avenir font-bold text-white leading-tight text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[40px]">
          PoSH+ Masterclasses
        </h3>

        <h6 className="mt-4 font-avenir font-extrabold text-white leading-tight text-[14px] sm:text-[20px] lg:text-[24px] xl:text-[24px]">
          Practical Learning. Real Workplace Context.
        </h6>

        <p className="mt-18 lg:mt-14 max-w-[1000px] font-nunito-sans font-normal text-white leading-relaxed text-[16px] sm:text-[18px] lg:text-[18px]">
          Our PoSH+ Masterclasses bring practical workplace learning, discussions, case studies, and expert insights together for professionals working on workplace compliance and culture.
        </p>

        <div className="mt-10 lg:mt-14 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">

          <button className="w-full max-w-[260px] rounded-[10px] bg-[#FEBC5A] px-0 py-4 font-nunito-sans-extra-bold text-[16px] text-[#0D1E1E] transition hover:bg-gray-100">
            EXPLORE MASTERCLASSES
          </button>

        </div>
      </div>
    </section>
  );
}