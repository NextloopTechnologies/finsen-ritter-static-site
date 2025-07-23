import React from "react";
import Product from "./Product";
import { ProductMedicalOxygenData } from "../../utils/ExportStaticData";
import { Helmet } from "react-helmet";

export const ProductMedicalOxygen = () => {
  return (
    <>
      <Helmet>
        <title>
          Medical Oxygen Plant (PSA/VPSA....) Solutions | Finsen Ritter{" "}
        </title>
        <meta
          name="description"
          content="Get advanced medical oxygen plants with PSA/VPSA tech Ensure 93–97% purity, 24/7 reliability, low operating costs & full compliance with Finsen Ritter "
        />
      </Helmet>
      <Product
        productData={ProductMedicalOxygenData}
        bgColorDiff="bg-[#00457B]"
      />
    </>
  );
};
