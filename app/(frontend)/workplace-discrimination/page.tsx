import OurSupportSection from "@/components/sections/WorkplaceDiscrimination/OurSupportSection";
import WDBannerSection from "@/components/sections/WorkplaceDiscrimination/WDBannerSection";
import RelatedServices from "@/components/sections/WorkplaceDiscrimination/RelatedServices";
import Whyitmatters from "@/components/sections/WorkplaceDiscrimination/Whyitmatters";

export default function WorkplaceDiscrimination() {
  return (
    <>
      <WDBannerSection />
      <OurSupportSection />
      <Whyitmatters />
      <RelatedServices />
    </>
  );
}