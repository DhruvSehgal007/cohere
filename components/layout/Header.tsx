"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import cohereLogo from "@/assets/images/logos/cohere-logo.png";
import allThingsLogo from "@/assets/images/logos/all-things.png";

type DropdownType = "services" | "products" | "events" | "resources" | null;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] =
    useState<DropdownType>(null);

  const toggleDropdown = (dropdown: DropdownType) => {
    setActiveDropdown(
      activeDropdown === dropdown ? null : dropdown
    );
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="absolute left-0 top-0 z-[9999] w-full">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="container-custom flex w-full items-center justify-between py-2 sm:py-3 lg:justify-start lg:py-0">

        {/* ================= LEFT LOGO ================= */}

        <div className="shrink-0 py-2 sm:py-3 lg:pr-[30px]">
          <Link href="/">
            <Image
              src={cohereLogo}
              alt="Cohere Consultants"
              className="h-auto w-[100px] sm:w-[120px] md:w-[130px] lg:w-[145px] 2xl:w-[170px]"
              priority
            />
          </Link>
        </div>


        {/* =================================================
            MOBILE / TABLET MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setActiveDropdown(null);
          }}
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


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden min-w-0 flex-1 lg:block">

          <div className="mx-auto w-full max-w-[1038px]">

            {/* GREEN NAVBAR */}

            <nav className="flex items-center justify-center gap-4 rounded-b-[20px] bg-[#439897] px-4 py-4 font-avenir text-white xl:gap-[30px] xl:px-6">

              {/* ================= SERVICES ================= */}

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center gap-1 whitespace-nowrap text-[14px] transition hover:opacity-80 min-[1200px]:text-[16px] min-[1440px]:text-[20px]"
                >
                  SERVICES
                  <span className="text-[9px]">▼</span>
                </button>
              </div>


              {/* ================= PRODUCTS ================= */}

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("products")}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("products")}
                  className="flex items-center gap-1 whitespace-nowrap text-[14px] transition hover:opacity-80 min-[1200px]:text-[16px] min-[1440px]:text-[20px]"
                >
                  OUR PRODUCTS
                  <span className="text-[9px]">▼</span>
                </button>
              </div>


              {/* ================= EVENTS ================= */}

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("events")}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("events")}
                  className="flex items-center gap-1 whitespace-nowrap text-[14px] transition hover:opacity-80 min-[1200px]:text-[16px] min-[1440px]:text-[20px]"
                >
                  EVENTS
                  <span className="text-[9px]">▼</span>
                </button>
              </div>


              {/* ================= RESOURCES ================= */}

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("resources")}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("resources")}
                  className="flex items-center gap-1 whitespace-nowrap text-[14px] transition hover:opacity-80 min-[1200px]:text-[16px] min-[1440px]:text-[20px]"
                >
                  RESOURCES
                  <span className="text-[9px]">▼</span>
                </button>
              </div>


              {/* ================= CONTACT ================= */}

              <Link
                href="/contact"
                onClick={closeDropdown}
                className="shrink-0 whitespace-nowrap rounded-sm bg-white px-4 py-2 text-[14px] font-semibold text-[#439897] transition hover:bg-gray-100 min-[1200px]:text-[16px] min-[1440px]:px-5 min-[1440px]:text-[20px]"
              >
                CONTACT US
              </Link>

            </nav>


            {/* =================================================
                DROPDOWN AREA
            ================================================== */}

            {activeDropdown && (
              <div
                className="absolute left-0 right-0 top-full w-full bg-[#C4C4C4] px-4 pb-4 pt-2"
                onMouseLeave={() => setActiveDropdown(null)}
              >

                <div className="mx-auto grid max-w-[1500px] grid-cols-4 gap-6">


                  {/* =================================================
                      SERVICES DROPDOWN
                  ================================================== */}

                  {activeDropdown === "services" && (
                    <>
                      <div className="relative min-h-[110px] rounded-[5px] bg-white px-4 py-4 shadow-sm">

                        <div className="space-y-3 font-nunito-sans text-[11px] leading-tight text-[#1B3D3C]">

                          <div>
                            <p className="font-avenir text-[11px] font-extrabold text-[#439897]">
                              ANTI SEXUAL HARASSMENT
                            </p>

                            <p className="mt-1 pl-4">
                              End to end PoSH services. See annexure
                            </p>
                          </div>

                          <div>
                            <p className="font-avenir text-[11px] font-extrabold text-[#439897]">
                              WORKPLACE DISCRIMINATION
                            </p>

                            <p className="mt-1 pl-4">
                              Diversity Equity and Inclusion
                            </p>
                          </div>

                          <div>
                            <p className="font-avenir text-[11px] font-extrabold text-[#439897]">
                              EMPLOYMENT AND LABOUR
                            </p>

                            <p className="mt-1 pl-4">
                              Investigation, Dispute Resolution &amp;
                              Conflict Management
                            </p>
                          </div>

                        </div>

                        <DropdownTriangle />

                      </div>

                      {/* Empty columns to preserve Figma spacing */}

                      <div />
                      <div />
                      <div />
                    </>
                  )}


                  {/* =================================================
                      PRODUCTS DROPDOWN
                  ================================================== */}

                  {activeDropdown === "products" && (
                    <>
                      <div />

                      <div className="relative min-h-[110px] rounded-[5px] bg-white px-4 py-4 shadow-sm">

                        <div className="font-avenir text-[11px] font-extrabold leading-[1.5] text-[#439897]">

                          <Link
                            href="/cohere-resolve"
                            className="block hover:text-[#1B3D3C]"
                          >
                            CohereResolve™
                          </Link>

                          <Link
                            href="/cohere-essentials"
                            className="block hover:text-[#1B3D3C]"
                          >
                            CohereEssentials™
                          </Link>

                          <Link
                            href="/cohere-readiness"
                            className="block hover:text-[#1B3D3C]"
                          >
                            CohereReadiness™
                          </Link>

                          <Link
                            href="/keep-it-right"
                            className="block hover:text-[#1B3D3C]"
                          >
                            KeepItRight®
                          </Link>

                        </div>

                        <DropdownTriangle />

                      </div>

                      <div />
                      <div />
                    </>
                  )}


                  {/* =================================================
                      EVENTS DROPDOWN
                  ================================================== */}

                  {activeDropdown === "events" && (
                    <>
                      <div />
                      <div />

                      <div className="relative min-h-[110px] rounded-[5px] bg-white px-4 py-4 shadow-sm">

                        <div className="font-avenir text-[11px] font-extrabold leading-[1.5] text-[#439897]">

                          <Link
                            href="/training-workshops"
                            className="block hover:text-[#1B3D3C]"
                          >
                            Training &amp; Workshops
                          </Link>

                          <Link
                            href="/calendar"
                            className="block hover:text-[#1B3D3C]"
                          >
                            Calendar
                          </Link>

                        </div>

                        <DropdownTriangle />

                      </div>

                      <div />
                    </>
                  )}


                  {/* =================================================
                      RESOURCES DROPDOWN
                  ================================================== */}

                  {activeDropdown === "resources" && (
                    <>
                      <div />
                      <div />
                      <div />

                      <div className="relative min-h-[110px] rounded-[5px] bg-white px-4 py-4 shadow-sm">

                        <div className="font-avenir text-[11px] font-extrabold leading-[1.45] text-[#439897]">

                          <p className="text-[9px]">
                            Downloadable resources
                            <span className="ml-1 text-[7px] text-[#777]">
                              – set up, plans, partner etc.
                            </span>
                          </p>

                          <Link
                            href="/news"
                            className="block hover:text-[#1B3D3C]"
                          >
                            Cohere in the News
                          </Link>

                          <Link
                            href="/judgments"
                            className="block hover:text-[#1B3D3C]"
                          >
                            Judgments
                          </Link>

                          <Link
                            href="/case-studies"
                            className="block hover:text-[#1B3D3C]"
                          >
                            Case Studies
                          </Link>

                          <Link
                            href="/advisories"
                            className="block hover:text-[#1B3D3C]"
                          >
                            Advisories
                          </Link>

                        </div>

                        <DropdownTriangle />

                      </div>
                    </>
                  )}

                </div>
              </div>
            )}

          </div>
        </div>


        {/* =================================================
            RIGHT LOGO
        ================================================== */}

        <div className="hidden shrink-0 py-3 pl-[30px] lg:block">
          <Image
            src={allThingsLogo}
            alt="All Things Cohere Posh"
            className="h-auto w-[105px] xl:w-[125px] 2xl:w-[170px]"
            priority
          />
        </div>

      </div>


      {/* =====================================================
          MOBILE / TABLET MENU
      ====================================================== */}

      {isOpen && (
        <div className="w-full overflow-hidden bg-[#439897] shadow-lg lg:hidden">

          <nav className="flex w-full flex-col px-4 py-6 font-avenir text-white sm:px-6 sm:py-8">

            {/* SERVICES */}

            <MobileDropdown
              title="SERVICES"
              open={activeDropdown === "services"}
              onClick={() => toggleDropdown("services")}
            >
              <div className="space-y-3 pl-4 text-left text-sm">

                <p>
                  <strong>ANTI SEXUAL HARASSMENT</strong>
                  <br />
                  <span className="text-white/80">
                    End to end PoSH services. See annexure
                  </span>
                </p>

                <p>
                  <strong>WORKPLACE DISCRIMINATION</strong>
                  <br />
                  <span className="text-white/80">
                    Diversity Equity and Inclusion
                  </span>
                </p>

                <p>
                  <strong>EMPLOYMENT AND LABOUR</strong>
                  <br />
                  <span className="text-white/80">
                    Investigation, Dispute Resolution &amp;
                    Conflict Management
                  </span>
                </p>

              </div>
            </MobileDropdown>


            {/* PRODUCTS */}

            <MobileDropdown
              title="OUR PRODUCTS"
              open={activeDropdown === "products"}
              onClick={() => toggleDropdown("products")}
            >
              <div className="space-y-2 pl-4 text-left text-sm">

                <Link href="/cohere-resolve" onClick={() => setIsOpen(false)}>
                  CohereResolve™
                </Link>

                <Link href="/cohere-essentials" onClick={() => setIsOpen(false)}>
                  CohereEssentials™
                </Link>

                <Link href="/cohere-readiness" onClick={() => setIsOpen(false)}>
                  CohereReadiness™
                </Link>

                <Link href="/keep-it-right" onClick={() => setIsOpen(false)}>
                  KeepItRight®
                </Link>

              </div>
            </MobileDropdown>


            {/* EVENTS */}

            <MobileDropdown
              title="EVENTS"
              open={activeDropdown === "events"}
              onClick={() => toggleDropdown("events")}
            >
              <div className="space-y-2 pl-4 text-left text-sm">

                <Link
                  href="/training-workshops"
                  onClick={() => setIsOpen(false)}
                >
                  Training &amp; Workshops
                </Link>

                <Link
                  href="/calendar"
                  onClick={() => setIsOpen(false)}
                >
                  Calendar
                </Link>

              </div>
            </MobileDropdown>


            {/* RESOURCES */}

            <MobileDropdown
              title="RESOURCES"
              open={activeDropdown === "resources"}
              onClick={() => toggleDropdown("resources")}
            >
              <div className="space-y-2 pl-4 text-left text-sm">

                <Link
                  href="/resources"
                  onClick={() => setIsOpen(false)}
                >
                  Downloadable Resources
                </Link>

                <Link
                  href="/news"
                  onClick={() => setIsOpen(false)}
                >
                  Cohere in the News
                </Link>

                <Link
                  href="/judgments"
                  onClick={() => setIsOpen(false)}
                >
                  Judgments
                </Link>

                <Link
                  href="/case-studies"
                  onClick={() => setIsOpen(false)}
                >
                  Case Studies
                </Link>

                <Link
                  href="/advisories"
                  onClick={() => setIsOpen(false)}
                >
                  Advisories
                </Link>

              </div>
            </MobileDropdown>


            {/* CONTACT */}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 self-center rounded-md bg-white px-6 py-3 text-[14px] font-semibold text-[#439897]"
            >
              CONTACT US
            </Link>


            {/* LOGO */}

            <Image
              src={allThingsLogo}
              alt="All Things Cohere Posh"
              className="mx-auto mt-6 h-auto w-[100px] sm:w-[120px] md:w-[140px]"
            />

          </nav>
        </div>
      )}

    </header>
  );
}


/* =========================================================
   DESKTOP DROPDOWN TRIANGLE
========================================================= */

function DropdownTriangle() {
  return (
    <div
      className="
        absolute
        -bottom-[10px]
        left-[22px]
        h-0
        w-0
        border-l-[10px]
        border-r-[10px]
        border-t-[10px]
        border-l-transparent
        border-r-transparent
        border-t-white
      "
    />
  );
}


/* =========================================================
   MOBILE DROPDOWN
========================================================= */

function MobileDropdown({
  title,
  open,
  onClick,
  children,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/20">

      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium"
      >
        <span>{title}</span>

        <span className="text-lg">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="pb-5 pt-1 text-white">
          {children}
        </div>
      )}

    </div>
  );
}