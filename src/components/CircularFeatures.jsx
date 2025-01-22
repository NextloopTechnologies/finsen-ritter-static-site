import React from "react";
import { MajorFeatures } from "../assets/svg";
import FeatureBoxesContainer from "./FeatureBoxesContainer";

const CircularFeatures = () => {
  const features = [
    {
      id: "sustainability",
      title: "Sustainability-Oriented Design:",
      points: [
        "Reduces greenhouse gas emissions by converting waste into energy",
        "Produces nutrient-rich organic slurry as a by-product, ideal for use as bio-fertilizer",
      ],
      targetPathId: "number-3-path",
      position: { x: 50, y: 100 },
    },
  ];

  return (
    <div>
      <FeatureBoxesContainer features={features} />
      <MajorFeatures textClassName={`text-red-500`} />
    </div>
  );
};

export default CircularFeatures;
