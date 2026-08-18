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
    desktopPosition: "top-left",
    mobilePosition: "left",
    desktopShadow: "drop-shadow-[-24px_-34px_0px_#008E92]",
    mobileShadow: "drop-shadow-[-16px_-20px_0px_#008E92]",
    tabletShadow: "drop-shadow-[-16px_-20px_0px_#008E92]",
  },

  {
    title: "Awareness\nProgrammes",
    description:
      "Interactive workshops that help employees understand workplace behaviour, responsibilities, and respectful interactions.",
    desktopPosition: "top-right",
    mobilePosition: "right",
    desktopShadow: "drop-shadow-[24px_-34px_0px_#008E92]",
    mobileShadow: "drop-shadow-[16px_-20px_0px_#008E92]",
    tabletShadow: "drop-shadow-[16px_-20px_0px_#008E92]",
  },

  {
    title: "Internal Committee\nSupport",
    description:
      "Strengthening Internal Committees through orientation, practical learning, and ongoing guidance.",
    desktopPosition: "left",
    mobilePosition: "left",
    desktopShadow: "drop-shadow-[-34px_0px_0px_#008E92]",
    mobileShadow: "drop-shadow-[-20px_0px_0px_#008E92]",
    tabletShadow: "drop-shadow-[-16px_-20px_0px_#008E92]",
  },

  {
    title: "Workplace\nInvestigations",
    description:
      "Supporting organisations with structured, confidential, and fair investigation processes.",
    desktopPosition: "right",
    mobilePosition: "right",
    desktopShadow: "drop-shadow-[34px_0px_0px_#008E92]",
    mobileShadow: "drop-shadow-[20px_0px_0px_#008E92]",
    tabletShadow: "drop-shadow-[16px_-20px_0px_#008E92]",
  },

  {
    title: "Trauma-Informed\nPractice",
    description:
      "Helping organisations understand trauma responses and promote compassionate, informed workplace processes.",
    desktopPosition: "bottom-left",
    mobilePosition: "left",
    desktopShadow: "drop-shadow-[-24px_34px_0px_#008E92]",
    mobileShadow: "drop-shadow-[-16px_20px_0px_#008E92]",
    tabletShadow: "drop-shadow-[-16px_-20px_0px_#008E92]",
  },

  {
    title: "Resources &\nGuidance",
    description:
      "Providing practical resources, workplace templates, awareness materials, and compliance guidance.",
    desktopPosition: "bottom-right",
    mobilePosition: "right",
    desktopShadow: "drop-shadow-[24px_34px_0px_#008E92]",
    mobileShadow: "drop-shadow-[16px_20px_0px_#008E92]",
    tabletShadow: "drop-shadow-[16px_-20px_0px_#008E92]",
  },
];

// =========================================================
// MAIN SECTION
// =========================================================

export default function OurSupportSection() {
  return (
    <section
      className="
        mt-24
        w-full
        bg-white
        py-[60px]

        max-[1100px]:mt-16
        max-[1100px]:py-[40px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-4

          max-[767px]:px-0
          min-[768px]:px-6
        "
      >
        {/* =================================================
            MOBILE LAYOUT
            0 - 767px
            ================================================= */}

        <div className="block min-[768px]:hidden">

          {/* CARD 1 */}
          <div className="mb-[50px] flex w-full justify-center">
            <HexCard item={CARDS[0]} mode="mobile" />
          </div>

          {/* CARD 2 */}
          <div className="mb-[50px] flex w-full justify-center">
            <HexCard item={CARDS[1]} mode="mobile" />
          </div>

          {/* CARD 3 */}
          <div className="mb-[50px] flex w-full justify-center">
            <HexCard item={CARDS[2]} mode="mobile" />
          </div>

          {/* CENTER LOGO */}
          <div className="my-[40px] flex w-full justify-center">
            <CenterHex />
          </div>

          {/* CARD 4 */}
          <div className="mb-[50px] flex w-full justify-center">
            <HexCard item={CARDS[3]} mode="mobile" />
          </div>

          {/* CARD 5 */}
          <div className="mb-[50px] flex w-full justify-center">
            <HexCard item={CARDS[4]} mode="mobile" />
          </div>

          {/* CARD 6 */}
          <div className="flex w-full justify-center">
            <HexCard item={CARDS[5]} mode="mobile" />
          </div>
        </div>

        {/* =================================================
            TABLET LAYOUT
            768px - 1100px
            ================================================= */}

        <div
          className="
            hidden
            min-[768px]:block
            min-[1101px]:hidden
          "
        >
          {/* CENTER LOGO FIRST */}

          <div className="flex w-full justify-center">
            <CenterHex tablet />
          </div>

          {/* =================================================
              ROW 1
              CARD 1 + CARD 2
              ================================================= */}

          <div className="mb-[50px] grid grid-cols-2 gap-0">

            {/* CARD 1 - LEFT */}

            <div className="flex justify-center">
              <div className="translate-x-[20px]">
                <HexCard
                  item={CARDS[0]}
                  mode="tablet"
                />
              </div>
            </div>

            {/* CARD 2 - RIGHT */}

            <div className="flex justify-center">
              <div className="translate-x-[-20px]">
                <HexCard
                  item={CARDS[1]}
                  mode="tablet"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              ROW 2
              CARD 3 + CARD 4
              ================================================= */}

          <div className="mb-[50px] grid grid-cols-2 gap-0">

            {/* CARD 3 - LEFT */}

            <div className="flex justify-center">
              <div className="translate-x-[20px]">
                <HexCard
                  item={CARDS[2]}
                  mode="tablet"
                />
              </div>
            </div>

            {/* CARD 4 - RIGHT */}

            <div className="flex justify-center">
              <div className="translate-x-[-20px]">
                <HexCard
                  item={CARDS[3]}
                  mode="tablet"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              ROW 3
              CARD 5 + CARD 6
              ================================================= */}

          <div className="grid grid-cols-2 gap-0">

            {/* CARD 5 - LEFT */}

            <div className="flex justify-center">
              <div className="translate-x-[20px]">
                <HexCard
                  item={CARDS[4]}
                  mode="tablet"
                />
              </div>
            </div>

            {/* CARD 6 - RIGHT */}

            <div className="flex justify-center">
              <div className="translate-x-[-20px]">
                <HexCard
                  item={CARDS[5]}
                  mode="tablet"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            DESKTOP LAYOUT
            1101px+
            ================================================= */}

        <div
          className="
            hidden
            min-[1101px]:block
          "
        >
          {/* =================================================
              TOP ROW
              ================================================= */}

          <div
            className="
              grid
              w-full
              grid-cols-2
              items-center
              justify-items-center
              gap-0
              px-[120px]
              -mb-[150px]
            "
          >
            {/* CARD 1 */}

            <div
              className="
                flex
                w-full
                justify-center
                translate-x-[80px]
                translate-y-[-70px]

                max-[1440px]:translate-x-[40px]
                max-[1440px]:translate-y-[-90px]
              "
            >
              <HexCard
                item={CARDS[0]}
                mode="desktop"
              />
            </div>

            {/* CARD 2 */}

            <div
              className="
                flex
                w-full
                justify-center
                translate-x-[-70px]
                translate-y-[-70px]

                max-[1440px]:translate-x-[-40px]
                max-[1440px]:translate-y-[-90px]
              "
            >
              <HexCard
                item={CARDS[1]}
                mode="desktop"
              />
            </div>
          </div>

          {/* =================================================
              MIDDLE ROW
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
            {/* CARD 3 */}

            <div
              className="
                flex
                w-full
                justify-center
                translate-x-[40px]
              "
            >
              <HexCard
                item={CARDS[2]}
                mode="desktop"
              />
            </div>

            {/* CENTER */}

            <div className="z-30 flex w-full justify-center">
              <CenterHex />
            </div>

            {/* CARD 4 */}

            <div
              className="
                flex
                w-full
                justify-center
                translate-x-[-40px]
              "
            >
              <HexCard
                item={CARDS[3]}
                mode="desktop"
              />
            </div>
          </div>

          {/* =================================================
              BOTTOM ROW
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
              px-[120px]
              -mt-[150px]
              pb-[180px]
            "
          >
            {/* CARD 5 */}

            <div
              className="
                flex
                w-full
                justify-center
                translate-x-[80px]
                translate-y-[80px]

                max-[1440px]:translate-x-[40px]
                max-[1440px]:translate-y-[90px]
              "
            >
              <HexCard
                item={CARDS[4]}
                mode="desktop"
              />
            </div>

            {/* CARD 6 */}

            <div
              className="
                flex
                w-full
                justify-center
                translate-x-[-70px]
                translate-y-[80px]
                max-[1440px]:translate-x-[-40px]
                max-[1440px]:translate-y-[90px]
              "
            >
              <HexCard
                item={CARDS[5]}
                mode="desktop"
              />
            </div>
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
  mode,
}: {
  item: {
    title: string;
    description: string;
    desktopPosition: string;
    mobilePosition: string;
    desktopShadow: string;
    mobileShadow: string;
    tabletShadow: string;
  };

  mode: "mobile" | "tablet" | "desktop";
}) {
  return (
    <div
      className={`
        relative
        max-w-full

        ${
          mode === "desktop"
            ? `
              h-[450px]
              w-[450px]

              max-[1440px]:h-[350px]
              max-[1440px]:w-[350px]
            `
            : mode === "tablet"
              ? "h-[clamp(300px,40vw,420px)] w-[clamp(300px,40vw,420px)]"
              : "h-[clamp(280px,88vw,380px)] w-[clamp(280px,88vw,380px)]"
        }
      `}
    >
      {/* =================================================
          HEXAGON IMAGE
          ================================================= */}

      <div className="absolute inset-0 z-10">
        <Image
          src={polygonImage}
          alt="Hexagon Card Shape"
          fill
          priority
          className={`
            object-contain

            ${
              mode === "desktop"
                ? `
                  ${item.desktopShadow}

                  ${
                    item.desktopPosition === "top-left"
                      ? "max-[1440px]:drop-shadow-[-20px_-28px_0px_#008E92]"
                      : ""
                  }

                  ${
                    item.desktopPosition === "top-right"
                      ? "max-[1440px]:drop-shadow-[20px_-28px_0px_#008E92]"
                      : ""
                  }

                  ${
                    item.desktopPosition === "left"
                      ? "max-[1440px]:drop-shadow-[-28px_0px_0px_#008E92]"
                      : ""
                  }

                  ${
                    item.desktopPosition === "right"
                      ? "max-[1440px]:drop-shadow-[28px_0px_0px_#008E92]"
                      : ""
                  }

                  ${
                    item.desktopPosition === "bottom-left"
                      ? "max-[1440px]:drop-shadow-[-20px_28px_0px_#008E92]"
                      : ""
                  }

                  ${
                    item.desktopPosition === "bottom-right"
                      ? "max-[1440px]:drop-shadow-[20px_28px_0px_#008E92]"
                      : ""
                  }
                `
                : mode === "tablet"
                  ? item.tabletShadow
                  : item.mobileShadow
            }
          `}
        />
      </div>

      {/* =================================================
          CARD CONTENT
          ================================================= */}

      <div
        className={`
          absolute
          inset-0
          z-20

          flex
          flex-col
          items-center
          justify-center

          text-center

          ${
            mode === "desktop"
              ? "px-[80px]"
              : mode === "tablet"
                ? "px-[50px]"
                : "px-[38px]"
          }
        `}
      >
        {/* TITLE */}

        <h3
          className={`
            whitespace-pre-line
            font-avenir
            font-extrabold
            leading-[1.15]
            text-black

            ${
              mode === "desktop"
                ? "mb-[14px] text-[24px]"
                : "mb-[10px] text-[20px]"
            }
          `}
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className={`
            font-nunito-sans
            font-normal
            leading-[1.45]
            tracking-[0.04em]
            text-[#5B5B5B]

            ${
              mode === "desktop"
                ? "max-w-[250px] text-[16px]"
                : mode === "tablet"
                  ? "max-w-[210px] text-[14px]"
                  : "max-w-[200px] text-[14px]"
            }
          `}
        >
          {item.description}
        </p>
      </div>

      {/* =================================================
          ICON
          ================================================= */}

      <CardIcon
        desktopPosition={item.desktopPosition}
        mobilePosition={item.mobilePosition}
        mode={mode}
      />
    </div>
  );
}

// =========================================================
// CARD ICON
// =========================================================

function CardIcon({
  desktopPosition,
  mobilePosition,
  mode,
}: {
  desktopPosition: string;
  mobilePosition: string;
  mode: "mobile" | "tablet" | "desktop";
}) {
  let desktopClasses = "";

  // =======================================================
  // DESKTOP POSITIONS
  // =======================================================

  if (desktopPosition === "top-left") {
  desktopClasses = `
    left-[60px] top-[-30px]
    max-[1440px]:left-[40px]
    max-[1440px]:top-[-10px]
  `;
}

if (desktopPosition === "top-right") {
  desktopClasses = `
    right-[40px] top-[-30px]
    max-[1440px]:right-[40px]
    max-[1440px]:top-[-10px]
  `;
}

if (desktopPosition === "left") {
  desktopClasses = `
    left-[-50px] top-1/2 -translate-y-1/2
    max-[1440px]:left-[-30px]
  `;
}

if (desktopPosition === "right") {
  desktopClasses = `
    right-[-50px] top-1/2 -translate-y-1/2
    max-[1440px]:right-[-30px]
  `;
}

if (desktopPosition === "bottom-left") {
  desktopClasses = `
    bottom-[-30px] left-[35px]
    max-[1440px]:left-[40px]
    max-[1440px]:bottom-[-10px]
  `;
}

if (desktopPosition === "bottom-right") {
  desktopClasses = `
    bottom-[-30px] right-[35px]
    max-[1440px]:right-[40px]
    max-[1440px]:bottom-[-10px]
  `;
}
  // =======================================================
  // MOBILE / TABLET POSITION
  // LEFT → RIGHT → LEFT → RIGHT
  // =======================================================

  const responsivePosition =
    mobilePosition === "left"
      ? "left-[50px] right-auto"
      : "right-[50px] left-auto";

  return (
    <div
      className={`
        absolute
        z-40

        flex
        items-center
        justify-center

        rounded-full
        bg-[#185F62]

        ${
          mode === "desktop"
            ? `
              h-[120px]
              w-[120px]
              ${desktopClasses}

              max-[1440px]:h-[80px]
              max-[1440px]:w-[80px]
            `
            : `
              h-[70px]
              w-[70px]
              top-0
              ${responsivePosition}
            `
        }

        shadow-[0_6px_14px_rgba(0,0,0,0.25)]
      `}
    >
      {/* =================================================
          ICON IMAGE
          ================================================= */}

      <div
        className={`
          relative

          ${
            mode === "desktop"
              ? `
                h-[50px]
                w-[50px]

                max-[1440px]:h-[40px]
                max-[1440px]:w-[40px]
              `
              : "h-[30px] w-[30px]"
          }
        `}
      >
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

function CenterHex({ tablet = false }: { tablet?: boolean }) {
  return (
    <div
      className={`
        relative
        max-w-full

        ${
          tablet
            ? "h-[clamp(300px,40vw,420px)] w-[clamp(300px,40vw,420px)]"
            : `
                h-[450px] w-[450px]
                max-[1440px]:h-[350px]
                max-[1440px]:w-[350px]
              `
        }
      `}
    >
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