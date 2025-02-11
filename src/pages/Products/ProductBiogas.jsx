import React from "react";
import Product from "./Product";
import { ProductBiogasData } from "../../utils/ExportStaticData";

const ProductBiogas = () => {
  return <Product productData={ProductBiogasData} bgColorDiff="bg-[#00457B]" />;
};

export default ProductBiogas;
