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
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
