import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import Product from "./pages/Products/Product";
import GetYourQuote from "./pages/GetYourQuote";
import Blogs from "./pages/Blogs";
import ConnectUs from "./pages/ConnectUs";
import Services from "./pages/Services/Services";
import ServicesEpc from "./pages/Services/ServicesEpc";
import { BioCNGPage } from "./pages/Products/BioCng";
import { ProductMedicalOxygen } from "./pages/Products/ProductMedicalOxygen";
import ProductIndustrialNirtogen from "./pages/Products/ProductIndustrialNirtogen";
import ProductDesiccantDryers from "./pages/Products/ProductDesiccantDryers";
import ProductBiogas from "./pages/Products/ProductBiogas";
import ProductSyngas from "./pages/Products/ProductSyngas";
import ProductChillers from "./pages/Products/ProductChillers";
import ProductScrubber from "./pages/Products/ProductScrubber";
import ProductGasBlending from "./pages/Products/ProductGasBlending";
import ServicesProcurementManagement from "./pages/Services/ServicesProcurementManagement";
import ServicesIndustrialAutomation from "./pages/Services/ServicesIndustrialAutomation";
import ServicesCostManagement from "./pages/Services/ServicesCostManagement";
import ServicesSafetyConsultancy from "./pages/Services/ServicesSafetyConsultancy";
import ServicesLicensePermission from "./pages/Services/ServicesLicensePermission";
import ServicesProjectFeasibility from "./pages/Services/ServicesProjectFeasibility";
import ServicesDetailedProjectReport from "./pages/Services/ServicesDetailedProjectReport";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorBoundary fallback={<p>⚠️Something went wrong</p>} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "product",
        element: <Outlet />,
        children: [
          { index: true, path: "bio-cng", element: <BioCNGPage /> },
          {
            path: "medical-oxygen",
            element: <ProductMedicalOxygen />,
          },
          {
            path: "nitrogen",
            element: <ProductIndustrialNirtogen />,
          },
          {
            path: "desiccant-dryers",
            element: <ProductDesiccantDryers />,
          },
          {
            path: "biogas",
            element: <ProductBiogas />,
          },
          {
            path: "syngas",
            element: <ProductSyngas />,
          },
          {
            path: "chillers",
            element: <ProductChillers />,
          },
          {
            path: "scrubber",
            element: <ProductScrubber />,
          },
          {
            path: "gas-blending",
            element: <ProductGasBlending />,
          },
        ],
      },
      {
        path: "getyourquote",
        element: <GetYourQuote />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "connectus",
        element: <ConnectUs />,
      },
      {
        path: "services",
        element: <Outlet />,
        children: [
          { index: true, element: <Services /> },
          { path: "epc", element: <ServicesEpc /> },
          { path: "procurement", element: <ServicesProcurementManagement /> },
          {
            path: "industrial-automation",
            element: <ServicesIndustrialAutomation />,
          },
          {
            path: "cost-management",
            element: <ServicesCostManagement />,
          },
          {
            path: "safety",
            element: <ServicesSafetyConsultancy />,
          },
          {
            path: "license",
            element: <ServicesLicensePermission />,
          },
          {
            path: "feasibility",
            element: <ServicesProjectFeasibility />,
          },
          {
            path: "detailed-report",
            element: <ServicesDetailedProjectReport />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
