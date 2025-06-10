import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden py-44">
      {/* Text Top-Left */}
      <div className="absolute z-40 top-12 right-4 sm:right-10 md:right-16 text-black max-w-[90vw] sm:max-w-md md:max-w-lg">
        <h3 className="mb-2 py-2 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider">
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

      {/* Button Bottom-Left */}
      <div className="absolute bottom-20 left-4 sm:left-8 md:left-16 z-40 w-[90vw] sm:w-3/5 md:w-2/6 max-w-lg">
        <div className="w-96 font-medium text-left hidden sm:block sm:text-black text-xs sm:text-sm mb-2">
          <p>
            Join EdDigi and discover a world of knowledge with expert
            instructors and flexible learning options designed for you.
          </p>
        </div>
        <button className=" bg-actionbutton sm:bg-actionbutton mt-3 font-bold text-foreground h-12 px-6 sm:px-10 xl:text- hover:text-actionbutton hover:bg-transparent cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:ring-2 hover:ring-blue-400 transition rounded-lg w-full sm:w-[250px] text-sm">
          Join Now
        </button>
      </div>

      {/* Background Image */}
      <Image
        src="/hero_image.png"
        alt="hero_image1"
        fill
        className="object-cover object-center"
        priority
      />
    </section>
  );
};

export default HeroSection;
