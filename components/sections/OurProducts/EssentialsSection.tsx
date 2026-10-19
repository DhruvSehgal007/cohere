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
        {/* Top Row: Tag + Title Left, Description Right aligned */}
        <div className="flex flex-col gap-[24px] lg:flex-row lg:items-start lg:justify-between">
          {/* Left Heading */}
          <div>
            {/* Label */}
            <div
              className="
                inline-flex
                h-[28px]
                items-center
                rounded-tr-[5px]
                rounded-br-[5px]
                bg-[#439897]
                px-[10px]
              "
            >
              <span
                className="
                  font-avenir
                  text-[13px]
                  font-normal
                  leading-none
                  uppercase
                  tracking-wider
                  text-white
                "
              >
                Cohere Essentials™
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-[14px]
                font-avenir
                text-[28px]
                font-bold
                leading-[1.2]
                text-[#0D1E1E]
                sm:text-[34px]
                md:text-[38px]
              "
            >
              Essential PoSH Compliance
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:max-w-[550px]">
            <p
              className="
                font-nunito-sans
                text-[15px]
                font-normal
                leading-[25px]
                tracking-[0.02em]
                text-[#5B5B5B]
                md:text-[16px]
                md:leading-[26px]
              "
            >
              The essential compliance measures required under the Sexual
              Harassment of Women at Workplace (Prevention, Prohibition and
              Redressal) Act, 2013.
              <br className="hidden sm:block" />
              Designed for organisations with a single location and up to 100
              employees seeking an efficient, legally compliant and
              cost-effective PoSH compliance solution.
            </p>
          </div>
        </div>

        {/* Bottom Section: Features Grid + Dashboard Illustration */}
        <div
          className="
            mt-[44px]
            flex
            flex-col
            items-center
            gap-[40px]
            md:mt-[56px]
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-[50px]
          "
        >
          {/* Features */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-x-[40px]
              gap-y-[24px]
              sm:grid-cols-2
              md:gap-x-[48px]
              md:gap-y-[26px]
              lg:w-auto
              lg:shrink-0
            "
          >
            {essentials.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="
                  flex
                  items-center
                  gap-[16px]
                "
              >
                {/* Circle Icon: Solid colors matching Figma */}
                <div
                  className={`
                    flex
                    h-[50px]
                    w-[50px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-[18px]
                    text-white
                    sm:h-[52px]
                    sm:w-[52px]
                    sm:text-[19px]
                    ${
                      item.color === "orange"
                        ? "bg-[#FEBC5A]"
                        : "bg-[#173E40]"
                    }
                  `}
                >
                  <i className={item.icon}></i>
                </div>

                {/* Label */}
                <p
                  className="
                    font-nunito-sans-bold
                    text-[15px]
                    leading-[22px]
                    tracking-[0.02em]
                    text-[#333E3E]
                    sm:text-[16px]
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
                max-w-[660px]
                object-contain
                lg:-mt-[40px]
                lg:max-w-[740px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}