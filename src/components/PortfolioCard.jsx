import React from "react";

const PortfolioCard = ({ portfolio = [] }) => {
  return (
    <div className="bg-white p-4 flex flex-col gap-4 rounded-lg border border-gray-300">
      <h3 className="font-semibold text-xl">Portfolio</h3>
      <div className="inline-flex flex-wrap gap-4">
        {portfolio.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Portfolio ${index}`}
            className="w-[20vw] h-[20vw] lg:w-[15vw] lg:h-[15vw] object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
