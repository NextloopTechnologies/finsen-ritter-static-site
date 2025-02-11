import React from "react";
import ServicesPage from "./ServicePageTemplate";
import { ServicesSafetyConsultancyData } from "../../utils/ExportStaticData";

const ServicesSafetyConsultancy = () => {
  return <ServicesPage {...ServicesSafetyConsultancyData} />;
};

export default ServicesSafetyConsultancy;
