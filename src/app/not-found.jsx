"use client";

import React from "react";
import { Button } from "@heroui/react";

export default function NotFoundPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#0044FF] overflow-hidden p-6 font-sans">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px", // গ্রিড বক্সের সাইজ
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 404 Gradient Text */}
        <h1 className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#D4FF00] via-[#D4FF00]/70 to-transparent">
          404
        </h1>

        {/* Heading (Overlapping the 404 slightly like in the image) */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 -mt-12 md:-mt-24 leading-tight">
          The page you are looking <br className="hidden md:block" />
          for doesn&apos;t exist
        </h2>

        {/* Subtext */}
        <p className="text-white/80 text-xs md:text-sm mb-8 font-light max-w-md">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Back to Home Button */}
        <Button
          radius="full"
          className="bg-[#D4FF00] text-black font-semibold px-8 py-2 md:py-6 text-sm md:text-base hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
