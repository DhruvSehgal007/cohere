import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogHeroImage from "@/assets/images/Blogs/InnerBlog/bloginner.jpg";
import upcomingEvent1 from "@/assets/images/Blogs/InnerBlog/upcomingevent1.png";
import upcomingEvent2 from "@/assets/images/Blogs/InnerBlog/upcomingevent2.png";
import upcomingEvent3 from "@/assets/images/Blogs/InnerBlog/upcomingevent3.png";
import teamMember1 from "@/assets/images/OurTeam/team-member.png";
import teamMemberLarge from "@/assets/images/OurTeam/Team-member-large.png";

interface EventDetailData {
  title: string;
  heroImage: any;
  category: string;
  paragraphs: string[];
}

const eventsDatabase: Record<string, EventDetailData> = {
  "keep-it-right-website-based-training": {
    title: "Keep It Right - website based training",
    heroImage: blogHeroImage,
    category: "EVENTS & WORKSHOPS",
    paragraphs: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    ],
  },
  "the-keep-it-right-app": {
    title: "The Keep it Right App",
    heroImage: blogHeroImage,
    category: "EVENTS & WORKSHOPS",
    paragraphs: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    ],
  },
  "stop-by-cohere-keep-it-right": {
    title: "STOP by Cohere @ Keep It Right",
    heroImage: blogHeroImage,
    category: "EVENTS & WORKSHOPS",
    paragraphs: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    ],
  },
};

const defaultEvent: EventDetailData = {
  title: "Lorem Ipsum is simply dummy text",
  heroImage: blogHeroImage,
  category: "EVENTS & WORKSHOPS",
  paragraphs: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  ],
};

const speakersList = [
  {
    id: 1,
    name: "Dr. Pushkar Singh",
    role: "lawyer, consultant",
    image: teamMemberLarge,
  },
  {
    id: 2,
    name: "Dr. Pushkar Singh",
    role: "lawyer, consultant",
    image: teamMember1,
  },
  {
    id: 3,
    name: "Dr. Pushkar Singh",
    role: "lawyer, consultant",
    image: teamMemberLarge,
  },
  {
    id: 4,
    name: "Dr. Pushkar Singh",
    role: "lawyer, consultant",
    image: teamMember1,
  },
  {
    id: 5,
    name: "Dr. Pushkar Singh",
    role: "lawyer, consultant",
    image: teamMemberLarge,
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Keep It Right - website based training",
    image: upcomingEvent1,
    slug: "keep-it-right-website-based-training",
  },
  {
    id: 2,
    title: "The Keep it Right App",
    image: upcomingEvent2,
    slug: "the-keep-it-right-app",
  },
  {
    id: 3,
    title: "STOP by Cohere @ Keep It Right",
    image: upcomingEvent3,
    slug: "stop-by-cohere-keep-it-right",
  },
];

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const cleanSlug = slug.replace(/-\d+$/, ""); // Handle duplicate suffixes like -2, -3

  const eventData = eventsDatabase[slug] || eventsDatabase[cleanSlug] || defaultEvent;

  return (
    <article className="min-h-screen bg-white pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div className="container-custom">
        {/* Hero Banner Image */}
        <div className="relative w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[560px] rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-sm">
          <Image
            src={eventData.heroImage}
            alt={eventData.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Category Badge */}
        <div className="mt-8 md:mt-10 mb-4 inline-flex items-center bg-[#439897] text-white text-[14px] font-avenir font-normal uppercase pl-[6px] pr-[10px] py-[1px] h-[27px] rounded-r-[5px] rounded-l-none shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">
          {eventData.category}
        </div>

        {/* Event Title */}
        <h1 className="text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-avenir font-bold text-[#0D1E1E] leading-[1.1] mb-6 md:mb-8">
          {eventData.title}
        </h1>

        {/* Event Body Description */}
        <div className="space-y-6 md:space-y-7 text-[16px] sm:text-[18px] md:text-[20px] font-nunito-sans font-normal text-[#0D1E1E] leading-[24px] sm:leading-[25px] md:leading-[26px] tracking-[0.04em]">
          {eventData.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Speakers / Experts Section */}
        <div className="mt-12 sm:mt-14 md:mt-16">
          <div className="flex flex-wrap lg:flex-nowrap items-start justify-start gap-6 sm:gap-8 lg:gap-[50px]">
            {speakersList.map((speaker, index) => (
              <div
                key={`${speaker.id}-${index}`}
                className="flex flex-col w-[140px] sm:w-[170px] lg:w-[198px] flex-shrink-0 gap-[20px]"
              >
                {/* Photo container */}
                <div className="relative w-full aspect-square rounded-[18px] overflow-hidden bg-[#F4F4F4] border border-gray-100 shadow-xs">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Speaker Info */}
                <div className="flex flex-col">
                  <h4 className="text-[18px] lg:text-[20px] font-avenir font-bold text-[#0D1E1E] leading-tight">
                    {speaker.name}
                  </h4>
                  <p className="text-[13px] sm:text-[14px] font-nunito-sans text-[#6B7280] mt-[4px] lowercase">
                    {speaker.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-avenir font-bold text-[#0D1E1E] leading-[1.22] md:leading-[49px] mb-6 md:mb-8">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="group relative flex flex-col justify-between h-[240px] sm:h-[280px] lg:h-[320px] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white block"
              >
                {/* Card Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 p-4 flex-1" />

                {/* Bottom Pill Badge / Button */}
                <div className="relative z-10 p-3 sm:p-4">
                  <div
                    className="w-full text-center py-2.5 sm:py-3 px-3 rounded-[10px] text-white text-[14px] sm:text-[16px] font-avenir font-bold shadow-md transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(90deg, #1C4447 0%, #295F63 50%, #1C4447 100%)",
                    }}
                  >
                    {event.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
