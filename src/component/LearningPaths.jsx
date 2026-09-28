import Image from "next/image";
import Link from "next/link";
import React from "react";

const LearningPaths = () => {
  // 6 specific categories matching the design
  const categories = [
    {
      name: "Design",
      iconSrc: "/icon/Design.png",
      filterName: "UI/UX Design",
    },
    {
      name: "Development",
      iconSrc: "/icon/Development.png",
      filterName: "Web Development",
    },
    {
      name: "IT & Software",
      iconSrc: "/icon/IT & Software.png",
      filterName: "Data Science",
    },
    {
      name: "Business",
      iconSrc: "/icon/Business.png",
      filterName: "Marketing",
    },
    {
      name: "Marketing",
      iconSrc: "/icon/Marketing.png",
      filterName: "Marketing",
    },
    {
      name: "Photography",
      iconSrc: "/icon/Photography.png",
      filterName: "Photography",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-8 font-sans flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center">
        {/* Header Section */}
        <h2 className="text-3xl md:text-[42px] font-extrabold text-[#0B1221] text-center leading-tight mb-4 tracking-tight">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="text-gray-500 text-center max-w-4xl text-sm md:text-base leading-relaxed mb-12 md:mb-16">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there&apos;s
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>

        {/* Cards Grid: 6 columns on md and larger devices in a single row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 sm:gap-4 md:gap-4 lg:gap-5 w-full">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/courses`}
              className="group flex flex-col items-center justify-center py-6 px-3 bg-white border border-gray-200/90 rounded-[22px] md:rounded-[26px] shadow-xs hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-[155px] sm:h-[170px] md:h-[185px]"
            >
              {/* Lime Icon Circle */}
              <div className="w-13 h-13 sm:w-15 sm:h-15 md:w-16 md:h-16 rounded-full bg-[#D4FF00] flex items-center justify-center mb-3 sm:mb-4 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={category.iconSrc}
                  alt={`${category.name} Icon`}
                  width={30}
                  height={30}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-7.5 md:h-7.5 object-contain"
                />
              </div>

              {/* Category Name */}
              <span className="font-semibold text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] text-center group-hover:text-[#0044FF] transition-colors leading-tight">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
