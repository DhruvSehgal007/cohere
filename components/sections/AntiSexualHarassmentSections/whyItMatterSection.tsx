import Image from "next/image";
import whyItMatterBanner from "@/assets/images/AntisexualHarassment/why-it-matter-banner.png";

export default function WhyItMatterSection() {
  return (
    <section className="py-16">
      <div className="container-custom px-6">

        <div className="grid grid-cols-1 overflow-hidden rounded-[24px] bg-[#DFFFFF] md:grid-cols-2">

          {/* ================= LEFT COLUMN ================= */}

          <div className="flex flex-col justify-center p-6 min-[600px]:p-8 md:p-10 lg:p-12 xl:p-14">

            <span className="inline-block w-fit rounded-full bg-white px-4 py-1.5 font-nunito-sans text-[11px] font-semibold uppercase tracking-wider text-[#439897] shadow-sm min-[600px]:text-[12px]">
              Why It Matters
            </span>

            <h2 className="mt-4 max-w-[560px] font-avenir text-[22px] font-extrabold leading-tight text-[#1B3D3C] min-[600px]:text-[26px] lg:text-[30px] xl:text-[34px]">
              Building Workplaces Based on Respect &amp; Trust
            </h2>

            <p className="mt-4 max-w-[560px] font-nunito-sans text-[14px] leading-7 text-[#4B4B4B] min-[600px]:text-[15px] xl:text-[16px]">
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