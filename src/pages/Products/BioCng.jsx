import { ProductBioCNGData } from "../../utils/ExportStaticData";
import Product from "./Product";

export const BioCNGPage = () => {
  return <Product productData={ProductBioCNGData} bgColorDiff="bg-[#004C3F]" />;
};
