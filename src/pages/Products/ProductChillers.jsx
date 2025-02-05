import React from "react";
import Product from "./Product";
import { ProductScrubberData } from "../../utils/ExportStaticData";

const ProductChillers = () => {
  return (
    <Product productData={ProductScrubberData} bgColorDiff="bg-[#00457B]" />
  );
};

export default ProductChillers;
