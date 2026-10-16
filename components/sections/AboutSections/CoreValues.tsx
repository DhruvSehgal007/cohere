
"use client";

import PolygonBg from "@/assets/images/About/PolygonBg.png";

interface CoreValue {
  id: string;
  title: string;
  desc: string;
  color: string;
  left: string;
  top: string;
}

const values: CoreValue[] = [
  {
    id: "empathy",
    title: "EMPATHY",
    desc: "We believe in open mindedness, listening, and open communication while doing our work",
    color: "#439B98",
    left: "10%",
    top: "400px",
  },
  {
    id: "passion",
    title: "PASSION",
    desc: "Passion for work is what fuels us, that we want an equal world free of violence and discrimination. We bring this to our daily lives & interactions, and we bring this to our work",
    color: "#F9AF32",
    left: "30%",
    top: "210px",
  },
  {
    id: "respect",
    title: "RESPECT",
    desc: "We pride in our ability to take on board conflicting views, differences & the value they bring on board",
    color: "#439B98",
    left: "50%",
    top: "20px",
  },
  {
    id: "efficiency",
    title: "EFFICIENCY",
    desc: "We streamline things for organizations, and give them the best within whatever means they have",
    color: "#F9AF32",
    left: "50%",
    top: "400px",
  },
  {
    id: "balance",
    title: "BALANCE",
    desc: "We empower organizations to build workplaces where inclusion, fairness, & equal opportunity are embedded into everyday practice.",
    color: "#F9AF32",
    left: "70%",
    top: "210px",
  },
];

const hexagonPath = `
  M 108 23
  L 245 23
  Q 254 23 260 32
  L 339 162
  Q 347 176.8 339 191
  L 260 321
  Q 254 330.6 245 330.6
  L 108 330.6
  Q 99 330.6 93 321
  L 14 191
  Q 6 176.8 14 162
  L 93 32
  Q 99 23 108 23
  Z
`;

function ValueHexagon({ value }: { value: CoreValue }) {
  // Keep the background inside the hexagon at every screen size.
  const hexagonClip =
    "polygon(30.5% 6.5%, 69.5% 6.5%, 73.5% 9%, 96% 46%, 98% 50%, 96% 54%, 73.5% 91%, 69.5% 93.5%, 30.5% 93.5%, 26.5% 91%, 4% 54%, 2% 50%, 4% 46%, 26.5% 9%)";

  return (
    <article className="relative isolate aspect-square w-full">
      {/* Background image clipped to the hexagon */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: hexagonClip,
          WebkitClipPath: hexagonClip,
        }}
      >
        <img
          src={PolygonBg.src}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute inset-0 h-full w-full object-fill"
        />

        <div className="absolute inset-0 bg-white/[0.12]" />
      </div>

      {/* Hexagon border */}
      <svg
        viewBox="0 0 353.61 353.61"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <path
          d={hexagonPath}
          fill="none"
          stroke={value.color}
          strokeWidth="12"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Text content */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center">
        <div className="w-[72%] sm:w-[74%] lg:w-[75%]">
          <h3 className="mb-2 font-avenir text-[16px] font-bold leading-6 text-[#1B3D3C] sm:text-[18px] lg:text-[20px]">
            {value.title}
          </h3>

          <p className="break-words font-nunito-sans text-[14px] leading-[18px] tracking-[0.02em] text-[#333333] sm:text-[14px] sm:leading-[20px] lg:text-[16px] lg:leading-[26px]">
            {value.desc}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function CoreValues() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16">
      <div className="container-custom mx-auto px-4 sm:px-6">
        {/* Desktop layout */}
        <div className="relative hidden min-h-[850px] w-full xl:block">
          <div className="relative z-20">
            <span className="inline-block rounded bg-[#439897] px-3 py-1 font-avenir text-[12px] text-white sm:px-4 sm:text-[14px]">
              WE FOLLOW
            </span>

            <h2 className="mt-3 font-avenir text-[32px] font-extrabold leading-tight text-black sm:text-[34px] md:text-[36px] lg:text-[40px]">
              Our Core Values
            </h2>
          </div>

          {values.map((value) => (
            <div
              key={value.id}
              className="absolute z-10 h-[353.61px] w-[353.61px] transition-transform duration-300 hover:scale-[1.02]"
              style={{
                left: value.left,
                top: value.top,
              }}
            >
              <ValueHexagon value={value} />
            </div>
          ))}
        </div>

        {/* Tablet and mobile layout */}
        <div className="block xl:hidden">
          <div className="mb-8 sm:mb-10">
            <span className="inline-flex rounded bg-[#439B98] px-3 py-2 font-avenir text-xs text-white">
              WE FOLLOW
            </span>

            <h2 className="mt-4 font-avenir text-2xl font-extrabold leading-tight text-[#0D1E1E] sm:text-3xl md:text-4xl">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-y-8 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-7 lg:grid-cols-6 lg:gap-x-3 lg:gap-y-8">
            {values.map((value, index) => (
              <div
                key={value.id}
                className={[
                  "relative aspect-square w-full max-w-[353.61px]",
                  index === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : index === 4
                      ? "lg:col-span-2 lg:col-start-4"
                      : "lg:col-span-2",
                  index === 4 ? "sm:col-span-2 sm:justify-self-center" : "",
                ].join(" ")}
              >
                <ValueHexagon value={value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
