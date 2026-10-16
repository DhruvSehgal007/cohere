import Image from "next/image";
import vector from "@/assets/images/About/Aboutimg.svg";

export default function AboutCohere() {
  return (
    <section className="relative overflow-hidden py-10 pb-60 my-5 sm:pb-60   md:pb-50 md:py-20 lg:py-30 sm:my-15 max-w-[1940px] mx-auto">
      <div className="container-custom px-4 sm:px-6">
        {/* TOP CONTENT */}
        <div className="flex flex-col gap-4 lg:flex-row  lg:justify-between">
          <div className="w-full lg:w-1/2">
            <span className="inline-block rounded bg-[#439897] px-3 py-1 font-avenir text-[12px] text-white sm:px-4 sm:text-[14px]">
              ABOUT COHERE
            </span>

            <h2
              className="
        mt-3
        w-full
        font-avenir
        text-[32px]
        font-extrabold
        leading-[1.15]
        text-black

        sm:text-[34px]
        md:mt-4
        md:text-[36px]
 
        lg:max-w-[581px]
        lg:text-[40px]
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
      tracking-[4%]

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
      <div className="absolute pt-10 sm:pt-5 md:left-0 w-[200%] md:bottom-0 md:w-full  xl:bottom-[-20px]">
        <Image
          src={vector}
          alt="Cohere workplace illustration"
          className="md:w-full h-auto  "
        />
      </div>
    </section>
  );
}
