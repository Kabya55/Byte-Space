"use client"; // Next.js App Router-এর জন্য এটি যুক্ত করতে হবে

import React from "react";
import { Input, Button, Link } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/signin" || pathname === "/joinUs") {
    return null;
  }

  return (
    <footer className="bg-white px-4 py-12 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column - Newsletter Area */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                {/* ByteSpace Logo Icon */}
                <Image
                  src="/logo.png"
                  alt="ByteSpace Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="font-bold text-2xl text-black tracking-wide">
                  ByteSpace
                </span>
              </div>
            </Link>

            <p className="text-gray-600 text-sm mb-6 pr-4">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                variant="bordered"
                radius="full"
                // classNames প্রোপটি সরিয়ে দেওয়া হয়েছে এরর এড়ানোর জন্য
                className="w-full sm:max-w-[280px]"
              />
              <Button
                radius="full"
                className="bg-[#D4FF00] text-black font-semibold px-8 w-full sm:w-auto shadow-sm"
              >
                Search
              </Button>
            </form>

            <p className="text-gray-500 text-[11px] leading-relaxed pr-4">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Columns - Link Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 pt-2">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 text-sm">
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Featured Courses
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Featured Categories
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Business
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                IT
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Design
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 text-sm">
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Development
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Marketing
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Photography
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Finance
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 text-sm">
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Become a Creator
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Affiliate Program
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Help
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
          <p>@ 2023 Kabya. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-black text-[11px]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-black text-[11px]"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-black text-[11px]"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
