import React from "react";
import {
  MapLocations,
  IndustrialSiteCircular,
  BioCngPlantsMap,
} from "../assets/images";
import { HomeText } from "../utils/ExportText";

const OurBiogasSection = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-5 justify-center w-full">
      <div className="bg-opacity-10 p-4 md:p-10 w-full md:max-w-[50vw] my-8 md:my-20">
        <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center md:text-left">
          Our Biogas Solutions
        </div>
        <div className="text-center md:text-left text-sm md:text-base leading-relaxed">
          {HomeText.OurBiogasSolutionDescription}
        </div>
      </div>

      <div className="relative flex justify-center md:justify-start w-auto md:w-auto mt-4 md:mt-0">
        <img
          src={BioCngPlantsMap}
          alt="Location on map"
          className="h-auto w-[80vw] md:w-96 object-contain"
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
