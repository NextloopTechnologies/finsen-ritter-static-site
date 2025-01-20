import React from "react";

const FlexContentImageSection = ({
  image,
  title,
  description,
  containerClassName = "flex p-5 self-center",
  contentClassName = "bg-[#135384] bg-opacity-10 p-10 border max-w-[50vw] my-20",
  orientation = "left",
}) => {
  const isLeft = orientation === "left";
  console.log("isLeft", isLeft);

  return (
    <div className={containerClassName}>
      <div className={`flex ${"flex-row"} items-center`}>
        {isLeft && (
          <div
            className={`${contentClassName} ${isLeft && "rounded-bl-[4rem]"}`}
          >
            <div className="text-3xl font-bold text-blue-900 mb-4">{title}</div>
            <div>{description}</div>
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
            <div>{description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlexContentImageSection;
