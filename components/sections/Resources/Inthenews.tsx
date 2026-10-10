
"use client";

import Image from "next/image";
import newsImage from "@/assets/images/Keepitright/Inthenews-card.png";

const newsCards = [
  {
    id: 1,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: newsImage,
    featured: true,
  },
  {
    id: 2,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: newsImage,
    featured: false,
  },
  {
    id: 3,
    title: "Preparing for Government PoSH Inspections",
    description:
      "Understand the compliance expectations, documentation requirements, and practical measures organisations should implement before an inspection.",
    image: newsImage,
    featured: false,
  },
];

export default function Inthenews() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container-custom px-4 sm:px-6">

        {/* ================= TOP CONTENT ================= */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full lg:w-1/2">
            <span className="inline-block rounded bg-[#439897] px-3 py-1 font-avenir text-[12px] text-white uppercase sm:px-4 sm:text-[14px]">
              Cohere in the News
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
                lg:max-w-[364px]
                lg:text-[40px]
              "
            >
              Our Expertise in the Conversation
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
              lg:max-w-[474px]
              lg:w-1/2
              lg:text-right
              lg:text-[16px]
            "
          >
            Explore Cohere&apos;s latest media features, expert commentary,
            publications, interviews, and speaking engagements. Discover
            our perspectives on PoSH, workplace investigations, employment
            law, compliance, and building safer, more inclusive workplaces.
          </p>
        </div>

        {/* ================= NEWS CARDS ================= */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            justify-items-center
            gap-5
            md:grid-cols-2
            xl:grid-cols-3
            xl:gap-6
          "
        >
          {newsCards.map((card) => (
            <article
              key={card.id}
              className={`
                flex
                h-full
                w-full
                max-w-[484px]
                flex-col
                overflow-hidden
                rounded-[12px]
                p-5
                shadow-[0_2px_6px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                ${
                  card.featured
                    ? "bg-gradient-to-br from-[#439897] to-[#2E262E]"
                    : "bg-white"
                }
              `}
            >
              {/* CARD IMAGE */}
              <div className="relative aspect-[1.53] w-full overflow-hidden rounded-[8px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 484px"
                />
              </div>

              {/* CARD TITLE */}
              <h3
                className={`
                  mt-5
                  font-avenir
                  text-[18px]
                  font-extrabold
                  leading-[1.3]
                  lg:text-[20px]
                  ${
                    card.featured
                      ? "text-white"
                      : "text-[#101C1C]"
                  }
                `}
              >
                {card.title}
              </h3>

              {/* CARD DESCRIPTION */}
              <p
                className={`
                  mt-5
                  font-nunito-sans
                  text-[15px]
                  font-normal
                  leading-[1.6]
                  lg:text-[16px]
                  ${
                    card.featured
                      ? "text-white"
                      : "text-[#5B5B5B]"
                  }
                `}
              >
                {card.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
