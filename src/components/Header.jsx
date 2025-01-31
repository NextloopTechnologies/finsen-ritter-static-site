import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoFR from "../assets/Header/LogoFR.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About us" },
  { path: "/product", label: "Product" },
  { path: "/services", label: "Services" },
  { path: "/blogs", label: "Blog & News" },
  { path: "/connectus", label: "Connect With Us" },
  { path: "/calculator", label: "CBG Calculator" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleQuoteClick = () => {
    navigate("getyourquote");
    setIsMenuOpen(false);
  };

  const NavLink = ({ path, label }) => (
    <Link
      to={path}
      className={`relative hover:text-secondary font-medium px-4 py-2 transition-colors ${
        isActive(path)
          ? "text-secondary after:absolute after:left-2 after:right-2 after:bottom-1 after:h-[2px] after:bg-secondary text-gray-400"
          : "text-gray-700"
      }`}
    >
      {label}
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
            <rect x="0.774414" width="31" height="5" rx="2.5" fill="#07355E" />
            <rect x="34.7744" width="5" height="5" rx="2.5" fill="#07355E" />
          </svg>
        </div>
      )}
    </Link>
  );

  return (
    <header className="absolute left-1/2 -translate-x-1/2 bg-white rounded-3xl md:rounded-full my-5 z-10 w-[calc(100%-2rem)]  text-gray-700 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src={LogoFR || "/placeholder.svg"}
              alt="Company Logo"
              className="h-8 md:h-10"
            />
          </Link>

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

          {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
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
  );
};

export default Header;
