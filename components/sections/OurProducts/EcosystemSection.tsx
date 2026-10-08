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
    <section className="w-full  py-[55px] md:py-[70px]">
      <div className="container-custom">
        <div
          className="
            overflow-hidden
            rounded-[32px]
            bg-[#439897]
            px-[28px]
            py-[28px]
            md:px-[40px]
            md:py-[34px]
            xl:px-[60px]
            xl:py-[52px]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-[32px]
              xl:flex-row
              xl:items-center
              xl:justify-between
              xl:gap-[54px]
            "
          >
            {/* LEFT CONTENT */}
            <div className="w-full xl:max-w-[504px]">
              <h2
                className="
                  max-w-[504px]
                  font-avenir
                  text-[28px]
                  font-[800]
                  leading-[1.08]
                  text-[#1B3D3C]
                  md:text-[30px]
                  xl:text-[32px]
                "
              >
                One Ecosystem. Four Workplace Solutions.
              </h2>

              <p
                className="
                  mt-[18px]
                  max-w-[504px]
                  font-nunito-sans
                  text-[17px]
                  leading-[1.35]
                  tracking-[0.04em]
                  text-white
                  md:text-[18px]
                  xl:text-[20px]
                  xl:leading-[26px]
                "
              >
                Explore Cohere&apos;s workplace solutions designed across
                learning, readiness, compliance and investigation management.
              </p>

              {/* CONTACT ROW */}
              <div
                className="
                  mt-[34px]
                  flex
                  flex-col
                  gap-[18px]
                  md:mt-[40px]
                  md:flex-row
                  md:flex-wrap
                  md:items-center
                  md:gap-[22px]
                "
              >
                {/* Email + Website */}
                <div className="flex items-start gap-[10px]">
                  <i className="fa-solid fa-envelope mt-[3px] text-[17px] text-[#1B3D3C]"></i>

                  <div className="flex flex-col">
                    <span
                      className="
                        font-avenir
                        text-[15px]
                        font-[700]
                        leading-[1.2]
                        text-[#1B3D3C]
                        xl:text-[16px]
                      "
                    >
                      info@cohereconsultants.com
                    </span>

                    <span
                      className="
                        mt-[6px]
                        font-avenir
                        text-[15px]
                        font-[700]
                        leading-[1.2]
                        text-[#1B3D3C]
                        xl:text-[16px]
                      "
                    >
                      www.cohereconsultants.com
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden h-[47px] w-px bg-[#00504D] md:block" />

                {/* Phone */}
                <div className="flex items-center gap-[12px]">
                  <i className="fa-solid fa-phone text-[20px] text-[#1B3D3C]"></i>

                  <span
                    className="
                      font-avenir
                      text-[15px]
                      font-[700]
                      leading-[1.2]
                      text-[#1B3D3C]
                      xl:text-[16px]
                    "
                  >
                    +91 89044 4700
                  </span>
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
                lg:grid-cols-4
                lg:gap-[20px]
                xl:w-auto
                xl:gap-[24px]
              "
            >
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="
                    w-full
                    overflow-hidden
                    rounded-[12px]
                    bg-[#FEBC5A]
                    p-[10px]
                    sm:max-w-[220px]
                    lg:w-[170px]
                    xl:w-[183px]
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      h-[170px]
                      w-full
                      overflow-hidden
                      rounded-[10px]
                      md:h-[182px]
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
                  <div className="pt-[10px] text-center">
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
                        mt-[6px]
                        whitespace-pre-line
                        font-nunito-sans
                        text-[15px]
                        leading-[1.25]
                        tracking-[0.02em]
                        text-[#6A5B4A]
                        xl:text-[16px]
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