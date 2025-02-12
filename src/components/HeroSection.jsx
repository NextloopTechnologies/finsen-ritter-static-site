import React, { useState, useEffect, useRef, useCallback } from "react";

const HeroSection = ({
  children,
  backgroundImage,
  backgroundOpacity = "opacity-0",
  fallbackColor = "#00457B",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  const loadImage = useCallback(() => {
    if (backgroundImage) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => {
        requestAnimationFrame(() => setIsLoaded(true));
      };
    }
  }, [backgroundImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [loadImage]);

  return (
    <section
      ref={containerRef}
      className="relative text-white md:py-20 px-4 min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section with background image"
      style={{ backgroundColor: fallbackColor }}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: isLoaded ? `url("${backgroundImage}")` : "none",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          willChange: "opacity",
        }}
      />

      <div className={`absolute inset-0 bg-black ${backgroundOpacity}`} />

      <div className="relative container mx-auto flex flex-col md:flex-row md:justify-between items-center font-semibold">
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
