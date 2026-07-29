import StatsSection from "@/components/sections/StatsSection";
import OurClientsSection from "@/components/sections/OurClientsSection";
import CohereAdvantage from "@/components/sections/CohereAdvantage";
import TestinomialSection from "@/components/sections/TestinomialSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";
import HomeBannerSection from "@/components/sections/HomeBannerSection";
import FAQSection from "@/components/sections/FAQSection";
import CoreServices from "@/components/sections/CoreServices";
import ExpertiesSection from "@/components/sections/ExpertiesSection";
import SocialFeedSection from "@/components/sections/SocialFeedSection";

export default function HomePage() {
  return (
    <div>
      <HomeBannerSection />
      <StatsSection />
      <CohereAdvantage />
      <OurClientsSection />
      <CoreServices />
      <TestinomialSection />
      <SocialFeedSection />
      <ExpertiesSection />
      <FAQSection />

      <GetInTouchSection />
    </div>
  );
}
