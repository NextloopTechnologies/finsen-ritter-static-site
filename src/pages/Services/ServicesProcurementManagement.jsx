import React from "react";
import ServicesPage from "./ServicePageTemplate";
import { ServicesProcurementManagementData } from "../../utils/ExportStaticData";

const ServicesProcurementManagement = () => {
  return <ServicesPage {...ServicesProcurementManagementData} />;
};

export default ServicesProcurementManagement;
