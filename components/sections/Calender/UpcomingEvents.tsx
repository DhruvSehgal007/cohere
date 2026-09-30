const programmeCards = [
  {
    id: 1,
    title: "POSH+ Masterclasses",
    description:
      "Practical learning and case-based discussions for workplace professionals.",
    buttonText: "View Programme",
  },
  {
    id: 2,
    title: "POSH+ Masterclasses",
    description:
      "Practical learning and case-based discussions for workplace professionals.",
    buttonText: "View Programme",
  },
  {
    id: 3,
    title: "POSH+ Masterclasses",
    description:
      "Practical learning and case-based discussions for workplace professionals.",
    buttonText: "View Programme",
  },
  {
    id: 4,
    title: "POSH+ Masterclasses",
    description:
      "Practical learning and case-based discussions for workplace professionals.",
    buttonText: "View Programme",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-10 sm:py-12 md:py-16">

      {/* TOP CONTENT */}
      <div className="container-custom px-4 sm:px-6">
        <div className="w-full">

          <span className="inline-block rounded bg-[#439897] px-3 py-1 font-avenir text-[12px] text-white sm:px-4 sm:text-[14px]">
            Upcoming Events
          </span>

          <h2
            className="
              mt-3
              w-full
              font-avenir
              text-[22px]
              font-bold
              leading-[1.15]
              text-black
              sm:text-[30px]
              md:mt-4
              md:text-[36px]
              lg:text-[40px]
            "
          >
            Explore All Programme Types
          </h2>

        </div>
      </div>


      {/* CARDS */}
      <div className="container-custom mt-8 px-4 min-[681px]:mt-10 sm:px-6">

        <div
          className="
            grid
            grid-cols-1
            gap-6
            min-[681px]:grid-cols-2
            min-[681px]:gap-5
            xl:grid-cols-4
          "
        >
          {programmeCards.map((card) => (
  <div
    key={card.id}
    className="
      relative
      min-h-[250px]
      w-full
      [filter:drop-shadow(0_8px_16px_rgba(4,0,66,0.12))]
    "
  >

    {/* =========================================
        GREEN BACKGROUND
        MOBILE: full card, hidden behind white
        681px+: diagonal green shape
    ========================================= */}
    <div
      className="
        absolute
        inset-0
        h-full
        w-full
        rounded-[16px]
        bg-[#439897]

        min-[681px]:inset-auto
        min-[681px]:right-0
        min-[681px]:top-0
        min-[681px]:h-full
        min-[681px]:w-[200px]
        min-[681px]:rounded-[16px]
        min-[681px]:rounded-br-[16px]
        min-[681px]:[clip-path:polygon(100%_0,100%_100%,0_100%)]

        xl:right-[4px]
        xl:w-[200px]
      "
    />


    {/* =========================================
        MOBILE WHITE NORMAL CARD
        Only visible up to 680px
    ========================================= */}
    <div
      className="
        absolute
        inset-0
        z-10
        rounded-[16px]
        border
        border-[#E1E1E1]
        bg-white

        min-[681px]:hidden
      "
    />


    {/* =========================================
        DESKTOP / TABLET SVG SHAPE
        Hidden on mobile
    ========================================= */}
    <svg
      className="
        absolute
        inset-0
        z-10
        hidden
        h-full
        w-full
        min-[681px]:block
      "
      viewBox="0 0 366 293"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="
          M 16 0
          H 350
          C 360 0 367 10 364 22
          L 294 274
          C 291 285 285 293 272 293
          H 16
          C 7 293 0 286 0 277
          V 16
          C 0 7 7 0 16 0
          Z
        "
        fill="white"
        stroke="#E1E1E1"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>


    {/* =========================================
        CONTENT
    ========================================= */}
    <div className="relative z-20 p-6 min-[681px]:p-8">

      {/* ICON */}
      <div
        className="
          mb-4
          h-[55px]
          w-[55px]
          rounded-[8px]
          bg-[#078B87]
        "
      />


      {/* TITLE */}
      <h3 className="font-avenir text-[14px] font-bold text-[#439897]">
        {card.title}
      </h3>


      {/* DESCRIPTION */}
      <p
        className="
          mt-3
          w-full
          font-nunito-sans
          text-[16px]
          leading-[1.5]
          text-[#608383]

          min-[681px]:w-[calc(100%-55px)]
          min-[681px]:max-w-[420px]
          min-[681px]:text-[18px]

          xl:max-w-[210px]
        "
      >
        {card.description}
      </p>


      {/* BUTTON */}
      <button
        type="button"
        className="
          mt-5
          font-nunito-sans-bold
          text-[14px]
          font-bold
          text-[#004140]
        "
      >
        {card.buttonText}
      </button>

    </div>
  </div>
))}
        </div>

      </div>

{/* for shapes */}
<div className="container-custom mt-8 px-4 sm:px-6">

  {/* WHY ATTEND FIGURE */}
  <div className="relative mx-auto h-[680px] w-full max-w-[760px]">


    {/* =========================
        TOP SHAPE
    ========================= */}
    <div
      className="
        absolute
        left-1/2
        top-[20px]
        h-[320px]
        w-[540px]
        -translate-x-1/2
        drop-shadow-[0_8px_8px_rgba(4,0,66,0.10)]
      "
    >
      <svg
        viewBox="0 0 450 270"
        className="h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 0 95
            A 320 320 0 0 1 450 95

            L 310 235

            A 110 110 0 0 0 140 235

            Z
          "
          fill="white"
          stroke="#F1F1F1"
          strokeWidth="1"
        />
      </svg>


      {/* TOP ICON */}
      <div
        className="
          absolute
          left-1/2
          top-[-30px]
          h-[76px]
          w-[76px]
          -translate-x-1/2
          rounded-full
          bg-[#439897]
        "
      />


      {/* TOP CONTENT */}
      <div
        className="
          absolute
          left-1/2
          top-[64px]
          w-[300px]
          -translate-x-1/2
          text-center
        "
      >
        <h3
          className="
            font-avenir
            text-[18px]
            font-bold
            text-[#439897]
          "
        >
          Practical Learning
        </h3>

        <p
          className="
            mt-2
            font-nunito-sans
            text-[18px]
            leading-[1.5]
            tracking-[0.04em]
            text-[#608383]
          "
        >
          Understand workplace responsibilities through practical discussions
          and case studies.
        </p>
      </div>
    </div>


    {/* =========================
        LEFT SHAPE
    ========================= */}
    <div
      className="
        absolute
        bottom-[10px]
        left-[-30px]
        h-[520px]
        w-[360px]
        drop-shadow-[0_8px_8px_rgba(4,0,66,0.10)]
      "
    >
      <svg
        viewBox="0 0 285 445"
        className="h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 92 0

            L 238 146

            A 110 110 0 0 0 238 299

            L 92 445

            A 320 320 0 0 1 92 0

            Z
          "
          fill="white"
          stroke="#F1F1F1"
          strokeWidth="1"
        />
      </svg>


      {/* LEFT ICON */}
      <div
        className="
          absolute
          left-[74px]
          top-[110px]
          h-[76px]
          w-[76px]
          rounded-full
          bg-[#439897]
        "
      />


      {/* LEFT CONTENT */}
      <div
        className="
          absolute
          left-[36px]
          top-[198px]
          w-[240px]
        "
      >
        <h3
          className="
            font-avenir
            text-[18px]
            font-bold
            leading-[1.2]
            text-[#439897]
          "
        >
          Meaningful
          <br />
          Conversations
        </h3>

        <p
          className="
            mt-3
            font-nunito-sans
            text-[18px]
            leading-[1.5]
            tracking-[0.04em]
            text-[#608383]
          "
        >
          Build confidence to respond to workplace concerns with greater
          clarity and understanding.
        </p>
      </div>
    </div>


    {/* =========================
        RIGHT SHAPE
    ========================= */}
    <div
      className="
        absolute
        bottom-[14px]
        right-[-14px]
        h-[520px]
        w-[330px]
        drop-shadow-[0_8px_8px_rgba(4,0,66,0.10)]
      "
    >
      <svg
        viewBox="0 0 285 445"
        className="h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 193 0

            A 320 320 0 0 1 193 445

            L 47 299

            A 110 110 0 0 0 47 146

            Z
          "
          fill="white"
          stroke="#F1F1F1"
          strokeWidth="1"
        />
      </svg>


      {/* RIGHT ICON */}
      <div
        className="
          absolute
          right-[74px]
          top-[110px]
          h-[76px]
          w-[76px]
          rounded-full
          bg-[#439897]
        "
      />


      {/* RIGHT CONTENT */}
      <div
        className="
          absolute
          right-[4px]
          top-[200px]
          w-[205px]
        "
      >
        <h3
          className="
            font-avenir
            text-[18px]
            font-bold
            leading-[1.2]
            text-[#439897]
          "
        >
          Expert Guidance
        </h3>

        <p
          className="
            mt-3
            font-nunito-sans
            text-[18px]
            leading-[1.5]
            tracking-[0.04em]
            text-[#608383]
          "
        >
          Learn from experienced lawyers, HR professionals, trainers, and
          counsellors.
        </p>
      </div>
    </div>


    {/* =========================
        CENTER CIRCLE
    ========================= */}
    <div
      className="
        absolute
        left-1/2
        top-[300px]
        z-20

        flex
        h-[220px]
        w-[220px]
        -translate-x-1/2

        items-center
        justify-center

        rounded-full
        bg-white

        shadow-[0_0_12px_rgba(4,0,66,0.12)]
      "
    >
      <h2
        className="
          whitespace-nowrap
          font-avenir
          text-[26px]
          font-extrabold
          text-[#101C1C]
        "
      >
        Why Attend?
      </h2>
    </div>

  </div>
</div>

      
    </section>
  );
}