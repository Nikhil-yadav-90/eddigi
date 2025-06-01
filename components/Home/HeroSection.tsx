import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Text Top-Left */}
      <div className="absolute z-40 top-12 left-4 sm:left-10 md:left-16 text-black max-w-[90vw] sm:max-w-md md:max-w-lg">
        <h3 className="mb-2 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider">
          LEARN SMARTER
        </h3>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug">
          Unlock Your
        </h1>
        <div className="ml-8 sm:ml-12 md:ml-32 mt-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug">
            Potential
          </h1>
        </div>
      </div>

      {/* Button Bottom-Right */}
      <div className="absolute bottom-4 right-4 sm:right-8 md:right-16 z-40 w-[90vw] sm:w-3/5 md:w-2/6 max-w-lg">
        <div className="w-full font-medium text-black text-xs sm:text-sm mb-2">
          <p>
            Join EdDigi and discover a world of knowledge with expert
            instructors and flexible learning options designed for you.
          </p>
        </div>
        <button className="bg-transparent mt-3 font-bold text-black h-12 px-6 sm:px-10 hover:text-black cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:ring-2 hover:ring-blue-400 transition rounded-lg w-full sm:w-auto text-sm">
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
