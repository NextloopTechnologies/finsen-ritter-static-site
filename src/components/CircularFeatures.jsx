import React from "react";
import {
  DynamicAscendingNumbers,
  MajorFeatures,
  MultiColorLine,
} from "../assets/svg";
import TextContainer from "./TextContainer";
import useIsMobile from "../hooks/useIsMobile";

const CircularFeatures = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex justify-center items-center min-h-screen relative bg-[#135384]">
      {isMobile ? (
        <div className="relative w-full min-h-screen mt-10 md:-mb-20 mr-2 md:mr-0">
          <div className="flex flex-col items-center">
            <p className="my-8 text-2xl text-white font-bold">
              MAJOR FEATURES :
            </p>
            <MultiColorLine width={200} />
          </div>
          <div className="flex justify-between">
            <div>
              <DynamicAscendingNumbers
                numbers={5}
                spacings={[250, 200, 150, 180]}
                lineWidth={5}
                height={900}
              />
            </div>
            <div>
              <TextContainer
                text={
                  <>
                    <div className="font-medium text-sm">
                      High-Efficiency Anaerobic Digestion (AD) System:
                    </div>
                    <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                      <li>
                        Converts organic waste (e.g., agricultural residues,
                        municipal solid waste, and food waste) into biogas.
                      </li>
                      <li>
                        Operates under optimal conditions for maximum biogas
                        yield.
                      </li>
                      <li>
                        Low energy consumption and high output efficiency.
                      </li>
                    </ul>
                  </>
                }
                arrowPosition="arrow-left"
                arrowOffset="15%"
                className="my-4"
              />

              <TextContainer
                text={
                  <>
                    <div className="font-medium text-sm">
                      Advanced Biogas Upgrading Technology:
                    </div>
                    <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                      <li>
                        Uses Vacuum Pressure Swing Adsorption (VPSA) along with
                        water scrubbing technologies to remove impurities such
                        as CO2, H2S, and moisture.
                      </li>
                      <li>
                        Delivers methane purity levels of over 96%, suitable for
                        vehicle fuel or pipeline injection.
                      </li>
                    </ul>
                  </>
                }
                arrowPosition="arrow-left"
                arrowOffset="20%"
                className="my-4"
              />

              <TextContainer
                text={
                  <>
                    <div className="font-medium text-sm">
                      Customizable Capacity
                    </div>
                    <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                      <li>
                        Designed to cater to medium and large-scale industrial
                        requirements.
                      </li>
                      <li>
                        Modular configurations allow scalability to meet future
                        needs.
                      </li>
                    </ul>
                  </>
                }
                arrowPosition="arrow-left"
                arrowOffset="25%"
                className="my-4"
              />

              <TextContainer
                text={
                  <>
                    <div className="font-medium text-sm">
                      Robust Automation and Control Systems:
                    </div>
                    <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                      <li>
                        Equipped with Industry 4.0-compatible control systems
                        for real-time monitoring and data analytics.
                      </li>
                      <li>
                        Ensures seamless operation with minimal manual
                        intervention.
                      </li>
                    </ul>
                  </>
                }
                arrowPosition="arrow-left"
                arrowOffset="15%"
                className="my-4"
              />

              <TextContainer
                text={
                  <>
                    <div className="font-medium text-sm">
                      Sustainability-Oriented Design:
                    </div>
                    <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                      <li>
                        Reduces greenhouse gas emissions by converting waste
                        into energy.
                      </li>
                      <li>
                        Produces nutrient-rich organic slurry as a by-product,
                        ideal for use as bio-fertilizer.
                      </li>
                    </ul>
                  </>
                }
                arrowPosition="arrow-left"
                arrowOffset="15%"
                className="my-4"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-96 min-h-screen mt-10 -mb-20">
          <div className="flex flex-col items-center">
            <p className="my-8 text-4xl text-white font-bold">
              MAJOR FEATURES :
            </p>
            <MultiColorLine width={400} />
          </div>
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
                    Converts organic waste (e.g., agricultural residues,
                    municipal solid waste, and food waste) into biogas.
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
            className="absolute top-52 -left-[90%]"
          />

          <TextContainer
            text={
              <>
                <div className="font-medium text-sm">
                  Advanced Biogas Upgrading Technology:
                </div>
                <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                  <li>
                    Uses Vacuum Pressure Swing Adsorption (VPSA) along with
                    water scrubbing technologies to remove impurities such as
                    CO2, H2S, and moisture.
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
            className="absolute -left-[80%] top-60"
          />

          <TextContainer
            text={
              <>
                <div className="font-medium text-sm">Customizable Capacity</div>
                <ul className="list-disc space-y-1 text-sm mt-2 pl-5">
                  <li>
                    Designed to cater to medium and large-scale industrial
                    requirements.
                  </li>
                  Modular configurations allow scalability to meet future needs.
                </ul>
              </>
            }
            arrowPosition="arrow-left"
            arrowOffset="10%"
            className="absolute left-[80%] top-20"
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
            arrowOffset="40%"
            className="absolute left-[90%] -top-60"
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
            className="absolute left-0 -top-[37rem]"
          />
        </div>
      )}
    </div>
  );
};

export default CircularFeatures;
