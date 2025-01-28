import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import Product from "./pages/Product";
import GetYourQuote from "./pages/GetYourQuote";

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
        element: <Product />,
      },
      {
        path: "getyourquote",
        element: <GetYourQuote />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
