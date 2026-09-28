"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { coursesData } from "@/data/coursesData";

const Banner = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef(null);

  // Filter suggestions as user types
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return coursesData
      .filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.creator.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      )
      .slice(0, 5);
  }, [query]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setIsOpen(false);
    if (query.trim()) {
      router.push(`/courses?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center pt-20 min-h-screen bg-[#0044FF] overflow-hidden p-6 font-sans">
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

        {/* 2. 3D Ornaments Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/3d ornament.png"
            alt="3D Ornaments"
            fill
            className="object-cover md:object-contain opacity-90"
            priority
          />
        </div>

        {/* 3. Main Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-10">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Get Access to Hundreds <br /> Courses Available
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-sm md:text-base mb-10 max-w-2xl font-light">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search Bar (SEPARATED INPUT & BUTTON WITH FULL FUNCTIONALITY) */}
          <div
            ref={searchContainerRef}
            className="relative w-full max-w-2xl z-30"
          >
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
            >
              {/* Input Field (White Box) */}
              <div className="flex flex-1 items-center w-full bg-white rounded-full px-5 sm:px-6 h-14 shadow-2xl transition-all focus-within:ring-2 focus-within:ring-[#D4FF00]">
                <div className="pr-3 text-gray-400">
                  {/* Search Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => {
                    if (query.trim()) setIsOpen(true);
                  }}
                  placeholder="Course, topic, creator"
                  className="flex-1 bg-transparent outline-none text-black text-sm md:text-base font-medium placeholder-gray-400"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setIsOpen(false);
                    }}
                    className="text-gray-400 hover:text-gray-600 text-xs px-2 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Standalone Search Button */}
              <button
                type="submit"
                className="bg-[#D4FF00] text-black font-bold px-10 h-14 w-full md:w-auto rounded-full shadow-2xl hover:bg-[#c2ea00] active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center text-sm md:text-base"
              >
                Search
              </button>
            </form>

            {/* Live Search Suggestions Dropdown */}
            {isOpen && query.trim() && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 text-left animate-in fade-in zoom-in-95">
                {suggestions.length > 0 ? (
                  <div className="p-2">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Matching Courses ({suggestions.length})
                    </div>
                    {suggestions.map((course) => (
                      <Link
                        key={course.id}
                        href={`/courses/${course.id}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                      >
                        <div className="relative w-12 h-10 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#0044FF] transition-colors truncate">
                            {course.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{course.category}</span>
                            <span>•</span>
                            <span>by {course.creator}</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-sm font-extrabold text-[#0044FF]">
                            ${course.price}
                          </span>
                        </div>
                      </Link>
                    ))}

                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <button
                        type="button"
                        onClick={handleSearch}
                        className="w-full text-center py-2 text-xs font-bold text-[#0044FF] hover:bg-blue-50/60 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>See all results for &ldquo;{query}&rdquo;</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-sm text-gray-500">
                      No courses found matching &ldquo;{query}&rdquo;
                    </p>
                    <button
                      type="button"
                      onClick={handleSearch}
                      className="mt-2 text-xs font-bold text-[#0044FF] hover:underline cursor-pointer"
                    >
                      Search all courses catalog →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 4. Hero Image & Floating Cards Section */}
          <div className="relative mt-20 w-full max-w-4xl h-[450px] md:h-[550px] flex justify-center items-end">
            {/* Giant Lime Green Circle Background */}
            <div className="absolute top-46 w-[600px] h-[600px] md:w-[1149px] md:h-[1149px] bg-[#D4FF00] rounded-full translate-y-12 -z-10"></div>

            {/* Man Image */}
            <Image
              src="/man.png"
              alt="Student with laptop"
              width={550}
              height={650}
              className="object-contain top-3 z-10 drop-shadow-2xl relative translate-y-4"
            />

            {/* Floating Card 1: UI/UX Design (Left Top) */}
            <div className="absolute left-0 md:left-30 bottom-40 md:bottom-50 bg-white text-black p-4 rounded-2xl shadow-xl flex flex-col gap-2 z-20 min-w-max">
              <span className="font-extrabold text-[15px] text-left">
                UI/UX Design
              </span>
              <span className="text-[11px] text-gray-500 font-medium">
                200 Courses • 1000+ Students
              </span>
            </div>

            {/* Floating Card 2: Happy Students (Left Bottom) */}
            <div className="absolute left-0 md:left-30 bottom-12 md:bottom-3 bg-white text-black p-4 rounded-2xl shadow-xl flex flex-col gap-2 z-20 min-w-max">
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-[15px]">
                  Happy Students
                </span>
                <span className="text-[11px] text-gray-500 font-medium">
                  4.5 (240) <span className="text-[#D4FF00] text-sm">★</span>
                </span>
              </div>
              {/* Avatars */}
              <div className="flex -space-x-2 mt-1">
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src="https://i.pravatar.cc/100?img=11"
                  alt="avatar"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src="https://i.pravatar.cc/100?img=12"
                  alt="avatar"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src="https://i.pravatar.cc/100?img=13"
                  alt="avatar"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src="https://i.pravatar.cc/100?img=14"
                  alt="avatar"
                />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#D4FF00] text-black text-[10px] font-bold flex items-center justify-center z-10">
                  2K+
                </div>
              </div>
            </div>

            {/* Floating Card 3: Learning Progress (Right Middle) */}
            <div className="absolute right-0 md:right-45 bottom-45 z-20 flex flex-col items-center">
              <div className="bg-white text-black p-5 rounded-3xl shadow-xl border-[1.5px] flex flex-col w-[210px]">
                <span className="text-[12px] text-gray-800 font-bold text-left mb-1">
                  Learning Progress
                </span>
                <div className="text-4xl font-extrabold my-1 text-left tracking-tight">
                  55%
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-[#D4FF00] h-full w-[55%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F5F5F5] py-10 md:py-16 px-4 md:px-8 flex justify-center items-center">
        {/* Image Container */}
        <div className="w-full max-w-5xl flex justify-center">
          <Image
            src="/Logo_Partner.png"
            alt="Partner Logos"
            width={1000}
            height={100}
            className="w-full h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
