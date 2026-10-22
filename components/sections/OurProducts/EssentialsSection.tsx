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
    <section id="cohere-essentials" className="pb-16 sm:pb-16 md:pb-24 lg:pb-24">
      <div className="container-custom">
        {/* Top Row: Tag + Title Left, Description Right aligned */}
        <div className="mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-start md:justify-between">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
              COHERE ESSENTIALS™
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
                lg:max-w-[600px]
                text-[32px]
                sm:text-[36px]
                md:text-[40px]
              "
            >
              Essential PoSH Compliance
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
              lg:max-w-[520px]
              text-left
              md:text-right
              lg:text-right
              text-[16px]
              sm:text-[16px]
              md:text-[16px]
              lg:text-[18px]
            "
          >
            The essential compliance measures required under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. Designed for organisations with a single location and up to 100 employees seeking an efficient, legally compliant and cost-effective PoSH compliance solution.
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