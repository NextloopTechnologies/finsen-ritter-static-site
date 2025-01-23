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
  const features = [
    {
      title: "Sustainability-Oriented Design:",
      points: [
        "Reduces greenhouse gas emissions by recycling waste into energy",
        "Minimizes environmental impact with eco-friendly waste-to-value solution",
      ],
    },
    {
      title: "High-Efficiency Anaerobic Digestion (AD) System:",
      points: [
        "Converts organic waste into high-value products",
        "Optimizes biogas production through efficient processing",
        "Low energy consumption with high output efficiency",
      ],
    },
    {
      title: "Advanced Biogas Upgrading Technology:",
      points: [
        "Advanced filtration using membrane (HPWS) along with PSA",
        "Ensures high-quality biomethane with purity levels exceeding CO2 98% CH4 Removal",
        "Multiple gas processing trains of over 95% + viable for various high-grade applications",
      ],
    },
    {
      title: "Robust Automation and Control Systems:",
      points: [
        "Equipped with intuitive UI compatible control systems",
        "Smart Feed management and processing controls",
        "Automated scheduling capabilities",
      ],
    },
    {
      title: "Customizable Capacity:",
      points: [
        "Designed to handle flexible feed types and large-scale industrial applications",
        "Multiple configuration allow scalability to meet future expansion needs",
      ],
    },
  ];

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

      <FlexContentImageSection
        image={ProductAdvantagesRight}
        title="Advantages"
        numberedSections={ProductText.Advantages}
        orientation="left"
        contentClassName="p-10 max-w-[50vw] my-20"
        containerClassName="flex flex-col items-center p-5 self-center bg-gray-200 w-full"
      />
      <Slider
        cards={applicationCards}
        backgroundColor={`bg-white`}
        cardClass="rounded-lg w-[80%] md-[15%]"
        visibleitems={`3`}
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
