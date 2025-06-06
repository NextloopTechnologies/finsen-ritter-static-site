import React from "react";
import Product from "./Product";
import { ProductGasBlendingData } from "../../utils/ExportStaticData";

const ProductGasBlending = () => {
  return (
    <Product productData={ProductGasBlendingData} bgColorDiff="bg-[#00457B]" />
  );
};

export default ProductGasBlending;
