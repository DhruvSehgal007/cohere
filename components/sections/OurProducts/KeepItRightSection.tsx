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
    <section className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom">
        {/* Top row */}
        <div className="mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
              KEEP IT RIGHT®
            </span>
          </div>


            <h2
              className="
                mt-3
                w-full
                font-avenir
                font-extrabold
                leading-[1.15]
                text-[#101C1C]
                md:mt-4
                lg:max-w-[620px]
                text-[32px]
                sm:text-[36px]
                md:text-[40px]
              "
            >
              Proprietary web based and LMS suitable e-learning
            </h2>
          </div>

          <p
            className="
              w-full
              font-nunito-sans
              leading-6
              text-[#5B5B5B]
              sm:leading-7
              md:w-1/2
              lg:max-w-[400px]
              text-left
              md:text-right
              lg:text-right
              text-[16px]
              sm:text-[16px]
              md:text-[16px]
              lg:text-[18px]
            "
          >
            for PoSH & Gender in Workplaces & Educational Institutions
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