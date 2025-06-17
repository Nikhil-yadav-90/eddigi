import Image from "next/image";
import CoursesWeOffer from "./CoursesWeOffer";
import HowItWorks from "./HowItWorks";
import PopularCourses from "./PopularCourses";

const CoursesHome = () => {
  return (
    <div className="bg-foreground min-h-screen text-black relative pb-[10%]">
      <CoursesWeOffer />
      <div className="flex flex-col min-h-screen">
        <PopularCourses />
        <HowItWorks />
 <div className="h-auto w-full bg-transparent flex flex-col md:absolute md:h-[250px] md:w-[90%] md:-bottom-36 md:left-16 md:flex-row justify-center md:justify-between items-center gap-6 px-4">
  <div className="w-[250px] h-[250px]">
    <div className="flex flex-col justify-evenly items-center border-2 bg-white h-full">
      <div className="h-1/2 w-full flex justify-center items-center">
        <div className="relative h-[45%] w-[30%]">
          <Image
            fill
            src="/images/pencil1.png"
            alt="pencil"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly h-1/2 py-3">
        <h2 className="font-bold text-lg">Adaptive Learning </h2>
        <div className="flex flex-col items-center">
          <p className="px-2 text-center font-thin w-[80%]">Personalized content adapts to your skill level.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="w-[250px] h-[250px]">
    <div className="flex flex-col justify-evenly items-center border-2 bg-white h-full">
      <div className="h-1/2 w-full flex justify-center items-center">
        <div className="relative h-[45%] w-[30%]">
          <Image
            fill
            src="/images/education.png"
            alt="education"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly h-1/2 py-3">
        <h2 className="font-bold text-lg">Vast Resources</h2>
        <div className="flex flex-col items-center">
          <p className="px-2 text-center font-thin w-[80%]">Acess a wide range of learning materials.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="w-[250px] h-[250px]">
    <div className="flex flex-col justify-evenly items-center border-2 bg-white h-full">
      <div className="h-1/2 w-full flex justify-center items-center">
        <div className="relative h-[45%] w-[30%]">
          <Image
            fill
            src="/images/calendar_colour.png"
            alt="calendar_colour"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly h-1/2 py-3">
        <h2 className="font-bold text-lg">Expert Support</h2>
        <div className="flex flex-col items-center">
          <p className="px-2 text-center font-thin w-[80%]">Get guidance from experienced instructors.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="w-[250px] h-[250px]">
    <div className="flex flex-col justify-evenly items-center border-2 bg-white h-full">
      <div className="h-1/2 w-full flex justify-center items-center">
        <div className="relative h-[45%] w-[30%]">
          <Image
            fill
            src="/images/cup.png"
            alt="cup"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly h-1/2 py-3">
        <h2 className="font-bold text-lg">Progress Tracking</h2>
        <div className="flex flex-col items-center">
          <p className="px-2 text-center font-thin w-[80%]">Monitor your progress and identify areas.</p>
        </div>
      </div>
    </div>
  </div>
</div>



      </div>
    </div>
  );
};

export default CoursesHome;