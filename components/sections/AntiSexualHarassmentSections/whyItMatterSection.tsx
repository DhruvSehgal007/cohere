import Image from "next/image";
import whyItMatterBanner from "@/assets/images/AntisexualHarassment/why-it-matter-banner.png";

export default function WhyItMatterSection() {
  return (
    <section className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom px-6">

        <div className="grid grid-cols-1 overflow-hidden rounded-[24px] bg-[#DFFFFF] md:grid-cols-2">

          {/* ================= LEFT COLUMN ================= */}

          <div className="flex flex-col justify-center p-6 min-[600px]:p-8 md:p-10 lg:p-12 xl:p-14">

            <span className="inline-block w-fit rounded-[5px] bg-white px-4 py-1.5 font-nunito-sans text-[12px] sm:text-[12px] md:text-[14px] font-semibold uppercase tracking-wider text-[#439897] shadow-sm ">
              Why It Matters
            </span>

            <h2 className="mt-4 max-w-[580px] font-avenir text-[32px] font-extrabold leading-tight text-[#1B3D3C] md:text-[36px] lg:text-[40px] xl:text-[40px]">
              Building Workplaces Based on Respect &amp; Trust
            </h2>

            <p className="mt-4 max-w-[620px] font-nunito-sans text-[16px] leading-7 text-[#4B4B4B] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              A respectful workplace is created through awareness,
              accountability, practical learning, and fair processes. By
              strengthening prevention and response mechanisms, organisations
              can promote safer workplaces where employees feel respected,
              supported, and heard.
            </p>

          </div>


          {/* ================= RIGHT COLUMN ================= */}

          <div className="flex w-full justify-end">

            <Image
              src={whyItMatterBanner}
              alt="Building workplaces based on respect and trust"
              className="h-auto w-full object-contain"
              priority
            />

          </div>

        </div>

      </div>
    </section>
  );
}