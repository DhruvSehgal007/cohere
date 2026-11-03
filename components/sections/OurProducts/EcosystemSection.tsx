import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const solutions = [
  {
    title: "Cohere Resolve™",
    subtitle: "Investigation\nManagement",
    image: "/images/our-products/ecosystem-resolve.jpg",
  },
  {
    title: "Cohere Essentials™",
    subtitle: "Workplace\nKnowledge",
    image: "/images/our-products/ecosystem-essentials.jpg",
  },
  {
    title: "Cohere Readiness™",
    subtitle: "Workplace\nReadiness",
    image: "/images/our-products/ecosystem-readiness.jpg",
  },
  {
    title: "Keep It Right®",
    subtitle: "PoSH & Gender\nE-Learning",
    image: "/images/our-products/ecosystem-keep-it-right.jpg",
  },
];

export default function EcosystemSection() {
  return (
    <section className="w-full py-[38px]">
      <div className="mx-auto w-full max-w-[1600px] px-[20px] sm:px-[4.5%]">

        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            rounded-[24px]
            bg-[#439897]

            px-[24px]
            py-[32px]

            sm:px-[32px]
            sm:py-[36px]

            md:px-[40px]
            md:py-[42px]

            xl:pb-[42px]
            xl:pl-[clamp(32px,4.8vw,75px)]
            xl:pr-[clamp(28px,3.6vw,56px)]
            xl:pt-[52px]
          "
        >
          {/* MAIN LAYOUT */}
          <div
            className="
              grid
              grid-cols-1
              gap-[40px]

              xl:grid-cols-[minmax(0,0.63fr)_minmax(0,1fr)]
              xl:gap-[28px]
            "
          >
            {/* ========================================
                LEFT CONTENT
            ======================================== */}
            <div className="flex min-w-0 flex-col justify-between">

              <div>
                <h2
                  className="
                    max-w-[500px]
                    font-avenir
                    text-[24px]
                    font-[800]
                    leading-[1.08]
                    text-[#1B3D3C]

                    sm:text-[32px]

                    md:text-[36px]

                    xl:text-[32px]

                    2xl:text-[36px]
                  "
                >
                  One Ecosystem. Four Workplace Solutions.
                </h2>

                <p
                  className="
                    mt-[12px]
                    max-w-[500px]
                    font-nunito-sans
                    text-[16px]
                    leading-[26px]
                    tracking-[0.04em]
                    text-white

                    sm:text-[18px]

                    md:text-[20px]

                    xl:text-[18px]

                    2xl:text-[20px]
                  "
                >
                  Explore Cohere&apos;s workplace solutions designed across
                  learning, readiness, compliance and investigation management.
                </p>
              </div>

              {/* CONTACT DETAILS */}
              <div
                className="
                  mt-[32px]
                  flex
                  flex-col
                  items-start
                  gap-[18px]
                  font-avenir
                  text-[16px]
                  font-bold
                  leading-[18px]
                  text-[#1B3D3C]

                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center

                  xl:mt-[48px]
                "
              >
                {/* EMAIL / WEBSITE */}
                <div className="flex min-w-0 items-start gap-[10px]">
                  <Mail
                    aria-hidden="true"
                    className="mt-[2px] size-[17px] shrink-0"
                  />

                  <div className="flex min-w-0 flex-col gap-[3px]">
                    <a
                      className="break-words hover:underline"
                      href="mailto:info@cohereconsultants.com"
                    >
                      info@cohereconsultants.com
                    </a>

                    <a
                      href="https://www.cohereconsultants.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-words hover:underline"
                    >
                      www.cohereconsultants.com
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div
                  className="
                    flex
                    items-center
                    gap-[8px]

                    sm:border-l
                    sm:border-[#1B3D3C]/30
                    sm:py-[8px]
                    sm:pl-[20px]
                  "
                >
                  <Phone
                    aria-hidden="true"
                    className="size-[17px] shrink-0 fill-current"
                  />

                  <a
                    href="tel:+91890444700"
                    className="whitespace-nowrap hover:underline"
                  >
                    +91 89044 4700
                  </a>
                </div>
              </div>
            </div>

            {/* ========================================
                CARDS
            ======================================== */}
            <div
              className="
                grid
                min-w-0
                grid-cols-1
                gap-[18px]

                md:grid-cols-4
                md:gap-[14px]

                lg:gap-[18px]

                xl:mt-0
                xl:items-stretch
                xl:gap-[18px]
              "
            >
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="
                    mx-auto
                    flex
                    h-full
                    w-full
                    min-w-0
                    max-w-[360px]
                    flex-col
                    overflow-hidden
                    rounded-[10px]
                    bg-[#FEBC5A]
                    p-[8px]

                    md:max-w-none

                    xl:min-h-[320px]
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      aspect-[16/10]
                      w-full
                      shrink-0
                      overflow-hidden
                      rounded-[8px]

                      md:aspect-[1/1.08]

                      xl:aspect-[122/146]
                    "
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      sizes="
                        (max-width: 767px) 90vw,
                        (max-width: 1279px) 22vw,
                        (max-width: 1599px) 11vw,
                        180px
                      "
                      className="object-cover"
                    />
                  </div>

                  {/* CARD TEXT */}
                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      items-center
                      justify-start
                      px-[4px]
                      pb-[8px]
                      pt-[12px]
                      text-center
                    "
                  >
                    <h3
                      className="
                        font-avenir
                        text-[17px]
                        font-[800]
                        leading-[18px]
                        text-[#1B3D3C]

                        md:text-[14px]
                        md:leading-[15px]

                        lg:text-[15px]
                        lg:leading-[16px]

                        xl:text-[16px]
                        xl:leading-[16px]
                      "
                    >
                      {solution.title}
                    </h3>

                    <p
                      className="
                        mt-[5px]
                        whitespace-pre-line
                        font-nunito-sans
                        text-[14px]
                        leading-[20px]
                        text-[#5B5B5B]

                        md:text-[12px]
                        md:leading-[17px]

                        lg:text-[13px]
                        lg:leading-[18px]

                        xl:text-[14px]
                        xl:leading-[20px]
                      "
                    >
                      {solution.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}