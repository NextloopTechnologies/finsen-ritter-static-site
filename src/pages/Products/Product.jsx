import React from "react";
import HeroSection from "../../components/HeroSection";
import FlexContentImageSection from "../../components/FlexContentImageSection";
import MajorFeatures from "../../components/MajorFeatures";
import ContactSection from "../../components/ContactSection";
import TechnicalSpecifications from "../../components/TechnicalSpecifications";
import useIsMobile from "../../hooks/useIsMobile";
import { getImageUrl } from "../../utils/supabaseStorageHelper";

const Product = ({ productData, bgColorDiff = "bg-blue-900" }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col gap-28">
      <HeroSection
        backgroundImage={productData.heroBackgroundImage}
        // backgroundOpacity="opacity-50"
      >
        <div className="flex flex-col text-center w-full">
          <h1 className="text-3xl font-bold">{productData.heroTitle}</h1>
          <p className="text-lg">{productData.heroSubtitle}</p>
        </div>
      </HeroSection>

      <FlexContentImageSection
        image={productData.descriptionImage}
        mainHeading={productData.descriptionMainHeading}
        title=""
        description={productData.descriptionText}
        orientation="right"
        contentClassName="bg-white bg-opacity-10 p-5 md:p-10 max-w-full md:max-w-[50vw] my-10 md:my-20"
      />

      <MajorFeatures
        data={productData.majorFeatures}
        bgColorDiff={bgColorDiff}
      />

      <div className="py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          {productData.applicationCards.mainHeader}
        </h2>
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 px-4">
          {productData?.applicationCards?.items?.map((item, index) => (
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
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {item.heading}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <FlexContentImageSection
        image={productData.advantagesImage}
        title="ADVANTAGES"
        numberedSections={productData.advantagesText}
        orientation="right"
        contentClassName="p-5 md:p-10 max-w-full md:max-w-[50vw] my-10 md:my-20"
        containerClassName="flex flex-col items-center p-5 self-center bg-gray-200 w-full"
      />

      <TechnicalSpecifications
        specifications={productData.technicalSpecifications}
      />

      {isMobile ? (
        <FlexContentImageSection
          image={productData.whyChooseImage}
          title="WHY CHOOSE FINSEN RITTER TECHNOLOGIES?"
          bulletPoints={productData.whyChooseText}
          orientation="right"
          contentClassName="p-5 md:p-10 max-w-full md:max-w-[50vw] my-10 md:my-20"
          containerClassName="flex flex-col items-center p-5 self-center bg-gray-200 w-full"
        />
      ) : (
        <div className="flex p-5 self-center">
          <div className="bg-[#135384] bg-opacity-10 p-10 border max-w-[50vw] rounded-bl-[4rem] my-12">
            <div className="md:text-3xl text-2xl font-bold text-blue-900 mb-4">
              Why Choose Finsen Ritter Technologies?
            </div>
            <ul className="list-disc pl-5">
              {productData.whyChooseText.map((point, index) => (
                <li key={index}>
                  <span className="font-semibold">{point.split(":")[0]}: </span>
                  {point.split(":")[1]}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={productData.whyChooseImage}
              alt="Location on map"
              className="h-auto w-96"
            />
            <img
              src={productData.whyChooseCircularImage}
              alt="Industrial site view"
              className="absolute h-52 -left-20 -bottom-5"
            />
          </div>
        </div>
      )}

      <ContactSection />
    </div>
  );
};

export default Product;
