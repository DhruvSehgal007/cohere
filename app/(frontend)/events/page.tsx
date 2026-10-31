import { getEventSection } from "@/utils/modules/events";
import type { Metadata } from "next";
import HeroSection from "@/components/sections/Events/HeroSection";
import UpcomingEvents from "@/components/sections/Events/UpcomingEvents";

export const metadata: Metadata = {
  title: "Events | Cohere Consultants",
  description:
    "Explore upcoming events, workshops, and programmes by Cohere Consultants supporting organisations beyond compliance.",
};

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const { events, settings } = await getEventSection();
  return (
    <main className="min-h-screen bg-white">
      <HeroSection settings={settings} />
      <UpcomingEvents events={events} heading={settings.listingHeading} />
    </main>
  );
}
