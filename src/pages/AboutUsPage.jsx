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
import { TestimonialCard } from "../components/TestimonialCard";
import { IconCard } from "../components/IconCard";

const AboutUsPage = () => {
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
        <h2 className="flex text-2xl md:text-3xl font-bold text-blue-900 justify-center">
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
        visibleItems={6}
        autoPlay={true}
        showDots={true}
        className="py-12 bg-gray-50"
        header={
          <div className="p-14 flex flex-col items-center text-center">
            <div className="text-blue-900 font-bold text-2xl md:text-3xl">
              {cardsClients?.mainHeader}
            </div>
            <div className="font-semibold text-xl">
              {cardsClients?.mainDescription}
            </div>
          </div>
        }
        slides={cardsClients?.items?.map((client) => (
          <IconCard icon={client.icon} altText={client.name} />
        ))}
      />

      <Slider
        visibleItems={3}
        showArrows={true}
        showDots={true}
        swiperParams={{ spaceBetween: 40 }}
        header={
          <div className="p-14 flex flex-col items-center text-center">
            <div className="text-blue-900 font-bold md:text-3xl text-2xl">
              {testimonials?.mainHeader}
            </div>
            <div className="font-semibold text-xl">
              {testimonials?.mainDescription}
            </div>
          </div>
        }
        slides={testimonials?.items?.map((testimonial) => (
          <TestimonialCard {...testimonial} className="custom-testimonial" />
        ))}
      />

      <ContactSection />
    </div>
  );
};

export default AboutUsPage;
