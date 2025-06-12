import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
    return (
        <div className="flex flex-col justify-between h-[920px] mb-32">
            {/* Header */}
            <div className="mb-10 flex justify-center">
                <div className="text-black font-semibold text-xl">What We Offer</div>
            </div>

            {/* Content */}
            <div className=" flex flex-col md:flex-row mx-5 h-[80%]">
                {/* Left section - 70% */}
                <div className="hidden md:block w-[70%]">
                    <div className="relative  w-full h-full">
                        <div className="absolute z-20 right-20 -top-20 w-[420px] h-[700px] overflow-hidden">
                            <Image
                            alt='our_services'
                            src='/our_services.png'
                            fill
                            />
                        </div>
                        <div className="w-[450px] z-10 bottom-1 left-28 h-[300px] absolute overflow-hidden">
                        <Image
                        alt="our_services_1"
                        src='/our_services1.png'
                        fill
                        />
                        </div>
                    </div>
                  
                </div>

                {/* Right section - Our Services (30%) */}
                <div className="md:w-[30%] flex flex-row md:flex-col justify-between md:justify-center p-4 ">
                    <div>
                        <h1 className="font-bold text-black text-2xl">Our Services</h1>
                        <p className="text-left text-black font-extralight mt-2">
                            We offer a wide range of online courses and resources to help you
                            achieve your learning goals effectively.
                        </p>
                    </div>
                    <div className="md:flex my-5">
                        <Link
                            href="#"
                            className="h-12 px-8 flex items-center bg-actionbutton justify-center text-foreground rounded-lg text-sm font-medium hover:rounded-xl hover:ring-2 hover:bg-foreground hover:text-actionbutton hover:ring-blue-400 shadow-md transition"
                        >
                            View All
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;

