import React from "react";
import Product from "./Product";
import { ProductIndustrialNitrogenData } from "../../utils/ExportStaticData";
import { Helmet } from "react-helmet";

const ProductIndustrialNirtogen = () => {
  return (
    <>
      <Helmet>
        <title>
          Industrial Nitrogen Plant PSA/VPSA Solutions | Finsen Ritter{" "}
        </title>
        <meta
          name="description"
          content="Efficient industrial nitrogen plants with PSA/VPSA tech Achieve 95–99.999% purity, energy savings & 24/7 supply, all engineered by Finsen Ritter Technologies"
        />
      </Helmet>
      <Product
        productData={ProductIndustrialNitrogenData}
        bgColorDiff="bg-[#00457B]"
      />
    </>
  );
};

export default ProductIndustrialNirtogen;
