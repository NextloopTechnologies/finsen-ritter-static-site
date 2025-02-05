import React from "react";
import Product from "./Product";
import { ProductIndustrialSynGasData } from "../../utils/ExportStaticData";

const ProductSyngas = () => {
  return (
    <Product
      productData={ProductIndustrialSynGasData}
      bgColorDiff="bg-[#00457B]"
    />
  );
};

export default ProductSyngas;
