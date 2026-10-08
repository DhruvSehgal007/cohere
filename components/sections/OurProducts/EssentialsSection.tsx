const essentials = [
  {
    title: "External Member",
    icon: "fa-solid fa-user-shield",
    color: "dark",
  },
  {
    title: "Annual Compliance",
    icon: "fa-solid fa-calendar-check",
    color: "orange",
  },
  {
    title: "Compliance Documents",
    icon: "fa-solid fa-file-circle-check",
    color: "orange",
  },
  {
    title: "External Member",
    icon: "fa-solid fa-file-lines",
    color: "dark",
  },
  {
    title: "Learning",
    icon: "fa-solid fa-book-open-reader",
    color: "dark",
  },
  {
    title: "External Member",
    icon: "fa-solid fa-user-group",
    color: "orange",
  },
];

export default function EssentialsSection() {
  return (
    <section className="w-full py-[60px] md:py-[80px] lg:py-[95px]">
      <div className="container-custom">
        {/* Top Row */}
        <div
          className="
            grid
            grid-cols-1
            gap-[30px]
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-[80px]
          "
        >
          {/* Left Heading */}
          <div>
            {/* Label */}
            <div
              className="
                inline-flex
                h-[32px]
                items-center
                rounded-tr-[5px]
                rounded-br-[5px]
                bg-[#439897]
                px-[10px]
                shadow-[2px_2px_5px_rgba(0,0,0,0.25)]
              "
            >
              <span
                className="
                  font-avenir
                  text-[14px]
                  font-normal
                  leading-[26px]
                  uppercase
                  text-white
                  md:text-[16px]
                "
              >
                Cohere Essentials™
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-[15px]
                font-avenir
                text-[30px]
                font-[800]
                leading-[1.2]
                text-[#0D1E1E]
                md:text-[34px]
                lg:text-[40px]
              "
            >
              Essential PoSH Compliance
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:flex lg:justify-end">
            <p
              className="
                max-w-[510px]
                font-nunito-sans
                text-[15px]
                font-normal
                leading-[24px]
                tracking-[0.04em]
                text-[#5B5B5B]
                md:text-[16px]
                lg:text-[17px]
                lg:leading-[26px]
              "
            >
              The essential compliance measures required under the Sexual
              Harassment of Women at Workplace (Prevention, Prohibition and
              Redressal) Act, 2013.
              <br />
              Designed for organisations with a single location and up to 100
              employees seeking an efficient, legally compliant and
              cost-effective PoSH compliance solution.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="
            mt-[50px]
            grid
            grid-cols-1
            items-center
            gap-[50px]
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-[60px]
          "
        >
          {/* Features */}
          <div
            className="
              grid
              grid-cols-1
              gap-x-[50px]
              gap-y-[28px]
              sm:grid-cols-2
            "
          >
            {essentials.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="
                  flex
                  items-center
                  gap-[18px]
                "
              >
                {/* Circle Icon */}
                <div
                  className={`
                    flex
                    h-[54px]
                    w-[54px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-[2px]
                    border-white
                    text-[20px]
                    text-white
                    shadow-sm
                    ${
                      item.color === "orange"
                        ? "bg-[#FEBC5A]"
                        : "bg-gradient-to-br from-[#439897] to-[#20232A]"
                    }
                  `}
                >
                  <i className={item.icon}></i>
                </div>

                {/* Label */}
                <p
                  className="
                    font-nunito-sans-bold
                    text-[16px]
                    leading-[22px]
                    tracking-[0.03em]
                    text-[#494D4D]
                    md:text-[17px]
                  "
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <img
              src="/images/our-products/essentials-dashboard.png"
              alt="Cohere Essentials compliance dashboard"
              className="
                h-auto
                w-full
                max-w-[740px]
                -mt-[50px]
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}