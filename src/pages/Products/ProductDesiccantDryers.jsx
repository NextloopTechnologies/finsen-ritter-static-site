import React from "react";
import Product from "./Product";
import { ProductDesiccantDryersData } from "../../utils/ExportStaticData";

const ProductDesiccantDryers = () => {
  return (
    <Product
      productData={ProductDesiccantDryersData}
      bgColorDiff="bg-[#00457B]"
    />
  );
};

export default ProductDesiccantDryers;
