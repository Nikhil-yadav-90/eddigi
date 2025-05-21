import CareerInvestmentSectionData from "../data/CareerInvestmentSectionData";

const CareerInvestmentSection = () => {
  const features = CareerInvestmentSectionData;
  return (
    <div className="bg-blue-50 font-sans py-12 border-t-[0.5px] border-gray-800 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">
        Invest in your career
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-gray-700">
            <div className="mb-4 text-black">{feature.icon}</div>
            <h3 className="font-medium  text-lg  mb-2">{feature.title}</h3>
            <p className="text-xs font-medium">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerInvestmentSection;
