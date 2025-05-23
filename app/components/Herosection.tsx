import Image from "next/image";

export default function Herosection() {
  return (
    <div className="relative w-full">
      <Image 
        src="/HomePage/HeroImg.png" 
        alt="hero" 
        width={1920} 
        height={1080} 
        className="w-full h-full object-cover" 
        priority 
      />
      {/* <div className="absolute  top-24 right-24 p-8">
        <h1 className="text-4xl font-sans mb-2">&ldquo;Empower Your Future</h1>
        <h2 className="pl-40 text-4xl font-sans">Learn, Gain, Succeed!&rdquo;</h2>
      </div> */}
    </div>
  );
}
