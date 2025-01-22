import React from "react";

const FlexContentImageSection = ({
  mainHeading,
  image,
  title,
  description,
  numberedSections,
  containerClassName = "flex flex-col items-center p-5 self-center",
  contentClassName = "bg-[#135384] bg-opacity-10 p-10 border max-w-[50vw] my-20",
  orientation = "left",
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
    }
    return <div>{description}</div>;
  };

  return (
    <div className={containerClassName}>
      {mainHeading && (
        <div className="flex flex-col text-3xl font-bold text-blue-900 text-center max-w-[60vw] -mb-8">
          {mainHeading}
        </div>
      )}
      <div className="flex flex-row items-center">
        {isLeft && (
          <div
            className={`${contentClassName} ${isLeft && "rounded-bl-[4rem]"}`}
          >
            <div className="text-3xl font-bold text-blue-900 mb-4">{title}</div>
            {renderContent()}
          </div>
        )}
        <div className="relative">
          <img src={image} alt="Location on map" className="h-auto w-96" />
        </div>
        {!isLeft && (
          <div
            className={`${contentClassName} ${!isLeft && "rounded-br-[4rem]"}`}
          >
            <div className="text-3xl font-bold text-blue-900 mb-4">{title}</div>
            {renderContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlexContentImageSection;
