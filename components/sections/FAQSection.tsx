import FAQ from "@/components/common/faq";

const faqData = [
  {
    question:
      "Can Cohere act as the External Member on our Internal Committee?",
    answer:
      "Yes. Cohere provides experienced External Members for Internal Committees while ensuring complete compliance with the PoSH Act.",
  },
  {
    question: "Does Cohere help draft and review workplace policies?",
    answer:
      "Yes. We help draft, review and update workplace policies according to legal requirements and your organization's needs.",
  },
  {
    question:
      "Can Cohere support organizations during regulatory audits and compliance reviews?",
    answer:
      "Absolutely. We provide complete compliance support, documentation review and audit assistance.",
  },
  {
    question:
      "Do you provide customized solutions or only standard compliance packages?",
    answer:
      "Every organization has different requirements. Our services are completely customized according to your business needs.",
  },
  {
    question:
      "Can Cohere help establish and train Internal Committees (ICs)?",
    answer:
      "Yes. We help establish Internal Committees, train members and conduct awareness sessions to ensure legal compliance.",
  },
];

export default function FAQSection() {
  return (
    <section className="pb-12 md:pb-16 lg:pb-20">
      <div className="container-custom pb-8 md:pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6">

        <div>
          <span className="inline-block w-auto rounded bg-[#439897] px-3 py-2 font-avenir text-[12px] sm:text-[13px] lg:text-[14px] font-normal text-white md:w-[260px]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-4 font-avenir font-extrabold leading-tight text-[#0D1E1E] text-[30px] sm:text-[34px] md:text-[40px]">
            Client Popular Question
          </h2>
        </div>

      </div>

      <div className="mx-auto w-full max-w-[994px] px-4 sm:px-6">
        <FAQ data={faqData} />
      </div>
    </section>
  );
}