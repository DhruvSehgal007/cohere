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
    <section className="w-full  py-[80px]">
      <div className="container-custom">
        <div
          className="
            relative
            min-h-[477px]
            overflow-hidden
            rounded-[32px]
            border-[2px]
            border-[#34ADAB24]
            bg-[#F7FFFF]
          "
        >
          {/* Left Content */}
          <div
            className="
              relative
              z-10
              px-[32px]
              py-[32px]
              lg:pr-[640px]
            "
          >
            {/* Heading */}
            <h2
              className="
                font-avenir
                text-[28px]
                font-[800]
                leading-[1.25]
                text-[#1B3D3C]
                md:text-[32px]
                md:leading-[49px]
              "
            >
              Basic Version Built on Microsoft 365
            </h2>

            {/* Sub Text */}
            <p
              className="
                mt-[12px]
                font-nunito-sans
                text-[18px]
                leading-[26px]
                tracking-[0.04em]
                text-[#494D4D]
                md:text-[20px]
              "
            >
              No additional enterprise software required.
            </p>

            {/* Compatible Heading */}
            <h3
              className="
                mt-[48px]
                font-nunito-sans-bold
                text-[18px]
                leading-[26px]
                tracking-[0.04em]
                text-[#0D1E1E]
                md:text-[20px]
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
                    h-[90px]
                    items-center
                    justify-center
                    px-[22px]
                    first:pl-0
                  "
                >
                  <img
                    src={app.image}
                    alt={app.name}
                    className="
                      h-[66px]
                      w-[66px]
                      object-contain
                    "
                  />

                  {index !== microsoftApps.length - 1 && (
                    <span
                      className="
                        absolute
                        right-0
                        top-1/2
                        h-[86px]
                        w-[3px]
                        -translate-y-1/2
                        bg-[#34ADAB24]
                      "
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <p
              className="
                mt-[60px]
                max-w-[708px]
                font-nunito-sans
                text-[18px]
                leading-[26px]
                tracking-[0.04em]
                text-[#494D4D]
                md:text-[20px]
              "
            >
              This enables rapid deployment using your existing Microsoft 365
              environment.
            </p>
          </div>

          {/* Right Multicolor Window Image */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              hidden
              h-full
              w-[581px]
              lg:block
            "
          >
            <img
              src="/images/our-products/microsoft-window.png"
              alt=""
              className="
                absolute
                bottom-0
                right-0
                w-[581px]
                max-w-none
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}