"use client";

import { Link, Button } from "@heroui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ByteSpaceNavbar() {
  const pathname = usePathname();

  if (pathname === "/signin" || pathname === "/joinUs") {
    return null;
  }

  return (
    <header className="w-full bg-[#0044FF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo Area */}
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
              <span className="font-bold text-2xl tracking-wide text-white">
                ByteSpace
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white font-medium text-sm">
              Home
            </Link>
            <Link
              href="/courses"
              className="text-white/80 hover:text-white font-medium text-sm transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/creators"
              className="text-white/80 hover:text-white font-medium text-sm transition-colors"
            >
              Creators
            </Link>
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/signin"
              className="text-white hover:text-gray-200 font-medium text-sm transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/joinUs"
              className="text-white hover:text-gray-200 font-medium text-sm transition-colors"
            >
              Join Us
            </Link>
            <Button
              isIconOnly
              variant="light"
              className="text-white hover:bg-white/10"
              aria-label="Shopping Cart"
            >
              <ShoppingBagIcon className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
