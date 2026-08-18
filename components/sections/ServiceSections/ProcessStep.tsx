"use client";

import Image from "next/image";

import polygonAsset from "@/assets/images/WorkplaceDiscrimination/polygon.svg";
import middleLogoAsset from "@/assets/images/WorkplaceDiscrimination/middle-logo.png";
import cardIconAsset from "@/assets/images/WorkplaceDiscrimination/card-side-icons.svg";

const CARDS = [
  {
    title: "Respectful\nWorkplace Culture",
    description:
      "Support initiatives that encourage dignity, respect, and professional workplace behaviour.",
    polygonRotation: "rotate-0",
    badgeStyle:
      "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    title: "Awareness\nProgrammes",
    description:
      "Interactive workshops that help employees understand workplace behaviour, responsibilities, and respectful interactions.",
    polygonRotation: "rotate-0",
    badgeStyle:
      "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    title: "Workplace\nInvestigations",
    description:
      "Supporting organisations with structured, confidential, and fair investigation processes.",
    polygonRotation: "rotate-90",
    badgeStyle:
      "top-1/2 -right-3 -translate-y-1/2",
  },
  {
    title: "Resources &\nGuidance",
    description:
      "Providing practical resources, workplace templates, awareness materials, and compliance guidance.",
    polygonRotation: "rotate-180",
    badgeStyle:
      "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    title: "Trauma-Informed\nPractice",
    description:
      "Helping organisations understand trauma responses and promote compassionate, informed workplace processes.",
    polygonRotation: "rotate-180",
    badgeStyle:
      "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    title: "Internal Committee\nSupport",
    description:
      "Strengthening Internal Committees through orientation, practical learning, and ongoing guidance.",
    polygonRotation: "-rotate-90",
    badgeStyle:
      "top-1/2 -left-3 -translate-y-1/2",
  },
];

export default function OurSupportSection() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-16">
      <div className="mx-auto flex w-full max-w-[1500px] justify-center">
        <div className="relative w-full max-w-[1250px] py-8">

          <div
            className="
              grid
              w-full
              grid-cols-1
              items-center
              justify-items-center
              gap-x-6
              gap-y-10
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-y-12
            "
          >

            {/* =================================================
                TOP LEFT
            ================================================= */}

            <div className="col-start-1 row-start-1 lg:translate-x-10">
              <HexCard item={CARDS[0]} />
            </div>


            {/* =================================================
                TOP RIGHT
            ================================================= */}

            <div
              className="
                col-start-1
                row-start-1
                md:col-start-2
                lg:col-start-3
                lg:-translate-x-10
              "
            >
              <HexCard item={CARDS[1]} />
            </div>


            {/* =================================================
                MIDDLE LEFT
            ================================================= */}

            <div className="col-start-1 row-start-2">
              <HexCard item={CARDS[5]} />
            </div>


            {/* =================================================
                CENTER LOGO
            ================================================= */}

            <div
              className="
                z-20
                col-start-1
                row-start-2
                flex
                items-center
                justify-center
                md:col-start-2
                lg:col-start-2
              "
            >
              <div
                className="
                  relative
                  flex
                  h-[270px]
                  w-[240px]
                  items-center
                  justify-center
                "
              >

                {/* CENTER HEXAGON */}

                <Image
                  src={polygonAsset}
                  alt="Center Background"
                  fill
                  priority
                  className="
                    object-contain
                    drop-shadow-[0_12px_24px_rgba(0,137,138,0.25)]
                  "
                />

                {/* CENTER LOGO */}

                <div className="relative z-10 h-24 w-44">
                  <Image
                    src={middleLogoAsset}
                    alt="COHERE Consultants"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

              </div>
            </div>


            {/* =================================================
                MIDDLE RIGHT
            ================================================= */}

            <div
              className="
                col-start-1
                row-start-2
                md:col-start-2
                lg:col-start-3
              "
            >
              <HexCard item={CARDS[2]} />
            </div>


            {/* =================================================
                BOTTOM LEFT
            ================================================= */}

            <div className="col-start-1 row-start-3 lg:translate-x-10">
              <HexCard item={CARDS[4]} />
            </div>


            {/* =================================================
                BOTTOM RIGHT
            ================================================= */}

            <div
              className="
                col-start-1
                row-start-3
                md:col-start-2
                lg:col-start-3
                lg:-translate-x-10
              "
            >
              <HexCard item={CARDS[3]} />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


/* =========================================================
   HEX CARD
========================================================= */

function HexCard({
  item,
}: {
  item: {
    title: string;
    description: string;
    polygonRotation: string;
    badgeStyle: string;
  };
}) {
  return (
    <div
      className="
        relative
        flex
        h-[360px]
        w-[330px]
        items-center
        justify-center
        transition-transform
        duration-300
        hover:scale-[1.02]
        sm:h-[380px]
        sm:w-[350px]
      "
    >

      {/* =================================================
          HEXAGON BACKGROUND
      ================================================= */}

      <div
        className={`
          absolute
          inset-0
          h-full
          w-full
          transition-transform
          duration-300
          ${item.polygonRotation}
        `}
      >
        <Image
          src={polygonAsset}
          alt="Hexagon Card Shape"
          fill
          priority
          className="
            object-contain
            drop-shadow-[0_10px_20px_rgba(0,0,0,0.07)]
          "
        />
      </div>


      {/* =================================================
          CARD CONTENT
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          flex
          flex-col
          items-center
          justify-center
          px-8
          pb-2
          pt-4
          text-center
        "
      >

        <h3
          className="
            mb-2
            whitespace-pre-line
            font-avenir
            text-[18px]
            font-extrabold
            leading-tight
            text-[#171717]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            max-w-[210px]
            font-nunito-sans
            text-[12px]
            font-normal
            leading-relaxed
            text-[#5B5B5B]
          "
        >
          {item.description}
        </p>

      </div>


      {/* =================================================
          SIDE BADGE
      ================================================= */}

      <div
        className={`
          absolute
          z-30
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border-4
          border-white
          bg-[#00898a]
          shadow-md
          ${item.badgeStyle}
        `}
      >
        <div className="relative h-7 w-7">
          <Image
            src={cardIconAsset}
            alt="Card Side Icon"
            fill
            className="object-contain"
          />
        </div>
      </div>

    </div>
  );
}