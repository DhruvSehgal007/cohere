const orbitItems = [
  {
    title: "Easy to follow, easy to use",
    icon: "fa-solid fa-hand-pointer",
    side: "left",
    top: "top-[18px]",
    rowWidth: "w-[330px]",
  },
  {
    title: "Engaging multilingual videos",
    icon: "fa-solid fa-chalkboard-user",
    side: "left",
    top: "top-[88px]",
    rowWidth: "w-[380px]",
  },
  {
    title: "Employee awareness",
    icon: "fa-solid fa-bullhorn",
    side: "left",
    top: "top-[160px]",
    rowWidth: "w-[345px]",
  },
  {
    title: "Manager interventions and IC orientation",
    icon: "fa-solid fa-people-arrows-left-right",
    side: "left",
    top: "top-[230px]",
    rowWidth: "w-[470px]",
  },
  {
    title: "FAQs, Resources and Assessments",
    icon: "fa-solid fa-file-circle-question",
    side: "left",
    top: "top-[300px]",
    rowWidth: "w-[420px]",
  },

  {
    title: "Customizable Options",
    icon: "fa-solid fa-sliders",
    side: "right",
    top: "top-[18px]",
    rowWidth: "w-[300px]",
  },
  {
    title: "Automated Certification",
    icon: "fa-solid fa-id-card-clip",
    side: "right",
    top: "top-[88px]",
    rowWidth: "w-[340px]",
  },
  {
    title: "HR Dashboard",
    icon: "fa-solid fa-desktop",
    side: "right",
    top: "top-[160px]",
    rowWidth: "w-[255px]",
  },
  {
    title: "Monthly Updated Content",
    icon: "fa-solid fa-calendar-days",
    side: "right",
    top: "top-[230px]",
    rowWidth: "w-[340px]",
  },
  {
    title: "Real life case studies & illustrations",
    icon: "fa-solid fa-file-medical",
    side: "right",
    top: "top-[300px]",
    rowWidth: "w-[390px]",
  },
];

export default function KeepItRightSection() {
  return (
    <section className="w-full bg-[#F7F8FA] py-[70px] md:py-[90px]">
      <div className="container-custom">
        {/* Top Row */}
        <div
          className="
            grid
            grid-cols-1
            gap-[24px]
            lg:grid-cols-[1fr_0.65fr]
            lg:gap-[60px]
          "
        >
          {/* Left Heading */}
          <div>
            <div
              className="
                inline-flex
                h-[28px]
                items-center
                rounded-tr-[5px]
                rounded-br-[5px]
                bg-[#439897]
                px-[9px]
                shadow-[2px_2px_5px_rgba(0,0,0,0.20)]
              "
            >
              <span
                className="
                  font-avenir
                  text-[13px]
                  font-normal
                  uppercase
                  leading-[22px]
                  text-white
                  md:text-[14px]
                "
              >
                Keep It Right®
              </span>
            </div>

            <h2
              className="
                mt-[14px]
                max-w-[700px]
                font-avenir
                text-[30px]
                font-[800]
                leading-[1.2]
                text-[#0D1E1E]
                md:text-[36px]
                lg:text-[40px]
              "
            >
              Proprietary web based and LMS
              <br />
              suitable e-learning
            </h2>
          </div>

          {/* Right Text */}
          <div className="lg:flex lg:justify-end">
            <p
              className="
                max-w-[430px]
                font-nunito-sans
                text-[14px]
                leading-[22px]
                tracking-[0.04em]
                text-[#5B5B5B]
                md:text-[15px]
              "
            >
              for PoSH &amp; Gender in Workplaces &amp; Educational
              Institutions
            </p>
          </div>
        </div>

        {/* Desktop Orbital Layout */}
        <div className="relative mt-[40px] hidden lg:block">
          <div className="relative mx-auto h-[430px] w-full max-w-[1120px]">
            {/* Center Circle */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-[220px]
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#FEBC5A]
                text-center
              "
            >
              <span
                className="
                  font-avenir
                  text-[34px]
                  font-[800]
                  leading-[1.02]
                  text-black
                "
              >
                Product
                <br />
                Navigation
              </span>
            </div>

            {/* Orbit Items */}
            {orbitItems.map((item) => {
              const isLeft = item.side === "left";

              return (
                <div
                  key={item.title}
                  className={`
                    absolute
                    ${item.top}
                    ${isLeft ? "left-[70px]" : "right-[70px]"}
                    ${item.rowWidth}
                  `}
                >
                  <div
                    className={`
                      flex
                      items-center
                      gap-[18px]
                      ${isLeft ? "justify-end" : "justify-start"}
                    `}
                  >
                    {isLeft && (
                      <p
                        className="
                          font-nunito-sans-bold
                          text-[16px]
                          leading-[22px]
                          tracking-[0.03em]
                          text-[#535353]
                          text-right
                        "
                      >
                        {item.title}
                      </p>
                    )}

                    <div
                      className="
                        flex
                        h-[52px]
                        w-[52px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#DDF1F0]
                        text-[20px]
                        text-[#2E6D6C]
                      "
                    >
                      <i className={item.icon}></i>
                    </div>

                    {!isLeft && (
                      <p
                        className="
                          font-nunito-sans-bold
                          text-[16px]
                          leading-[22px]
                          tracking-[0.03em]
                          text-[#535353]
                        "
                      >
                        {item.title}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="mt-[40px] lg:hidden">
          <div className="flex justify-center">
            <div
              className="
                flex
                h-[180px]
                w-[180px]
                items-center
                justify-center
                rounded-full
                bg-[#FEBC5A]
                text-center
                sm:h-[200px]
                sm:w-[200px]
              "
            >
              <span
                className="
                  font-avenir
                  text-[28px]
                  font-[800]
                  leading-[1.05]
                  text-black
                  sm:text-[31px]
                "
              >
                Product
                <br />
                Navigation
              </span>
            </div>
          </div>

          <div className="mt-[32px] grid grid-cols-1 gap-[14px] sm:grid-cols-2">
            {orbitItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  items-center
                  gap-[14px]
                  rounded-[12px]
                  bg-transparent
                "
              >
                <div
                  className="
                    flex
                    h-[48px]
                    w-[48px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DDF1F0]
                    text-[18px]
                    text-[#2E6D6C]
                  "
                >
                  <i className={item.icon}></i>
                </div>

                <p
                  className="
                    font-nunito-sans-bold
                    text-[14px]
                    leading-[20px]
                    tracking-[0.03em]
                    text-[#535353]
                  "
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}