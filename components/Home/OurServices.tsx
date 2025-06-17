import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
    return (
        <div className="flex flex-col justify-between mb-32 px-4 md:px-10">
            {/* Header */}
            <div className="mb-10 flex justify-center">
                <div className="text-black font-semibold text-xl">What We Offer</div>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-10">
                {/* Left section - Always Visible */}
                <div className="w-full md:w-[70%] relative flex justify-center items-center">
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px]">
                        <div className="absolute z-20 right-5 top-0 w-[60%] h-[70%]">
                            <Image
                                alt="our_services"
                                src="/images/our_services.png"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="absolute z-10 bottom-0 left-5 w-[65%] h-[40%]">
                            <Image
                                alt="our_services_1"
                                src="/images/our_services1.png"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right section */}
                <div className="w-full md:w-[30%] flex flex-col justify-center gap-6">
                    <div>
                        <h1 className="font-bold text-black text-2xl">Our Services</h1>
                        <p className="text-left text-black font-extralight mt-2">
                            We offer a wide range of online courses and resources to help you
                            achieve your learning goals effectively.
                        </p>
                    </div>
                    <div>
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
