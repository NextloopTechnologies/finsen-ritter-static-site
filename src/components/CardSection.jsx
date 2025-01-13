import React from "react";
import DemoImage from "../assets/demoImage.png";

const CardSection = ({ title, cards }) => {
  return (
    <div className="card-section text-center py-20">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-8">{title}</h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card bg-white p-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-xl h-72 max-w-sm mx-auto"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src={DemoImage}
                alt="placeholder"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>

            {/* Card Title */}
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>

            {/* Card Description */}
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
