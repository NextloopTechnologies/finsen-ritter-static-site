import React, { useEffect, useState } from "react";

const FeatureBox = ({
  id,
  title,
  points,
  targetPathId, // ID of the SVG path to point to
  boxPosition = { x: 0, y: 0 },
}) => {
  const [targetCoords, setTargetCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateTargetPosition = () => {
      const targetPath = document.getElementById(targetPathId);
      if (targetPath) {
        // Get the SVG path's bounding box
        const bbox = targetPath.getBBox();
        // Calculate center point of the path
        const centerX = bbox.x + bbox.width / 2;
        const centerY = bbox.y + bbox.height / 2;
        setTargetCoords({ x: centerX, y: centerY });
      }
    };

    updateTargetPosition();
    // Update position on window resize
    window.addEventListener("resize", updateTargetPosition);
    return () => window.removeEventListener("resize", updateTargetPosition);
  }, [targetPathId]);

  // Calculate control point for the curve
  const controlPoint = {
    x: (boxPosition.x + targetCoords.x) / 2,
    y: (boxPosition.y + targetCoords.y) / 2 - 50, // Offset for better curve
  };

  return (
    <div className="relative" id={`feature-${id}`}>
      {/* SVG for the pointer line */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 0, pointerEvents: "none" }}
      >
        <defs>
          <marker
            id={`arrowhead-${id}`}
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.4)" />
          </marker>
        </defs>

        {/* Curved pointer line */}
        <path
          d={`M ${boxPosition.x + 150} ${boxPosition.y + 50} 
              Q ${controlPoint.x} ${controlPoint.y} 
              ${targetCoords.x} ${targetCoords.y}`}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          fill="none"
          markerEnd={`url(#arrowhead-${id})`}
        />
      </svg>

      {/* Feature box content */}
      <div
        className="w-[300px] bg-[#004472] bg-opacity-80 p-4 rounded-lg"
        style={{
          position: "absolute",
          left: boxPosition.x,
          top: boxPosition.y,
        }}
      >
        <div className="text-white font-semibold mb-2">{title}</div>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li
              key={index}
              className="text-white text-sm flex items-start gap-2"
            >
              <span className="text-white">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FeatureBoxesContainer = ({ features }) => {
  return (
    <div className="relative w-[1200px] h-[800px]">
      {features.map((feature, index) => (
        <FeatureBox
          key={index}
          id={feature.id}
          {...feature}
          boxPosition={{
            x: feature.position?.x || 50 + index * 50,
            y: feature.position?.y || 50 + index * 50,
          }}
        />
      ))}
    </div>
  );
};

export default FeatureBoxesContainer;
