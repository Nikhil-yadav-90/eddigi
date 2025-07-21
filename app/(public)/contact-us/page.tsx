import Image from "next/image"
import ContactForm from "./contactForm"

const ContactUs = () => {

    return (
        <>
            <div className="w-screen h-screen">
                <div className="relative w-full h-3/5 bg-red-300">
                    <Image
                        src='/images/contact_us_hero_image.png'
                        fill
                        className="object-cover"
                        priority
                        alt="contact-us"
                    />

                </div>
                <div className="flex justify-center items-center mt-10">
                    <h1 className="font-extrabold text-2xl text-black">
                        We just need your contact details !
                    </h1>
                </div>
            </div>
            <ContactForm/>
        </>

    )
}


export default ContactUs