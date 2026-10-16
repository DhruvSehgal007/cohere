import type { Metadata } from "next";
import BlogHero from "@/components/sections/BlogSections/BlogHero";
import FeaturedSlider from "@/components/sections/BlogSections/FeaturedSlider";
import FeaturedSlider2 from "@/components/sections/BlogSections/FeaturedSlider2";
import LatestInsights from "@/components/sections/BlogSections/LatestInsights";
import Supportresources from "@/components/sections/BlogSections/Supportresources";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogHero />
      <FeaturedSlider />
      <FeaturedSlider2 />
      <LatestInsights />
      <Supportresources />
    </main>
  );
}