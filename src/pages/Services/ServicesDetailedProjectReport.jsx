import React from "react";
import ServicesPage from "./ServicePageTemplate";
import { ServicesDetailedProjectReportData } from "../../utils/ExportStaticData";

const ServicesDetailedProjectReport = () => {
  return <ServicesPage {...ServicesDetailedProjectReportData} />;
};

export default ServicesDetailedProjectReport;
