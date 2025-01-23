import React from "react";
import { MajorFeatures } from "../assets/svg";
import TextContainer from "./TextContainer";

const CircularFeatures = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#135384] relative">
      <div className="relative w-96 h-full">
        <div className="absolute inset-0 flex justify-center items-center">
          <MajorFeatures width={300} />
        </div>
        <TextContainer
          text={
            <>
              <div className="font-medium text-sm">
                High-Efficiency Anaerobic Digestion (AD) System:
              </div>
              <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                <li>
                  Converts organic waste (e.g., agricultural residues, municipal
                  solid waste, and food waste) into biogas.
                </li>
                <li>
                  Operates under optimal conditions for maximum biogas yield.
                </li>
                <li>Low energy consumption and high output efficiency.</li>
              </ul>
            </>
          }
          arrowPosition="arrow-right"
          arrowOffset="50%"
          className="absolute -left-[90%] top-[30%]"
        />

        <TextContainer
          text={
            <>
              <div className="font-medium text-sm">
                Advanced Biogas Upgrading Technology:
              </div>
              <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                <li>
                  Uses Vaccum Pressure Swing Adsorption (VPSA) along with the
                  water scrubbing technologies to remove impurities such as CO2,
                  H2S, and moisture.
                </li>
                <li>
                  Delivers methane purity levels of over 96%, suitable for
                  vehicle fuel or pipeline injection.
                </li>
              </ul>
            </>
          }
          arrowPosition="arrow-right"
          arrowOffset="10%"
          className="absolute -left-[85%] top-[35%]"
        />

        <TextContainer
          text={
            <>
              <div className="font-medium text-sm">Customizable Capacity</div>
              <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                <li>
                  Designed to cater to medium and large-scale industrial
                  requirements
                </li>
                <li>
                  Modular configurations allow scalability to meet future needs
                </li>
              </ul>
            </>
          }
          arrowPosition="arrow-left"
          arrowOffset="10%"
          className="absolute left-[85%] top-[8%]"
        />

        <TextContainer
          text={
            <>
              <div className="font-medium text-sm">
                Robust Automation and Control Systems:
              </div>
              <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                <li>
                  Equipped with Industry 4.0-compatible control systems for
                  real-time monitoring and data analytics.
                </li>
                <li>
                  Ensures seamless operation with minimal manual intervention.
                </li>
              </ul>
            </>
          }
          arrowPosition="arrow-left"
          arrowOffset="70%"
          className="absolute left-[90%] -top-[50%]"
        />

        <TextContainer
          text={
            <>
              <div className="font-medium text-sm">
                Sustainability-Oriented Design:
              </div>
              <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                <li>
                  Reduces greenhouse gas emissions by converting waste into
                  energy.
                </li>
                <li>
                  Produces nutrient-rich organic slurry as a by-product, ideal
                  for use as bio-fertilizer.
                </li>
              </ul>
            </>
          }
          arrowPosition="arrow-bottom"
          arrowOffset="50%"
          className="absolute left-[0%] -top-[103%]"
        />
      </div>
    </div>
  );
};

export default CircularFeatures;
