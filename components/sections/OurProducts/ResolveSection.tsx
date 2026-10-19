const features = [
  {
    title: "Intelligent Complaint Intake",
    description:
      "Capture complaints through Microsoft Forms or your dedicated PoSH email with a structured intake process.",
    icon: "fa-regular fa-clipboard",
    color: "dark",
  },
  {
    title: "IC Mapping",
    description:
      "Automatically identifies the correct Internal Committee based on office location, business unit or legal entity.",
    icon: "fa-solid fa-diagram-project",
    color: "orange",
  },
  {
    title: "Case Tracking",
    description:
      "Monitor every complaint from receipt to closure through a structured workflow.",
    icon: "fa-solid fa-file-circle-check",
    color: "dark",
  },
  {
    title: "Timeline Monitoring",
    description:
      "Track statutory and internal milestones with automated reminders and alerts.",
    icon: "fa-solid fa-chart-pie",
    color: "orange",
  },
  {
    title: "Secure Case Workspace",
    description:
      "Maintain complaints, responses, evidence, hearing records and reports in one confidential location.",
    icon: "fa-solid fa-briefcase",
    color: "dark",
  },
  {
    title: "Executive Dashboards",
    description:
      "Gain real-time visibility into open matters, ageing, trends and compliance without exposing confidential case details.",
    icon: "fa-solid fa-chart-column",
    color: "orange",
  },
];

export default function ResolveSection() {
  return (
    <section className="w-full bg-white py-[60px] md:py-[85px] lg:py-[105px]">
      <div className="container-custom">
        {/* Top Header */}
        <div className="flex flex-col gap-[20px] lg:flex-row lg:items-start lg:justify-between">
          {/* Left Title & Badge */}
          <div className="w-full lg:max-w-[680px]">
            {/* Badge (Top-right & Bottom-right 5px radius from Figma) */}
            <div className="inline-flex min-h-[26px] items-center rounded-tr-[5px] rounded-br-[5px] bg-[#439897] px-[12px] py-[3px]">
              <span className="font-avenir text-[13px] font-semibold uppercase tracking-wider text-white">
                COHERE RESOLVE™
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-[14px] font-avenir text-[28px] font-[800] leading-[1.12] text-[#0D1E1E] sm:text-[34px] md:text-[40px] lg:text-[44px]">
              Intelligent Workplace
              <br />
              Investigation Management
              <br />
              Platform
            </h2>
          </div>

          {/* Right Description (Left-aligned as in Figma) */}
          <div className="w-full pt-[6px] lg:max-w-[480px] xl:max-w-[530px]">
            <p className="font-nunito-sans text-[15px] leading-relaxed text-[#5B5B5B] sm:text-[16px] md:text-[17px]">
              A secure, Microsoft 365-based workplace investigation management
              platform that helps organisations receive, triage, assign, track
              and monitor workplace complaints while supporting compliance with
              the Sexual Harassment of Women at Workplace (Prevention, Prohibition
              and Redressal) Act, 2013.
            </p>
          </div>
        </div>

        {/* Sub heading */}
        <p className="mt-[32px] font-nunito-sans-bold text-[17px] font-bold tracking-[0.02em] text-[#00504F] sm:text-[18px] md:mt-[42px] md:text-[20px]">
          Every complaint. The right committee. The right process.
        </p>

        {/* 6 Feature Cards Grid */}
        <div className="mt-[44px] grid grid-cols-1 gap-x-[16px] gap-y-[44px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 md:mt-[54px] xl:gap-x-[18px]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative flex flex-col rounded-[16px] border-[1.5px] border-[#439897] bg-white px-[18px] pb-[24px] pt-[42px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(67,152,151,0.15)] xl:px-[16px]"
            >
              {/* Floating Circle Icon Header */}
              <div className="absolute left-[20px] top-0 -translate-y-1/2">
                <div
                  className={`flex h-[56px] w-[56px] items-center justify-center rounded-full shadow-sm ring-[4px] ring-white ${
                    feature.color === "orange"
                      ? "bg-[#FEBC5A] text-white"
                      : "bg-[#205D5E] text-white"
                  }`}
                >
                  <i className={`${feature.icon} text-[22px]`}></i>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-nunito-sans-bold min-h-[44px] text-[17px] font-bold leading-[22px] text-[#0D1E1E]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-[10px] font-nunito-sans text-[13px] leading-[19px] text-[#535353]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}