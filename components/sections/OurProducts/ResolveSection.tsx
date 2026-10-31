import Image from "next/image";

import caseTracking from "@/assets/images/Products/case-tracking.svg";
import executiveDashboards from "@/assets/images/Products/Excutive-dashboards.svg";
import icMapping from "@/assets/images/Products/ICmpping.svg";
import secureCaseWorkspace from "@/assets/images/Products/Secure-case-worspace.svg";
import timelineMonitoring from "@/assets/images/Products/Timeline-monitering.svg";

const features = [
  {
    title: "Intelligent Complaint Intake",
    description:
      "Capture complaints through Microsoft Forms or your dedicated PoSH email with a structured intake process.",
    icon: caseTracking,
    color: "dark",
  },
  {
    title: "IC Mapping",
    description:
      "Automatically identifies the correct Internal Committee based on office location, business unit or legal entity.",
    icon: icMapping,
    color: "orange",
  },
  {
    title: "Case Tracking",
    description:
      "Monitor every complaint from receipt to closure through a structured workflow.",
    icon: caseTracking,
    color: "dark",
  },
  {
    title: "Timeline Monitoring",
    description:
      "Track statutory and internal milestones with automated reminders and alerts.",
    icon: timelineMonitoring,
    color: "orange",
  },
  {
    title: "Secure Case Workspace",
    description:
      "Maintain complaints, responses, evidence, hearing records and reports in one confidential location.",
    icon: secureCaseWorkspace,
    color: "dark",
  },
  {
    title: "Executive Dashboards",
    description:
      "Gain real-time visibility into open matters, ageing, trends and compliance without exposing confidential case details.",
    icon: executiveDashboards,
    color: "orange",
  },
];

export default function ResolveSection() {
  return (
    <section
      id="cohere-resolve"
      className="w-full pb-16 sm:pb-16 md:pb-20 lg:pb-24"
    >
      <div className="container-custom">
        {/* Top content */}
<div className="mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
              COHERE RESOLVE™
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
              Intelligent Workplace Investigation Management Platform
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
              lg:max-w-[480px]
              text-left
              md:text-right
              lg:text-right
              text-[16px]
              sm:text-[16px]
              md:text-[16px]
              lg:text-[18px]
            "
          >
            A secure, Microsoft 365-based workplace investigation management platform that helps organisations receive, triage, assign, track and monitor workplace complaints while supporting compliance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.
          </p>

        </div>
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
            mt-[50px]
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
                  bg-white
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
                  <Image
                    src={feature.icon}
                    alt=""
                    width={42}
                    height={42}
                    className="
                      h-[42px]
                      w-[42px]
                      object-contain
                    "
                  />
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
                  font-normal
                  leading-[1.55]
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