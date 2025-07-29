import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CompanyLogo, CompanyLogoV2 } from "../assets/icons";

const navItems = [
  { path: "/", label: "Home" },
  {
    label: "Product",
    dropdownItems: [
      {
        index: true,
        label: "Industrial Bio-CNG (Compressed Bio-Gas) Plant",
        path: "/product/industrial-bio-cng-compressed-bio-gas-plant",
      },
      {
        label: "Medical Oxygen Plants (PSA & VPSA)",
        path: "/product/medical-oxygen-plant-psa-vpsa",
      },
      {
        label: "Industrial Nitrogen Plant (PSA & VPSA)",
        path: "/product/industrial-nitrogen-plant-psa-vpsa",
      },
      {
        label: "Industrial Desiccant Dryers",
        path: "/product/desiccant-dryers",
      },
      {
        label: "Industrial Biogas Purification and Refining Plants",
        path: "/product/biogas",
      },
      {
        label: "Industrial synthesis gas Plants",
        path: "/product/synthesisgas",
      },
      {
        label: "Industrial Screw Chillers & Heat Pumps",
        path: "/product/chillers",
      },
      { label: "H2S & CO2 Scrubber", path: "/product/scrubber" },
      {
        label: "Industrial Gas Blending Skid (CH4, H2, and O2)",
        path: "/product/gas-blending",
      },
    ],
  },
  { path: "/about-us", label: "About us" },
  { path: "/services", label: "Services" },
  { path: "/blogs-and-news", label: "Blog & News" },
  { path: "/connect-with-us", label: "Connect With Us" },
  { path: "/biogas-calculator", label: "Calculator" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const isActive = (path) => {
    if (location.pathname === path) return true;
    if (path === "/product" && location.pathname.startsWith("/product/")) {
      return true;
    }
    return false;
  };

  const handleQuoteClick = () => {
    navigate("get-your-quote");
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const NavLink = ({ path, label, dropdownItems }) => {
    const hasDropdown = dropdownItems && dropdownItems.length > 0;
    const isDropdownOpen = activeDropdown === label;

    const handleNavClick = (e) => {
      if (hasDropdown) {
        e.preventDefault();
        setActiveDropdown(isDropdownOpen ? null : label);
      } else {
        setIsMenuOpen(false);
      }
    };

    return (
      <div
        className="relative"
        onMouseEnter={() => hasDropdown && handleMouseEnter(label)}
        onMouseLeave={handleMouseLeave}
        ref={dropdownRef}
      >
        <Link
          to={path}
          onClick={handleNavClick}
          className={`relative hover:text-secondary font-medium px-4 py-2 transition-colors ${
            isActive(path)
              ? "text-blue-900 after:absolute after:left-2 after:right-2 after:bottom-1 after:h-[2px] after:bg-secondary"
              : "text-gray-700"
          }`}
        >
          {label}
          {hasDropdown && (
            <span
              className={`ml-1 inline-block transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          )}

          {isActive(path) && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="5"
                viewBox="0 0 40 5"
                fill="none"
                className="w-full"
              >
                <rect
                  x="0.774414"
                  width="31"
                  height="5"
                  rx="2.5"
                  fill="#07355E"
                />
                <rect
                  x="34.7744"
                  width="5"
                  height="5"
                  rx="2.5"
                  fill="#07355E"
                />
              </svg>
            </div>
          )}
        </Link>

        {hasDropdown && isDropdownOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-t border-l border-gray-200"></div>

            <div className="relative bg-white rounded-lg z-10">
              {dropdownItems.map((item, index) => {
                const isItemActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                      isItemActive
                        ? "bg-[#07355E] text-white"
                        : "text-gray-700 hover:bg-[#07355E] hover:text-white"
                    }`}
                    onClick={() => {
                      setActiveDropdown(null);
                      setIsMenuOpen(false); // Add this line
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex justify-between items-center absolute left-1/2 -translate-x-1/2 z-10 w-[calc(80%-2rem)]">
      <Link to="/" className="flex items-center">
        <img src={CompanyLogoV2} alt="Company Logo" className="h-20 md:h-24" />
      </Link>
      <header className=" bg-white rounded-3xl md:rounded-full my-5   text-gray-700 font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* <Link to="/" className="flex items-center">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              className="h-10 md:h-12"
            />
          </Link> */}

            <nav className="hidden md:flex gap-2 lg:gap-2 items-center">
              {navItems.map((item) => (
                <NavLink key={item.path} {...item} />
              ))}
              <button
                onClick={handleQuoteClick}
                className="bg-[#00477E] px-2 py-1 rounded-md text-white text-sm"
              >
                Get Your Quote
              </button>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink key={item.path} {...item} />
                ))}
                <button
                  onClick={handleQuoteClick}
                  className="bg-[#00477E] px-4 py-2 rounded-md text-white text-sm mt-2"
                >
                  Get Your Quote
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
