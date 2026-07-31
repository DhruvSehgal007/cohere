import Image from "next/image";
import getInTouchBg from "@/assets/images/homepage/get-in-touch-bg.png";

export default function GetInTouchSection() {
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

        <span className="inline-block w-full max-w-[196px] rounded-[5px] bg-white px-4 py-2 font-avenir text-[12px] sm:text-[13px] lg:text-[14px] font-normal text-[#439897]">
          GET IN TOUCH
        </span>

        <h3 className="mt-4 max-w-[840px] font-avenir font-extrabold text-white leading-tight text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[48px]">
          Building respectful workplaces starts with the right conversation.
        </h3>

        <p className="mt-4 max-w-[1400px] font-nunito-sans font-normal text-white leading-relaxed text-[16px] sm:text-[18px] lg:text-[20px]">
          Cohere Consultants LLP is a boutique practice with a pan-India
          presence, offering comprehensive legal and compliance services.
          Specializing in areas such as laws on sexual harassment and
          discrimination in the workplace, as well as maternity and labor laws,
          the firm boasts a multidisciplinary team.
        </p>

        <div className="mt-10 lg:mt-16 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">

          <button className="w-full max-w-[260px] rounded-[10px] bg-white px-6 py-3 font-nunito-sans-extra-bold text-[16px] text-[#0D1E1E] transition hover:bg-gray-100">
            BOOK A CONSULTATION
          </button>

          <button className="w-full max-w-[260px] rounded-[10px] border border-white bg-transparent px-6 py-3 font-nunito-sans-extra-bold text-[16px] text-white transition hover:bg-white/10">
            CONTACT US
          </button>

        </div>
      </div>
    </section>
  );
}