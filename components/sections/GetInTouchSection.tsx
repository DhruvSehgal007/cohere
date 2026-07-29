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

      <div className="mx-auto flex min-h-[560px] max-w-[1500px] flex-col items-center justify-center px-6 py-20 text-center">
        <span className="inline-block rounded-[5px] bg-white px-4 py-1 font-avenir text-[14px] font-normal text-[#439897]">
          GET IN TOUCH
        </span>

        <h3 className="mt-6 max-w-[840px] font-avenir text-[40px] font-extrabold leading-tight text-white">
          Building respectful workplaces starts with the right conversation.
        </h3>

        <p className="mt-6 max-w-[1400px] font-nunito-sans text-[20px] font-normal leading-relaxed text-white">
          Cohere Consultants LLP is a boutique practice with a pan-India
          presence, offering comprehensive legal and compliance services.
          Specializing in areas such as laws on sexual harassment and
          discrimination in the workplace, as well as maternity and labor laws,
          the firm boasts a multidisciplinary team.
        </p>

        <div className="mt-24 flex flex-col gap-4 sm:flex-row">
          <button className="w-[240px] rounded-[8px] bg-white px-6 py-3 font-nunito-sans text-[16px] font-bold text-[#0D1E1E] transition hover:bg-gray-100">
            BOOK A CONSULTATION
          </button>

          <button className="w-[240px] rounded-[8px] border border-white bg-transparent px-6 py-3 font-nunito-sans text-[16px] font-bold text-white transition hover:bg-white/10">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}