import ServiceBannerSection from "@/components/sections/ServiceSections/ServiceBannerSection";
import OurServiceSection from "@/components/sections/AntiSexualHarassmentSections/OurServiceSection";
import PracticalResourcesSection from "@/components/sections/AntiSexualHarassmentSections/PracticalResourcesSection";
import WhyitMatterSection from "@/components/sections/AntiSexualHarassmentSections/whyItMatterSection";


export default function ServicePage() {
  return (
    <>
      {/* <ServiceBannerSection /> */}
      <OurServiceSection />
      <PracticalResourcesSection />
      <WhyitMatterSection />
    </>
  );
}