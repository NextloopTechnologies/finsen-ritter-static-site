import React from "react";

const TextContainer = ({
  text,
  arrowPosition,
  arrowOffset = "50%",
  className,
  arrowColor = "#D9D9D933",
}) => {
  const getArrowStyles = () => {
    switch (arrowPosition) {
      case "arrow-bottom":
        return {
          bottom: "-8px",
          left: arrowOffset,
          transform: "translateX(-50%)",
          borderWidth: "8px 8px 0 8px",
          borderColor: `${arrowColor} transparent transparent transparent`,
        };
      case "arrow-left":
        return {
          left: "-8px",
          top: arrowOffset,
          transform: "translateY(-50%)",
          borderWidth: "8px 8px 8px 0",
          borderColor: `transparent ${arrowColor} transparent transparent`,
        };
      case "arrow-top":
        return {
          top: "-8px",
          left: arrowOffset,
          transform: "translateX(-50%)",
          borderWidth: "0 8px 8px 8px",
          borderColor: `transparent transparent ${arrowColor} transparent`,
        };
      case "arrow-right":
        return {
          right: "-8px",
          top: arrowOffset,
          transform: "translateY(-50%)",
          borderWidth: "8px 0 8px 8px",
          borderColor: `transparent transparent transparent ${arrowColor}`,
        };
      default:
        return {};
    }
  };

  return (
    <div
      className={`relative bg-[#D9D9D933]  p-4 rounded-md w-full ${className}`}
    >
      <div
        className="absolute w-0 h-0 border-solid bg-transparent"
        style={getArrowStyles()}
      ></div>
      <div className="text-sm text-white">{text}</div>
    </div>
  );
};

export default TextContainer;
