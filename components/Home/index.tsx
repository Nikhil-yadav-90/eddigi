import Footer from "../Footer";
import ContactInfo from "./ContactInfo";
import HeroSection from "./HeroSection";
import KeyFeatures from "./KeyFeatures";
import LatestInsights from "./LatestInsights";

const Home = () => {
  return (
    <>
      <HeroSection />
      <KeyFeatures />
      <LatestInsights />

      {/* Overlapping Contact Info */}
      <div className="relative z-10 translate-y-14">

        <div className="flex justify-center">
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </>
  );
};



export default Home;