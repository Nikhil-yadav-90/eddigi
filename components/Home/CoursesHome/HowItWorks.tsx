const HowItWorks = () => {
    return (
        <div className="flex-1 flex flex-col justify-center items-center text-center mb-10 px-4">
            <h3 className="text-sm font-normal">Our Method</h3>
            <h1 className="text-3xl font-bold">How It Works</h1>

            <div className="flex flex-col gap-10 items-center mt-6 w-full">
                {/* Step 1 */}
                <div className="w-full md:w-[50%] text-center">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch">
                        <div className="bg-actionbutton text-white w-full md:w-[20%] flex justify-center items-center py-4 md:py-0">
                            <h1 className="text-5xl font-bold">01</h1>
                        </div>
                        <div className="flex flex-col items-start bg-white p-6 w-full md:w-[60%]">
                            <h3 className="text-black text-2xl md:text-3xl font-bold text-left">View Courses</h3>
                            <p className="text-black text-left">Start with fundamentals and build a strong base for advance topics</p>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="w-full md:w-[50%] text-center md:ml-32">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch">
                        <div className="flex flex-col items-start bg-white p-6 w-full md:w-[60%] order-2 md:order-1">
                            <h3 className="text-black text-2xl md:text-3xl font-bold text-left">Get Feedback</h3>
                            <p className="text-black text-left">Get personalized feedback and support from expert instructors and peers.</p>
                        </div>
                        <div className="bg-actionbutton text-white w-full md:w-[20%] flex justify-center items-center py-4 md:py-0 order-1 md:order-2">
                            <h1 className="text-5xl font-bold">02</h1>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="w-full md:w-[50%] text-center">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch">
                        <div className="bg-actionbutton text-white w-full md:w-[20%] flex justify-center items-center py-4 md:py-0">
                            <h1 className="text-5xl font-bold">03</h1>
                        </div>
                        <div className="flex flex-col items-start bg-white p-6 w-full md:w-[60%]">
                            <h3 className="text-black text-2xl md:text-3xl font-bold text-left">Apply Knowledge</h3>
                            <p className="text-black text-left">Apply Knowledge through hands-on projects and real-world simulations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;
