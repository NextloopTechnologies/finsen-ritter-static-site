import React from "react";
import HeroSection from "../components/HeroSection";
import { ServicesHeroBg } from "../assets/images";
import {
  ServicesCostMgmtAnalysis,
  ServicesECP,
  ServicesIndustrialAutomation,
  ServicesLicenseAndPermission,
  ServicesProcurementMgmt,
  ServicesProjectDetailedReport,
  ServicesProjectFeasibility,
  ServicesSafetyConsultancy,
} from "../assets/images";
import ContactSection from "../components/ContactSection";

const Services = () => {
  const services = [
    {
      title: "Engineering Procurement & Construction (EPC)",
      image: ServicesECP,
      link: "#",
    },
    {
      title: "Procurement Management",
      image: ServicesProcurementMgmt,
      link: "#",
    },
    {
      title: "Industrial Automation",
      image: ServicesIndustrialAutomation,
      link: "#",
    },
    {
      title: "Project Feasibility Report",
      image: ServicesProjectFeasibility,
      link: "#",
    },
    {
      title: "Detailed Project Report",
      image: ServicesProjectDetailedReport,
      link: "#",
    },
    {
      title: "Cost Management Analysis & High Tech",
      image: ServicesCostMgmtAnalysis,
      link: "#",
    },
    {
      title: "Safety Consultancy",
      image: ServicesSafetyConsultancy,
      link: "#",
    },
    {
      title: "Health & Environmental Safety & Risk Assessment",
      image: ServicesLicenseAndPermission,
      link: "#",
    },
  ];
  return (
    <div>
      <HeroSection backgroundImage={ServicesHeroBg}></HeroSection>
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#135384]">
          OUR SERVICES
        </h2>
        <h3 className="text-center text-[#363636] font-semibold mx-5">
          Eco-friendly biogas solutions for renewable energy and waste
          management needs.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
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
                <h3 className="text-white font-medium text-sm md:text-base flex-1 pr-2">
                  {service.title}
                </h3>
                <div className="text-white text-4xl">&rarr;</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Services;
