import React from "react";
import ServicesPage from "./ServicePageTemplate";
import { ServicesIndustrialAutomationData } from "../../utils/ExportStaticData";

const ServicesIndustrialAutomation = () => {
  return <ServicesPage {...ServicesIndustrialAutomationData} />;
};

export default ServicesIndustrialAutomation;
