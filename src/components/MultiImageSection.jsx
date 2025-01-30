import React from "react";

const MultiImageSection = ({
  contentHeading,
  images = [],
  contentSections = [],
  containerClassName = "flex flex-col items-center md:p-5",
  contentClassName = "px-5 max-w-full md:max-w-[50vw]",
  orientation = "left",
  bgColoredCover = "false",
}) => {
  const isLeft = orientation === "left";

  const renderContentSection = (section) => (
    <div className="mb-8 last:mb-0 mx-5 md:mx-0">
      {section.title && (
        <div className="text-lg font-bold mb-4">{section.title}</div>
      )}
      {section.bulletPoints ? (
        <ul className="list-disc pl-5 space-y-2">
          {section.bulletPoints.map((bullet, index) => (
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
      ) : (
        <div>{section.description}</div>
      )}
    </div>
  );

  const renderImage = (img, index) => (
    <div key={index} className="relative mt-4 md:mt-0">
      <img
        src={img}
        alt={`Section image ${index + 1}`}
        className={`h-auto w-full md:w-96 ${
          bgColoredCover === "true" ? "bg-[#135384] bg-opacity-10" : ""
        } p-5 md:p-0`}
      />
    </div>
  );

  return (
    <div className={containerClassName}>
      <div className="flex flex-col md:flex-row items-center">
        {/* Mobile View: Interleaved sections and images */}
        <div className="w-full md:hidden">
          {contentSections.map((section, index) => (
            <React.Fragment key={index}>
              {renderContentSection(section)}
              {images[index] && renderImage(images[index], index)}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop View: Original layout */}
        <div className="hidden md:flex w-full">
          {isLeft ? (
            <>
              <div className={`${contentClassName}`}>
                {contentHeading && (
                  <div className="text-2xl font-bold text-blue-900 mb-8">
                    {contentHeading}
                  </div>
                )}
                {contentSections.map(renderContentSection)}
              </div>
              <div className="w-full md:w-auto grid grid-cols-1 gap-4">
                {images.map(renderImage)}
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-auto grid grid-cols-1 gap-4">
                {images.map(renderImage)}
              </div>
              <div className={`${contentClassName}`}>
                {contentSections.map(renderContentSection)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiImageSection;
