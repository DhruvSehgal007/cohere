import type { Metadata } from "next";
import FeaturedSlider from "@/components/sections/BlogSections/FeaturedSlider";
import LatestInsights from "@/components/sections/BlogSections/LatestInsights";

export const metadata: Metadata = {
  title: "Blog | Cohere Consultants",
  description:
    "Stay informed with expert insights on workplace compliance, legal advisory, POSH updates, and organizational ethics.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeaturedSlider />
      <LatestInsights />
    </main>
  );
}
