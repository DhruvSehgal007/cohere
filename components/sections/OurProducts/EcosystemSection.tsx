import Image from "next/image";

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
    <section className="w-full py-[55px] md:py-[70px]">
      <div className="container-custom">
        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            overflow-hidden
            rounded-[32px]
            bg-[#439897]
            p-[28px]
            sm:p-[36px]
            xl:min-h-[427px]
            xl:px-[52px]
            xl:py-[36px]
          "
        >
          <div
            className="
              flex
              flex-col
              justify-between
              gap-[36px]
              xl:min-h-[355px]
              xl:flex-row
              xl:items-stretch
              xl:gap-[40px]
            "
          >
            {/* LEFT CONTENT */}
            <div className="flex w-full flex-col justify-between xl:max-w-[460px]">
              <div>
                <h2
                  className="
                    max-w-[440px]
                    font-avenir
                    text-[28px]
                    font-[800]
                    leading-[1.12]
                    text-[#1B3D3C]
                    sm:text-[34px]
                    md:text-[38px]
                    xl:text-[40px]
                  "
                >
                  One Ecosystem. Four Workplace Solutions.
                </h2>

                <p
                  className="
                    mt-[16px]
                    max-w-[430px]
                    font-nunito-sans
                    text-[15px]
                    leading-[1.4]
                    tracking-[0.03em]
                    text-[#D8EFEF]
                    sm:text-[16px]
                    xl:mt-[18px]
                    xl:text-[17px]
                  "
                >
                  Explore Cohere&apos;s workplace solutions designed across
                  learning, readiness, compliance and investigation management.
                </p>
              </div>

              {/* CONTACT ROW */}
              <div
                className="
                  mt-[28px]
                  flex
                  flex-wrap
                  items-center
                  gap-[16px]
                  pt-[10px]
                  xl:mt-auto
                  xl:gap-[20px]
                "
              >
                {/* Email + Website */}
                <div className="flex items-start gap-[10px]">
                  <i className="fa-solid fa-envelope mt-[3px] text-[16px] text-[#1B3D3C]"></i>

                  <div className="flex flex-col">
                    <a
                      href="mailto:info@cohereconsultants.com"
                      className="
                        font-avenir
                        text-[14px]
                        font-[700]
                        leading-[1.25]
                        text-[#1B3D3C]
                        hover:underline
                        xl:text-[15px]
                      "
                    >
                      info@cohereconsultants.com
                    </a>

                    <a
                      href="https://www.cohereconsultants.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-[3px]
                        font-avenir
                        text-[14px]
                        font-[700]
                        leading-[1.25]
                        text-[#1B3D3C]
                        hover:underline
                        xl:text-[15px]
                      "
                    >
                      www.cohereconsultants.com
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden h-[36px] w-px bg-[#1B3D3C]/30 md:block" />

                {/* Phone */}
                <div className="flex items-center gap-[10px]">
                  <i className="fa-solid fa-phone text-[16px] text-[#1B3D3C]"></i>

                  <a
                    href="tel:+91890444700"
                    className="
                      font-avenir
                      text-[14px]
                      font-[700]
                      leading-[1.2]
                      text-[#1B3D3C]
                      hover:underline
                      xl:text-[15px]
                    "
                  >
                    +91 89044 4700
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div
              className="
                grid
                w-full
                grid-cols-2
                gap-[14px]
                sm:grid-cols-4
                sm:gap-[16px]
                xl:flex
                xl:w-auto
                xl:items-center
                xl:gap-[20px]
              "
            >
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="
                    flex
                    h-[355px]
                    w-full
                    flex-col
                    overflow-hidden
                    rounded-[16px]
                    bg-[#FEBC5A]
                    p-[8px]
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                    sm:w-[170px]
                    md:w-[175px]
                    xl:w-[185px]
                    xl:shrink-0
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      h-[225px]
                      w-full
                      shrink-0
                      overflow-hidden
                      rounded-[12px]
                    "
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-1 flex-col justify-center px-[4px] pt-[10px] pb-[6px] text-center">
                    <h3
                      className="
                        font-avenir
                        text-[15px]
                        font-[800]
                        leading-[1.2]
                        text-[#1B3D3C]
                        xl:text-[16px]
                      "
                    >
                      {solution.title}
                    </h3>

                    <p
                      className="
                        mt-[4px]
                        whitespace-pre-line
                        font-nunito-sans
                        text-[13px]
                        font-[600]
                        leading-[1.25]
                        tracking-[0.02em]
                        text-[#6A5B4A]
                        xl:text-[14px]
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