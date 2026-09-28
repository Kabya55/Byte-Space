"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function JoinUsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("JoinUs / Sign-up submitted:", formData);
  };

  React.useEffect(() => {
    document.title = "Join Us | ByteSpace";
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#0044FF] overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-12 font-sans">
      {/* 1. Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* 2. Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 py-6 md:py-10">
        
        {/* ================= Left Column: Branding + Collage ================= */}
        <div className="w-full lg:w-1/2 flex flex-col items-start max-w-xl">
          {/* Logo */}
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105"
            title="Go to ByteSpace Home"
          >
            <Image
              src="/logo.png"
              alt="ByteSpace Logo"
              width={38}
              height={38}
              className="h-9 w-9 drop-shadow-md"
              priority
            />
          </Link>

          {/* Heading & Subtext */}
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight mb-3">
            Sign up and come in
          </h1>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md font-light mb-8">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost
          </p>

          {/* Collage of Floating Course Cards & 3D Elements */}
          <div className="relative w-full max-w-[480px] h-[400px] sm:h-[450px] mt-2 select-none">
            {/* Background Course Card ("Build Digital Asset") */}
            <div className="absolute top-10 left-0 sm:-left-2 w-[270px] sm:w-[310px] z-10 opacity-90 transition-transform duration-500 hover:-translate-y-1">
              <Image
                src="/login-icon/Course_Card_1.png"
                alt="Build Digital Asset Course Card"
                width={310}
                height={320}
                className="w-full h-auto drop-shadow-xl"
                priority
              />
            </div>

            {/* Front Course Card ("the Power of Big Data") */}
            <div className="absolute top-0 right-4 sm:right-6 w-[290px] sm:w-[335px] z-20 transition-transform duration-500 hover:-translate-y-1">
              <Image
                src="/login-icon/Course_Card_1-1.png"
                alt="The Power of Big Data Course Card"
                width={335}
                height={345}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* 3D Torus / Donut (Cone.png) */}
            <div className="absolute top-8 left-8 sm:left-12 z-30 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none transition-transform duration-700 hover:rotate-12">
              <Image
                src="/login-icon/Cone.png"
                alt="3D Torus"
                width={80}
                height={80}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            {/* 3D Cone / Pyramid (Cone-1.png) */}
            <div className="absolute bottom-4 left-0 sm:-left-4 z-30 w-24 h-24 sm:w-28 sm:h-28 pointer-events-none transition-transform duration-700 hover:-rotate-6">
              <Image
                src="/login-icon/Cone-1.png"
                alt="3D Cone"
                width={110}
                height={110}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            {/* Happy Students Lime Card (Auto Layout Vertical.png) */}
            <div className="absolute bottom-8 right-10 sm:right-14 z-30 w-[200px] sm:w-[235px] transition-transform duration-300 hover:scale-105">
              <Image
                src="/login-icon/Auto Layout Vertical.png"
                alt="Happy Students"
                width={235}
                height={120}
                className="w-full h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>

            {/* 3D White Spring / Squiggle (Frame.png) */}
            <div className="absolute bottom-12 right-0 sm:-right-2 z-40 w-16 h-24 sm:w-20 sm:h-28 pointer-events-none">
              <Image
                src="/login-icon/Frame.png"
                alt="3D Spring"
                width={80}
                height={110}
                className="w-full h-full object-contain drop-shadow-md animate-pulse"
              />
            </div>
          </div>
        </div>

        {/* ================= Right Column: Form Container ================= */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] sm:max-w-[490px] bg-white rounded-[32px] sm:rounded-[38px] shadow-2xl p-7 sm:p-10 md:p-12 transition-all duration-300">
            {/* Top Subtitle */}
            <p className="text-[#0044FF] text-sm font-semibold tracking-normal mb-1">
              Create an Account
            </p>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1221] tracking-tight mb-8">
              Welcome to ByteSpace
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jamie Davis"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm sm:text-base focus:outline-none focus:border-[#0044FF] focus:ring-2 focus:ring-[#0044FF]/20 transition-all"
                />
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="designer@example.com"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm sm:text-base focus:outline-none focus:border-[#0044FF] focus:ring-2 focus:ring-[#0044FF]/20 transition-all"
                />
              </div>

              {/* Password field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="********"
                    className="w-full px-4 py-3 sm:py-3.5 pr-11 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm sm:text-base focus:outline-none focus:border-[#0044FF] focus:ring-2 focus:ring-[#0044FF]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Continue Button (Right-aligned as in the Figma screenshot) */}
              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="bg-[#D4FF00] hover:bg-[#c0e800] active:scale-95 text-black font-bold px-8 sm:px-10 py-3 rounded-full text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </form>

            {/* Bottom Link: Already have an account? Login -> links to /signin */}
            <div className="mt-12 sm:mt-14 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-[#0044FF] font-semibold hover:underline cursor-pointer ml-1"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
