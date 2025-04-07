import React from "react";
import {
  MapLocations,
  IndustrialSiteCircular,
  BlueandGreenFestiveIndiaIndependenceDayPoster
} from "../assets/images";
import { HomeText } from "../utils/ExportText";

const OurBiogasSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10">
      {/* Title and Description centered above the map */}
      <div className="max-w-3xl text-center mb-8">
        <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Our Biogas Solutions
        </div>
        <div className="text-sm md:text-base leading-relaxed">
          {HomeText.OurBiogasSolutionDescription}
        </div>
      </div>

      {/* Centered map image */}
      <div className="relative flex justify-center items-center w-full max-w-2xl">
        <img
          src={BlueandGreenFestiveIndiaIndependenceDayPoster}
          alt="Biogas map"
          className="w-full h-auto object-contain brightness-75"
          style={{ filter: "brightness(64%)" }}
        />
        {/* Optional overlays - uncomment if needed */}
        {/* <img 
          src={MapLocations} 
          alt="Location on map" 
          className="absolute inset-0 w-full h-full object-contain" 
        />
        <img
          src={IndustrialSiteCircular}
          alt="Industrial site"
          className="absolute h-40 md:h-52 -left-8 md:-left-20 -bottom-8 md:-bottom-12"
        /> */}
      </div>
    </div>
  );
};

export default OurBiogasSection;
