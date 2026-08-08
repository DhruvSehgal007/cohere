import ServiceBannerSection from "@/components/sections/ServiceSections/ServiceBannerSection";
import IntroSection from "@/components/sections/ServiceSections/IntroSection";
import GetInTouchSection from "@/components/sections/ServiceSections/GetInTouchSection";
import ProcessSection from "@/components/sections/ServiceSections/ProcessSection";

export default function ServicePage() {
  return (
    <>
      <ServiceBannerSection />
      <IntroSection />
      <ProcessSection />
      <GetInTouchSection />
    </>
  );
}