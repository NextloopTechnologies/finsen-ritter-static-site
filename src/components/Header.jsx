import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoFR from "../assets/Header/LogoFR.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = () => location.pathname === path;

  return (
    <header className="absolute bg-white rounded-full my-5 mx-14 z-10 w-[90%] text-gray-700 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={LogoFR} alt="Company Logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-secondary">
              Home
            </Link>
            <Link to="/about" className="hover:text-secondary">
              About us
            </Link>
            <Link to="/about" className="hover:text-secondary">
              Product
            </Link>
            <Link to="/services" className="hover:text-secondary">
              Services
            </Link>
            <Link to="/services" className="hover:text-secondary">
              Blog & News
            </Link>
            <Link to="/blog" className="hover:text-secondary">
              Connect With Us
            </Link>
            <Link to="/calculator" className="hover:text-secondary">
              CBG Calculator
            </Link>
            <button className="bg-[#00477E] px-2 py-1 rounded-md text-white">
              Get Your Quote
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
              <Link
                to="/"
                className={`text-gray-700 hover:text-secondary font-medium px-4 ${
                  isActive("/")
                    ? 'text-secondary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-secondary'
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-secondary font-medium px-4 ${
                  isActive("/about")
                    ? 'text-secondary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-secondary'
                    : ""
                }`}
              >
                About us
              </Link>
              <Link
                to="/services"
                className={`text-gray-700 hover:text-secondary font-medium px-4 ${
                  isActive("/services")
                    ? 'text-secondary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-secondary'
                    : ""
                }`}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className={`text-gray-700 hover:text-secondary font-medium px-4 ${
                  isActive("/blog")
                    ? 'text-secondary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-secondary'
                    : ""
                }`}
              >
                Blog
              </Link>
              <Link
                to="/calculator"
                className={`text-gray-700 hover:text-secondary font-medium px-4 ${
                  isActive("/calculator")
                    ? 'text-secondary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-secondary'
                    : ""
                }`}
              >
                Calculator
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
