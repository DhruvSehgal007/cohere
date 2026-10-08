const leftItems = [
  {
    title: "Easy to follow, easy to use",
    icon: "fa-solid fa-hand-pointer",
    angle: -140,
  },
  {
    title: "Engaging multilingual videos",
    icon: "fa-solid fa-chalkboard-user",
    angle: -160,
  },
  {
    title: "Employee awareness",
    icon: "fa-solid fa-bullhorn",
    angle: 180,
  },
  {
    title: "Manager interventions and IC orientation",
    icon: "fa-solid fa-people-group",
    angle: 160,
  },
  {
    title: "FAQs, Resources and Assessments",
    icon: "fa-solid fa-file-circle-question",
    angle: 140,
  },
];

const rightItems = [
  {
    title: "Customizable Options",
    icon: "fa-solid fa-sliders",
    angle: -40,
  },
  {
    title: "Automated Certification",
    icon: "fa-solid fa-certificate",
    angle: -20,
  },
  {
    title: "HR Dashboard",
    icon: "fa-solid fa-desktop",
    angle: 0,
  },
  {
    title: "Monthly Updated Content",
    icon: "fa-solid fa-calendar-days",
    angle: 20,
  },
  {
    title: "Real life case studies & illustrations",
    icon: "fa-solid fa-file-image",
    angle: 40,
  },
];

export default function KeepItRightSection() {
  const radiusX = 195;
  const radiusY = 128;

  const getPosition = (angle: number) => {
    const rad = (angle * Math.PI) / 180;

    return {
      left: `calc(50% + ${Math.cos(rad) * radiusX}px)`,
      top: `calc(50% + ${Math.sin(rad) * radiusY}px)`,
    };
  };

  return (
    <section className="w-full  py-[70px] md:py-[90px]">
      <div className="container-custom">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-[1fr_0.6fr] lg:gap-[70px]">
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

          <div className="lg:flex lg:justify-end">
            <p
              className="
                max-w-[410px]
                font-nunito-sans
                text-[14px]
                leading-[22px]
                tracking-[0.04em]
                text-[#5B5B5B]
                md:text-[15px]
              "
            >
              for PoSH &amp; Gender in Workplaces &amp; Educational Institutions
            </p>
          </div>
        </div>

        {/* Desktop radial layout */}
        <div className="mt-[25px] hidden lg:block">
          <div className="relative mx-auto h-[450px] max-w-[1120px]">
            {/* Center circle */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-10
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

            {/* Left items */}
            {leftItems.map((item) => {
              const position = getPosition(item.angle);

              return (
                <div
                  key={item.title}
                  className="
                    absolute
                    flex
                    -translate-x-full
                    -translate-y-1/2
                    items-center
                    gap-[18px]
                  "
                  style={position}
                >
                  <p
                    className="
                      w-[320px]
                      text-right
                      font-nunito-sans-bold
                      text-[15px]
                      leading-[22px]
                      tracking-[0.03em]
                      text-[#535353]
                    "
                  >
                    {item.title}
                  </p>

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
                </div>
              );
            })}

            {/* Right items */}
            {rightItems.map((item) => {
              const position = getPosition(item.angle);

              return (
                <div
                  key={item.title}
                  className="
                    absolute
                    flex
                    -translate-y-1/2
                    items-center
                    gap-[18px]
                  "
                  style={position}
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
                      w-[320px]
                      font-nunito-sans-bold
                      text-[15px]
                      leading-[22px]
                      tracking-[0.03em]
                      text-[#535353]
                    "
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet */}
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
              "
            >
              <span
                className="
                  font-avenir
                  text-[28px]
                  font-[800]
                  leading-[1.05]
                  text-black
                "
              >
                Product
                <br />
                Navigation
              </span>
            </div>
          </div>

          <div className="mt-[35px] grid grid-cols-1 gap-[16px] sm:grid-cols-2">
            {[...leftItems, ...rightItems].map((item) => (
              <div key={item.title} className="flex items-center gap-[12px]">
                <div
                  className="
                    flex
                    h-[44px]
                    w-[44px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DDF1F0]
                    text-[17px]
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