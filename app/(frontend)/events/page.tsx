import type { Metadata } from "next";
import HeroSection from "@/components/sections/Events/HeroSection";
import UpcomingEvents from "@/components/sections/Events/UpcomingEvents";

export const metadata: Metadata = {
  title: "Events | Cohere Consultants",
  description:
    "Explore upcoming events, workshops, and programmes by Cohere Consultants supporting organisations beyond compliance.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <UpcomingEvents />
    </main>
  );
}
