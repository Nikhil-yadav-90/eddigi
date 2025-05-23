import Image from "next/image";

export default function Herosection() {
  return (
    <div className="relative w-full">
      <Image 
        src="/aboutpage/heroimg.png" 
        alt="hero" 
        width={768}  
        height={1080}
        className="w-[100%] h-[100%] object-cover" 
        priority 
      />
      {/* <div className="absolute top-20 font-sans  left-1/2 transform -translate-x-1/2 text-white text-center ">
      <h1 className="">Our vision</h1>
        <h1 className="text-5xl font-sans mb-2">We envision a world where anyone,</h1>
        <h2 className="text-5xl font-sans">anywhere has the power to transform their lives through learning.</h2>
        <button className=" text-white border-2 border-white px-6 py-2  mt-6">Get Started</button>
      </div> */}
    </div>
  );
}
