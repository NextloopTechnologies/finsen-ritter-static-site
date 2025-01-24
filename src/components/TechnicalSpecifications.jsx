import React from "react";
import { technicalSpecifications } from "../utils/ExportStaticData";

const TechnicalSpecifications = () => {
  return (
    <div className="p-6 rounded-lg mx-10">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
        Technical Specifications
      </h2>
      <p className="text-sm text-center text-gray-500 mb-6">
        (Indicative, customizable based on requirements)
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {technicalSpecifications.map((spec, index) => (
          <div
            key={index}
            className="flex items-start bg-white p-4 rounded-lg border w-full"
          >
            <img src={spec.icon} className="h-10 mr-4" />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                {spec.title}
              </h3>
              <p className="text-sm text-gray-600 text-left">
                {spec.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSpecifications;
