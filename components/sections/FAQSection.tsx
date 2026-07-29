import FAQ from "@/components/common/faq";

const faqData = [
  {
    question:
      "Can Cohere act as the External Member on our Internal Committee?",
    answer:
      "Yes. Cohere provides experienced External Members for Internal Committees while ensuring complete compliance with the PoSH Act.",
  },
  {
    question:
      "Does Cohere help draft and review workplace policies?",
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
    <section className="pb-20">
        <div className="max-w-[1500px] mx-auto px-6 pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="inline-block w-auto md:w-[260px] bg-[#439897] text-white font-avenir font-normal text-[14px] px-3 py-1 rounded text-left">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-avenir font-extrabold text-[40px] leading-tight text-[#0D1E1E] mt-4 w-full">
            Client Popular Question
          </h2>
        </div>
       
      </div>
      <div className="max-w-[994px] mx-auto px-6">
        <FAQ data={faqData} />
      </div>
    </section>
  );
}