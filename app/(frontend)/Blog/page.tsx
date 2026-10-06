import type { Metadata } from "next";
import BlogHero from "@/components/sections/BlogSections/BlogHero";
import FeaturedSlider from "@/components/sections/BlogSections/FeaturedSlider";
import LatestInsights from "@/components/sections/BlogSections/LatestInsights";


export default function CalenderPage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogHero />
      <FeaturedSlider />
      <LatestInsights />
    </main>
  );
}