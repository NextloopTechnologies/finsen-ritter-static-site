import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
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
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";
import Calculator from "./pages/calculator";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const AppLayout = () => (
  <>
    <ScrollToTop />
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
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "product",
        element: <Outlet />,
        children: [
          {
            index: true,
            path: "/product/industrial-bio-cng-compressed-bio-gas-plant",
            element: <BioCNGPage />,
          },
          {
            path: "/product/medical-oxygen-plant-psa-vpsa",
            element: <ProductMedicalOxygen />,
          },
          {
            path: "/product/industrial-nitrogen-plant-psa-vpsa",
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
            path: "synthesisgas",
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
        path: "get-your-quote",
        element: <GetYourQuote />,
      },
      {
        path: "blogs-and-news",
        element: <Blogs />,
      },
      {
        path: "connect-with-us",
        element: <ConnectUs />,
      },
      {
        path: "biogas-calculator",
        element: <Calculator />,
      },
      {
        path: "services",
        element: <Outlet />,
        children: [
          { index: true, element: <Services /> },
          { path: "epc", element: <ServicesEpc /> },
          {
            path: "procurement-management",
            element: <ServicesProcurementManagement />,
          },
          {
            path: "industrial-automation",
            element: <ServicesIndustrialAutomation />,
          },
          {
            path: "cost-management",
            element: <ServicesCostManagement />,
          },
          {
            path: "safety-consultancy",
            element: <ServicesSafetyConsultancy />,
          },
          {
            path: "license-permission",
            element: <ServicesLicensePermission />,
          },
          {
            path: "project-feasibility",
            element: <ServicesProjectFeasibility />,
          },
          {
            path: "detailed-report",
            element: <ServicesDetailedProjectReport />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
