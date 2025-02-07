import React from "react";
import ServicesPage from "./ServicePageTemplate";
import { ServicesCostManagementData } from "../../utils/ExportStaticData";

const ServicesCostManagement = () => {
  return <ServicesPage {...ServicesCostManagementData} />;
};

export default ServicesCostManagement;
