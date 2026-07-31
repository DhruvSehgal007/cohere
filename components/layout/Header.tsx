"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cohereLogo from "@/assets/images/logos/cohere-logo.png";
import allThingsLogo from "@/assets/images/logos/all-things.png";

const navLinks = [
  { href: "/services", label: "SERVICES" },
  { href: "/keep-it-right", label: "KEEP IT RIGHT" },
  { href: "/training-workshops", label: "TRAINING & WORKSHOPS" },
  { href: "/news", label: "COHERE IN NEWS" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 z-[9999] w-full bg-transparent">
      <div className="container-custom flex items-center justify-between py-2 lg:justify-start lg:py-0">
        {/* Left Logo */}
        <div className="shrink-0 py-2 lg:py-3 lg:pr-[30px]">
          <Image
            src={cohereLogo}
            alt="Cohere Consultants"
            className="h-auto w-[120px] sm:w-[140px] lg:w-[170px]"
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded p-2 text-[#439897] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-7 w-7"
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

        {/* Desktop Navigation */}
        <div className="hidden flex-1 lg:block">
          <div className="mx-auto max-w-[1038px] rounded-b-[20px] bg-[#439897]">
            <nav className="flex items-center justify-center gap-6 xl:gap-[30px] px-5 xl:px-6 py-4 font-avenir text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-[16px] xl:text-[20px] hover:underline transition"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="rounded-sm bg-white px-4 xl:px-5 py-2 text-[16px] xl:text-[20px] font-semibold text-[#439897] transition hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Right Logo */}
        <div className="hidden shrink-0 py-3 pl-[30px] lg:block">
          <Image
            src={allThingsLogo}
            alt="All Things Cohere Posh"
            className="h-auto w-[140px] xl:w-[170px]"
            priority
          />
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#439897] shadow-lg">
          <nav className="flex flex-col items-center gap-5 px-6 py-8 font-avenir text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-center text-[18px] font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-white px-6 py-3 text-[18px] font-semibold text-[#439897]"
            >
              CONTACT US
            </Link>

            <Image
              src={allThingsLogo}
              alt="All Things Cohere Posh"
              className="mt-3 h-auto w-[130px]"
            />
          </nav>
        </div>
      )}
    </header>
  );
}