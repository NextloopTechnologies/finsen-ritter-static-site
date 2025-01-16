import React from "react";
import AboutUsLeftImg from "../assets/AboutUs/AboutUsLeftImg.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-4 md:p-8 mx-4 md:mx-32">
      <div className="w-full md:w-[65vh] relative">
        <div className="absolute top-0 left-0 w-[60%] h-[90%] bg-blue-900 transform -translate-x-2 md:-translate-x-4 translate-y-4 md:translate-y-6 rounded-s-md" />

        <div className="relative">
          <img
            src={AboutUsLeftImg}
            alt="Rural landscape with fields"
            className="w-full h-auto relative z-10"
          />
        </div>
      </div>

      <div className="w-full md:max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6 text-center md:text-left">
          ABOUT US
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 font-semibold text-center md:text-left">
          Finsen Ritter Technologies specializes in industrial turnkey
          solutions, offering expertise in the design, supply, installation, and
          testing of chemical and gas plants. With a presence in Europe, Africa,
          and India, and a design center in Amsterdam, we focus on diverse
          sectors including oxygen, nitrogen, hydrogen, UVGI, water treatment,
          brewing, solar, biogas, and noise monitoring. Committed to innovation
          and Industry 4.0 standards, we deliver cutting-edge, high-quality
          solutions. Our vision is to be the leading provider of industrial
          gases and engineering solutions, offering eco-friendly innovations
          that add value to our clients.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-blue-900 text-white px-6 md:px-8 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
