import whyLearnData from "../data/whyLearnData";
const WhyLearn = () => {
  return (
    <div className="px-4 bg-[#F9F9F9] py-16 text-center">
      <h2 className="text-xl md:text-2xl pb-20 font-semibold font-sans mb-3">Why Learn With EdDigi</h2>
      <h1 className="text-2xl md:text-4xl font-sans  mb-6">
        World-Class Learning for Anyone, Anywhere
      </h1>
      <p className="text-xs md:text-xs font-sans font-medium text-gray-600 max-w-2xl mx-auto mb-12">
        Coursera partners with <span className="font-semibold">more than 350+ leading universities and companies</span> to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {whyLearnData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            <div className="mb-4  text-black">{item.icon}</div>
            <h3 className="font-semibold font-sans text-xl mb-2">{item.title}</h3>
            {item.points.map((point, i) => (
              <p key={i} className="text-xs pb-2 font-sans font-medium text-gray-700 mb-2">{point}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyLearn;
