import React from "react";
import HeroSection from "../../components/HeroSection";
import MultiImageSection from "../../components/MultiImageSection";
import ContactSection from "../../components/ContactSection";
import IconTextCards from "../../components/IconTextCard";

const ServicesPage = ({
  heroBackgroundImage,
  heroHeading,
  heroDescription,
  multiImageData,
  iconCardsData,
  whatSetsUsApart,
  transformVision,
}) => {
  return (
    <div className="grid gap-20">
      <HeroSection
        backgroundImage={heroBackgroundImage}
        backgroundOpacity="opacity-50"
      >
        <div className="flex flex-col text-center w-full">
          <h2 className="text-3xl font-bold">{heroHeading}</h2>
          <p className="text-lg mt-5 mx-5">
            <span className="font-semibold">{heroDescription}</span>
          </p>
        </div>
      </HeroSection>

      <MultiImageSection
        contentHeading={multiImageData.heading}
        images={multiImageData.images}
        title={multiImageData.title}
        contentSections={multiImageData.sections}
        orientation="left"
      />

      <IconTextCards
        title={
          <p
            className={`text-blue-900 uppercase font-bold text-center max-w-[1306px]`}
          >
            {iconCardsData.title}
          </p>
        }
        data={iconCardsData.content}
      />

      <div className="text-left px-10 md:px-20">
        <h3 className="text-xl font-semibold">{whatSetsUsApart.title}</h3>
        <p className="text-normal font-normal mt-2">
          {whatSetsUsApart.description}
        </p>
        <h3 className="text-xl font-semibold mt-6">{transformVision.title}</h3>
        <p className="text-normal font-normal mt-2">
          {transformVision.description}
        </p>
      </div>

      <ContactSection />
    </div>
  );
};

export default ServicesPage;
