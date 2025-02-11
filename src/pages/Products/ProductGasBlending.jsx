import React from "react";
import Product from "./Product";
import { ProductScrubberData } from "../../utils/ExportStaticData";

const ProductGasBlending = () => {
  return (
    <Product productData={ProductScrubberData} bgColorDiff="bg-[#00457B]" />
  );
};

export default ProductGasBlending;
