import React from "react";

const IconTextCard = ({ descp, icon, title }) => {
  return (
    <div className="group relative flex items-center min-h-[120px] hover:transform hover:scale-[1.02] transition-all duration-300">
      {/* Icon Container */}
      <div className="absolute left-0 -translate-x-1/2 z-10 w-[90px] h-[90px] flex-shrink-0">
        <img
          src={icon}
          alt={title || "service-icon"}
          className="w-full h-full p-4 bg-white rounded-lg shadow-xl shadow-gray-400/50 border-2 border-gray-100"
        />
      </div>

      {/* Content Card */}
      <div className="md:w-full pl-20 pr-6 py-6 bg-[#135384] rounded-lg shadow-xl shadow-gray-400/50 overflow-hidden">
        {title && (
          <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        )}
        <p className="text-white/90 text-base leading-relaxed">{descp}</p>
      </div>
    </div>
  );
};

const IconTextCards = ({ title, data }) => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-opacity-20 bg-[#135384]">
      <div className="max-w-7xl mx-auto md:px-40 px-12 ml-2">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 md:mb-16">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-20">
          {data?.map((item, index) => (
            <IconTextCard
              key={index}
              {...item}
              className={index % 2 === 0 ? "md:pr-4" : "md:pl-4"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconTextCards;
