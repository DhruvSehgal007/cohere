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
            p-[20px]
            sm:p-[28px]
            md:p-[32px]
            xl:min-h-[420px]
            xl:px-[36px]
            xl:py-[32px]
            2xl:px-[44px]
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
              xl:gap-[28px]
              2xl:gap-[36px]
            "
          >
            {/* LEFT CONTENT */}
            <div className="flex w-full flex-col justify-between xl:w-[320px] xl:shrink-0 2xl:w-[360px]">
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
                    xl:text-[36px]
                    2xl:text-[40px]
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
                  xl:gap-[16px]
                  2xl:gap-[20px]
                "
              >
                {/* Email + Website */}
                <div className="flex items-start gap-[10px]">
                  <i className="fa-solid fa-envelope mt-[3px] text-[16px] text-[#1B3D3C]"></i>

                  <div className="flex flex-col">
                    <span className="
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
                    </span>

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
                <div className="hidden h-[36px] w-px bg-[#1B3D3C]/30 md:block xl:hidden 2xl:block" />

                {/* Phone */}
                <div className="flex items-center gap-[10px]">
                  <i className="fa-solid fa-phone text-[16px] text-[#1B3D3C]"></i>

                  <a
                    href="tel:+918904447004"
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
                grid-cols-1
                gap-[16px]
                sm:grid-cols-2
                sm:gap-[20px]
                lg:grid-cols-4
                lg:gap-[16px]
                xl:flex-1
                xl:gap-[16px]
                2xl:gap-[20px]
              "
            >
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="
                    flex
                    h-full
                    min-h-[340px]
                    w-full
                    min-w-0
                    flex-col
                    overflow-hidden
                    rounded-[16px]
                    bg-[#FEBC5A]
                    p-[8px]
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      h-[215px]
                      w-full
                      shrink-0
                      overflow-hidden
                      rounded-[12px]
                      sm:h-[225px]
                    "
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 240px"
                      className="object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-1 flex-col justify-center px-[4px] pb-[8px] pt-[10px] text-center">
                    <h3
                      className="
                        font-avenir
                        text-[15px]
                        font-[800]
                        leading-[1.2]
                        text-[#1B3D3C]
                        xl:text-[15px]
                        2xl:text-[16px]
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
                        xl:text-[13px]
                        2xl:text-[14px]
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