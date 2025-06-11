import React from "react";
import { homeAssets } from "../assets";

const DemoVideo = () => {
  return (
    <div className="flex justify-center px-4 md:px-0 -mt-40 md:-mt-32">
      <div className="w-full md:w-[70%]">
        <video controls className="rounded-xl w-full h-auto" playsInline>
          <source
            src={homeAssets.homeVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default DemoVideo;
