import React, { useState, useEffect, useRef } from "react";
import { ProductSectionBgImg } from "../assets/images";

const Slider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const visibleCards = 4;
  const scrollInterval = 3000;

  const calculateWidths = () => {
    if (!sliderRef.current) return { cardWidth: 0, totalWidth: 0 };
    const totalWidth = sliderRef.current.offsetWidth;
    const cardWidth = totalWidth / visibleCards;
    return { cardWidth, totalWidth };
  };

  const centerActiveCard = () => {
    if (!sliderRef.current) return;

    const { cardWidth, totalWidth } = calculateWidths();
    const centerOffset = (totalWidth - cardWidth) / 2;
    const scrollPosition =
      currentIndex * cardWidth - centerOffset + cardWidth / 2;

    sliderRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= cards.length ? 0 : prevIndex + 1
      );
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [cards.length, isHovered]);

  useEffect(() => {
    centerActiveCard();
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      centerActiveCard();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= cards.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative w-full py-10"
      style={{
        backgroundImage: `url("${ProductSectionBgImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% auto",
      }}
    >
      {/* <button
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-r-lg shadow-md hover:bg-white"
      >
        ←
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-l-lg shadow-md hover:bg-white"
      >
        →
      </button> */}
      <div className="p-14 flex flex-col items-center text-center">
        <div className="text-blue-900 font-extrabold text-3xl">OUR PRODUCT</div>
        <div className=" font-semibold text-xl">
          Eco-friendly biogas solutions for renewable energy and waste
          management needs.
        </div>
      </div>
      <div
        className="overflow-hidden mx-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth py-10"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-[20%] flex-shrink-0 rounded-lg p-4 text-center
                transition-all duration-300 scroll-snap-align-center 
                ${
                  index === currentIndex
                    ? "scale-105 shadow-xl bg-gray-300 -translate-y-2"
                    : "bg-white shadow-md"
                }
                hover:scale-110 hover:shadow-2xl hover:-translate-y-3`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={card?.icon}
                alt={card.heading}
                className="mb-2 mx-auto h-auto w-[50%]"
              />
              <h3 className="font-bold">{card.heading}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all
              ${index === currentIndex ? "bg-gray-800 w-4" : "bg-white"}
            `}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
