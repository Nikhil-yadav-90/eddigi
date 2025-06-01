import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Text Top-Left */}
      <div className="absolute z-40 top-[50px] left-10 text-black">
        <h3 className="mb-4">LEARN SMARTER</h3>
        <h1 className="text-5xl font-extrabold leading-tight">Unlock Your</h1>
        <div className="ml-32 mt-2">
          <h1 className="text-5xl font-extrabold leading-tight">Potential</h1>
        </div>
      </div>

      {/* Button Bottom-Right */}
      <div className="absolute bottom-6 right-16 z-40 w-2/6">
        <div className="w-full font-medium text-black"><p>Join EdDigi and discover a world of knowledge with expert instructors and flexible learning options designed for you.</p></div>
        <button className="bg-transparent   mt-3 font-bold text-black h-14 px-20  hover:text-black cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.6)]  hover:ring-2 hover:ring-blue-400 transition rounded-lg">
          Join Now
        </button>
      </div>

      {/* Background Image */}
      <Image
        src="/hero_image.png"
        alt="hero_image1"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </section>
  );
};
export default HeroSection;
