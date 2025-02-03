import React from "react";
import {
  AboutSectionHeroBg,
  AboutUsMissionSection,
  AboutUsVisionSection,
  OurValuesAboutUs,
} from "../assets/images";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import FlexContentImageSection from "../components/FlexContentImageSection";
import Slider from "../components/Slider";
import { cardsClients, testimonials } from "../utils/ExportStaticData";
import { AboutUsText } from "../utils/ExportText";

const AboutUsPage = ({ opacity = "opacity-40" }) => {
  return (
    <div className="flex flex-col gap-28">
      <HeroSection
        backgroundImage={AboutSectionHeroBg}
        backgroundOpacity="opacity-50"
      >
        <div className="flex flex-col text-center w-full">
          <h2 className="text-3xl font-bold">ABOUT US</h2>
          <p className="text-lg">
            Finsen Ritter Technologies specializes in industrial turnkey
            solutions, offering expertise in the design, supply, installation,
            and testing of chemical and gas plants.
          </p>
        </div>
      </HeroSection>
      <div className="mt-4 mx-4 -mb-4 md:m-10 px-4 md:px-32">
        <h2 className="flex text-xl md:text-2xl font-bold text-[#135384] justify-center">
          ABOUT THE COMPANY
        </h2>
        <p className="mt-4 text-gray-700 text-sm md:text-base">
          {AboutUsText.AboutTheCompanyDescription}
        </p>
      </div>

      <FlexContentImageSection
        image={AboutUsVisionSection}
        title="OUR VISION"
        description={AboutUsText.OurVisionDescription}
        bgColoredCover={"true"}
      />

      <FlexContentImageSection
        image={AboutUsMissionSection}
        title="OUR MISSION"
        description={AboutUsText.OurMissionDescription}
        orientation="right"
        bgColoredCover={"true"}
      />

      <FlexContentImageSection
        image={OurValuesAboutUs}
        title="OUR VALUES"
        description={AboutUsText.OurValuesDescription}
        contentClassName="bg-white bg-opacity-10 p-5 md:p-10 max-w-full md:max-w-[50vw] my-10 md:my-20"
        orientation="right"
      />

      <Slider
        cards={cardsClients}
        backgroundColor="rgba(19, 83, 132, 0.1)"
        cardClass="rounded-full w-[40%] md:w-[15%] p-2 md:p-4"
        iconOnly={true}
        cardContainerClass=""
      />

      <Slider
        cards={testimonials}
        isTestimonial={true}
        cardContainerClass="px-4"
        backgroundColor=""
        cardClass="md:w-[30%] w-[80%] rounded-xl p-4"
      />

      <ContactSection />
    </div>
  );
};

export default AboutUsPage;
