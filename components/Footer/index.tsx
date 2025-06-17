import ContactInfo from "../Home/ContactInfo"
import Footer from "./Footer"
const FooterComp = ()=>{
return (<>
      {/* Overlapping Contact Info */}
      <div className="relative z-10 translate-y-14">

        <div className="flex justify-center">
          <ContactInfo />
        </div>
      </div>
      <Footer />
</>)
}

export default FooterComp