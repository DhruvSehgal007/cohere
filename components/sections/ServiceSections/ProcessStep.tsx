"use client";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: any;
  right?: boolean;
  cardBackground: any;
}

const NOISE_TEXTURE = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E`;

export default function ProcessStep({
  number,
  title,
  description,
  icon,
  right = true,
  cardBackground,
}: ProcessStepProps) {
  const iconSrc = typeof icon === "string" ? icon : icon?.src;

  const cardBackgroundSrc =
    typeof cardBackground === "string"
      ? cardBackground
      : cardBackground?.src;

  return (
    <div
      className={`flex w-full ${
        right ? "justify-end" : "justify-start"
      }`}
    >
      {/* MAIN CARD */}
      <div
        className="
          relative
          h-[220px]
          w-[866px]
          overflow-hidden
          rounded-[83px]
          shadow-[0_25px_35px_rgba(0,0,0,0.18)]
        "
        style={{
          background:
            "linear-gradient(180deg, #439897 0%, #2E262E 100%)",
        }}
      >
        {/* GREEN TEXTURE */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            opacity-50
            mix-blend-overlay
          "
          style={{
            backgroundImage: `url("${NOISE_TEXTURE}")`,
            backgroundRepeat: "repeat",
          }}
        />

        {/* NUMBER */}
        <div
          className={`
            absolute
            top-0
            z-[2]
            flex
            h-[220px]
            w-[150px]
            items-center
            justify-center
            font-avenir
            text-[120px]
            font-extrabold
            leading-none
            ${right ? "right-0" : "left-0"}
          `}
        >
          <span
            className="relative select-none bg-clip-text text-transparent"
            style={{
              backgroundImage: `url("${NOISE_TEXTURE}"), linear-gradient(180deg, #FFFFFF 0%, #C1C1C1 100%)`,
              WebkitBackgroundClip: "text",
            }}
          >
            {number}
          </span>
        </div>

        {/* WHITE SECTION */}
        <div
          className={`
            absolute
            top-0
            z-10
            h-[220px]
            w-[716px]
            overflow-hidden
            rounded-[83px]
            ${right ? "left-0" : "right-0"}
          `}
        >
          {/* ================================================
              BACKGROUND IMAGE
              1 & 3 = normal
              2 & 4 = flipped
          ================================================= */}
          <div
            className={`
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
              ${
                right
                  ? ""
                  : "scale-x-[-1]"
              }
            `}
            style={{
              backgroundImage: `url("${cardBackgroundSrc}")`,
            }}
          />

          {/* CONTENT */}
          <div
            className={`
              relative
              z-10
              flex
              h-full
              items-center
              ${
                right
                  ? "pl-[65px] pr-[40px]"
                  : "pl-[40px] pr-[65px]"
              }
            `}
          >
            {/* ICON */}
            <div
              className={`
                flex
                h-[110px]
                w-[110px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#F1F4F3]
                ${
                  right
                    ? "mr-[38px]"
                    : "order-2 ml-[38px]"
                }
              `}
            >
              <img
                src={iconSrc}
                alt=""
                className="h-[110px] w-[110px] object-contain"
              />
            </div>

            {/* TEXT */}
<div
  className={`
    flex
    flex-1
    flex-col
    gap-[9px]
    ${
      right
        ? "text-left"
        : "order-1 text-right"
    }
  `}
>
  <h3
    className="
      font-avenir
      text-[40px]
      font-extrabold
      leading-[1.1]
      text-black
    "
  >
    {title}
  </h3>

  <p
    className="
      font-nunito-sans
      text-[16px]
      font-normal
      leading-[1.4]
      text-[#5B5B5B]
    "
  >
    {description}
  </p>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}