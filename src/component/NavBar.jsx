"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ByteSpaceNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide Navbar completely on authentication pages
  if (pathname === "/signin" || pathname === "/joinUs") {
    return null;
  }

  // Navigation items definition
  const navLinks = [
    { name: "Home", href: "/", exact: true },
    { name: "Courses", href: "/courses", exact: false },
    { name: "Creators", href: "/creators", exact: false },
  ];

  // Helper function to check if link is active
  const isLinkActive = (item) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href) || (item.href === "/courses" && pathname.startsWith("/search"));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0044FF]/95 backdrop-blur-md text-white border-b border-white/10 transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* 1. Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95 shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:rotate-6">
              <Image
                src="/logo.png"
                alt="ByteSpace Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-[#D4FF00] transition-colors">
              ByteSpace
            </span>
          </Link>

          {/* 2. Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-black/15 p-1 rounded-full border border-white/10 backdrop-blur-sm">
            {navLinks.map((item) => {
              const active = isLinkActive(item);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-white text-[#0044FF] shadow-md scale-100"
                      : "text-white/85 hover:text-white hover:bg-white/15 hover:scale-102"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right: Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/signin"
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                pathname === "/signin"
                  ? "bg-white text-[#0044FF] shadow-sm"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Sign In
            </Link>

            <Link
              href="/joinUs"
              className="bg-[#D4FF00] hover:bg-[#c2ea00] active:scale-95 text-black font-bold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Join Us
            </Link>

            {/* Shopping Cart Button */}
            <button
              type="button"
              className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBagIcon className="w-5 h-5 text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#D4FF00] rounded-full ring-2 ring-[#0044FF]" />
            </button>
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              className="p-2 rounded-full text-white/90 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBagIcon className="w-5 h-5 text-white" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0038D6] px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((item) => {
              const active = isLinkActive(item);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? "bg-white text-[#0044FF] shadow-sm font-bold"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="h-px bg-white/15 my-2" />

            <div className="flex items-center gap-3 pt-1">
              <Link
                href="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/joinUs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold bg-[#D4FF00] text-black hover:bg-[#c2ea00] transition-colors shadow-md"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
