import BannerSection from "@/components/sections/AntiSexualHarassmentSections/BannerSection";
import OurServiceSection from "@/components/sections/AntiSexualHarassmentSections/OurServiceSection";
import PracticalResourcesSection from "@/components/sections/AntiSexualHarassmentSections/PracticalResourcesSection";
import WhyitMatterSection from "@/components/sections/AntiSexualHarassmentSections/whyItMatterSection";


export default function ServicePage() {
  return (
    <>
      <BannerSection/>
      <OurServiceSection />
      <WhyitMatterSection />
      <PracticalResourcesSection />
    </>
  );
}