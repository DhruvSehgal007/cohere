"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface JourneyItem {
  year: string;
  label: string;
  description: string[] | string;
  position: "top" | "bottom";
  color: "teal" | "orange";
  textWidth?: string;
}

const journeyItems: JourneyItem[] = [
  {
    year: "2011",
    label: "CONCEIVED",
    description:
      "Cohere Consultants was conceived by Dr. Devika Singh, a corporate lawyer specializing in infrastructure and labor law. On the back of having pioneered India’s first legal practice on gender discrimination, focusing on supporting corporates in court cases and committee proceedings aligned with the Vishaka Directives, Dr. Singh realised that many myths abound placing barriers on women’s participation in workplaces.",
    position: "top",
    color: "teal",
    textWidth: "w-full min-[581px]:min-w-[640px]",
  },

  {
    year: "2012 - 2013",
    label: "STASIS",
    description: [
      "As the founding member embarked on seminal nation wide research to educate a more robust legal regime, especially concerning gender discrimination in the workplace, Cohere stayed in a necessary stasis. During this time, Dr. Devika Singh, moved to the regulatory side and joined the Government of India as a consultant to the National Mission for Empowerment of Women, Ministry of Women and Child Development.",
      "With a growing demand for its services, the company opened two more offices in Dehradun and Bengaluru – strategic locations to better serve its expanding start up clientele.",
    ],
    position: "bottom",
    color: "orange",
    textWidth: "w-full min-[581px]:min-w-[750px]",
  },

  {
    year: "2015 - 2016",
    label: "EXPANSION",
    description:
      "With a growing demand for its services, the company opened two more offices in Dehradun and Bengaluru – strategic locations to better serve its expanding start up clientele.",
    position: "top",
    color: "teal",
    textWidth: "w-full min-[581px]:min-w-[640px]",
  },

  {
    year: "2017 - 2018",
    label: "DIVERSIFICATION",
    description:
      "Recognizing the need to diversify its offerings, the Cohere expanded its range of services and established two additional offices in Chennai and Mumbai to accommodate its growing outreach in internal investigations.",
    position: "bottom",
    color: "orange",
    textWidth: "w-full min-[581px]:min-w-[640px]",
  },

  {
    year: "2019 - 2020",
    label: "RAPID EXPANSION",
    description:
      "Building on its success, Cohere experienced rapid expansion as workplaces went virtual and the problem (harassment) and the solution (awareness) took an online face. It added two more offices in Hyderabad and Gurugram to meet the needs of its expanding IT and ITES clientele. Keep It Right – the mantra of Cohere was developed into an online training portal capable of training more than 5000 people at once.",
    position: "top",
    color: "teal",
    textWidth: "w-full min-[581px]:min-w-[640px]",
  },

  {
    year: "2022 - 2024",
    label: "CONSOLIDATION AND ACCREDITATION",
    description:
      "Focused on optimizing operations and enhancing service delivery, Cohere became an LLP and consolidated its presence in existing markets while exploring opportunities for further growth and innovation. By 2024, Cohere Consultants has amassed a clientele of 100 workplaces, trained 150,000 individuals, and handled 3,500 cases. Dr. Devika Singh, Cohere’s Lead Legal Consultant and now Country Practice Head remains instrumental in reducing legal liability and risk for clients, drawing from her extensive experience in gender rights, legal enforcement, and advocacy.",
    position: "bottom",
    color: "orange",
    textWidth: "w-full min-[581px]:min-w-[750px]",
  },
];

export default function Journey() {
  return (
    <section className="relative overflow-hidden">
      <div>
        {/* ================= HEADER ================= */}

        <div className="container-custom px-4 sm:px-6 mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
              A Journey of Impact, Expertise & Trust
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
              From a Vision for Safer Workplaces to a Leading Compliance Practice
            </h2>
          </div>

          <p
            className="
              w-full
              font-nunito-sans
              leading-6
              text-[#5B5B5B]
              sm:leading-7
              md:w-1/2
              lg:max-w-[620px]
              text-left
              md:text-right
              lg:text-right
              text-[16px]
              sm:text-[16px]
              md:text-[16px]
              lg:text-[18px]
            "
          >
            Every milestone in our journey reflects our commitment to creating safer, more inclusive, and legally compliant workplaces. What began as a focused effort to address workplace challenges has evolved into a trusted multidisciplinary practice serving organizations across India. Explore the key moments that have shaped Cohere Consultants into a recognized leader in workplace compliance, investigations, training, and advisory services.
          </p>

        </div>
      </div>

        {/* ========================================================= */}
        {/* ===================== MOBILE ============================ */}
        {/* ========================================================= */}

        <div className="mt-12 block min-[581px]:hidden">
          <div className="relative">
            {/* ================= JOURNEY + LINE ================= */}

            <div className="relative">
              {/* Journey box */}

              <div
                className="
          relative
          z-30
          flex
          h-[40px]
          w-fit
          items-center
          rounded-md
          bg-[#439897]
          px-5
          mx-5
        "
              >
                <span
                  className="
            font-avenir
            text-[22px]
            font-semibold
            tracking-wide
            text-white
          "
                >
                  Journey
                </span>
              </div>

              {/* Vertical line starts EXACTLY from Journey box */}

              <div
                className="
          absolute
          left-[29px]
          top-[45px]
          bottom-0
          w-[2px]
          bg-[#222]
          
        "
              />

              {/* ================= JOURNEY ITEMS ================= */}

              <div className="space-y-12 pt-10 px-5">
                {journeyItems.map((item) => (
                  <div key={item.year} className="relative pl-[40px]">
                    {/* Diamond */}

                    <div
                      className={`
                absolute
                left-0
                top-[5px]
                z-20
                h-[20px]
                w-[20px]
                rotate-45
                ${item.color === "teal" ? "bg-[#439897]" : "bg-[#FEBC5A]"}
              `}
                    />

                    {/* Content */}

                    <div>
                      {/* Label */}

                      <span
                        className="
                  inline-block
                  rounded
                  bg-[#439897]
                  px-3
                  py-1
                  font-avenir
                  text-[12px]
                  text-white
                "
                      >
                        {item.label}
                      </span>

                      {/* Year */}

                      <h3
                        className="
                  mt-3
                  font-avenir
                  text-[38px]
                  font-bold
                  leading-none
                  text-[#0D1E1E]
                "
                      >
                        {item.year}
                      </h3>

                      {/* Description */}

                      <div
                        className="
                  mt-5
                  font-nunito-sans
                  text-[16px]
                  leading-[25px]
                  text-[#2E262E]
                "
                      >
                        {Array.isArray(item.description)
                          ? item.description.map((paragraph, index) => (
                              <p
                                key={index}
                                className={index > 0 ? "mt-5" : ""}
                              >
                                {paragraph}
                              </p>
                            ))
                          : item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ===================== DESKTOP =========================== */}
        {/* ========================================================= */}

        <div
          className="
            relative
            mt-15
            hidden
            w-full
            min-[581px]:block
            lg:mt-30
          "
        >
          {/* ================= JOURNEY LABEL ================= */}

          <div
            className="
              absolute
              left-5
              top-[40%]
              z-30
              -translate-y-1/2
              md:left-30
              lg:left-50
            "
          >
            <div
              className="
                flex
                h-[125px]
                w-[36px]
                items-center
                justify-center
                rounded-md
                bg-[#439897]
                
              "
            >
              <span
                className="
                  rotate-[-90deg]
                  whitespace-nowrap
                  font-avenir
                  text-[26px]
                  font-semibold
                  tracking-wide
                  text-white
                "
              >
                Journey
              </span>
            </div>
          </div>

          {/* ================= TIMELINE ================= */}

          <div className="relative">
            {/* Horizontal line */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                right-0
                top-[40%]
               
                h-[2px]
                -translate-y-1/2
                bg-[#222]
              "
            />

            {/* ================= SWIPER ================= */}

            <div className="pl-[70px] md:pl-[180px] lg:pl-[250px]">
              <Swiper
                className="!overflow-visible lg:!pe-50"
                slidesPerView={1}
                spaceBetween={0}
                speed={500}
                grabCursor={true}
                allowTouchMove={true}
                watchOverflow={true}
                breakpoints={{
                  // 581 - 767
                  581: {
                    slidesPerView: 1,
                  },

                  // 768 - 1279
                  768: {
                    slidesPerView: 1.6,
                  },

                  // 1280+
                  1280: {
                    slidesPerView: 2,
                  },

                  // 1580+
                  1580: {
                    slidesPerView: 3,
                  },
                }}
              >
                {journeyItems.map((item) => (
                  <SwiperSlide key={item.year}>
                    <div
                      className="
                        relative
                        min-h-[1100px]
                        md:min-h-[920px]
                      "
                    >
                      {/* ================= TOP JOURNEY ================= */}

                      {item.position === "top" && (
                        <div
                          className="
                            absolute
                            bottom-[60%]
                            left-0
                            w-full
                            pb-10
                          "
                        >
                          <div className="pr-6">
                            <p
                              className={`
                                mt-5
                                font-nunito-sans
                                md:text-[18px]
                                text-[16px]
                                leading-[26px]
                                tracking-[4%]
                                text-[#2E262E]
                                ${item.textWidth || "min-w-[750px]"}
                              `}
                            >
                              {item.description}
                            </p>

                            <span
                              className="
                                mt-8
                                inline-block
                                rounded
                                bg-[#439897]
                                px-3
                                py-1
                                font-avenir
                                text-[12px]
                                text-white
                                sm:px-4
                                sm:text-[14px]
                              "
                            >
                              {item.label}
                            </span>

                            <h3
                              className="
                                mt-2
                                font-avenir
                                text-[40px]
                                font-bold
                                leading-none
                                text-[#0D1E1E]
                                md:text-[70px]
                              "
                            >
                              {item.year}
                            </h3>
                          </div>
                        </div>
                      )}

                      {/* ================= BOTTOM JOURNEY ================= */}

                      {item.position === "bottom" && (
                        <div
                          className="
                            absolute
                            top-[40%]
                            left-0
                            w-full
                            pt-10
                          "
                        >
                          <div className="pr-6">
                            <div
                              className={`
                                font-nunito-sans
                                text-[18px]
                                leading-[26px]
                                tracking-[4%]
                                text-[#2E262E]
                                ${item.textWidth || "min-w-[750px]"}
                              `}
                            >
                              {(Array.isArray(item.description)
                                ? item.description
                                : [item.description]
                              ).map((paragraph, index) => (
                                <p
                                  key={index}
                                  className={index > 0 ? "mt-5" : ""}
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>

                            <span
                              className="
                                mt-8
                                inline-block
                                rounded
                                bg-[#439897]
                                px-3
                                py-1
                                font-avenir
                                text-[12px]
                                text-white
                                sm:px-4
                                sm:text-[14px]
                              "
                            >
                              {item.label}
                            </span>

                            <h3
                              className="
                                mt-3
                                font-avenir 
                                text-[60px]
                                font-bold
                                leading-none
                                text-[#0D1E1E]
                                md:text-[70px]
                              "
                            >
                              {item.year}
                            </h3>
                          </div>
                        </div>
                      )}

                      {/* ================= TIMELINE MARKER ================= */}

                      <div
                        className={`
                          absolute
                          left-0
                          top-[40%]
                          z-20
                          h-[20px]
                          w-[20px]
                          -translate-x-1/2
                          -translate-y-1/2
                          rotate-45
                          ${
                            item.color === "teal"
                              ? "bg-[#439897]"
                              : "bg-[#FEBC5A]"
                          }
                        `}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
