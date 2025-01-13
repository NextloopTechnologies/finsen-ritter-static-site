import React from "react";
export const LogoFRSVG = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="300"
      height="300"
      className={className}
    >
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="#003d66"
        stroke-width="6"
        fill="none"
        stroke-dasharray="502.4"
        stroke-dashoffset="502.4"
        transform="rotate(-90 100 100)"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="502.4"
          to="0"
          dur="1.5s"
          repeatCount="1"
          fill="freeze"
        />
      </circle>

      <g opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          begin="1.5s"
          dur="1s"
          fill="freeze"
        />
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="central"
          font-family="Arial, sans-serif"
          font-size="85"
          font-weight="100"
          fill="#003d66"
        >
          <tspan dx="" dy="-13">
            F
          </tspan>
          <tspan dx="-15" dy="26">
            R
          </tspan>
        </text>
      </g>
    </svg>
  );
};
