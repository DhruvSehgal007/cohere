"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  MessageSquareQuote,
  BriefcaseBusiness,
  Users,
  Building2,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft,
   BarChart3,
   HelpCircle,
} from "lucide-react";

import cohereLogo from "@/assets/images/logos/cohere-logo.png";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Testimonials",
    href: "/dashboard/testimonials",
    icon: MessageSquareQuote,
  },
  {
    label: "Services",
    href: "/dashboard/services",
    icon: BriefcaseBusiness,
  },
  {
    label: "Our Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    label: "Clients",
    href: "/dashboard/clients",
    icon: Building2,
  },
  {
    label: "Case Studies",
    href: "/dashboard/case-studies",
    icon: FileText,
  },
  {
  label: "Stats",
  href: "/dashboard/stats",
  icon: BarChart3,
},
{
  label: "FAQs",
  href: "/dashboard/faqs",
  icon: HelpCircle,
},


];
const handleLogout = async () => {
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    window.location.href = "/login";
  }
};
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-[#439897] bg-white">
      {/* Logo */}
      <div className="flex h-[82px] items-center border-b border-[#439897] px-7">
        <div>
          <Image
            src={cohereLogo}
            alt="Cohere Consultants"
            width={145}
            height={60}
            className="h-auto w-[125px] object-contain"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-7">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.5px] text-[#0d1e1e]">
          Overview
        </p>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex h-[46px] items-center gap-3 rounded-[10px] px-3 text-[14px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#439897] text-[#ffffff]"
                    : "text-[#0d1e1e] hover:bg-[#439897]/10 hover:text-[#0d1e1e]"
                }`}
              >
                <Icon
                  size={18}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  className={`transition-colors ${
                    isActive
                      ? "text-[#ffffff]"
                      : "text-[#0d1e1e]"
                  }`}
                />

                <span>{item.label}</span>

                {isActive && (
                  <span className="ml-auto h-[6px] w-[6px] rounded-full bg-[#ffffff]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Settings */}
        <div className="mt-8">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.5px] text-[#0d1e1e]">
            System
          </p>

          <Link
            href="/dashboard/settings"
            className={`group flex h-[46px] items-center gap-3 rounded-[10px] px-3 text-[14px] font-medium transition-all duration-200 ${
              pathname.startsWith("/dashboard/settings")
                ? "bg-[#439897] text-[#ffffff]"
                : "text-[#0d1e1e] hover:bg-[#439897]/10 hover:text-[#0d1e1e]"
            }`}
          >
            <Settings
              size={18}
              strokeWidth={1.8}
              className={
                pathname.startsWith("/dashboard/settings")
                  ? "text-[#ffffff]"
                  : "text-[#0d1e1e]"
              }
            />

            <span>Settings</span>
          </Link>
        </div>
      </div>

      {/* Bottom User Area */}
      <div className="border-t border-[#439897] p-4">
        <div className="mb-3 flex items-center gap-3 rounded-[10px] bg-[#439897]/10 p-3">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#439897] text-[13px] font-semibold text-white">
            A
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-[#0d1e1e]">
              Admin
            </p>

            <p className="truncate text-[11px] text-[#0d1e1e]">
              Administrator
            </p>
          </div>

          <ChevronLeft
            size={16}
            className="rotate-180 text-[#0d1e1e]"
          />
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="flex h-[42px] w-full items-center gap-3 rounded-[9px] px-3 text-[13px] font-medium text-[#0d1e1e] transition-colors hover:bg-[#439897]/10 hover:text-[#0d1e1e]"
        >
          <LogOut size={17} strokeWidth={1.8} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}