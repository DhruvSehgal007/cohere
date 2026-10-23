
import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import footerLogo from "@/assets/images/logos/chohere-footer-logo.png";

const quickLinks = [
  { label: "About Us", href: "/About" },
  { label: "Our team", href: "/our-team" },
  { label: "Our Product", href: "/our-products" },
  { label: "Training & Workshops", href: "/calender#training-workshops" },
  { label: "Resources", href: "/resources" },
  { label: "Blogs", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/#contact" },
];

const serviceLinks = [
  {
    label: "Anti Sexual Harassment",
    href: "/anti-sexual-harassment",
  },
  {
    label: "Workplace Discrimination",
    href: "/workplace-discrimination",
  },
  {
    label: "Employment & Labour",
    href: "/employment-and-labour",
  },
];

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    lines: [
      "Q-22B, 1st Floor, Block Q, Jungpura Extension,",
      "Jangpura",
      "Delhi 110014",
    ],
  },
  {
    icon: FaPhoneAlt,
    lines: [
      "We Are Support 24/7",
      "+91 89044 47004",
    ],
  },
  {
    icon: FaEnvelope,
    lines: ["info@cohereconsultants.com"],
  },
  {
    icon: FaClock,
    lines: [
      "Working Hours",
      "09:00 AM till 07:00 PM",
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white">

      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          container-custom
          mx-auto
          grid
          grid-cols-1
          gap-x-6
          gap-y-10
          px-4
          pt-12
          pb-12

          sm:grid-cols-2
          sm:px-6

          lg:grid-cols-[1.7fr_0.75fr_0.95fr_1.25fr]
          lg:gap-x-6
          lg:pt-16
          lg:pb-16

          xl:grid-cols-[1.8fr_0.7fr_0.95fr_1.25fr]
          xl:gap-x-8
        "
      >

        {/* ================= COLUMN 1: LOGO ================= */}
        <div className="w-full">

          <Link href="/" className="inline-block">
            <Image
              src={footerLogo}
              alt="Cohere Consultants"
              width={220}
              height={116}
              className="
                h-auto
                w-[160px]
                sm:w-[170px]
                lg:w-[180px]
              "
            />
          </Link>

          <p
            className="
              mt-5
              max-w-[330px]
              font-nunito-sans
              text-[14px]
              font-normal
              leading-[1.55]
              text-[#666666]
            "
          >
            Cohere Consultants is a pan India consultancy platform
            with offices in Delhi, Bengaluru, Mumbai, Chennai,
            Kolkata, Hyderabad, Dehradun, Gurugram and Noida.
            It is a boutique practice covering all legal,
            compliance and gender related aspects of sexual
            harassment in the workplace, maternity laws,
            workplace discrimination and labor laws.
          </p>

        </div>

        {/* ================= COLUMN 2: QUICK LINKS ================= */}
        <div className="w-full">

          <h4
            className="
              mb-5
              font-markaziBold
              text-[22px]
              font-bold
              text-[#1A243F]
              md:text-[24px]
            "
          >
            Quick Links
          </h4>

          <ul className="flex flex-col gap-3">
            {quickLinks.map((link, index) => (
              <li key={`${link.href}-${index}`}>
                <Link
                  href={link.href}
                  className="
                    font-inter-medium
                    text-[14px]
                    leading-[1.5]
                    text-[#555555]
                    transition-colors
                    duration-200
                    hover:text-[#439897]
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* ================= COLUMN 3: SERVICES ================= */}
        <div className="w-full">

          <h4
            className="
              mb-5
              font-markaziBold
              text-[22px]
              font-bold
              text-[#1A243F]
              md:text-[24px]
            "
          >
            Service&apos;s
          </h4>

          <ul className="flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    font-inter-medium
                    text-[14px]
                    leading-[1.5]
                    text-[#555555]
                    transition-colors
                    duration-200
                    hover:text-[#439897]
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* ================= COLUMN 4: GET IN TOUCH ================= */}
        <div className="w-full">

          <h4
            className="
              mb-5
              font-markaziBold
              text-[22px]
              font-bold
              text-[#1A243F]
              md:text-[24px]
            "
          >
            Get In Touch
          </h4>

          {/* ================= SOCIAL MEDIA ICONS ================= */}
          <div className="mb-4 flex items-center gap-3 border-b border-[#DCE4E9] pb-3">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                flex
                h-[36px]
                w-[36px]
                items-center
                justify-center
                rounded-full
                border
                border-[#E5E5E5]
                bg-white
                transition-all
                duration-300
                hover:scale-110
                hover:shadow-md
              "
            >
              <FaInstagram
                size={17}
                className="text-[#E4405F]"
              />
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                flex
                h-[36px]
                w-[36px]
                items-center
                justify-center
                rounded-full
                border
                border-[#E5E5E5]
                bg-white
                transition-all
                duration-300
                hover:scale-110
                hover:shadow-md
              "
            >
              <FaFacebookF
                size={16}
                className="text-[#1877F2]"
              />
            </a>

          </div>

          {/* ================= CONTACT INFORMATION ================= */}
          <div className="flex flex-col">

            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`
                    flex
                    items-start
                    gap-4
                    py-3
                    ${
                      index !== contactItems.length - 1
                        ? "border-b border-[#DCE4E9]"
                        : ""
                    }
                  `}
                >

                  {/* ICON */}
                  <Icon
                    size={16}
                    className="
                      mt-1
                      shrink-0
                      text-[#1A243F]
                    "
                  />

                  {/* TEXT */}
                  <div
                    className="
                      font-inter-medium
                      text-[13px]
                      leading-[1.55]
                      text-[#666666]
                      sm:text-[14px]
                    "
                  >
                    {item.lines.map((line, lineIndex) => (
                      <p key={lineIndex}>
                        {line === "+91 89044 47004" ? (
                          <a
                            href="tel:+918904447004"
                            className="hover:text-[#439897]"
                          >
                            {line}
                          </a>
                        ) : line === "info@cohereconsultants.com" ? (
                          <span className="hover:text-[#439897]">
                            {line}
                          </span>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="container-custom mx-auto px-4 sm:px-6">

        <div className="border-t border-[#DCE4E9]">

          <p
            className="
              py-5
              font-nunito-sans
              text-[12px]
              leading-[1.5]
              text-[#777777]
              sm:text-[13px]
            "
          >
            Copyright © {new Date().getFullYear()} | Developed and Marketed by UpThinq
          </p>

        </div>

      </div>

    </footer>
  );
}
