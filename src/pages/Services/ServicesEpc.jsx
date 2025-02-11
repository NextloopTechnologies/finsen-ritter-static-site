import { ServicesEpcData } from "../../utils/ExportStaticData";
import ServicesPage from "./ServicePageTemplate";

const ServicesEpc = () => {
  return <ServicesPage {...ServicesEpcData} />;
};

export default ServicesEpc;
