"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

import cohereLogo from "@/assets/images/logos/cohere-logo.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen bg-white">
      {/* Left Side */}
      <div className="relative hidden w-1/2 overflow-hidden bg-[#439897] lg:flex">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="relative z-10 flex w-full flex-col justify-between p-14 xl:p-20">
          <Image
            src={cohereLogo}
            alt="Cohere Consultants"
            width={170}
            height={70}
            className="h-auto w-[150px] brightness-0 invert"
            priority
          />

          <div className="max-w-[500px]">
            <p className="mb-4 font-avenir text-[14px] font-medium uppercase tracking-[3px] text-white/70">
              Content Management
            </p>

            <h1 className="font-avenir text-[42px] font-extrabold leading-[1.12] text-white xl:text-[52px]">
              Welcome to your
              <br />
              dashboard.
            </h1>

            <p className="mt-6 max-w-[440px] font-nunito-sans text-[16px] leading-7 text-white/80">
              Manage your website content, testimonials, services,
              team and more from one place.
            </p>
          </div>

          <p className="font-nunito-sans text-[12px] text-white/60">
            © {new Date().getFullYear()} Cohere Consultants
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="w-full max-w-[430px]">
          {/* Mobile Logo */}
          <div className="mb-10 flex justify-center lg:hidden">
            <Image
              src={cohereLogo}
              alt="Cohere Consultants"
              width={160}
              height={70}
              className="h-auto w-[145px]"
              priority
            />
          </div>

          <div className="mb-9">
            <p className="mb-2 font-avenir text-[12px] font-semibold uppercase tracking-[2px] text-[#439897]">
              Admin Portal
            </p>

            <h2 className="font-avenir text-[32px] font-extrabold leading-tight text-[#0d1e1e]">
              Sign in
            </h2>

            <p className="mt-3 font-nunito-sans text-[14px] leading-6 text-[#0d1e1e]/60">
              Enter your credentials to access the dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-avenir text-[13px] font-semibold text-[#0d1e1e]"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0d1e1e]/50"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="h-[50px] w-full rounded-[9px] border border-[#439897]/40 bg-white pl-11 pr-4 font-nunito-sans text-[14px] text-[#0d1e1e] outline-none transition focus:border-[#439897] focus:ring-2 focus:ring-[#439897]/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block font-avenir text-[13px] font-semibold text-[#0d1e1e]"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={17}
                  strokeWidth={1.8}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0d1e1e]/50"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="h-[50px] w-full rounded-[9px] border border-[#439897]/40 bg-white pl-11 pr-12 font-nunito-sans text-[14px] text-[#0d1e1e] outline-none transition focus:border-[#439897] focus:ring-2 focus:ring-[#439897]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0d1e1e]/50 transition hover:text-[#439897]"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3">
                <p className="font-nunito-sans text-[13px] text-red-600">
                  {error}
                </p>
              </div>
            )}

            {/* Login */}
            <button
              type="submit"
              disabled={loading}
              className="flex h-[50px] w-full items-center justify-center rounded-[9px] bg-[#439897] font-avenir text-[14px] font-bold text-white transition hover:bg-[#367f7e] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-8 text-center font-nunito-sans text-[12px] text-[#0d1e1e]/45">
            Authorized users only
          </p>
        </div>
      </div>
    </main>
  );
}