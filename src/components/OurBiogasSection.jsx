import React from "react";
import {
  MapLocations,
  IndustrialSiteCircular,
  BioCngPlantsMap,
} from "../assets/images";
import { HomeText } from "../utils/ExportText";

const OurBiogasSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 py-10">
      {/* Title and Description centered above the map */}
      <div className="max-w-xl text-center md:text-start mb-8">
        <div className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
          Our Biogas Solutions
        </div>
        <div className="text-lg md:text-xl leading-relaxed">
          {HomeText.OurBiogasSolutionDescription}
        </div>
      </div>

      <div className="relative flex justify-center md:justify-start w-auto md:w-auto mt-4 md:mt-0">
        <img
          src={BioCngPlantsMap}
          alt="Biogas map"
          className="w-full h-auto object-contain brightness-75"
          style={{ filter: "brightness(100%)" }}
        />
        {/* Uncomment if needed
        <img 
          src={MapLocations} 
          alt="Location on map" 
          className="h-auto w-[80vw] md:w-96 object-contain" 
        />
        <img
          src={IndustrialSiteCircular}
          alt="Industrial site view"
          className="absolute h-40 md:h-52 -left-8 md:-left-20 -bottom-8 md:-bottom-12"
        /> */}
      </div>
    </div>
  );
};

export default OurBiogasSection;
