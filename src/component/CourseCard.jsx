"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="group bg-white rounded-[26px] p-3.5 border border-gray-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Top Image Container */}
      <Link href={`/courses/${course.id}`} className="block relative w-full h-[180px] sm:h-[195px] rounded-[20px] overflow-hidden bg-gray-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay Glass Pills */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
          <span className="bg-black/45 backdrop-blur-md text-white/95 text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
            {course.lessons || "17 Lessons"}
          </span>
          <span className="bg-black/45 backdrop-blur-md text-white/95 text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
            {course.duration || "2 hours 16 mins"}
          </span>
          <span className="bg-black/45 backdrop-blur-md text-white/95 text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
            {course.comments || "59 Comments"}
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="pt-4 px-1 pb-2 flex flex-col gap-2">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2">
          <Link href={`/courses/${course.id}`}>
            <h3 className="text-[15px] sm:text-[16px] font-extrabold text-[#0B1221] tracking-tight leading-snug group-hover:text-[#0044FF] transition-colors line-clamp-1">
              {course.shortTitle || course.title}
            </h3>
          </Link>
          <div className="flex items-center gap-1 text-[13px] font-bold text-gray-700 shrink-0">
            <span>{course.rating.toFixed(1)}</span>
            <span className="text-[#D4FF00] drop-shadow-sm text-base leading-none">★</span>
          </div>
        </div>

        {/* Creator Name */}
        <p className="text-[12px] text-gray-500">
          by{" "}
          <Link
            href={`/creators`}
            className="text-[#0044FF] font-medium hover:underline"
          >
            {course.creator}
          </Link>
        </p>

        {/* Level and Avatars */}
        <div className="flex items-center justify-between pt-1">
          {/* Level Pill */}
          <div className="flex items-center gap-1.5 bg-gray-100/80 px-3 py-1 rounded-full text-[11px] font-medium text-gray-600">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <span>{course.level}</span>
          </div>

          {/* Avatar stack */}
          <div className="flex -space-x-1.5 items-center">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80"
              alt="avatar"
              className="w-5 h-5 rounded-full border border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80"
              alt="avatar"
              className="w-5 h-5 rounded-full border border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80"
              alt="avatar"
              className="w-5 h-5 rounded-full border border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80"
              alt="avatar"
              className="w-5 h-5 rounded-full border border-white object-cover"
            />
            <div className="w-5 h-5 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center border border-white">
              26+
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="pt-2 flex items-baseline gap-1">
          <span className="text-[17px] font-extrabold text-[#0044FF]">
            ${course.price}
          </span>
          <span className="text-[11px] text-gray-400 font-medium">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}
