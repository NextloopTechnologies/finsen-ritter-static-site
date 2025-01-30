import React from "react";
import HeroSection from "../../components/HeroSection";
import {
  ServicesEcpEnggExcellence,
  ServicesEcpSeamlessConstruction,
  ServicesEcpStrategicProcurement,
  ServiceSubPageEcpHeroBg,
} from "../../assets/images";
import { ServicesText } from "../../utils/ExportText";
import MultiImageSection from "../../components/MultiImageSection";
import ContactSection from "../../components/ContactSection";
import IconTextCards from "../../components/IconTextCard";
import { IconTextCardContent } from "../../utils/ExportStaticData";

const ServicesEpc = () => {
  return (
    <div>
      <HeroSection backgroundImage={ServiceSubPageEcpHeroBg} />

      <section className="text-center px-5 md:px-10 py-20">
        <h2 className="text-xl md:text-2xl font-bold text-blue-900">
          ENGINEERING, PROCUREMENT, AND CONSTRUCTION (EPC)
        </h2>
        <p className="text-normal font-normal mt-4">
          <span className="font-bold">
            Engineering, Procurement, and Construction (EPC) Services
          </span>{" "}
          At <span className="font-semibold">Finsen Ritter Technologies</span>,
          we provide comprehensive{" "}
          <span className="font-semibold">
            EPC (Engineering, Procurement, and Construction)
          </span>{" "}
          services tailored to meet the unique requirements of industrial
          projects across diverse sectors. Our end-to-end solutions ensure
          seamless project execution, from concept to commissioning, with an
          unwavering focus on quality, safety, and efficiency.
        </p>
      </section>

      <MultiImageSection
        contentHeading="Our EPC Services Include:"
        images={[
          ServicesEcpEnggExcellence,
          ServicesEcpSeamlessConstruction,
          ServicesEcpStrategicProcurement,
        ]}
        title="ADVANTAGES"
        contentSections={ServicesText.OurEcpServices}
        orientation="left"
      />
      <IconTextCards
        title={
          <p
            className={`text-[#135384] uppercase font-bold text-center max-w-[1306px]`}
          >
            Key Industries We Serve:
          </p>
        }
        data={IconTextCardContent}
      />
      <div className="text-left px-10 md:px-20 py-10 my-16">
        <h3 className="text-xl font-semibold">What Sets Us Apart?</h3>
        <p className="text-normal font-normal mt-2">
          At Finsen Ritter Technologies, we go beyond traditional EPC services
          by offering a collaborative approach that ensures transparency,
          flexibility, and alignment with your strategic goals. Our commitment
          to excellence drives us to deliver projects that exceed expectations,
          creating long-lasting value for our clients.
        </p>
        <h3 className="text-xl font-semibold mt-6">
          Transform Your Vision into Reality
        </h3>
        <p className="text-normal font-normal mt-2">
          Partner with Finsen Ritter Technologies for reliable and innovative
          EPC solutions. Contact us today to discuss your project requirements
          and explore how we can bring your ideas to life.
        </p>
        <p className="text-normal font-normal mt-2">
          This eye-catching and professional content is designed to communicate
          your EPC services effectively while engaging potential clients on your
          website. Let me know if you’d like additional modifications!
        </p>
      </div>

      <ContactSection />
    </div>
  );
};

export default ServicesEpc;
