"use client";

import {
  Bell,
  Search,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="fixed left-[260px] right-0 top-0 z-40 h-[82px] border-b border-[#439897] bg-white">
      <div className="flex h-full items-center justify-between px-8">
        
        {/* Left Side */}
        <div className="flex items-center gap-5">
          {/* Mobile Menu */}
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-lg text-[#0d1e1e] hover:bg-[#439897]/10"
          >
            <Menu size={20} />
          </button>

          <div>
            <p className="text-[12px] font-medium text-[#0d1e1e]">
              Content Management
            </p>

            <h2 className="mt-[2px] text-[18px] font-semibold text-[#0d1e1e]">
              Dashboard
            </h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          
          {/* Search */}
          <div className="relative hidden lg:block">
            <Search
              size={17}
              strokeWidth={1.8}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0d1e1e]"
            />

            <input
              type="text"
              placeholder="Search..."
              className="h-[40px] w-[230px] rounded-[9px] border border-[#439897] bg-white pl-10 pr-4 text-[13px] text-[#0d1e1e] outline-none transition-all placeholder:text-[#0d1e1e] focus:border-[#439897] focus:bg-white"
            />
          </div>

          {/* Notification */}
          <button
            type="button"
            className="relative flex h-[40px] w-[40px] items-center justify-center rounded-[9px] text-[#0d1e1e] transition-colors hover:bg-[#439897]/10 hover:text-[#439897]"
          >
            <Bell size={19} strokeWidth={1.8} />

            {/* Notification Dot */}
            <span className="absolute right-[9px] top-[8px] h-[6px] w-[6px] rounded-full bg-[#439897]" />
          </button>

          {/* Divider */}
          <div className="h-[34px] w-px bg-[#439897]" />

          {/* Profile */}
          <button
            type="button"
            className="flex items-center gap-3 rounded-[9px] px-2 py-1.5 transition-colors hover:bg-[#439897]/10"
          >
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#439897] text-[13px] font-semibold text-white">
              A
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-[13px] font-semibold leading-tight text-[#0d1e1e]">
                Admin
              </p>

              <p className="mt-[3px] text-[11px] text-[#0d1e1e]">
                Administrator
              </p>
            </div>

            <ChevronDown
              size={16}
              strokeWidth={1.8}
              className="text-[#0d1e1e]"
            />
          </button>
        </div>
      </div>
    </header>
  );
}