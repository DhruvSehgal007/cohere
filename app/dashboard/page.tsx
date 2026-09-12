import {
  MessageSquareQuote,
  BriefcaseBusiness,
  Users,
  Building2,
  ArrowUpRight,
  FileText,
  Plus,
  Clock3,
} from "lucide-react";
import cohereLogo from "@/assets/images/logos/cohere-logo.png";

const overviewCards = [
  {
    title: "Testimonials",
    value: "12",
    description: "Client testimonials",
    icon: MessageSquareQuote,
  },
  {
    title: "Services",
    value: "06",
    description: "Active services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Team Members",
    value: "08",
    description: "Published profiles",
    icon: Users,
  },
  {
    title: "Clients",
    value: "24",
    description: "Client records",
    icon: Building2,
  },
];

const quickActions = [
  {
    title: "Add Testimonial",
    description: "Add a new client testimonial",
    icon: MessageSquareQuote,
  },
  {
    title: "Add Service",
    description: "Create a new service",
    icon: BriefcaseBusiness,
  },
  {
    title: "Add Team Member",
    description: "Add a new team profile",
    icon: Users,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white px-8 py-8">
      {/* PAGE HEADER */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#439897]">
            Overview
          </p>

          <h1 className="font-avenir text-[30px] font-extrabold leading-tight text-[#0d1e1e]">
            Welcome back, Admin
          </h1>

          <p className="mt-2 text-[14px] text-[#0d1e1e]/55">
            Manage your Cohere website content from one place.
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-[8px] border border-[#439897]/20 bg-white px-4 py-2.5 text-[11px] text-[#0d1e1e]/60 lg:flex">
          <Clock3 size={15} className="text-[#439897]" />
          Last updated today
        </div>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="group rounded-[12px] border border-[#439897]/20 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#439897] hover:shadow-[0_10px_30px_rgba(67,152,151,0.10)]"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[9px] bg-[#439897]/10 text-[#439897]">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-[#0d1e1e]/25 transition-colors group-hover:text-[#439897]"
                />
              </div>

              <p className="text-[12px] font-medium text-[#0d1e1e]/55">
                {card.title}
              </p>

              <p className="mt-1 text-[28px] font-bold leading-none text-[#0d1e1e]">
                {card.value}
              </p>

              <p className="mt-2 text-[11px] text-[#0d1e1e]/45">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* TWO COLUMN SECTION */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_0.85fr]">
        {/* QUICK ACTIONS */}
        <section className="rounded-[12px] border border-[#439897]/20 bg-white">
          <div className="flex items-center justify-between border-b border-[#439897]/15 px-6 py-5">
            <div>
              <h2 className="text-[16px] font-bold text-[#0d1e1e]">
                Quick Actions
              </h2>

              <p className="mt-1 text-[12px] text-[#0d1e1e]/50">
                Quickly manage your website content
              </p>
            </div>

            <span className="rounded-full bg-[#439897]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[1px] text-[#439897]">
              Content
            </span>
          </div>

          <div className="divide-y divide-[#439897]/10">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <div
                  key={action.title}
                  className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-[#439897]/5"
                >
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[9px] border border-[#439897]/20 bg-[#439897]/5 text-[#439897]">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold text-[#0d1e1e]">
                      {action.title}
                    </p>

                    <p className="mt-1 text-[11px] text-[#0d1e1e]/50">
                      {action.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-full text-[#0d1e1e]/30 transition-colors group-hover:bg-[#439897]/10 group-hover:text-[#439897]"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTENT OVERVIEW */}
        <section className="rounded-[12px] border border-[#439897]/20 bg-white">
          <div className="border-b border-[#439897]/15 px-6 py-5">
            <h2 className="text-[16px] font-bold text-[#0d1e1e]">
              Content Overview
            </h2>

            <p className="mt-1 text-[12px] text-[#0d1e1e]/50">
              Current website content
            </p>
          </div>

          <div className="space-y-6 px-6 py-6">
            {/* Published */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#0d1e1e]/65">
                  Published Content
                </span>

                <span className="text-[12px] font-bold text-[#439897]">
                  42
                </span>
              </div>

              <div className="h-[6px] overflow-hidden rounded-full bg-[#439897]/10">
                <div className="h-full w-[78%] rounded-full bg-[#439897]" />
              </div>
            </div>

            {/* Draft */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#0d1e1e]/65">
                  Draft Content
                </span>

                <span className="text-[12px] font-bold text-[#0d1e1e]">
                  06
                </span>
              </div>

              <div className="h-[6px] overflow-hidden rounded-full bg-[#439897]/10">
                <div className="h-full w-[25%] rounded-full bg-[#439897]/50" />
              </div>
            </div>

            {/* Information */}
            <div className="rounded-[10px] border border-[#439897]/15 bg-[#439897]/5 p-4">
              <div className="flex gap-3">
                <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[8px] bg-white text-[#439897]">
                  <FileText size={16} />
                </div>

                <div>
                  <p className="text-[12px] font-bold text-[#0d1e1e]">
                    Content is looking good
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#0d1e1e]/50">
                    Your website currently has 42 published content items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* RECENT ACTIVITY */}
      <section className="mt-6 rounded-[12px] border border-[#439897]/20 bg-white">
        <div className="flex items-center justify-between border-b border-[#439897]/15 px-6 py-5">
          <div>
            <h2 className="text-[16px] font-bold text-[#0d1e1e]">
              Recent Activity
            </h2>

            <p className="mt-1 text-[12px] text-[#0d1e1e]/50">
              Latest changes made to your website
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-[7px] border border-[#439897] px-3.5 py-2 text-[11px] font-semibold text-[#439897] transition-colors hover:bg-[#439897] hover:text-white"
          >
            <Plus size={14} />
            Add Content
          </button>
        </div>

        <div className="divide-y divide-[#439897]/10">
          {/* Activity 1 */}
          <div className="flex items-center gap-4 px-6 py-4">
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#439897]/10 text-[#439897]">
              <MessageSquareQuote size={16} />
            </div>

            <div className="flex-1">
              <p className="text-[12px] font-semibold text-[#0d1e1e]">
                Testimonial updated
              </p>

              <p className="mt-1 text-[11px] text-[#0d1e1e]/45">
                Client testimonial was updated successfully.
              </p>
            </div>

            <span className="text-[10px] text-[#0d1e1e]/40">
              2 hours ago
            </span>
          </div>

          {/* Activity 2 */}
          <div className="flex items-center gap-4 px-6 py-4">
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#439897]/10 text-[#439897]">
              <Users size={16} />
            </div>

            <div className="flex-1">
              <p className="text-[12px] font-semibold text-[#0d1e1e]">
                Team member added
              </p>

              <p className="mt-1 text-[11px] text-[#0d1e1e]/45">
                A new team member profile was added.
              </p>
            </div>

            <span className="text-[10px] text-[#0d1e1e]/40">
              Yesterday
            </span>
          </div>

          {/* Activity 3 */}
          <div className="flex items-center gap-4 px-6 py-4">
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#439897]/10 text-[#439897]">
              <BriefcaseBusiness size={16} />
            </div>

            <div className="flex-1">
              <p className="text-[12px] font-semibold text-[#0d1e1e]">
                Service updated
              </p>

              <p className="mt-1 text-[11px] text-[#0d1e1e]/45">
                Service information was updated.
              </p>
            </div>

            <span className="text-[10px] text-[#0d1e1e]/40">
              2 days ago
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}