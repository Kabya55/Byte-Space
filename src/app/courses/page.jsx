"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import CourseCard from "@/component/CourseCard";
import { coursesData } from "@/data/coursesData";

export default function CoursesSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All"); // All | Beginner | Intermediate | Advanced
  const [courseType, setCourseType] = useState("Courses"); // Courses | Premium | All | Free
  const [sortBy, setSortBy] = useState("relevant"); // relevant | rating | price-asc | price-desc | popular
  const [priceFilter, setPriceFilter] = useState("all"); // all | under25 | 25to35 | above35
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown open states
  const [isCourseTypeOpen, setIsCourseTypeOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const courseTypeRef = useRef(null);
  const controlsRef = useRef(null);
  const gridTopRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (courseTypeRef.current && !courseTypeRef.current.contains(event.target)) {
        setIsCourseTypeOpen(false);
      }
      if (controlsRef.current && !controlsRef.current.contains(event.target)) {
        setIsFilterOpen(false);
        setIsLevelOpen(false);
        setIsCategoryOpen(false);
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update browser tab title
  useEffect(() => {
    document.title = "Courses | ByteSpace";
  }, []);


  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
  ];

  // Reset page when filters change
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleLevelChange = (lvl) => {
    setSelectedLevel(lvl);
    setIsLevelOpen(false);
    setCurrentPage(1);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setIsSortOpen(false);
  };

  const resetAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Featured");
    setSelectedLevel("All");
    setCourseType("Courses");
    setSortBy("relevant");
    setPriceFilter("all");
    setCurrentPage(1);
    setIsFilterOpen(false);
  };

  // Filter and Sort Courses
  const filteredAndSortedCourses = useMemo(() => {
    let result = coursesData.filter((course) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.creator.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q);

      // Category
      let matchesCategory = true;
      if (courseType === "All Items" && selectedCategory === "Featured") {
        matchesCategory = true;
      } else if (selectedCategory === "Featured") {
        matchesCategory = course.featured || course.rating >= 4.7;
      } else {
        matchesCategory =
          course.category.toLowerCase() === selectedCategory.toLowerCase();
      }

      // Level
      const matchesLevel =
        selectedLevel === "All" ||
        course.level.toLowerCase() === selectedLevel.toLowerCase();

      // Price filter
      let matchesPrice = true;
      if (priceFilter === "under25") matchesPrice = course.price < 25;
      else if (priceFilter === "25to35") matchesPrice = course.price >= 25 && course.price <= 35;
      else if (priceFilter === "above35") matchesPrice = course.price > 35;

      // Course Type filter
      let matchesCourseType = true;
      if (courseType === "Premium") {
        matchesCourseType = course.price >= 30;
      } else if (courseType === "Top Rated") {
        matchesCourseType = course.rating >= 4.8;
      }

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesCourseType;
    });

    // Sorting
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "popular") {
      result.sort((a, b) => b.studentsCount - a.studentsCount);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy, priceFilter, courseType]);


  // Pagination Logic (6 items per page)
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredAndSortedCourses.length / itemsPerPage));

  // Current page items
  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedCourses.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedCourses, currentPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (gridTopRef.current) {
        gridTopRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Active filter count
  const activeFiltersCount =
    (selectedLevel !== "All" ? 1 : 0) +
    (priceFilter !== "all" ? 1 : 0) +
    (selectedCategory !== "Featured" ? 1 : 0);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen font-sans pb-20">
      {/* 1. Top Blue Header Banner */}
      <section className="relative z-30 w-full bg-[#0044FF] py-14 sm:py-16 md:py-20 px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        {/* Grid pattern overlay (overflow-hidden only for grid background) */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />


        <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
            Find Your Next Course
          </h1>

          {/* Search Row: Separated Input and Courses Button */}
          <div className="w-full max-w-2xl flex items-center justify-center gap-3 sm:gap-4">
            {/* 1. Standalone White Search Input Box */}
            <div className="flex-1 flex items-center bg-white rounded-full px-5 sm:px-6 h-13 sm:h-14 shadow-2xl">
              <svg
                className="w-5 h-5 text-gray-400 mr-3 shrink-0"
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
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-sm sm:text-base outline-none font-normal"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-gray-600 text-xs px-2 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* 2. Standalone Lime Courses Dropdown Pill Button */}
            <div ref={courseTypeRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsCourseTypeOpen((prev) => !prev)}
                className="bg-[#D4FF00] hover:bg-[#c2ea00] active:scale-95 text-black font-semibold text-sm sm:text-base px-7 sm:px-8 h-13 sm:h-14 rounded-full flex items-center gap-2 transition-all shadow-2xl cursor-pointer"
              >
                <span>{courseType}</span>
                <svg
                  className={`w-4 h-4 text-black transition-transform duration-200 ${
                    isCourseTypeOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Course Type Dropdown Menu (Matches Button Color #D4FF00) */}
              {isCourseTypeOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#D4FF00] rounded-2xl shadow-2xl border border-black/10 p-1.5 z-50 text-left text-xs sm:text-sm font-bold text-black animate-in fade-in zoom-in-95">
                  {["Courses", "All Items", "Premium", "Top Rated"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setCourseType(type);
                        setIsCourseTypeOpen(false);
                        setCurrentPage(1);
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl transition-colors flex items-center justify-between cursor-pointer ${
                        courseType === type
                          ? "bg-black text-[#D4FF00] font-black"
                          : "text-black hover:bg-black/10"
                      }`}
                    >
                      <span>{type}</span>
                      {courseType === type && <span className="text-[#D4FF00]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Controls & Filter Bar */}
      <section ref={controlsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        {/* Top Control Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
          {/* Left Pill Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap relative">
            
            {/* 1. Filter Button & Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsFilterOpen((prev) => !prev);
                  setIsLevelOpen(false);
                  setIsCategoryOpen(false);
                  setIsSortOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer ${
                  isFilterOpen || activeFiltersCount > 0
                    ? "bg-[#0B1221] text-white border-[#0B1221]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span>Filter</span>
                {activeFiltersCount > 0 && (
                  <span className="bg-[#D4FF00] text-black text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center ml-0.5">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Filter Dropdown Modal */}
              {isFilterOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-in fade-in zoom-in-95">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <span className="text-xs font-bold text-gray-800">Advanced Filters</span>
                    <button
                      type="button"
                      onClick={resetAllFilters}
                      className="text-[11px] text-[#0044FF] font-semibold hover:underline"
                    >
                      Reset all
                    </button>
                  </div>

                  {/* Price Filter */}
                  <div className="py-3 border-b border-gray-100">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">Price</span>
                    <div className="space-y-1.5 text-xs text-gray-700">
                      {[
                        { label: "All Prices", val: "all" },
                        { label: "Under $25", val: "under25" },
                        { label: "$25 - $35", val: "25to35" },
                        { label: "Above $35", val: "above35" },
                      ].map((p) => (
                        <label key={p.val} className="flex items-center gap-2 cursor-pointer hover:text-black">
                          <input
                            type="radio"
                            name="priceFilter"
                            checked={priceFilter === p.val}
                            onChange={() => {
                              setPriceFilter(p.val);
                              setCurrentPage(1);
                            }}
                            className="text-[#0044FF] focus:ring-0"
                          />
                          <span>{p.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full mt-3 bg-[#D4FF00] hover:bg-[#c2ea00] text-black text-xs font-bold py-2 rounded-full cursor-pointer"
                  >
                    Apply Filters
                  </button>
                </div>
              )}
            </div>

            {/* 2. Level Button & Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsLevelOpen((prev) => !prev);
                  setIsFilterOpen(false);
                  setIsCategoryOpen(false);
                  setIsSortOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer ${
                  selectedLevel !== "All"
                    ? "bg-[#0B1221] text-white border-[#0B1221]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <span>{selectedLevel === "All" ? "Level" : selectedLevel}</span>
              </button>

              {/* Level Dropdown Menu */}
              {isLevelOpen && (
                <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 text-xs font-semibold text-gray-800 animate-in fade-in zoom-in-95">
                  {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => handleLevelChange(lvl)}
                      className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center justify-between cursor-pointer ${
                        selectedLevel === lvl ? "text-[#0044FF] font-bold bg-blue-50/50" : ""
                      }`}
                    >
                      <span>{lvl === "All" ? "All Levels" : lvl}</span>
                      {selectedLevel === lvl && <span>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Category Button & Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsCategoryOpen((prev) => !prev);
                  setIsFilterOpen(false);
                  setIsLevelOpen(false);
                  setIsSortOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer ${
                  selectedCategory !== "Featured"
                    ? "bg-[#0B1221] text-white border-[#0B1221]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <span>Category</span>
              </button>

              {/* Category Dropdown Menu */}
              {isCategoryOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 text-xs font-semibold text-gray-800 max-h-64 overflow-y-auto animate-in fade-in zoom-in-95">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        handleCategoryChange(cat);
                        setIsCategoryOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center justify-between cursor-pointer ${
                        selectedCategory === cat ? "text-[#0044FF] font-bold bg-blue-50/50" : ""
                      }`}
                    >
                      <span>{cat}</span>
                      {selectedCategory === cat && <span>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right Sort Control (Most relevant) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsSortOpen((prev) => !prev);
                setIsFilterOpen(false);
                setIsLevelOpen(false);
                setIsCategoryOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors shadow-2xs cursor-pointer"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              <span>
                {sortBy === "relevant"
                  ? "Most relevant"
                  : sortBy === "rating"
                  ? "Highest Rated"
                  : sortBy === "popular"
                  ? "Most Popular"
                  : sortBy === "price-asc"
                  ? "Price: Low to High"
                  : "Price: High to Low"}
              </span>
              <svg
                className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isSortOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Sort Dropdown Menu */}
            {isSortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 text-xs font-semibold text-gray-800 animate-in fade-in zoom-in-95">
                {[
                  { label: "Most relevant", val: "relevant" },
                  { label: "Highest Rated", val: "rating" },
                  { label: "Most Popular", val: "popular" },
                  { label: "Price: Low to High", val: "price-asc" },
                  { label: "Price: High to Low", val: "price-desc" },
                ].map((s) => (
                  <button
                    key={s.val}
                    type="button"
                    onClick={() => handleSortChange(s.val)}
                    className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center justify-between cursor-pointer ${
                      sortBy === s.val ? "text-[#0044FF] font-bold bg-blue-50/50" : ""
                    }`}
                  >
                    <span>{s.label}</span>
                    {sortBy === s.val && <span>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Pill Tags (Horizontal Row) */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-4 scrollbar-none no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#D4FF00] text-black font-bold shadow-sm"
                    : "bg-gray-100/90 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Course Grid */}
      <section ref={gridTopRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Results Counter & Active Filter Tags */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
          <span>
            Showing <strong className="text-gray-900">{filteredAndSortedCourses.length}</strong> courses
            {selectedCategory !== "Featured" && ` in ${selectedCategory}`}
          </span>
          {activeFiltersCount > 0 && (
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-[#0044FF] font-semibold hover:underline cursor-pointer"
            >
              Clear all filters
            </button>
          )}
        </div>

        {paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {paginatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-3xl border border-gray-100 shadow-xs max-w-md mx-auto p-8">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0044FF] flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">No courses found</h4>
            <p className="text-gray-500 text-xs sm:text-sm mb-6">
              Try adjusting your search keywords, category, or level filters.
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="bg-[#D4FF00] hover:bg-[#c2ea00] text-black font-bold text-xs px-6 py-2.5 rounded-full cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 4. Interactive Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16 mb-12">
            {/* Previous Button (<) */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              aria-label="Previous Page"
            >
              &lt;
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => goToPage(pageNum)}
                className={`w-9 h-9 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-[#0B1221] text-white shadow-xs font-bold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            ))}

            {/* Next Button (>) */}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              aria-label="Next Page"
            >
              &gt;
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
