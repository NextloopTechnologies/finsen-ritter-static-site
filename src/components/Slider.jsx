import React, { useState, useEffect, useRef, useCallback } from "react";
import { StarIcon } from "../assets/svg";

const Slider = ({
  cards,
  backgroundImage,
  backgroundColor,
  cardClass,
  cardContainerClass,
  iconOnly,
  isTestimonial,
  visibleitems = 4,
}) => {
  const [virtualIndex, setVirtualIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const scrollInterval = 3000;
  const originalLength = cards.items.length;
  const isTransitioning = useRef(false);

  const extendedItems =
    originalLength > visibleitems
      ? [...cards.items, ...cards.items, ...cards.items]
      : cards.items;

  const calculateWidths = useCallback(() => {
    if (!sliderRef.current) return { cardWidth: 0, totalWidth: 0 };
    const totalWidth = sliderRef.current.offsetWidth;
    return { cardWidth: totalWidth / visibleitems, totalWidth };
  }, [visibleitems]);

  const centerVirtualIndex = useCallback(
    (targetIndex, behavior = "smooth") => {
      if (!sliderRef.current || isTransitioning.current) return;
      isTransitioning.current = true;

      const { cardWidth } = calculateWidths();
      const basePosition = targetIndex * cardWidth;
      const middleSectionStart = originalLength;
      const middleSectionEnd = originalLength * 2;

      let finalPosition = basePosition;

      if (basePosition < middleSectionStart * cardWidth) {
        finalPosition += originalLength * cardWidth;
      } else if (basePosition >= middleSectionEnd * cardWidth) {
        finalPosition -= originalLength * cardWidth;
      }

      sliderRef.current.scrollTo({
        left: finalPosition,
        behavior: behavior === "auto" ? "auto" : "smooth",
      });

      setTimeout(() => {
        isTransitioning.current = false;
      }, 500);
    },
    [calculateWidths, originalLength]
  );

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setVirtualIndex((prev) => (prev + 1) % originalLength);
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [isHovered, originalLength]);

  useEffect(() => {
    centerVirtualIndex(virtualIndex);
  }, [virtualIndex, centerVirtualIndex]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      if (isTransitioning.current) return;

      const { cardWidth } = calculateWidths();
      const middleSectionStart = originalLength * cardWidth;
      const middleSectionEnd = originalLength * 2 * cardWidth;
      const currentPos = slider.scrollLeft;

      if (currentPos < middleSectionStart) {
        slider.scrollTo({
          left: currentPos + originalLength * cardWidth,
          behavior: "auto",
        });
      } else if (currentPos >= middleSectionEnd) {
        slider.scrollTo({
          left: currentPos - originalLength * cardWidth,
          behavior: "auto",
        });
      }

      const middlePos = currentPos - middleSectionStart;
      const newIndex = Math.round(middlePos / cardWidth) % originalLength;
      setVirtualIndex(newIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [calculateWidths, originalLength]);

  const handleDotClick = (index) => {
    setVirtualIndex(index);
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
        backgroundSize: "cover",
      }}
    >
      <div className="p-14 flex flex-col items-center text-center">
        <div className="text-blue-900 font-extrabold text-3xl">
          {cards?.mainHeader}
        </div>
        <div className="font-semibold text-xl">{cards?.mainDescription}</div>
      </div>
      <div
        className="overflow-hidden mx-4 md:mx-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={sliderRef}
          className={`flex gap-4 overflow-x-auto scroll-smooth py-10 ${cardContainerClass}`}
          style={{
            scrollSnapType: "x mandatory",
            overflowX: "hidden",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {extendedItems.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col mx-1 items-center justify-center flex-shrink-0 transition-all duration-300 scroll-snap-align-center
                ${
                  iconOnly
                    ? "aspect-square p-4"
                    : isTestimonial
                    ? "mx-2"
                    : "w-[80%] md:w-[20%] p-2 md:p-4"
                }
                ${cardClass}
                ${
                  index % originalLength === virtualIndex
                    ? "scale-105 shadow-xl bg-gray-300 -translate-y-2"
                    : "bg-white shadow-md"
                }
                hover:scale-110 hover:shadow-2xl hover:-translate-y-3`}
            >
              {isTestimonial ? (
                <>
                  <div className="flex justify-between w-full flex-col md:flex-row gap-2 md:gap-0">
                    <div className="flex items-center">
                      {card.icon && (
                        <img
                          src={card.icon || "/placeholder.svg"}
                          alt={card.name || "avatar"}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
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
        {cards.items?.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all
              ${index === virtualIndex ? "bg-gray-800 w-4" : "bg-gray-400"}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
