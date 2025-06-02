import Image from "next/image";

const KeyFeatures = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center max-w-screen-lg">
        <p className="font-thin text-black text-lg my-4">Key Features</p>

        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-black text-3xl sm:text-4xl my-4">
            Why EdDigi?
          </h1>
          <p className="text-black my-4 max-w-xl px-4 sm:px-6 line-clamp-4">
            EdDigi offers personalized learning paths, expert instructors, and a
            vast library of courses, empowering you to achieve your goals
            effectively and efficiently.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-evenly gap-6 mt-10">
        {/* Feature 1 */}
        <div className="bg-transparent p-4 w-60 h-48 rounded-lg flex flex-col items-center justify-center shadow-md text-center">
          <div className="relative w-16 h-16 mb-2">
            <Image
              src="/calendar.png"
              fill
              className="object-contain"
              alt="expert_instructor"
            />
          </div>
          <h1 className="text-center text-base font-medium">Expert Instructors</h1>
        </div>

        {/* Feature 2 */}
        <div className="bg-transparent p-4 w-60 h-48 rounded-lg flex flex-col items-center justify-center shadow-md text-center">
          <div className="relative w-16 h-16 mb-2">
            <Image
              src="/times.png"
              fill
              className="object-contain"
              alt="flexible_learning"
            />
          </div>
          <h1 className="text-center text-base font-medium">Flexible Learning</h1>
        </div>

        {/* Feature 3 */}
        <div className="bg-transparent p-4 w-60 h-48 rounded-lg flex flex-col items-center justify-center shadow-md text-center">
          <div className="relative w-16 h-16 mb-2">
            <Image
              src="/laptop.png"
              fill
              className="object-contain"
              alt="personalized_learning"
            />
          </div>
          <h1 className="text-center text-base font-medium">Personalized Learning</h1>
        </div>
      </div>

      {/* Button */}
      <button className="mt-10 text-white bg-blue-800 hover:bg-blue-700 transition py-2 px-6 rounded-lg">
        Explore Features
      </button>
    </div>
  );
};

export default KeyFeatures;
