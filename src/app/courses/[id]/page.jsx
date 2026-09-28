"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { coursesData, creatorData, modulesData, reviewsData } from "@/data/coursesData";

export default function CourseDetailsPage() {
  const params = useParams();
  const courseId = params?.id || "build-digital-asset";
  
  // Find current course or fallback
  const course =
    coursesData.find((c) => c.id === courseId) || coursesData[1];

  const [activeTab, setActiveTab] = useState("about"); // 'about' | 'lessons' | 'reviews'
  const [selectedReviewFilter, setSelectedReviewFilter] = useState("all");

  React.useEffect(() => {
    if (course?.title) {
      document.title = `${course.shortTitle || course.title} | ByteSpace`;
    }
  }, [course]);

  return (
    <div className="relative w-full bg-[#FAFAFA] min-h-screen font-sans pb-24">
      {/* ================= 1. Blue Background Band ================= */}
      {/* Covers top area, header text, and completely wraps video player with ~40px spacing below */}
      <div className="absolute top-0 left-0 right-0 h-[640px] sm:h-[740px] lg:h-[690px] bg-[#0044FF] z-0 overflow-hidden pointer-events-none">
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ================= 2. Unified Page Container ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header: Title, Subtitle, Badges, Share (Text-white) */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-tight mb-2">
                {course.title}
              </h1>
              <p className="text-white/80 text-sm sm:text-base font-light mb-2">
                {course.subtitle || "Unlock the Power of Digital Creation with Expert Guidance"}
              </p>
              <p className="text-xs sm:text-sm text-white/90">
                by{" "}
                <Link
                  href="/creators"
                  className="text-[#D4FF00] font-semibold hover:underline"
                >
                  {course.creator}
                </Link>
              </p>
            </div>

            {/* Share Button */}
            <button
              type="button"
              className="bg-[#D4FF00] hover:bg-[#c2ea00] text-black font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center gap-2 self-start transition-all shadow-md shrink-0 cursor-pointer"
            >
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>Share</span>
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-white text-gray-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              {course.level}
            </span>

            <span className="bg-white text-gray-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
              <span className="text-yellow-500 text-sm">★</span>
              {course.rating.toFixed(1)} ({course.reviewsCount} reviews)
            </span>

            <span className="bg-white text-gray-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              {course.studentsCount} Students
            </span>
          </div>
        </div>

        {/* ================= 3. Two-Column Layout ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (8 cols): Video Player + Tabs + Tab Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Video Preview Player (Sits 100% inside Blue Band) */}
            <div className="relative w-full aspect-video sm:h-[380px] md:h-[440px] rounded-3xl overflow-hidden bg-gray-900 shadow-2xl border-4 border-white/20 group">
              <Image
                src={course.videoPreview || course.image}
                alt="Video Preview"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0044FF] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Interactive Tab Switcher (Sits on white background) */}
            <div className="flex items-center gap-2 pt-6">
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "about"
                    ? "bg-[#D4FF00] text-black shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                About
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("lessons")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "lessons"
                    ? "bg-[#D4FF00] text-black shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Lessons
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "reviews"
                    ? "bg-[#D4FF00] text-black shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Reviews
              </button>
            </div>

            {/* TAB CONTENT: 1. About (Screenshot 2) */}
            {activeTab === "about" && (
              <div className="flex flex-col gap-10 pt-2">
                {/* Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1221] mb-4">
                    Description
                  </h3>
                  <div className="text-gray-600 text-sm sm:text-[15px] leading-relaxed space-y-4">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course: &quot;Build Digital Asset: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p>
                      As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>
                </div>

                {/* Sneak Peak (4 thumbnails) */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1221] mb-4">
                    Sneak Peak
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                    <div className="relative h-28 sm:h-32 rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                      <Image
                        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80"
                        alt="Sneak peak 1"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-28 sm:h-32 rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                      <Image
                        src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80"
                        alt="Sneak peak 2"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-28 sm:h-32 rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                      <Image
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
                        alt="Sneak peak 3"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative h-28 sm:h-32 rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                      <Image
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80"
                        alt="Sneak peak 4"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Key Points */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1221] mb-5">
                    Key Points
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      "Foundational Concepts",
                      "Design Principles Mastery",
                      "Advanced Techniques in Digital Creation",
                      "Project Showcase and Critique",
                      "Optimizing for Various Platforms",
                      "Digital Asset Management Best Practices",
                      "Monetization Strategies",
                      "Capstone Project: Building Your Portfolio",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#0044FF] flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: 2. Lessons (Screenshot 3) */}
            {activeTab === "lessons" && (
              <div className="flex flex-col gap-10 pt-2">
                {/* Explore the Modules */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1221] mb-2">
                    Explore the Modules
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>

                  {/* Modules List */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-base font-bold text-gray-900 mb-1">Lesson List</h4>
                    {modulesData.map((module) => (
                      <div
                        key={module.id}
                        className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
                      >
                        {/* Video Icon in Lime Circle */}
                        <div className="w-10 h-10 rounded-full bg-[#D4FF00] flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                          </svg>
                        </div>

                        {/* Title and Description */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h5 className="font-extrabold text-[#0B1221] text-sm sm:text-base">
                              {module.title}
                            </h5>
                            <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
                              {module.duration}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                            {module.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lesson Content & Progress Tracking */}
                <div className="space-y-6 pt-4 border-t border-gray-200">
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-2">Lesson Content</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-2">Lesson Progress Tracking</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                      Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                    </p>

                    {/* Progress Card */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm max-w-md">
                      <span className="text-xs text-gray-600 font-semibold block mb-1">
                        Learning Progress
                      </span>
                      <span className="text-3xl font-extrabold text-[#0B1221]">
                        55%
                      </span>
                      <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mt-3">
                        <div className="bg-[#D4FF00] h-full w-[55%] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: 3. Reviews (Screenshot 4) */}
            {activeTab === "reviews" && (
              <div className="flex flex-col gap-10 pt-2">
                {/* Header */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1221] mb-2">
                    What Learners Are Saying
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Discover what our learners have to say about their experience with &quot;Build Digital Asset: A Comprehensive Guide.&quot; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>

                  {/* Rating Score Breakdown Box */}
                  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs flex flex-col sm:flex-row items-center gap-8">
                    {/* Big Lime Score Box */}
                    <div className="w-28 h-28 rounded-2xl bg-[#D4FF00] flex flex-col items-center justify-center p-3 shrink-0 shadow-sm">
                      <span className="text-xs font-semibold text-gray-800">Ratings</span>
                      <span className="text-4xl font-black text-black tracking-tight">4.7</span>
                    </div>

                    {/* Star Bars Breakdown */}
                    <div className="flex-1 w-full space-y-2">
                      {[
                        { stars: 5, count: 72, pct: "75%" },
                        { stars: 4, count: 32, pct: "35%" },
                        { stars: 3, count: 21, pct: "20%" },
                        { stars: 2, count: 12, pct: "12%" },
                        { stars: 1, count: 15, pct: "15%" },
                      ].map((bar) => (
                        <div key={bar.stars} className="flex items-center gap-3 text-xs text-gray-500">
                          {/* Bar */}
                          <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#D4FF00] h-full rounded-full" style={{ width: bar.pct }} />
                          </div>
                          {/* Stars */}
                          <div className="flex text-gray-400 text-xs w-16">
                            {"★".repeat(bar.stars)}
                          </div>
                          {/* Count */}
                          <span className="w-6 text-right font-medium text-gray-600">{bar.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews Section */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-3">Individual Reviews:</h4>
                  
                  {/* Rating Filters */}
                  <div className="flex items-center gap-2 flex-wrap mb-6">
                    {["all", "5", "4", "3", "2", "1"].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setSelectedReviewFilter(r)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          selectedReviewFilter === r
                            ? "bg-[#D4FF00] text-black shadow-xs font-bold"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {r === "all" ? "All rating" : `★ ${r}`}
                      </button>
                    ))}
                  </div>

                  {/* Reviews List */}
                  <div className="flex flex-col gap-4">
                    {reviewsData.map((review) => (
                      <div
                        key={review.id}
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs flex flex-col gap-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h5 className="font-bold text-sm text-[#0B1221]">{review.name}</h5>
                              <p className="text-xs text-gray-400">{review.role}</p>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400">{review.timeAgo}</span>
                        </div>

                        {/* Stars */}
                        <div className="flex text-black text-sm">
                          {"★".repeat(review.rating)}
                        </div>

                        {/* Comment */}
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                          &quot;{review.comment}&quot;
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ================= Right Column: Sticky Sidebar Card (Starts up beside video!) ================= */}
          <div className="lg:col-span-4 sticky top-6">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 border border-gray-100 shadow-2xl flex flex-col gap-5 text-gray-900">
              
              {/* Lessons Title & Quick List */}
              <div>
                <h4 className="text-lg font-black text-[#0B1221] mb-4">
                  112 Lessons (24 hours)
                </h4>
                <div className="space-y-3 text-xs sm:text-[13px]">
                  <div className="flex justify-between items-center text-gray-800">
                    <span className="font-medium text-gray-600">01 Introduction to Digital Assets</span>
                    <span className="text-[#0044FF] font-semibold">12 mins</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-800">
                    <span className="font-medium text-gray-600">02 Design Principles for Impacts</span>
                    <span className="text-[#0044FF] font-semibold">21 mins</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-800">
                    <span className="font-medium text-gray-600">03 Advanced Techniques in Digital Creation</span>
                    <span className="text-[#0044FF] font-semibold">16 mins</span>
                  </div>
                  <p className="text-xs text-gray-400 pt-1 font-light">99 more videos</p>
                </div>
              </div>

              {/* Subtext, Price & CTA */}
              <div className="pt-2 border-t border-gray-100">
                <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-[#0044FF]">
                    ${course.price}
                  </span>
                  <span className="text-xs text-gray-400">/lifetime</span>
                </div>
                <button
                  type="button"
                  className="w-full bg-[#D4FF00] hover:bg-[#c0e800] active:scale-95 text-black font-extrabold text-sm sm:text-base py-3.5 rounded-full transition-all shadow-md cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>

              {/* Course Includes Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-gray-100">
                <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                  This course include
                </h5>
                {[
                  { text: "Learning Resources", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
                  { text: "Quality Lesson Videos", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
                  { text: "Certificate of Completion", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" },
                  { text: "Private Consultation", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700">
                    <svg className="w-4 h-4 text-[#0044FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Creator Box */}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={creatorData.avatar}
                    alt={creatorData.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h6 className="font-black text-sm text-[#0B1221]">{creatorData.name}</h6>
                    <p className="text-[11px] text-gray-400">Professional Creator</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>
                <Link
                  href="/creators"
                  className="w-full text-center py-2.5 rounded-full border border-gray-200 text-xs font-bold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  See Full Profile
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
