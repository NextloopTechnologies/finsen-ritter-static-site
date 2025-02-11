import React from "react";
import Product from "./Product";
import { ProductIndustrialNitrogenData } from "../../utils/ExportStaticData";

const ProductIndustrialNirtogen = () => {
  return (
    <Product
      productData={ProductIndustrialNitrogenData}
      bgColorDiff="bg-[#00457B]"
    />
  );
};

export default ProductIndustrialNirtogen;
