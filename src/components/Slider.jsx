import React, { useState, useEffect, useRef } from "react";
import { StarIcon } from "../assets/svg";

const Slider = ({
  cards,
  backgroundImage,
  backgroundColor,
  cardClass,
  cardContainerClass,
  iconOnly,
  isTestimonial,
}) => {
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
        backgroundImage: backgroundImage
          ? `url("${backgroundImage}")`
          : undefined,
        backgroundColor: backgroundColor || undefined,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% auto",
      }}
    >
      <div className="p-14 flex flex-col items-center text-center">
        <div className="text-blue-900 font-extrabold text-3xl">
          {cards?.mainHeader}
        </div>
        <div className="font-semibold text-xl">{cards?.mainDescription}</div>
      </div>
      <div
        className="overflow-hidden mx-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={sliderRef}
          className={`flex gap-4 overflow-x-auto scroll-smooth py-10 ${cardContainerClass}`}
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {cards?.items?.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center flex-shrink-0 transition-all duration-300 scroll-snap-align-center
              ${
                iconOnly
                  ? "aspect-square p-4"
                  : isTestimonial
                  ? ""
                  : "w-[20%] p-4"
              }
              ${cardClass}
              ${
                index === currentIndex
                  ? "scale-105 shadow-xl bg-gray-300 -translate-y-2"
                  : "bg-white shadow-md"
              }
              hover:scale-110 hover:shadow-2xl hover:-translate-y-3`}
              onClick={() => setCurrentIndex(index)}
            >
              {isTestimonial ? (
                <>
                  <div className="flex justify-between w-full">
                    <div className="flex">
                      {card.icon && (
                        <img
                          src={card.icon || "/placeholder.svg"}
                          alt={card.name || "avatar"}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div className="mx-2">
                        <h4 className="font-semibold text-sm">{card.name}</h4>
                        <p className="text-xs text-gray-500">
                          {card.designation}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {card.rating && (
                        <div className="flex mb-4 ml-4">
                          {[...Array(card.rating)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 text-yellow-400"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 flex-grow text-sm my-2">
                    {card.text}
                  </p>
                </>
              ) : (
                <>
                  <div
                    className={`flex items-center justify-center ${
                      iconOnly ? "w-full h-full p-4" : "w-full h-full"
                    }`}
                  >
                    <img
                      src={card?.icon}
                      alt={card.heading || "client logo"}
                      className={`object-contain ${
                        iconOnly ? "w-full h-full" : "w-1/2"
                      }`}
                    />
                  </div>
                  {!iconOnly && (
                    <>
                      <h3 className="font-bold">{card.heading}</h3>
                      <p className="text-sm">{card.description}</p>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {cards?.items?.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all
            ${index === currentIndex ? "bg-gray-800 w-4" : "bg-gray-400"}
          `}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
