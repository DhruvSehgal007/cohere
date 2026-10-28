
import Image from "next/image";
import vector from "@/assets/images/About/Aboutimg.svg";
import aboutmobile from "@/assets/images/About/about-mobile.png";

export default function AboutCohere() {
  return (
    <section className="relative overflow-hidden pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom px-4 sm:px-6">
        {/* TOP CONTENT */}
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
              <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white">
                ABOUT COHERE
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
              Leading the Way in Workplace Compliance and Best Practices
            </h2>
          </div>

          <p
            className="
              w-full
              font-nunito-sans
              text-[16px]
              leading-[26px]
              text-[#2E262E]
              tracking-[0.04em]
              sm:leading-7
              lg:max-w-[739px]
              lg:w-1/2
              lg:text-[18px]
            "
          >
            Cohere Consultants LLP is a boutique legal and compliance practice
            with a pan-India presence, specializing in workplace laws, including
            sexual harassment, discrimination, employment, labour, and diversity
            & inclusion. With over 3,500 cases handled and more than 1,50,000
            professionals trained, we bring deep expertise and practical
            insights to every engagement.
            <br />
            <br />
            Our multidisciplinary team of lawyers, HR professionals,
            counsellors, social workers, and industry experts provides
            end-to-end support across compliance, investigations, policy
            development, training, advisory services, and statutory reporting.
            We have been trusted advisors to leading organizations such as HSBC,
            Accenture, and Zomato, while also supporting government bodies and
            international organizations on workplace compliance and policy
            matters.
            <br />
            <br />
            At Cohere, we go beyond legal compliance. We help organizations
            build safe, inclusive, and respectful workplaces through practical
            solutions, robust processes, and industry-leading expertise.
          </p>
        </div>
      </div>

      {/* RESPONSIVE IMAGE */}
      {/* RESPONSIVE IMAGE */}
{/* RESPONSIVE IMAGE */}
{/* RESPONSIVE IMAGE */}
<div
  className="
    relative
    mt-8
    w-full
    sm:mt-10
    md:mt-12
    lg:absolute
    lg:bottom-0
    lg:left-0
    lg:mt-0
    xl:bottom-[-20px]
  "
>
  {/* MOBILE IMAGE */}
  <Image
    src={aboutmobile}
    alt="Cohere workplace illustration"
    className="block w-full h-auto object-contain sm:hidden"
  />

  {/* TABLET AND DESKTOP IMAGE */}
  <Image
    src={vector}
    alt="Cohere workplace illustration"
    className="hidden w-full h-auto object-contain sm:block"
  />
</div>
    </section>
  );
}
