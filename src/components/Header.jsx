import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoFR from "../assets/Header/LogoFR.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About us" },
  { path: "/product", label: "Product" },
  { path: "/services", label: "Services" },
  { path: "/blog-news", label: "Blog & News" },
  { path: "/connectus", label: "Connect With Us" },
  { path: "/calculator", label: "CBG Calculator" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ path, label }) => (
    <Link
      to={path}
      className={`text-gray-700 hover:text-secondary font-medium px-4 ${
        isActive(path)
          ? 'text-secondary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-secondary'
          : ""
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="absolute bg-white rounded-3xl md:rounded-full my-5 mx-4 md:mx-8 z-10 w-[calc(100%-2rem)] md:w-[90%] text-gray-700 font-medium">
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
            <button className="bg-[#00477E] px-2 py-1 rounded-md text-white text-sm">
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
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink key={item.path} {...item} />
              ))}
              <button className="bg-[#00477E] px-2 py-1 rounded-md text-white text-sm self-start ml-4 mt-2">
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
