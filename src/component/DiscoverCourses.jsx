"use client";

import React, { useState, useMemo } from "react";
import CourseCard from "@/component/CourseCard";
import { coursesData } from "@/data/coursesData";
import Link from "next/link";

export default function DiscoverCourses() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  // Categories organized according to the user's design screenshot
  const row1Categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ];

  const row2Categories = [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ];

  const row3Categories = [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ];

  const extraCategories = [
    "Artificial Intelligence",
    "Business & Finance",
    "Content Writing",
    "3D Animation",
    "Mobile Development",
  ];

  // Filter courses based on active category
  const displayedCourses = useMemo(() => {
    if (activeCategory === "Featured") {
      // In featured, prioritize the 6 original showcase courses in exact order
      const featuredIds = [
        "learn-figma-from-basic",
        "build-digital-asset",
        "the-power-of-big-data",
        "balancing-productivity-and-life",
        "mastering-money-management",
        "from-idea-to-startup-success",
      ];

      const orderedFeatured = featuredIds
        .map((id) => coursesData.find((c) => c.id === id))
        .filter(Boolean);

      if (orderedFeatured.length >= 6) {
        return orderedFeatured.slice(0, 6);
      }

      const others = coursesData.filter(
        (c) => c.featured && !featuredIds.includes(c.id)
      );
      return [...orderedFeatured, ...others].slice(0, 6);
    }

    // Filter by specific category
    const catLower = activeCategory.toLowerCase();
    const matched = coursesData.filter((c) => {
      const courseCat = (c.category || "").toLowerCase();
      return (
        courseCat === catLower ||
        courseCat.includes(catLower) ||
        catLower.includes(courseCat)
      );
    });

    if (matched.length > 0) {
      return matched.slice(0, 6);
    }

    // Fallback if empty category
    return coursesData.slice(0, 6);
  }, [activeCategory]);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-[#0B1221] tracking-tight leading-[1.18]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto font-normal">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 2. Category Filter Pills */}
        <div className="w-full max-w-5xl mt-8 sm:mt-10 flex flex-col items-center gap-2.5 sm:gap-3">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {row1Categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#D4FF00] text-black shadow-sm scale-105"
                      : "bg-[#F3F4F6] text-gray-700 hover:bg-gray-200/90 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {row2Categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#D4FF00] text-black shadow-sm scale-105"
                      : "bg-[#F3F4F6] text-gray-700 hover:bg-gray-200/90 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {row3Categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#D4FF00] text-black shadow-sm scale-105"
                      : "bg-[#F3F4F6] text-gray-700 hover:bg-gray-200/90 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              );
            })}

            {/* + More Toggle Button */}
            <button
              type="button"
              onClick={() => setShowMoreCategories((prev) => !prev)}
              className="text-[#0044FF] hover:text-blue-700 font-bold text-xs sm:text-[13px] px-3 py-2 cursor-pointer transition-colors"
            >
              {showMoreCategories ? "- Less" : "+ More"}
            </button>
          </div>

          {/* Expandable Extra Categories */}
          {showMoreCategories && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2 animate-in fade-in zoom-in-95 duration-200">
              {extraCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#D4FF00] text-black shadow-sm"
                        : "bg-[#EEF2FF] text-[#0044FF] hover:bg-blue-100"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
              <Link
                href="/courses"
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-bold bg-[#0044FF] text-white hover:bg-blue-700 transition-colors"
              >
                View All Categories →
              </Link>
            </div>
          )}
        </div>

        {/* 3. Courses Grid (6 Cards Matching Design) */}
        <div className="w-full max-w-6xl mt-12 sm:mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {displayedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Bottom Explore More CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0044FF] hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>Explore All Courses</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
