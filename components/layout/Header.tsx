"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import cohereLogo from "@/assets/images/logos/cohere-logo.png";
import allThingsLogo from "@/assets/images/logos/all-things.png";

const navLinks = [
  { href: "/Service", label: "SERVICES" },
  { href: "/keep-it-right", label: "KEEP IT RIGHT" },
  { href: "/training-workshops", label: "TRAINING & WORKSHOPS" },
  { href: "/news", label: "COHERE IN NEWS" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-[9999] w-full">
      {/* HEADER TOP */}
      <div className="container-custom flex w-full items-center justify-between py-2 sm:py-3 lg:justify-start lg:py-0">
        {/* LEFT LOGO */}
        <div className="shrink-0 py-2 sm:py-3 lg:pr-[30px]">
          <Image
            src={cohereLogo}
            alt="Cohere Consultants"
            className="h-auto w-[100px] sm:w-[120px] md:w-[130px] lg:w-[145px] 2xl:w-[170px]"
            priority
          />
        </div>

        {/* MOBILE / TABLET MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[#439897] transition-colors hover:bg-white/20 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-7 w-7 sm:h-8 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden min-w-0 flex-1 lg:block">
          <div className="mx-auto w-full max-w-[1038px] rounded-b-[20px] bg-[#439897]">
            <nav className="flex items-center justify-center gap-4 px-4 py-4 font-avenir text-white xl:gap-[30px] xl:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-[14px] min-[1200px]:text-[16px] min-[1440px]:text-[20px] transition hover:underline"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="shrink-0 whitespace-nowrap rounded-sm bg-white px-4 py-2 text-[14px] font-semibold text-[#439897] transition hover:bg-gray-100 min-[1200px]:text-[16px] min-[1440px]:px-5 min-[1440px]:text-[20px]"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* RIGHT LOGO */}
        <div className="hidden shrink-0 py-3 pl-[30px] lg:block">
          <Image
            src={allThingsLogo}
            alt="All Things Cohere Posh"
            className="h-auto w-[105px] xl:w-[125px] 2xl:w-[170px]"
            priority
          />
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      {isOpen && (
        <div className="w-full overflow-hidden bg-[#439897] shadow-lg lg:hidden">
          <nav className="flex w-full flex-col items-center gap-4 px-4 py-6 font-avenir text-white sm:gap-5 sm:px-6 sm:py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="w-full whitespace-nowrap text-center text-[clamp(14px,2.2vw,20px)] font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 whitespace-nowrap rounded-md bg-white px-5 py-2.5 text-[clamp(14px,2.2vw,20px)] font-semibold text-[#439897] sm:px-6 sm:py-3"
            >
              CONTACT US
            </Link>

            <Image
              src={allThingsLogo}
              alt="All Things Cohere Posh"
              className="mt-2 h-auto w-[100px] sm:w-[120px] md:w-[140px]"
            />
          </nav>
        </div>
      )}
    </header>
  );
}