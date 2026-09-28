import Banner from "@/component/Banner";
import DiscoverCourses from "@/component/DiscoverCourses";
import CreatorSection from "@/component/CreatorSection";
import FeaturesSection from "@/component/FeaturesSection";
import LearningPaths from "@/component/LearningPaths";
import TestimonialSection from "@/component/TestimonialSection";

export const metadata = {
  title: "ByteSpace",
  description:
    "ByteSpace - Discover Your Passion, Build Your Skills. Explore a variety of courses across different fields and make a difference in your career and life.",
};

export default function Home() {
  return (
    <main>
      <Banner />
      <DiscoverCourses />
      <LearningPaths />
      <FeaturesSection />
      <CreatorSection />
      <TestimonialSection />
    </main>
  );
}
