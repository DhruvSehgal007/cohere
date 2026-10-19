import Image from "next/image";
import getInTouchBg from "@/assets/images/homepage/get-in-touch-bg.png";

export default function GetInTouchSection() {
  return (
    <section className="">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[24px]">

          {/* Background Image */}
          <Image
            src={getInTouchBg}
            alt=""
            fill
            className="object-cover object-center"
          />

          {/* Content */}
          <div className="relative z-10 flex min-h-[420px] md:min-h-[500px] xl:min-h-[560px] flex-col items-center justify-center px-5 sm:px-6 py-14 sm:py-16 lg:py-20 text-center">

            <span className="inline-block w-full max-w-[196px] rounded-[5px] bg-white px-4 py-2 font-avenir text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-normal text-[#439897]">
              GET IN TOUCH
            </span>

            <h3 className="mt-4 max-w-[560px] font-avenir font-extrabold text-white leading-tight text-[32px] sm:text-[36px] lg:text-[40px] xl:text-[40px]">
              Let's Build a Safer Workplace Together
            </h3>

            <p className="mt-4 max-w-[800px] font-nunito-sans font-normal text-white leading-relaxed text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
              Whether you're strengthening compliance, training your teams, supporting Internal Committees, or preparing for statutory obligations, we're here to help.
            </p>

            <div className="mt-10 lg:mt-16 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">

              <button className="uppercase w-full max-w-[290px] rounded-[10px] bg-[#FEBC5A] px-6 py-3 font-nunito-sans-extra-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-[#0D1E1E] transition hover:bg-gray-100">
                Talk to an Expert
              </button>

              <button className="w-full max-w-[290px] rounded-[10px] border border-white bg-transparent px-6 py-3 font-nunito-sans-extra-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-white transition hover:bg-white/10">
                CONTACT US
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}