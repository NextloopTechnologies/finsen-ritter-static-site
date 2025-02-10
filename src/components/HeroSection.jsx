import React, { useState, useEffect } from "react";

const HeroSection = ({
  children,
  backgroundImage,
  backgroundOpacity = "opacity-0",
}) => {
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setBgImage(backgroundImage);
  }, [backgroundImage]);

  return (
    <div
      className="text-white md:py-20 px-4 min-h-screen flex flex-col justify-center relative"
      style={{
        backgroundImage: bgImage ? `url("${bgImage}")` : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "opacity 0.5s ease-in-out",
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
