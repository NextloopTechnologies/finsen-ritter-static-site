import React from "react";
import { MultiColorLine } from "../assets/svg";

const MajorFeatures = ({ data }) => {
  return (
    <div className="bg-blue-900 p-8 min-h-screen">
      <div className="flex flex-col items-center mb-16">
        <p className="my-8 text-2xl text-white font-bold">MAJOR FEATURES :</p>
        <MultiColorLine width={200} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {data?.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center my-5"
          >
            <div className="-mt-[4.5rem]">
              <div className="rounded-full w-24 h-24 flex items-center justify-center">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-sm font-bold mb-2 text-[#00457B] text-left justify-start">
              {feature.title}
            </h3>
            <ul className="text-gray-700 list-disc pl-5 text-sm">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MajorFeatures;
