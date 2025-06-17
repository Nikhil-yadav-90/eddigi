import CoursesHome from "./CoursesHome";
import HeroSection from "./HeroSection";
import KeyFeatures from "./KeyFeatures";
import LatestInsights from "./LatestInsights";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <>
      <HeroSection />
      <KeyFeatures />
      <CoursesHome />
      <div className="mt-[20%]">
        <OurServices />
      </div>
      <LatestInsights />
    </>
  );
};



export default Home;