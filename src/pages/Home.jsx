import React from "react";
import AboutUs from "../components/AboutUs";
import { LogoFRSVG } from "../assets/svg";
import DemoVideo from "../components/DemoVideo";
import BackgroundImg from "../assets/HomePage/Background.png";
import Slider from "../components/Slider";
import OurBiogasSection from "../components/OurBiogasSection";
import { ProductSectionBgImg } from "../assets/images";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import {
  cardsClients,
  productCards,
  testimonials,
} from "../utils/ExportStaticData";

const Home = () => {
  return (
    <div className="flex flex-col gap-28">
      <HeroSection backgroundImage={BackgroundImg}>
        <div className="order-1 md:order-2 mb-8 md:mb-0 w-full md:w-auto md:mr-10">
          <LogoFRSVG className="w-[60vw] md:w-[30vw] h-auto mx-auto md:mx-0" />
        </div>

        <div className="order-2 md:order-1 text-center md:text-left w-full md:w-auto">
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Empowering Sustainable
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Energy with Advanced
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Biogas Solutions
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-normal mt-4">
              Transforming organic waste into clean, renewable{" "}
              <br className="hidden md:block" /> energy for a sustainable
              future.
            </p>
            <div className="mt-6">
              <button className="bg-[#135384] hover:bg-[rgb(17,25,60)] text-white py-3 px-8 rounded-lg transition-colors duration-300 text-lg md:text-xl w-full md:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </HeroSection>

      <DemoVideo />

      <AboutUs />

      <Slider
        cards={productCards}
        backgroundImage={ProductSectionBgImg}
        cardClass="rounded-lg w-[80%] md-[15%]"
      />

      <OurBiogasSection />

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

export default Home;
