import React from "react";
import Image from "next/image";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      quote:
        '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
      avatar: "/Sarah M..png", // ডেমো এভাটার
    },
    {
      name: "James L.",
      role: "Lifelong Learner",
      quote:
        '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
      avatar: "/James L.png", // ডেমো এভাটার
    },
    {
      name: "Alex B.",
      role: "Inspired Creator",
      quote:
        '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
      avatar: "/Alex B..png", // ডেমো এভাটার
    },
  ];

  return (
    <section className="relative w-full bg-[#FAFBFF] py-24 px-6 md:px-12 overflow-hidden font-sans">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#D4FF00]/30 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
          <h2 className="text-4xl text-center md:text-5xl lg:text-[54px] font-extrabold text-[#0B1221] leading-[1.15] tracking-tight max-w-lg">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-2xl font-light">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-white/60 flex flex-col gap-5"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full overflow-hidden mb-2">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name and Role */}
              <div className="flex flex-col gap-1">
                <h4 className="font-extrabold text-[#0B1221] text-[17px]">
                  {testimonial.name}
                </h4>
                <span className="text-[#0044FF] text-[13px] font-medium">
                  {testimonial.role}
                </span>
              </div>

              {/* Quote */}
              <p className="text-gray-500 text-[14px] leading-[1.8] font-light mt-2">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
