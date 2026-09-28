"use client";

import React, { useState } from "react";
import Image from "next/image";
import CourseCard from "@/component/CourseCard";
import { creatorData, coursesData } from "@/data/coursesData";

export default function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(creatorData.followersCount);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setFollowers((prev) => prev - 1);
      setIsFollowing(false);
    } else {
      setFollowers((prev) => prev + 1);
      setIsFollowing(true);
    }
  };

  React.useEffect(() => {
    document.title = `${creatorData.name || "Creator Profile"} | ByteSpace`;
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen font-sans pb-16">
      {/* ================= 1. Top Blue Header: Creator Profile ================= */}
      <section className="relative w-full bg-[#0044FF] py-14 md:py-18 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6">
          {/* Top Row: Avatar + Name + Creator Badge */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            {/* Avatar Box with Pink/Peach Background */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#FFD1DC] p-1.5 shadow-lg shrink-0 border-2 border-white/20">
              <Image
                src={creatorData.avatar}
                alt={creatorData.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Name, Tagline & Creator Badge */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  {creatorData.name}
                </h1>
                <span className="bg-[#D4FF00] text-black text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {creatorData.type}
                </span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">
                {creatorData.role}
              </p>
            </div>
          </div>

          {/* Bio text */}
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-4xl font-light">
            {creatorData.bio}
          </p>

          {/* Stats & Follow Button Row */}
          <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
            {/* Stats pills */}
            <div className="flex items-center gap-3">
              <span className="bg-white text-gray-900 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-xs">
                <strong className="font-extrabold mr-1">{creatorData.productsCount}</strong> Products
              </span>
              <span className="bg-white text-gray-900 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-xs">
                <strong className="font-extrabold mr-1">{followers}</strong> Followers
              </span>
            </div>

            {/* Follow Button */}
            <button
              type="button"
              onClick={handleFollowToggle}
              className={`px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer ${
                isFollowing
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-[#D4FF00] hover:bg-[#c0e800] text-black"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>

      {/* ================= 2. Controls & Filter Bar ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
          {/* Left Pill Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filter</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span>Level</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <span>Category</span>
            </button>
          </div>

          {/* Right Sort Control */}
          <div className="flex items-center">
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              <span>Most relevant</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= 3. Creator's Course Grid ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
