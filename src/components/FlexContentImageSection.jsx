import React from "react";

const FlexContentImageSection = ({
  mainHeading,
  image,
  title,
  description,
  numberedSections,
  bulletPoints,
  containerClassName = "flex flex-col items-center md:p-5 self-center",
  contentClassName = "bg-[#135384] bg-opacity-10 p-10 border max-w-full md:max-w-[50vw] md:my-20",
  orientation = "left",
  bgColoredCover = "false",
}) => {
  const isLeft = orientation === "left";

  const renderContent = () => {
    if (numberedSections) {
      return (
        <ol className="list-decimal pl-5 space-y-1">
          {numberedSections.map((section, index) => (
            <li key={index} className="text-gray-900">
              <span className="font-semibold">{section.title}:</span>
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-gray-700">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      );
    } else if (bulletPoints) {
      return (
        <ul className="list-disc pl-5 space-y-2">
          {bulletPoints.map((bullet, index) => (
            <li key={index} className="text-gray-700">
              {typeof bullet === "object" ? (
                <>
                  <span className="font-semibold text-gray-900">
                    {bullet.title}
                  </span>
                  {bullet.description && (
                    <span className="ml-1">{bullet.description}</span>
                  )}
                  {bullet.subBullets && (
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      {bullet.subBullets.map((subBullet, subIndex) => (
                        <li key={subIndex} className="text-gray-700">
                          {subBullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                bullet
              )}
            </li>
          ))}
        </ul>
      );
    }
    return <div>{description}</div>;
  };

  return (
    <div className={containerClassName}>
      {mainHeading && (
        <div className="text-2xl font-bold text-blue-900 text-center md:max-w-[50vw] max-w-[85vw] -mb-8">
          {mainHeading}
        </div>
      )}
      <div className="flex flex-col md:flex-row items-center">
        {isLeft ? (
          <>
            <div className="w-full md:w-auto relative order-2 md:order-1">
              <img
                src={image}
                alt="Location on map"
                className={`h-auto w-full md:w-96 ${
                  bgColoredCover === "true" ? "bg-[#135384] bg-opacity-10" : ""
                } md:bg-transparent p-5 md:p-0`}
              />
            </div>
            <div
              className={`w-full md:w-auto order-1 md:order-2 ${contentClassName} ${
                isLeft && "rounded-bl-md md:rounded-br-[4rem]"
              }`}
            >
              <div className="text-2xl font-bold text-blue-900 mb-4">
                {title}
              </div>
              {renderContent()}
            </div>
          </>
        ) : (
          <>
            <div
              className={`w-full md:w-auto ${contentClassName} ${
                !isLeft && "rounded-br-md md:rounded-bl-[4rem]"
              }`}
            >
              <div className="text-2xl font-bold text-blue-900 mb-4">
                {title}
              </div>
              {renderContent()}
            </div>
            <div className="w-full md:w-auto relative">
              <img
                src={image}
                alt="Location on map"
                className={`h-auto w-full md:w-96 ${
                  bgColoredCover === "true" ? "bg-[#135384] bg-opacity-10" : ""
                } md:bg-transparent p-5 md:p-0`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FlexContentImageSection;
