import { courseDetail } from "@/mockData/courses";
import React from "react";
import CourseHeroImage from "./courseHeroImage";
import CourseBrief from "./courseBrief";
import { notFound } from "next/navigation"; // for clean 404




// Optional: for SSG
export async function generateStaticParams() {
  return courseDetail.map((course) => ({
    courseSlug: course.courseName,
  }));
}

const CoursePage = async ({ params }: {
  params: Promise<{ courseSlug: string }>
}) => {
  const { courseSlug } = await params;

  const requireCourse = courseDetail.find(
    (item) => item.courseName === courseSlug
  );

  if (!requireCourse) {
    notFound(); // Recommended for Next.js App Router
  }

  const { heroImage, courseBrief } = requireCourse.details;

  return (
    <div className="h-screen w-screen">
      <CourseHeroImage
        imageLink={heroImage.imageLink}
        enrollLink={heroImage.enrollLink}
        altValue={heroImage.altValue}
      />
      <CourseBrief courseBriefs={courseBrief} />
    </div>
  );
};

export default CoursePage;

