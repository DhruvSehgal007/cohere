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
    <section className="w-full py-[50px] md:py-[70px]">
      <div className="container-custom">
        <div
          className="
            relative
            mx-auto
            flex
            min-h-[477px]
            w-full
            max-w-[1500px]
            flex-col
            overflow-hidden
            rounded-[32px]
            border-[2px]
            border-[#34ADAB24]
            bg-[#F7FFFF]
            px-[24px]
            py-[32px]
            sm:px-[36px]
            sm:py-[40px]
            lg:h-[477px]
            lg:px-0
            lg:py-0
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              flex-col
              justify-center
              lg:max-w-[760px]
              lg:pl-[75px]
              lg:pt-[52px]
              lg:pb-[45px]
            "
          >
            {/* Heading */}
            <h2
              className="
                font-avenir
                text-[26px]
                font-bold
                leading-[1.2]
                text-[#1B3D3C]
                sm:text-[32px]
                md:text-[36px]
              "
            >
              Basic Version Built on Microsoft 365
            </h2>

            {/* Subtitle */}
            <p
              className="
                mt-[8px]
                font-nunito-sans
                text-[15px]
                leading-[24px]
                tracking-[0.02em]
                text-[#494D4D]
                sm:text-[17px]
                md:text-[18px]
              "
            >
              No additional enterprise software required.
            </p>

            {/* Compatible Heading */}
            <h3
              className="
                mt-[32px]
                font-nunito-sans-bold
                text-[16px]
                leading-[24px]
                tracking-[0.02em]
                text-[#0D1E1E]
                md:mt-[38px]
                md:text-[18px]
              "
            >
              Compatible with
            </h3>

            {/* Microsoft Apps */}
            <div className="mt-[14px] flex flex-wrap items-center">
              {microsoftApps.map((app, index) => (
                <div
                  key={app.name}
                  className="
                    relative
                    flex
                    h-[54px]
                    items-center
                    justify-center
                    px-[10px]
                    first:pl-0
                    sm:px-[14px]
                    md:px-[16px]
                  "
                >
                  <img
                    src={app.image}
                    alt={app.name}
                    className="
                      h-[36px]
                      w-[36px]
                      object-contain
                      sm:h-[42px]
                      sm:w-[42px]
                    "
                  />

                  {index !== microsoftApps.length - 1 && (
                    <span
                      className="
                        absolute
                        right-0
                        top-1/2
                        h-[36px]
                        w-[1.5px]
                        -translate-y-1/2
                        bg-[#34ADAB29]
                      "
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <p
              className="
                mt-[34px]
                max-w-[560px]
                font-nunito-sans
                text-[15px]
                leading-[24px]
                tracking-[0.02em]
                text-[#494D4D]
                sm:text-[16px]
                md:mt-[40px]
                md:text-[17px]
                md:leading-[25px]
              "
            >
              This enables rapid deployment using your existing Microsoft 365
              environment.
            </p>
          </div>

          {/* RIGHT IMAGE: Group 437 (Red, Green, Blue, Yellow tiles) */}
          {/* Exactly Top: 32px, Right: 75px (Gap from corner), Width: 581px */}
          <div
            className="
              mt-[24px]
              flex
              w-full
              justify-end
              -mb-[32px]
              sm:-mb-[40px]
              lg:absolute
              lg:right-[75px]
              lg:top-[32px]
              lg:mb-0
              lg:w-[581px]
              pointer-events-none
              select-none
            "
          >
            <img
              src="/images/our-products/microsoft-window.png"
              alt="Microsoft 365 Solutions"
              className="
                h-auto
                w-full
                max-w-[360px]
                sm:max-w-[440px]
                lg:max-w-none
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}