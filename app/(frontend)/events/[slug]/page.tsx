import Image from "next/image";
import EventContent from "@/components/common/EventContent";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventSection } from "@/utils/modules/events";
export const dynamic = "force-dynamic";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { events, settings } = await getEventSection();
  const eventData = events.find(event => event.slug === slug);
  if (!eventData) notFound();
  const speakersList = eventData.speakers;
  const upcomingEvents = events.filter(event => event.id !== eventData.id).slice(0, 3);

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
            unoptimized
            className="object-cover object-center"
          />
        </div>

        {/* Category Badge */}
        {/* <div className="mt-8 md:mt-10 mb-4 inline-flex items-center bg-[#439897] text-white text-[14px] font-avenir font-normal uppercase pl-[6px] pr-[10px] py-[1px] h-[27px] rounded-r-[5px] rounded-l-none shadow-[2px_2px_5px_rgba(0,0,0,0.25)]">
          {eventData.category}
        </div> */}

        {/* <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
              {eventData.category}
            </span>
          </div> */}

        {/* Event Title */}
        <h1 className="text-[32px] sm:text-[36px] md:text-[36px] lg:text-[40px] xl:text-[40px] font-avenir font-bold text-[#0D1E1E] leading-[1.1] mb-6 md:mb-8 mt-10">
          {eventData.title}
        </h1>

        {/* Event Body Description */}
        <div className="space-y-6 md:space-y-7 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] font-nunito-sans font-normal text-[#5B5B5B] leading-[24px] sm:leading-[25px] md:leading-[26px] tracking-[0.04em]">
          <EventContent content={eventData.content} paragraphs={eventData.paragraphs} />
        </div>

        {/* Speakers / Experts Section */}
        <div className="mt-12 sm:mt-14 md:mt-16">
          <div className="flex flex-wrap items-start justify-start gap-6 sm:gap-8 lg:gap-[36px] xl:gap-[50px]">
            {speakersList.map((speaker, index) => (
              <div
                key={index}
                className="flex flex-col w-[140px] sm:w-[170px] lg:w-[198px] gap-[20px]"
              >
                {/* Photo container */}
                <div className="relative w-full aspect-square rounded-[18px] overflow-hidden bg-[#F4F4F4] border border-gray-100 shadow-xs">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    unoptimized
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
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-avenir font-bold text-[#0D1E1E] leading-[1.22] md:leading-[49px] mb-6 md:mb-8">
            {settings.listingHeading}
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
                    unoptimized
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
