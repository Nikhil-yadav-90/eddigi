import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Section 1: Header and Top Image */}
      <div className="flex flex-col h-screen justify-between items-center my-5">
        <h1 className="text-xl font-thin text-black my-5 h-[5%]">About Eddigi</h1>

        <div className="flex flex-col relative items-center w-[95%] px-5 h-[95%]">
          <Image
            fill
            src="/images/about-us-1.png"
            alt="about-us-1"
            className="object-contain"
          />
        </div>
      </div>

      {/* Section 2: Fullscreen Image */}
      <div className="relative w-screen h-[80vh] md:h-screen my-16">
        <Image
          fill
          src="/images/about-us-2.png"
          alt="about-us-2"
          className="object-cover"
        />
      </div>

      {/* Section 3: Split Image + Text */}
      <div className="flex flex-col md:flex-row justify-between items-center md:h-[400px] mx-5 md:mx-10 gap-6">
        <div className="w-full md:w-[60%] h-[300px] md:h-full relative">
          <Image
            fill
            src="/images/about-us-3.png"
            alt="about-us-3"
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-[40%] px-4">
          <div className="flex flex-col justify-center items-start h-full">
            <h2 className="text-black font-extralight text-lg md:text-2xl">
              IT Training and Consultancy
            </h2>
            <p className="text-left text-black mt-2 text-sm md:text-base">
              Educational methods include teaching, training, storytelling,
              discussion and directed research.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
