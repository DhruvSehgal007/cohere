import ServiceBannerSection from "@/components/sections/ServiceSections/ServiceBannerSection";
import IntroSection from "@/components/sections/ServiceSections/IntroSection";
import GetInTouchSection from "@/components/sections/ServiceSections/GetInTouchSection";
import ProcessSection from "@/components/sections/ServiceSections/ProcessSection";
import WhyitMatter from "@/components/sections/ServiceSections/WhyitMatter";

export default function ServicePage() {
  return (
    <>
      <ServiceBannerSection />
      <IntroSection />
      <ProcessSection />
      <WhyitMatter />
      <GetInTouchSection />
    </>
  );
}