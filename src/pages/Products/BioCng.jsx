import { Helmet } from "react-helmet";
import { ProductBioCNGData } from "../../utils/ExportStaticData";
import Product from "./Product";

export const BioCNGPage = () => {
  console.log("ProductBioCNGData", ProductBioCNGData);
  return (
    <>
      <Helmet>
        <title>FINSEN RITTER | Industrial Turnkey Solutions In India</title>
        <meta
          name="keywords"
          content="Bio CNG Plant Manufacturers In Indore,Commercial Biogas CNG Plant Suppliers,Industrial Bio CNG Plant Exporters,Biogas CNG Plant in Indore,Bio CNG Plant,Bio CNG Plant Exporters and Suppliers in India "
        />
      </Helmet>
      <Product productData={ProductBioCNGData} bgColorDiff="bg-[#004C3F]" />;
    </>
  );
};
