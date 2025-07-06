import { courseDetail } from "@/mockData/courses";
import React from "react";
import CourseHeroImage from "./courseHeroImage";
import CourseBrief from "./courseBrief";

interface CoursePageProps {
  params: {
    courseSlug: string;
  };
}

const CoursePage = ({ params}: CoursePageProps) => {
  const { courseSlug } = params;

  const [requireCourse] = courseDetail.filter((item)=>item.courseName === courseSlug)
  const {heroImage, courseBrief} = requireCourse.details

  return (<>
  <div className="h-screen w-screen">
    <CourseHeroImage imageLink={heroImage.imageLink} enrollLink={heroImage.enrollLink}
    altValue={heroImage.altValue}
    />
    <CourseBrief courseBriefs={courseBrief}/>
  </div>
  </>);
};

export default CoursePage;
