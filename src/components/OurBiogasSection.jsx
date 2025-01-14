import React from "react";
import { MapLocations, IndustrialSiteCircular } from "../assets/images";

const OurBiogasSection = () => {
  return (
    <div className="flex p-5 self-center">
      <div className="bg-[#135384] bg-opacity-10 p-10 border max-w-[50vw] rounded-bl-[4rem] my-20">
        <div className="text-3xl font-bold text-blue-900 mb-4">
          Our Biogas Solutions
        </div>
        <div>
          With years of expertise in biogas technology, we specialize in
          designing, installing, and maintaining biogas systems that reduce
          waste and generate renewable energy. Our commitment to sustainability
          and customer success sets us apart in the industry. With years of
          expertise in biogas technology, we specialize in designing,
          installing, and maintaining biogas systems that reduce waste and
          generate renewable energy. Our commitment to sustainability and
          customer success sets us apart in the industry.
        </div>
      </div>
      <div className="relative">
        <img src={MapLocations} alt="Location on map" className="h-auto w-96" />
        <img
          src={IndustrialSiteCircular}
          alt="Industrial site view"
          className="absolute h-52 -left-20 -bottom-12"
        />
      </div>
    </div>
  );
};

export default OurBiogasSection;
