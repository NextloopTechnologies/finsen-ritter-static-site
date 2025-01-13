import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:underline">
                  Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/services/online-course" className="hover:underline">
                  Online Course
                </Link>
              </li>
              <li>
                <Link to="/services/video-course" className="hover:underline">
                  Video Course
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Career</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>+011-735-2875</li>
              <li>student@yourportal.com</li>
              <li>4566 Shinger Hollow Road</li>
              <li>New Creek, OH 45426</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 text-center border-t border-white/10">
          <p>© SiteData All Right Reserved 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
