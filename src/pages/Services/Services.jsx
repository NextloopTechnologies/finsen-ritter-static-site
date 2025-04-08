import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/HeroSection";
import ContactSection from "../../components/ContactSection";
import { ServicesCards } from "../../utils/ExportStaticData";
import { getImageUrl } from "../../utils/supabaseStorageHelper";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services | Finsen Ritter</title>
        <meta
          name="description"
          content="Finsen Ritter offers a range of professional services tailored to enhance your operations. Visit us to learn how we can support your success."
        />
      </Helmet>
      <HeroSection
        backgroundImage={getImageUrl("ServicesHeroBg.png")}
        backgroundOpacity="opacity-50"
      >
        <div className="flex flex-col text-center w-full">
          <h1 className="text-3xl font-bold mb-5">OUR SERVICES</h1>
          <p className="text-lg">
            Eco-friendly biogas solutions for renewable energy and waste
            management needs.
          </p>
        </div>
      </HeroSection>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-900">
          OUR SERVICES
        </h1>
        <h2 className="text-center text-[#363636] font-semibold mx-5">
          Eco-friendly biogas solutions for renewable energy and waste
          management needs.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          {ServicesCards.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative overflow-hidden mx-10 my-10"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-b-[1rem]"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-[#135384] rounded-b-[1rem]">
                <h2 className="text-white font-medium text-sm md:text-base flex-1 pr-2">
                  {service.title}
                </h2>
                <div className="text-white text-4xl">&rarr;</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Services;
