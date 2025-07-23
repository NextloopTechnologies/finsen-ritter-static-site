import { Helmet } from "react-helmet";
import { ProductBioCNGData } from "../../utils/ExportStaticData";
import Product from "./Product";

export const BioCNGPage = () => {
  console.log("ProductBioCNGData", ProductBioCNGData);
  return (
    <>
      <Helmet>
        <title>
          Bio-CNG Plant & Renewable Biogas Solutions | Finsen Ritter
        </title>
        <meta
          name="description"
          content="Finsen Ritter's industrial Bio-CNG plants transform organic waste into clean fuel. High-efficiency biogas systems built for cost savings and sustainability"
        />
      </Helmet>
      <Product productData={ProductBioCNGData} bgColorDiff="bg-[#004C3F]" />;
    </>
  );
};
