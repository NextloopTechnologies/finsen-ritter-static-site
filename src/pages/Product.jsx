import React from "react";
import HeroSection from "../components/HeroSection";
import {
  ProductAdvantagesRight,
  ProductDescriptionLeft,
  ProductHeroBg,
  ProductWhyChooseRight,
} from "../assets/images";
import { ProductText } from "../utils/ExportText";
import FlexContentImageSection from "../components/FlexContentImageSection";
import Slider from "../components/Slider";
import { applicationCards } from "../utils/ExportStaticData";
import ContactSection from "../components/ContactSection";
import TechnicalSpecifications from "../components/TechnicalSpecifications";
import { MapLocations, IndustrialSiteCircular } from "../assets/images";
import CircularFeatures from "../components/CircularFeatures";

const Product = () => {
  const { mainHeader, items } = applicationCards;

  return (
    <div className="flex flex-col gap-28">
      <HeroSection backgroundImage={ProductHeroBg}></HeroSection>
      <FlexContentImageSection
        image={ProductDescriptionLeft}
        mainHeading="INDUSTRIAL BIO-CNG (COMPRESSED BIO-GAS) PLANT: PRODUCT DESCRIPTION"
        title=""
        description={ProductText.ProductDescription}
        orientation="right"
        contentClassName="p-10 max-w-[50vw] my-20"
      />

      <CircularFeatures />
      <div className="py-10">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
          {mainHeader}
        </h2>
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 px-4">
          {items?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4 flex justify-center items-center">
                <img
                  src={item.icon}
                  alt={`${item.heading} Icon`}
                  className="h-24 w-24"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {item.heading}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <FlexContentImageSection
        image={ProductAdvantagesRight}
        title="Advantages"
        numberedSections={ProductText.Advantages}
        orientation="left"
        contentClassName="p-10 max-w-[50vw] my-20"
        containerClassName="flex flex-col items-center p-5 self-center bg-gray-200 w-full"
      />

      <TechnicalSpecifications />

      <div className="flex p-5 self-center">
        <div className="bg-[#135384] bg-opacity-10 p-10 border max-w-[50vw] rounded-bl-[4rem] my-20">
          <div className="text-3xl font-bold text-blue-900 mb-4">
            Why Choose Finsen Ritter Technologies?
          </div>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-semibold">Proven Expertise: </span>
              Years of experience in industrial gas and chemical plant
              development.
            </li>
            <li>
              <span className="font-semibold">Comprehensive Support: </span>
              From feasibility studies to commissioning and after-sales service.
            </li>
            <li>
              <span className="font-semibold"> Innovative Solutions: </span>
              Leveraging state-of-the-art technology to deliver exceptional
              efficiency and reliability.
            </li>
            <li>
              <span className="font-semibold">Sustainability Commitment: </span>
              Dedicated to creating environmentally friendly solutions for a
              better tomorrow.
            </li>
          </ul>
        </div>
        <div className="relative">
          <img
            src={ProductWhyChooseRight}
            alt="Location on map"
            className="h-auto w-96"
          />
          <img
            src={IndustrialSiteCircular}
            alt="Industrial site view"
            className="absolute h-52 -left-20 -bottom-12"
          />
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Product;
