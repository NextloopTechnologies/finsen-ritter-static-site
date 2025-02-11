import React from "react";
import { ServicesProjectFeasibilityData } from "../../utils/ExportStaticData";
import ServicesPage from "./ServicePageTemplate";

const ServicesProjectFeasibility = () => {
  return <ServicesPage {...ServicesProjectFeasibilityData} />;
};

export default ServicesProjectFeasibility;
