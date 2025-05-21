import NavBar from "./NavBar";
import Herosection from "./Herosection";
import InvestInYourCareer from "./InvestInYourCareer";
import WhyLearnWithEdDigi from "./WhyLearnWithEdDigi";
import Footer from "./Footer";


export default function Home() {
  return (
    <div className="h-screen w-scren bg-gray-400">
      <NavBar/>
      <div>
      <div><Herosection/> </div>
      <div><InvestInYourCareer/></div>
      </div>

      <div>
        <WhyLearnWithEdDigi/>
      </div>

      <div>
        plans section
      </div>

      <div>
        Faq
      </div>

      <div>
       <Footer/>
      </div>

    </div>
  );
}
