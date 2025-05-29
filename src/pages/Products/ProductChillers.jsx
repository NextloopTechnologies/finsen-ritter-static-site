import React from "react";
import Product from "./Product";
import { ProductChillersData, ProductScrubberData } from "../../utils/ExportStaticData";

const ProductChillers = () => {
  return (
    <Product productData={ProductChillersData} bgColorDiff="bg-[#00457B]" />
  );
};

export default ProductChillers;
