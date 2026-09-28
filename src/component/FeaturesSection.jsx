import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#F8FAFC] to-[#F3FAFB] py-20 overflow-hidden font-sans">
      {/* Background Subtle Glows (Optional: to match the soft colorful background) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4FF00] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0044FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24 relative z-10">
        {/* ===================== Top Section ===================== */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left: Text Content */}
          <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            <h2 className="text-4xl md:text-5xl lg:text-[44px] font-extrabold text-[#111827] leading-[1.1] tracking-tight max-w-lg">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats */}
            {/* এখানে justify-center যোগ করা হয়েছে ছোট স্ক্রিনের জন্য এবং lg:justify-start বড় স্ক্রিনের জন্য */}
            <div className="flex justify-center lg:justify-start items-center gap-12 mt-4 w-full">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-4xl font-bold text-[#0044FF]">12K</span>
                <span className="text-xs text-gray-500 mt-1 font-medium">
                  Students
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-4xl font-bold text-[#0044FF]">70+</span>
                <span className="text-xs text-gray-500 mt-1 font-medium">
                  Courses
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-4xl font-bold text-[#0044FF]">16</span>
                <span className="text-xs text-gray-500 mt-1 font-medium">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image (Frame 11) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <Image
              src="/Frame 11.png"
              alt="Professional Growth"
              width={600}
              height={600}
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* ===================== Bottom Section ===================== */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left: Image (Frame 12) - On mobile it will appear after text, on desktop it stays on left */}
          <div className="flex-1 w-full flex justify-center lg:justify-start order-2 lg:order-1">
            <Image
              src="/Frame 12.png"
              alt="Create and Manage Courses"
              width={600}
              height={600}
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right: Text Content */}
          {/* <div className="flex-1 w-full flex flex-col gap-5 order-1 lg:order-2 pl-0 lg:pl-10">
            <h2 className="text-4xl md:text-5xl lg:text-[44px] font-extrabold text-[#111827] leading-[1.1] tracking-tight max-w-md">
              Create & Manage Courses Easily.
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            {/* Features Checklist */}
          {/* <ul className="flex flex-col gap-3 mt-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Custom Check Icon */}
          {/* <svg
                    className="w-[18px] h-[18px] text-[#0044FF]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[15px] font-medium text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>  */}

          {/* Right: Text Content */}
          <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-5 order-1 lg:order-2 pl-0 lg:pl-10">
            <h2 className="text-4xl md:text-5xl lg:text-[44px] font-extrabold text-[#111827] leading-[1.1] tracking-tight max-w-md">
              Create & Manage Courses Easily.
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            {/* Features Checklist */}
            <ul className="flex flex-col items-center lg:items-start gap-3 mt-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, index) => (
                // কমেন্টটি <li> ট্যাগের ভেতর থেকে সরিয়ে দেওয়া হয়েছে এরর এড়ানোর জন্য
                <li
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-3"
                >
                  {/* Custom Check Icon */}
                  <svg
                    className="w-[18px] h-[18px] text-[#0044FF] shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[15px] font-medium text-gray-700 text-left">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
