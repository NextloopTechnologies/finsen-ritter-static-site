import React from "react";
import { ServicesLicensePermissionData } from "../../utils/ExportStaticData";
import ServicesPage from "./ServicePageTemplate";

const ServicesLicensePermission = () => {
  return <ServicesPage {...ServicesLicensePermissionData} />;
};

export default ServicesLicensePermission;
