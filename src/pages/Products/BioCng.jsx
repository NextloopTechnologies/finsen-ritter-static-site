import { bioCNGData } from "../../utils/ExportStaticData";
import Product from "./Product";

export const BioCNGPage = () => {
  return <Product productData={bioCNGData} bgColorDiff="bg-[#004C3F]" />;
};
