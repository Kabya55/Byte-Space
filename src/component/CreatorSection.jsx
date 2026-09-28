"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

const CreatorSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-8 md:py-12 bg-[#0044FF] overflow-hidden px-6 font-sans">
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
      ></div>

      {/* 2. 3D Ornaments Background (Group 6.png) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/Group 6.png"
          alt="3D Floating Ornaments"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          Unlock Your Potential as a <br className="hidden md:block" />
          Creator with ByteSpace
        </h2>

        {/* Paragraph text */}
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-10 max-w-3xl font-light">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* CTA Button */}
        <Button
          radius="full"
          className="bg-[#D4FF00] text-black font-semibold px-8 py-6 text-sm md:text-base shadow-xl hover:opacity-90 transition-opacity"
        >
          Join as Creator
        </Button>
      </div>
    </div>
  );
};

export default CreatorSection;
