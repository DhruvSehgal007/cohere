import Image from "next/image";
import hsbcLogo from "@/assets/images/homepage/HSBC.png";
import heroFinCorpLogo from "@/assets/images/homepage/herofincrop.png";
import quoraLogo from "@/assets/images/homepage/quora.png";
import paysafeLogo from "@/assets/images/homepage/paysafe.png";
import ukIndiaLogo from "@/assets/images/homepage/uk-india.png";
import standardchatered from "@/assets/images/homepage/standard-chatered.png";
import rukart from "@/assets/images/homepage/rukart.png";
import gmn from "@/assets/images/homepage/gmn.png";
import harmonic from "@/assets/images/homepage/harmonic.png";
import IkigaiLaw from "@/assets/images/homepage/Ikigai-Law.png";




const rowOneLogos = [
  { src: hsbcLogo, alt: "HSBC" },
  { src: heroFinCorpLogo, alt: "HeroFinCorp" },
  { src: quoraLogo, alt: "Quora" },
  { src: paysafeLogo, alt: "Paysafe" },
  { src: ukIndiaLogo, alt: "UK India Business Council" },
];

// TODO: swap these placeholders for harmonic, GMM Pfaudler, Standard Chartered,
// and RuKart logos once those files are uploaded
const rowTwoLogos = [
  { src: harmonic, alt: "Harmonic" },
  { src: gmn, alt: "GMM Pfaudler" },
  { src: standardchatered, alt: "Standard Chartered" },
  { src: rukart, alt: "RuKart" },
  { src: IkigaiLaw, alt: "Ikigai Law" },
];

const marqueeRowOne = [...rowOneLogos, ...rowOneLogos, ...rowOneLogos, ...rowOneLogos];
const marqueeRowTwo = [...rowTwoLogos, ...rowTwoLogos, ...rowTwoLogos, ...rowTwoLogos];

function LogoCard({
  src,
  alt,
}: {
  src: typeof hsbcLogo;
  alt: string;
}) {
  return (
    <div
      className="
        flex
        h-[90px]
        w-[250px]
        shrink-0
        items-center
        justify-center
        rounded-[8px]
        border
        border-[#2E262E]
        bg-white
        p-3
        shadow-[4px_4px_8px_#00000048]

        md:h-[120px]
        md:w-[348px]
        md:p-4
      "
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 767px) 226px, 316px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function OurClientsSection() {
  return (
    <section className="w-full bg-white pb-16 sm:pb-16 md:pb-24 lg:pb-24">



      <div className="container-custom px-4 sm:px-6 mb-10">
        <div className="flex flex-col gap-3 md:gap-10 md:flex-row md:items-end md:justify-between">

          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#439897] px-3 py-1.5 rounded-tr-[8px] rounded-br-[8px]">
            <span className="font-avenir text-[12px] sm:text-[14px] uppercase tracking-[0.2px] text-white uppercase">
  OUR CLIENTS
            </span>
          </div>


            <h2
              className="
                mt-3
                w-full
                font-avenir
                font-extrabold
                leading-[1.15]
                text-[#101C1C]
                md:mt-4
                lg:max-w-[600px]
                text-[32px]
                sm:text-[36px]
                md:text-[40px]
              "
            >
              Trusted by Leading Organizations
            </h2>
          </div>

          <p
            className="
              w-full
              font-nunito-sans
              leading-6
              text-[#5B5B5B]
              sm:leading-7
              md:w-1/2
              lg:max-w-[360px]
              text-left
              md:text-right
              lg:text-right
              text-[16px]
              sm:text-[16px]
              md:text-[16px]
              lg:text-[18px]
            "
          >
            Display client logos in an auto-scrolling marquee or responsive grid.
          </p>

        </div>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="w-full overflow-hidden pb-6">
        {/* <div className="marquee-track flex w-max gap-10 animate-marquee"> */}
          <div className="marquee-track flex w-max gap-10 animate-marquee">
          {marqueeRowOne.map((logo, index) => (
            <LogoCard key={`row1-${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="w-full overflow-hidden">
        {/* <div className="marquee-track flex w-max gap-10 animate-marquee-delay"> */}
          <div className="marquee-track flex w-max gap-10 animate-marquee-delay">
          {marqueeRowTwo.map((logo, index) => (
            <LogoCard key={`row2-${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}