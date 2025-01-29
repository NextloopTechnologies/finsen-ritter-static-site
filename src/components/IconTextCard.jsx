import React from "react";
import { ServicesIndustryCards } from "../utils/ExportStaticData";

const Card = ({ icon, text }) => (
  <div className="flex items-center bg-blue-900 text-white p-4 rounded-lg shadow-md overflow-hidden w-full">
    <img className="text-3xl mr-4 bg-white" src={icon} />
    <p className="text-lg font-medium">{text}</p>
  </div>
);

const IconTextCards = () => {
  return (
    <div className="bg-[#1353841A] py-16 px-4 my-10">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
        KEY INDUSTRIES WE SERVE:
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {ServicesIndustryCards.map((industry, index) => (
          <Card key={index} icon={industry.icon} text={industry.text} />
        ))}
      </div>
    </div>
  );
};

export default IconTextCards;
