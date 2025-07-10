import { courseDetail } from "@/mockData/courses";
import React from "react";
import CourseHeroImage from "./courseHeroImage";
import CourseBrief from "./courseBrief";
import { notFound } from "next/navigation"; // for clean 404
import SkillsGain from "./skillsGain";
import Specialization from "./specialization";




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

  const { heroImage, courseBrief, skillsGain, specialization } = requireCourse.details;

  return (
    <>
    <div className="h-screen w-screen relative overflow-hidden">
      <CourseHeroImage
        imageLink={heroImage.imageLink}
        enrollLink={heroImage.enrollLink}
        altValue={heroImage.altValue}
      />
      <CourseBrief courseBriefs={courseBrief} />
      
      <div className="text-black w-[40%]  border-b-2 ml-16">
        <div className="flex justify-start items-center mb-4">
          <div className="text-black font-bold"> About </div>
          <div className="text-black ml-10 font-bold"> Outcomes </div>
          <div className="text-black ml-10 font-bold"> Courses </div>
        </div>
      </div>
      <SkillsGain skillsList={skillsGain}/>

    </div>
      <Specialization specialization={specialization}/>
      </>
  );
};

export default CoursePage;

