import React from "react";
import BackgroundImg from "../assets/HomePage/Background.png";

const HeroSection = ({
  children,
  backgroundImage,
  backgroundOpacity = "opacity-0",
}) => {
  return (
    <div
      className="text-white md:py-20 px-4 min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url("${backgroundImage || BackgroundImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={`absolute inset-0 bg-black ${backgroundOpacity}`}></div>

      <div className="relative container mx-auto flex flex-col md:flex-row md:justify-between items-center font-semibold">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
