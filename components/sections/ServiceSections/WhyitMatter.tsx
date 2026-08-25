import Image from "next/image";

import backgroundImage from "@/assets/images/Servicepage/abstract-marble-texture-black-white-grey-background-handmade-technique 1.png";
import cohereLogo from "@/assets/images/Servicepage/fourcardicon.png";
import calendarIcon from "@/assets/images/Servicepage/calender.svg";
import documentIcon from "@/assets/images/Servicepage/document.svg";
import buildingIcon from "@/assets/images/Servicepage/building.svg";
import expertIcon from "@/assets/images/Servicepage/experts.svg";

export default function WhyitMatter() {
  const cards = [
    {
      icon: calendarIcon,
      number: "2500+",
      text: "Cases Advised",
    },
    {
      icon: documentIcon,
      number: "25,000+",
      text: "Professionals Trained",
    },
    {
      icon: buildingIcon,
      number: "Pan India",
      text: "Workplace Support",
    },
    {
      icon: expertIcon,
      number: "Lawyers • HR Experts •\nTrainers • Counsellors",
      text: "Dedicated workplace specialists.",
    },
  ];

  return (
    <section className="w-full">
      <div className="">
        <div
          className="relative overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat p-6 sm:p-8 md:p-10"
          style={{
            backgroundImage: `url("${backgroundImage.src}")`,
          }}
        >
          <div className="container-custom flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6 px-0">
            {/* LEFT DIV */}
<div className="w-full min-w-0 lg:w-[38%] lg:shrink-0">
  <span
    className="
      mb-4
      inline-block
      rounded
      bg-[#439897]
      px-4
      py-1
      font-avenir
      text-[14px]
      font-normal
      text-white
    "
  >
    Why It Matters
  </span>

  <h2
  className="
    mb-4
    font-avenir
    text-[24px]
    font-extrabold
    leading-[1.1]
    text-black

    sm:text-[30px]

    lg:mb-10
    lg:text-[40px]
  "
>
  Trusted By Organisations Across India
</h2>

  <p
    className="
      mb-8
      max-w-[500px]
      font-nunito-sans
      text-[14px]
      font-normal
      leading-[24px]
      tracking-[0.04em]
      text-[#5B5B5B]

      sm:text-[16px]

      lg:mb-10
    "
  >
    A respectful workplace is created through awareness, accountability,
    practical learning, and fair processes. By strengthening prevention and
    response mechanisms, organisations can promote safer workplaces where
    employees feel respected, supported, and heard.
  </p>

  <button
    className="
      rounded-[5px]
      bg-[#439897]
      px-5
      py-2.5
      font-avenir
      font-extrabold
      text-[14px]
      text-[#C7E0E0]

      sm:px-6
      sm:py-3
    "
  >
    Talk to an Expert
  </button>
</div>

            {/* RIGHT DIV */}
            <div className="relative w-full min-w-0 lg:w-[60%] lg:shrink-0">
              <div className="flex flex-wrap gap-6">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`relative flex h-[220px] w-full shrink-0 flex-col justify-between rounded-[8px] p-5 text-white sm:h-[242px] sm:p-6 min-[700px]:w-[calc(50%-12px)] lg:w-[calc(50%-12px)] ${
                      index === 1 || index === 3
                        ? "items-end text-right max-[699px]:items-start max-[699px]:text-left"
                        : "items-start text-left"
                    }`}
                    style={{
                      background:
                        "linear-gradient(135deg, #439897 0%, #000000 100%)",
                    }}
                  >
                    {/* ICON */}
                    <Image
                      src={card.icon}
                      alt=""
                      width={54}
                      height={52}
                      className="h-[42px] w-[44px] object-contain sm:h-[52px] sm:w-[54px]"
                    />

                    {/* CARD CONTENT */}
                    <div
                      className={`${
                        index === 1 || index === 3
                          ? "text-right max-[699px]:text-left"
                          : "text-left"
                      }`}
                    >
                      <h3
                        className={`whitespace-pre-line font-avenir font-extrabold leading-[1.1] ${
                          index === 0
                            ? "text-[38px] sm:text-[44px] xl:text-[47px]"
                            : index === 1 || index === 2
                              ? "text-[36px] sm:text-[40px] xl:text-[44px]"
                              : "text-[17px] sm:text-[19px] xl:text-[20px]"
                        }`}
                      >
                        {card.number}
                      </h3>

                      <p className="mt-2 whitespace-pre-line font-nunito-sans text-[13px] font-normal leading-[22px] tracking-[0.04em] text-white sm:text-[15px] sm:leading-[26px] xl:text-[16px]">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* COHERE IMAGE */}
              <Image
                src={cohereLogo}
                alt="Cohere"
                width={300}
                height={300}
                className="absolute left-1/2 top-1/2 z-20 hidden h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 object-contain min-[700px]:block lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
