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

          /* 0 - 600 */
          max-[600px]:h-[110px]
          max-[600px]:w-[400px]
          max-[600px]:rounded-[40px]
          max-[600px]:shadow-[0_10px_14px_rgba(0,0,0,0.18)]

          /* 601 - 900 */
          min-[601px]:max-[900px]:h-[120px]
          min-[601px]:max-[900px]:w-[500px]
          min-[601px]:max-[900px]:rounded-[50px]

          /* 901 - 1100 */
          min-[901px]:max-[1100px]:h-[160px]
          min-[901px]:max-[1100px]:w-[740px]
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

            /* 0 - 600 */
            max-[600px]:h-[110px]
            max-[600px]:w-[50px]
            max-[600px]:text-[44px]

            /* 601 - 900 */
            min-[601px]:max-[900px]:h-[120px]
            min-[601px]:max-[900px]:w-[60px]
            min-[601px]:max-[900px]:text-[48px]

            /* 901 - 1100 */
            min-[901px]:max-[1100px]:h-[160px]
            min-[901px]:max-[1100px]:w-[110px]
            min-[901px]:max-[1100px]:text-[100px]
          `}
        >
          <span
            className="
              relative
              select-none
              bg-clip-text
              text-transparent
            "
            style={{
              backgroundImage: `url("${NOISE_TEXTURE}"), linear-gradient(180deg, #FFFFFF 0%, #C1C1C1 100%)`,
              WebkitBackgroundClip: "text",
            }}
          >
            {number}
          </span>
        </div>

        {/* WHITE / IMAGE SECTION */}
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

            /* 0 - 600 */
            max-[600px]:h-[110px]
            max-[600px]:w-[calc(100%-50px)]
            max-[600px]:rounded-[30px]

            ${
              right
                ? "max-[600px]:left-0 max-[600px]:right-auto"
                : "max-[600px]:right-0 max-[600px]:left-auto"
            }

            /* 601 - 900 */
            min-[601px]:max-[900px]:h-[120px]
            min-[601px]:max-[900px]:w-[calc(100%-60px)]
            min-[601px]:max-[900px]:rounded-[50px]

            ${
              right
                ? "min-[601px]:max-[900px]:left-0 min-[601px]:max-[900px]:right-auto"
                : "min-[601px]:max-[900px]:right-0 min-[601px]:max-[900px]:left-auto"
            }

            /* 901 - 1100 */
            min-[901px]:max-[1100px]:h-[160px]
            min-[901px]:max-[1100px]:w-[640px]

            ${
              right
                ? "min-[901px]:max-[1100px]:left-0 min-[901px]:max-[1100px]:right-auto"
                : "min-[901px]:max-[1100px]:right-0 min-[901px]:max-[1100px]:left-auto"
            }
          `}
        >
          {/* BACKGROUND IMAGE */}
          <div
            className={`
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
              ${right ? "" : "scale-x-[-1]"}
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

              /* 0 - 600 */
              max-[600px]:px-[10px]
              max-[600px]:gap-0

              /* 601 - 900 */
              min-[601px]:max-[900px]:px-[14px]
              min-[601px]:max-[900px]:gap-0

              /* 901 - 1100 */
              min-[901px]:max-[1100px]:px-[40px]
              min-[901px]:max-[1100px]:gap-0
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

                /* 0 - 600 */
                max-[600px]:h-[44px]
                max-[600px]:w-[44px]

                ${
                  right
                    ? "max-[600px]:mr-[10px]"
                    : "max-[600px]:order-2 max-[600px]:ml-[10px]"
                }

                /* 601 - 900 */
                min-[601px]:max-[900px]:h-[54px]
                min-[601px]:max-[900px]:w-[54px]

                ${
                  right
                    ? "min-[601px]:max-[900px]:mr-[14px]"
                    : "min-[601px]:max-[900px]:order-2 min-[601px]:max-[900px]:ml-[14px]"
                }

                /* 901 - 1100 */
                min-[901px]:max-[1100px]:h-[100px]
                min-[901px]:max-[1100px]:w-[100px]

                ${
                  right
                    ? "min-[901px]:max-[1100px]:mr-[38px]"
                    : "min-[901px]:max-[1100px]:order-2 min-[901px]:max-[1100px]:ml-[38px]"
                }
              `}
            >
              <img
                src={iconSrc}
                alt=""
                className="
                  h-[110px]
                  w-[110px]
                  object-contain

                  /* 0 - 600 */
                  max-[600px]:h-[44px]
                  max-[600px]:w-[44px]

                  /* 601 - 900 */
                  min-[601px]:max-[900px]:h-[54px]
                  min-[601px]:max-[900px]:w-[54px]

                  /* 901 - 1100 */
                  min-[901px]:max-[1100px]:h-[100px]
                  min-[901px]:max-[1100px]:w-[100px]
                "
              />
            </div>

            {/* TEXT */}
            <div
              className={`
                flex
                flex-1
                flex-col
                gap-[9px]
                min-w-0

                ${
                  right
                    ? "text-left"
                    : "order-1 text-right"
                }

                /* 0 - 600 */
                max-[600px]:gap-[3px]

                /* 601 - 900 */
                min-[601px]:max-[900px]:gap-[5px]

                /* 901 - 1100 */
                min-[901px]:max-[1100px]:gap-[5px]
              `}
            >
              <h3
                className="
                  font-avenir
                  text-[40px]
                  font-extrabold
                  leading-[1.1]
                  text-black

                  /* 0 - 600 */
                  max-[600px]:text-[20px]
                  max-[600px]:leading-[1.1]

                  /* 601 - 900 */
                  min-[601px]:max-[900px]:text-[28px]
                  min-[601px]:max-[900px]:leading-[1.1]

                  /* 901 - 1100 */
                  min-[901px]:max-[1100px]:text-[30px]
                  min-[901px]:max-[1100px]:leading-[1.1]
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

                  /* 0 - 600 */
                  max-[600px]:text-[10px]
                  max-[600px]:leading-[1.3]

                  /* 601 - 900 */
                  min-[601px]:max-[900px]:text-[12px]
                  min-[601px]:max-[900px]:leading-[1.3]

                  /* 901 - 1100 */
                  min-[901px]:max-[1100px]:text-[13px]
                  min-[901px]:max-[1100px]:leading-[1.3]
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