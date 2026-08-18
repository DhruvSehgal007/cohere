"use client";

import Image from "next/image";

import polygonImage from "@/assets/images/WorkplaceDiscrimination/polygon.svg";
import middlePolygonLogo from "@/assets/images/WorkplaceDiscrimination/middle-polygon-logo.png";
import cardIcon from "@/assets/images/WorkplaceDiscrimination/card-side-icons.svg";

// =========================================================
// CARD DATA
// =========================================================

const CARDS = [
  {
    title: "Respectful\nWorkplace Culture",
    description:
      "Support initiatives that encourage dignity, respect, and professional workplace behaviour.",
    icon: "top-left",
    shadow: "drop-shadow-[-24px_-34px_0px_#008E92]",
  },

  {
    title: "Awareness\nProgrammes",
    description:
      "Interactive workshops that help employees understand workplace behaviour, responsibilities, and respectful interactions.",
    icon: "top-right",
    shadow: "drop-shadow-[24px_-34px_0px_#008E92]",
  },

  {
    title: "Internal Committee\nSupport",
    description:
      "Strengthening Internal Committees through orientation, practical learning, and ongoing guidance.",
    icon: "left",
    shadow: "drop-shadow-[-34px_0px_0px_#008E92]",
  },

  {
    title: "Workplace\nInvestigations",
    description:
      "Supporting organisations with structured, confidential, and fair investigation processes.",
    icon: "right",
    shadow: "drop-shadow-[34px_0px_0px_#008E92]",
  },

  {
    title: "Trauma-Informed\nPractice",
    description:
      "Helping organisations understand trauma responses and promote compassionate, informed workplace processes.",
    icon: "bottom-left",
    shadow: "drop-shadow-[-24px_34px_0px_#008E92]",
  },

  {
    title: "Resources &\nGuidance",
    description:
      "Providing practical resources, workplace templates, awareness materials, and compliance guidance.",
    icon: "bottom-right",
    shadow: "drop-shadow-[24px_34px_0px_#008E92]",
  },
];

// =========================================================
// MAIN SECTION
// =========================================================

export default function OurSupportSection() {
  return (
    <section className="mt-24 w-full bg-white py-[60px] ">

      {/* =====================================================
          MAIN CONTAINER
          MAX WIDTH = 1500px
          HEIGHT = AUTO
      ===================================================== */}

      <div className="mx-auto w-full max-w-[1500px] px-4">

        {/* =================================================
            TOP ROW
            2 CARDS
        ================================================= */}

        <div
          className="
            grid
            w-full
            grid-cols-2
            items-center
            justify-items-center
            gap-0

            lg:px-[120px]
            lg:-mb-[150px]
          "
        >

          {/* TOP LEFT */}

          <div
            className="
              flex
              w-full
              justify-center

              lg:translate-x-[80px]
              lg:translate-y-[-70px]
            "
          >
            <HexCard item={CARDS[0]} />
          </div>


          {/* TOP RIGHT */}

          <div
            className="
              flex
              w-full
              justify-center

              lg:translate-x-[-70px]
              lg:translate-y-[-70px]
            "
          >
            <HexCard item={CARDS[1]} />
          </div>

        </div>


        {/* =================================================
            MIDDLE ROW

            LEFT | CENTER | RIGHT
        ================================================= */}

        <div
          className="
            relative
            z-20

            grid
            w-full
            grid-cols-3

            items-center
            justify-items-center

            gap-0
          "
        >

          {/* MIDDLE LEFT */}

          <div
            className="
              flex
              w-full
              justify-center

              lg:translate-x-[40px]
            "
          >
            <HexCard item={CARDS[2]} />
          </div>


          {/* CENTER */}

          <div
            className="
              z-30
              flex
              w-full
              justify-center
            "
          >
            <CenterHex />
          </div>


          {/* MIDDLE RIGHT */}

          <div
            className="
              flex
              w-full
              justify-center

              lg:translate-x-[-40px]
            "
          >
            <HexCard item={CARDS[3]} />
          </div>

        </div>


        {/* =================================================
            BOTTOM ROW

            2 CARDS

            IMPORTANT:
            padding-bottom reserves the space created by
            translate-y-[150px], so footer won't overlap.
        ================================================= */}

        <div
          className="
            relative
            z-10

            grid
            w-full
            grid-cols-2

            items-center
            justify-items-center

            gap-0

            lg:px-[120px]

            lg:-mt-[150px]
            lg:pb-[180px]
          "
        >

          {/* =================================================
              BOTTOM LEFT

              X = +80px
              Y = +80px
          ================================================= */}

          <div
            className="
              flex
              w-full
              justify-center

              lg:translate-x-[80px]
              lg:translate-y-[80px]
            "
          >
            <HexCard item={CARDS[4]} />
          </div>


          {/* =================================================
              BOTTOM RIGHT

              X = -70px
              Y = +80px
          ================================================= */}

          <div
            className="
              flex
              w-full
              justify-center

              lg:translate-x-[-70px]
              lg:translate-y-[80px]
            "
          >
            <HexCard item={CARDS[5]} />
          </div>

        </div>

      </div>

    </section>
  );
}


// =========================================================
// HEX CARD
// =========================================================

function HexCard({
  item,
}: {
  item: {
    title: string;
    description: string;
    icon: string;
    shadow: string;
  };
}) {
  return (
    <div
      className="
        relative
        h-[450px]
        w-[450px]
        max-w-full
      "
    >

      {/* =================================================
          HEXAGON IMAGE

          Shadow direction is different for each card.
      ================================================= */}

      <div className="absolute inset-0 z-10">

        <Image
          src={polygonImage}
          alt="Hexagon Card Shape"
          fill
          priority
          className={`
            object-contain
            ${item.shadow}
          `}
        />

      </div>


      {/* =================================================
          CARD CONTENT
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          z-20

          flex
          flex-col
          items-center
          justify-center

          px-[80px]

          text-center
        "
      >

        {/* NAME / TITLE */}

<h3
  className="
    mb-[14px]
    whitespace-pre-line
    font-avenir
    text-[24px]
    font-extrabold
    leading-[1.15]
    text-black
  "
>
  {item.title}
</h3>


        {/* DESCRIPTION */}

       <p
  className="
    max-w-[250px]
    font-nunito-sans
    text-[16px]
    font-normal
    leading-[1.45]
    tracking-[0.04em]
    text-[#5B5B5B]
  "
>
  {item.description}
</p>

      </div>


      {/* =================================================
          TOP LEFT ICON
      ================================================= */}

      {item.icon === "top-left" && (
        <CardIcon
          className="
            left-[60px]
            top-[-30px]
          "
        />
      )}


      {/* =================================================
          TOP RIGHT ICON
      ================================================= */}

      {item.icon === "top-right" && (
        <CardIcon
          className="
            right-[40px]
            top-[-30px]
          "
        />
      )}


      {/* =================================================
          LEFT ICON
      ================================================= */}

      {item.icon === "left" && (
        <CardIcon
          className="
            left-[-50px]
            top-1/2
            -translate-y-1/2
          "
        />
      )}


      {/* =================================================
          RIGHT ICON
      ================================================= */}

      {item.icon === "right" && (
        <CardIcon
          className="
            right-[-50px]
            top-1/2
            -translate-y-1/2
          "
        />
      )}


      {/* =================================================
          BOTTOM LEFT ICON
      ================================================= */}

      {item.icon === "bottom-left" && (
        <CardIcon
          className="
            bottom-[-30px]
            left-[35px]
          "
        />
      )}


      {/* =================================================
          BOTTOM RIGHT ICON
      ================================================= */}

      {item.icon === "bottom-right" && (
        <CardIcon
          className="
            bottom-[-30px]
            right-[35px]
          "
        />
      )}

    </div>
  );
}


// =========================================================
// CARD ICON
// =========================================================

function CardIcon({
  className,
}: {
  className: string;
}) {
  return (
    <div
      className={`
        absolute
        z-40

        flex
        h-[120px]
        w-[120px]

        items-center
        justify-center

        rounded-full

        bg-[#185F62]

        shadow-[0_6px_14px_rgba(0,0,0,0.25)]

        ${className}
      `}
    >

      {/* =================================================
          ICON INNER DIV
      ================================================= */}

      <div className="relative h-[50px] w-[50px]">

        <Image
          src={cardIcon}
          alt="Card Icon"
          fill
          className="object-contain"
        />

      </div>

    </div>
  );
}


// =========================================================
// CENTER HEXAGON
// =========================================================

function CenterHex() {
  return (
    <div
      className="
        relative
        h-[450px]
        w-[450px]
        max-w-full
      "
    >

      {/* =================================================
          COMBINED CENTER IMAGE

          polygon + COHERE logo already included.
          NO SHADOW.
      ================================================= */}

      <Image
        src={middlePolygonLogo}
        alt="COHERE Consultants"
        fill
        priority
        className="object-contain"
      />

    </div>
  );
}