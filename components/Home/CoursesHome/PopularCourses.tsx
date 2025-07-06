import Image from "next/image"

const PopularCourses = () => {

    return (
        <div className="flex-1 flex flex-col md:flex-row mx-4 md:mx-10 justify-center items-start mt-10 mb-20">
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start">
                <div className="inline-block w-full md:w-[50%] relative">
                    <div className="w-[250px] h-[150px] md:w-[350px] md:h-[200px] relative z-20 md:left-16 md:top-5 mx-auto md:mx-0">
                        <Image
                            alt='our_course'
                            src='/images/our_course.webp'
                            fill
                        />
                    </div>
                </div>
                <div className="inline-block w-full md:w-auto mt-6 md:mt-0">
                    <div className="w-[250px] h-[350px] md:w-[300px] md:h-[450px] relative mx-auto md:mx-0">
                        <Image
                            alt='our_course1'
                            src='/images/our_course1.webp'
                            fill
                        />
                    </div>
                </div>
            </div>

            <div className="flex-1 self-center py-10 md:-mr-12 text-center md:text-left">
                <div className="ml-0 md:ml-20 px-4 md:px-0">
                    <h3 className="font-normal my-2">Popular courses</h3>
                    <h1 className="text-3xl my-2 font-bold">About EdDigi Platform</h1>
                    <p className="my-4 max-w-full md:max-w-[70%] font-thin">
                        EdDigi is dedicated to providing accessible high-quality online education. Our mission is to empower learners worldwide to achieve their personal and professional goals.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PopularCourses
