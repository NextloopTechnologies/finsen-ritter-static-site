import React from "react";
import Product from "./Product";
import { ProductMedicalOxygenData } from "../../utils/ExportStaticData";

export const ProductMedicalOxygen = () => {
  console.log('ProductMedicalOxygenData', ProductMedicalOxygenData)
  return (
    <Product
      productData={ProductMedicalOxygenData}
      bgColorDiff="bg-[#00457B]"
    />
  );
};
