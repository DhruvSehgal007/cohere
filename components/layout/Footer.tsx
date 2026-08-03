import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegClock,
} from "react-icons/fa";
import footerLogo from "@/assets/images/logos/chohere-footer-logo.png";

const quickLinks = [
  { label: "About US", href: "/about" },
  { label: "Keep It Right", href: "/keep-it-right" },
  { label: "Training & Workshops", href: "/training-workshops" },
  { label: "Cohere In News", href: "/news" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
];

const serviceLinks = [
  { label: "Anti Sexual Hasrassment", href: "/services/anti-sexual-harassment" },
  { label: "Workplace Discrimination", href: "/services/workplace-discrimination" },
  { label: "Training & Employment And Labour", href: "/services/training-employment-labour" },
  { label: "Cohere In News", href: "/news" },
];

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    lines: ["Q-22B, 1st Floor, Block Q, Jungpura Extension, Jangpura", "Delhi 110014"],
  },
  {
    icon: FaPhoneAlt,
    lines: ["We Are Support 24/7", "+91 89044 47004"],
  },
  {
    icon: FaEnvelope,
    lines: ["info@cohereconsultants.com"],
  },
  {
    icon: FaRegClock,
    lines: ["Working Hours", "09:00 AM till 07:00 PM"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[320px_1fr_1fr_1.2fr] gap-10 lg:gap-12 py-12 md:py-16">
  <div className="max-w-full xl:max-w-[320px]">
    <Image
  src={footerLogo}
  alt="Cohere Consultants"
  width={220}
  height={116}
  className="h-auto w-[170px] sm:w-[190px] lg:w-[200px]"
  priority
/>
          <p
            className="mt-4 font-nunito-sans text-[14px] leading-7 text-[#3B3B3B]"
            style={{ letterSpacing: "0.04em" }}
          >
            Cohere Consultants is a pan India consultancy platform with
            offices in Delhi, Bengaluru, Mumbai, Chennai, Kolkata, Hyderabad,
            Dehradun, Gurugram and Noida. It is a boutique practice covering
            all legal, compliance and gender related aspects of sexual
            harassment in the workplace, maternity laws, workplace
            discrimination and labor laws.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="font-markaziBold text-[#1A243F] text-[22px] md:text-[24px] mb-5"
            style={{ letterSpacing: "0.04em" }}
          >
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link, i) => (
              <li key={`${link.href}-${i}`}>
                <Link
                  href={link.href}
                  className="font-inter-medium text-[#3B3B3B] text-[14px] leading-6 hover:text-[#439897] transition"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className="font-markaziBold text-[#1A243F] text-[22px] md:text-[24px] mb-5"
            style={{ letterSpacing: "0.04em" }}
          >
            SERVICES
          </h4>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-inter-medium text-[#3B3B3B] text-[14px] leading-6 hover:text-[#439897] transition"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        {/* <div>
          <h4
            className="font-avenir font-extrabold text-[#1A243F] text-[24px] mb-5"
            style={{ letterSpacing: "0.04em" }}
          >
            NewsLetter
          </h4>
          <p
            className="font-nunito-sans font-normal text-[#3B3B3B] text-[14px] leading-relaxed"
            style={{ letterSpacing: "0.04em" }}
          >
            Subscribe to my Newsletter, we won&apos;t spam. Promise!
          </p>
        </div> */}

        {/* Get In Touch */}
        <div>
          <h4
            className="font-markaziBold text-[#1A243F] text-[22px] md:text-[24px] mb-5"
            style={{ letterSpacing: "0.04em" }}
          >
            Get In Touch
          </h4>

          <div className="mb-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#3B3B3B]/30 flex items-center justify-center text-[#3B3B3B] hover:border-[#439897] hover:text-[#439897] transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-[#3B3B3B]/30 flex items-center justify-center text-[#3B3B3B] hover:border-[#439897] hover:text-[#439897] transition"
            >
              <FaFacebookF size={16} />
            </a>
          </div>

          <div className="flex flex-col">
            {contactItems.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 py-3 ${
                  i !== contactItems.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <item.icon className="text-[#3B3B3B] mt-1 shrink-0" size={16} />
                <div
                  className="font-inter-medium text-[#3B3B3B] text-[14px] leading-6 leading-relaxed"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {item.lines.map((line, li) => (
                    <p key={li}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container-custom py-5 px-6">
          <p
            className="text-center md:text-left font-nunito-sans text-[13px] md:text-[14px] text-[#666666]"
            style={{ letterSpacing: "0.04em" }}
          >
            Copyright © {new Date().getFullYear()} | Developed and Marketed by UpThinq
          </p>
        </div>
      </div>
    </footer>
  );
}
