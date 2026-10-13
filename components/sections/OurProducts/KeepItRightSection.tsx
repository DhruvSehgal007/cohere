const leftItems = [
  {
    title: "Easy to follow, easy to use",
    icon: "fa-solid fa-hand-pointer",
    angle: -126,
  },
  {
    title: "Engaging multilingual videos",
    icon: "fa-solid fa-chalkboard-user",
    angle: -153,
  },
  {
    title: "Employee awareness",
    icon: "fa-solid fa-bullhorn",
    angle: 180,
  },
  {
    title: "Manager interventions and IC orientation",
    icon: "fa-solid fa-people-group",
    angle: 153,
  },
  {
    title: "FAQs, Resources and Assessments",
    icon: "fa-solid fa-file-circle-question",
    angle: 126,
  },
];

const rightItems = [
  {
    title: "Customizable Options",
    icon: "fa-solid fa-sliders",
    angle: -54,
  },
  {
    title: "Automated Certification",
    icon: "fa-solid fa-certificate",
    angle: -27,
  },
  {
    title: "HR Dashboard",
    icon: "fa-solid fa-desktop",
    angle: 0,
  },
  {
    title: "Monthly Updated Content",
    icon: "fa-solid fa-calendar-days",
    angle: 27,
  },
  {
    title: "Real life case studies & illustrations",
    icon: "fa-solid fa-file-image",
    angle: 54,
  },
];

export default function KeepItRightSection() {
  const radius = 230;

  const getPosition = (angle: number) => {
    const rad = (angle * Math.PI) / 180;

    return {
      x: Math.round(Math.cos(rad) * radius),
      y: Math.round(Math.sin(rad) * radius),
    };
  };

  return (
    <section className="w-full py-[70px] md:py-[90px]">
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
                  text-[14px]
                  font-normal
                  uppercase
                  leading-[22px]
                  text-white
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
                text-[28px]
                font-[800]
                leading-[1.2]
                text-[#0D1E1E]
                sm:text-[34px]
                md:text-[40px]
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
                text-[16px]
                leading-relaxed
                tracking-[0.04em]
                text-[#5B5B5B]
                sm:text-[18px]
                md:text-[20px]
              "
            >
              for PoSH &amp; Gender in Workplaces &amp; Educational Institutions
            </p>
          </div>
        </div>

        {/* Desktop radial layout */}
        <div className="mt-[35px] hidden lg:block xl:mt-[50px]">
          <div className="relative mx-auto h-[540px] w-full max-w-[1240px] scale-[0.88] origin-center xl:scale-100 xl:h-[580px]">
            {/* Center circle */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-10
                flex
                h-[279px]
                w-[279px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#FEBC5A]
                p-[16px]
                text-center
              "
            >
              <span
                className="
                  font-avenir
                  text-[32px]
                  font-[800]
                  leading-[1.1]
                  text-[#0D1E1E]
                  xl:text-[34px]
                "
              >
                Product
                <br />
                Navigation
              </span>
            </div>

            {/* Left items */}
            {leftItems.map((item) => {
              const { x, y } = getPosition(item.angle);

              return (
                <div
                  key={item.title}
                  className="
                    absolute
                    flex
                    -translate-x-full
                    -translate-y-1/2
                    items-center
                    justify-end
                    gap-[16px]
                  "
                  style={{
                    left: `calc(50% + ${x + 40}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <p
                    className="
                      whitespace-nowrap
                      text-right
                      font-nunito-sans-bold
                      text-[15px]
                      leading-[22px]
                      tracking-[0.02em]
                      text-[#333333]
                      xl:text-[16px]
                    "
                  >
                    {item.title}
                  </p>

                  <div
                    className="
                      flex
                      h-[80px]
                      w-[80px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D5F0F0]
                      bg-[#DEF0F0]
                      text-[30px]
                      text-[#173E40]
                      transition-transform
                      duration-300
                      hover:scale-105
                    "
                  >
                    <i className={item.icon}></i>
                  </div>
                </div>
              );
            })}

            {/* Right items */}
            {rightItems.map((item) => {
              const { x, y } = getPosition(item.angle);

              return (
                <div
                  key={item.title}
                  className="
                    absolute
                    flex
                    -translate-y-1/2
                    items-center
                    gap-[16px]
                  "
                  style={{
                    left: `calc(50% + ${x - 40}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div
                    className="
                      flex
                      h-[80px]
                      w-[80px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D5F0F0]
                      bg-[#DEF0F0]
                      text-[30px]
                      text-[#173E40]
                      transition-transform
                      duration-300
                      hover:scale-105
                    "
                  >
                    <i className={item.icon}></i>
                  </div>

                  <p
                    className="
                      whitespace-nowrap
                      font-nunito-sans-bold
                      text-[15px]
                      leading-[22px]
                      tracking-[0.02em]
                      text-[#333333]
                      xl:text-[16px]
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
                h-[200px]
                w-[200px]
                items-center
                justify-center
                rounded-full
                bg-[#FEBC5A]
                p-[16px]
                text-center
              "
            >
              <span
                className="
                  font-avenir
                  text-[26px]
                  font-[800]
                  leading-[1.1]
                  text-[#0D1E1E]
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
              <div key={item.title} className="flex items-center gap-[14px]">
                <div
                  className="
                    flex
                    h-[60px]
                    w-[60px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D5F0F0]
                    bg-[#DEF0F0]
                    text-[24px]
                    text-[#173E40]
                  "
                >
                  <i className={item.icon}></i>
                </div>

                <p
                  className="
                    font-nunito-sans-bold
                    text-[15px]
                    leading-[20px]
                    text-[#333333]
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