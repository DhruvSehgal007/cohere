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
    <section className="w-full  py-[80px] lg:py-[100px]">
      <div className="container-custom">

        {/* Top content */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full lg:w-1/2">
            <span className="inline-block rounded bg-[#439897] px-3 py-1 font-avenir text-[12px] text-white sm:px-4 sm:text-[14px]">
              COHERE RESOLVE™
            </span>

            <h2
              className="
              mt-3
              w-full
              font-avenir
              text-[22px]
              font-extrabold
              leading-[1.15]
              text-black

              sm:text-[30px]
              md:mt-4
              md:text-[36px]

              lg:max-w-[540px]
              lg:text-[40px]
            "
            >
              Intelligent Workplace Investigation Management Platform
            </h2>
          </div>

          <p
            className="
            w-full
            font-nunito-sans
            text-[14px]
            leading-6
            text-[#5B5B5B]

            sm:text-[15px]
            sm:leading-7

            lg:max-w-[520px]
            lg:w-1/2
            lg:text-right
            lg:text-[16px]
          "
          >
            A secure, Microsoft 365-based workplace investigation management platform that helps organisations receive, triage, assign, track and monitor workplace complaints while supporting compliance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.
          </p>
        </div>

        {/* Sub heading */}
        <p
          className="
            mt-[55px]
            font-nunito-sans-bold
            text-[18px]
            leading-[26px]
            tracking-[0.04em]
            text-[#00504F]
            md:text-[20px]
          "
        >
          Every complaint. The right committee. The right process.
        </p>

        {/* Cards */}
        <div
  className="
    mt-[100px]
    grid
    grid-cols-1
    gap-[24px]
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-6
    xl:gap-[21px]
  "
>
  {features.map((feature) => (
    <div
      key={feature.title}
      className="
        relative
        min-h-[300px]
        rounded-[16px]
        border-[2px]
        border-[#439897]
        bg-transparent
        px-[24px]
        pb-[28px]
        pt-[100px]
        xl:min-h-[300px]
        xl:px-[22px]
      "
    >
      {/* Icon */}
      <div
        className="
          absolute
          left-[30px]
          top-[30px]
          flex
          h-[90px]
          w-[90px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border-[2px]
          border-[#439897]
          border-l-transparent
          border-t-transparent
          bg-[#F7F8FA]
        "
      >
        <div
          className={`
            flex
            h-[80px]
            w-[80px]
            items-center
            justify-center
            rounded-full
            border-[3px]
            border-white
            ${
              feature.color === "orange"
                ? "bg-[#FEBC5A]"
                : "bg-gradient-to-br from-[#439897] to-[#20232A]"
            }
          `}
        >
          <i
            className={`
              ${feature.icon}
              text-[31px]
              text-white
            `}
          ></i>
        </div>
      </div>

      {/* Title */}
      <h3
        className="
          font-nunito-sans-bold
          text-[18px]
          leading-[26px]
          tracking-[0.04em]
          text-[#0D1E1E]
          lg:text-[20px]
        "
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-[16px]
          font-nunito-sans
          text-[15px]
          leading-[1.55]
          font-normal
          tracking-[0.04em]
          text-[#535353]
          lg:text-[16px]
        "
      >
        {feature.description}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}