import { coursesData } from "@/data/coursesData";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return {
      title: "Course Details",
      description: "Explore course details and start learning on ByteSpace.",
    };
  }

  return {
    title: course.shortTitle || course.title,
    description:
      course.subtitle ||
      `${course.title} by ${course.creator}. Start learning today on ByteSpace.`,
    openGraph: {
      title: `${course.title} | ByteSpace`,
      description:
        course.subtitle ||
        `${course.title} by ${course.creator}. Start learning today on ByteSpace.`,
      images: [
        {
          url: course.image || "/logo.png",
          alt: course.title,
        },
      ],
    },
  };
}

export default function CourseDetailLayout({ children }) {
  return children;
}
