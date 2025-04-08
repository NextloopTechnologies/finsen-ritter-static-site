import React from "react";
import { MultiColorLine } from "../assets/svg";

const MajorFeatures = ({ data, bgColorDiff = "bg-blue-900" }) => {
  return (
    <div className={`${bgColorDiff || "bg-blue-900"} p-8 min-h-screen`}>
      <div className="flex flex-col items-center mb-16">
        <h2 className="my-8 text-2xl md:text-3xl text-white font-bold">
          MAJOR FEATURES :
        </h2>
        <MultiColorLine width={300} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-8">
        {data?.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center my-5 md:min-h-64"
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
              {feature.points.map((point, i) => {
                const pointText =
                  typeof point === "object" ? point.text : point;
                const subpoints =
                  typeof point === "object" && point.subpoints
                    ? point.subpoints
                    : [];
                return (
                  <li key={i}>
                    {pointText}
                    {subpoints.length > 0 && (
                      <ul className="list-disc ml-5 mt-1">
                        {subpoints.map((subpoint, j) => (
                          <li key={j}>{subpoint}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MajorFeatures;
