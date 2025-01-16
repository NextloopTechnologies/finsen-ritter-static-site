import React from "react";
import { LogoFRSVG } from "../assets/svg";
import BackgroundImg from "../assets/HomePage/Background.png";

const HeroSection = () => {
  return (
    <div
      className="text-white md:py-20 px-4 min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url("${BackgroundImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
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
      </div>
    </div>
  );
};

export default HeroSection;
