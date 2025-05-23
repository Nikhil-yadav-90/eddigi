import Image from "next/image";
export default function OurStory() {
    return (
        <>
        <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center" >
                <h1 className="text-4xl text-center font-bold mb-6">Our Story</h1>
                {/* <p className="text-lg text-center">Our story is a journey of innovation, collaboration, and impact. We started with a simple idea: to make learning accessible to everyone, anywhere. Today, we partner with leading institutions to bring the best learning to every corner of the world.</p>
                <p className="text-lg text-center">Our story is a journey of innovation, collaboration, and impact. We started with a simple idea: to make learning accessible to everyone, anywhere. Today, we partner with leading institutions to bring the best learning to every corner of the world.</p>
                <p className="text-lg text-center">Our story is a journey of innovation, collaboration, and impact. We started with a simple idea: to make learning accessible to everyone, anywhere. Today, we partner with leading institutions to bring the best learning to every corner of the world.</p> */}
            </div>
            <div>
                <Image src="/aboutpage/ourstory.png" alt="Our Story" width={1920} height={1080} className="w-full h-auto object-cover" />
            </div>
           
        </div>
        <div className="flex bg-blue-700 flex-col items-center justify-center py-20 ">
            <h1 className="text-xl text-white text-center font-bold mb-6">Join global community and start learning today</h1>
          <button className="text-white border-2 border-white px-6 py-2 mt-6">Join Now</button>
        </div>
        </>
    );
}