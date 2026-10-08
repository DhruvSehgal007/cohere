const microsoftApps = [
  {
    name: "Forms",
    image: "/images/our-products/forms.png",
  },
  {
    name: "Lists",
    image: "/images/our-products/lists.png",
  },
  {
    name: "Teams",
    image: "/images/our-products/teams.png",
  },
  {
    name: "SharePoint",
    image: "/images/our-products/sharepoint.png",
  },
  {
    name: "Power Automate",
    image: "/images/our-products/power-automate.png",
  },
  {
    name: "Outlook",
    image: "/images/our-products/outlook.png",
  },
  {
    name: "Power BI",
    image: "/images/our-products/power-bi.png",
  },
];

export default function Microsoft365Section() {
  return (
    <section className="w-full py-[60px] md:py-[80px]">
      <div className="container-custom">
        <div
          className="
            relative
            flex
            min-h-[477px]
            flex-col
            gap-[20px]
            overflow-hidden
            rounded-[32px]
            border-[2px]
            border-[#34ADAB24]
            bg-[#F7FFFF]
            px-[20px]
            py-[24px]
            sm:px-[26px]
            sm:py-[28px]
            md:px-[32px]
            md:py-[32px]
            lg:flex-row
            lg:justify-between
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              relative
              z-10
              w-full
              lg:min-w-[60%]
              lg:w-[60%]
            "
          >
            {/* Heading */}
            <h2
              className="
                font-avenir
                text-[26px]
                font-[800]
                leading-[1.25]
                text-[#1B3D3C]
                md:text-[32px]
                md:leading-[49px]
              "
            >
              Basic Version Built on Microsoft 365
            </h2>

            {/* Subtitle */}
            <p
              className="
                mt-[12px]
                font-nunito-sans
                text-[16px]
                leading-[24px]
                tracking-[0.04em]
                text-[#494D4D]
                md:text-[20px]
                md:leading-[26px]
              "
            >
              No additional enterprise software required.
            </p>

            {/* Compatible Heading */}
            <h3
              className="
                mt-[38px]
                font-nunito-sans-bold
                text-[17px]
                leading-[24px]
                tracking-[0.04em]
                text-[#0D1E1E]
                md:mt-[48px]
                md:text-[20px]
                md:leading-[26px]
              "
            >
              Compatible with
            </h3>

            {/* Microsoft Apps */}
            <div
              className="
                mt-[18px]
                flex
                flex-wrap
                items-center
              "
            >
              {microsoftApps.map((app, index) => (
                <div
                  key={app.name}
                  className="
                    relative
                    flex
                    h-[72px]
                    items-center
                    justify-center
                    px-[14px]
                    first:pl-0

                    sm:h-[80px]
                    sm:px-[18px]

                    md:h-[90px]
                    md:px-[18px]

                    min-[1400px]:px-[22px]
                  "
                >
                  <img
                    src={app.image}
                    alt={app.name}
                    className="
                      h-[50px]
                      w-[50px]
                      object-contain
                      sm:h-[58px]
                      sm:w-[58px]
                      md:h-[66px]
                      md:w-[66px]
                    "
                  />

                  {index !== microsoftApps.length - 1 && (
                    <span
                      className="
                        absolute
                        right-0
                        top-1/2
                        h-[65px]
                        w-[2px]
                        -translate-y-1/2
                        bg-[#34ADAB24]
                        md:h-[86px]
                        md:w-[3px]
                      "
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <p
              className="
                mt-[40px]
                max-w-[708px]
                font-nunito-sans
                text-[16px]
                leading-[24px]
                tracking-[0.04em]
                text-[#494D4D]
                md:mt-[60px]
                md:text-[20px]
                md:leading-[26px]
              "
            >
              This enables rapid deployment using your existing Microsoft 365
              environment.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              flex
              w-full
              items-end
              justify-end
              -mb-[24px]
              sm:-mb-[28px]
              md:-mb-[32px]
              lg:w-[40%]
              lg:shrink-0
            "
          >
            <img
              src="/images/our-products/microsoft-window.png"
              alt=""
              className="
                h-auto
                w-full
                max-w-[420px]
                object-contain
                object-bottom
                lg:max-w-none
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}