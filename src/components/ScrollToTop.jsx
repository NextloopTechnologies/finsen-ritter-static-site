import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const navigationType = useNavigationType();
  const { pathname } = useLocation();

  useEffect(() => {
    if (navigationType === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
