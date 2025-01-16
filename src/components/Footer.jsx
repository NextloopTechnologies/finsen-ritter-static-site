import React from "react";
import { LogoWithNameWhite } from "../assets/images";

const Footer = () => {
  const companyLinks = [
    "Home",
    "About Us",
    "Products",
    "Services",
    "Blogs & News",
    "Connect With Us",
    "CBG Calculator",
  ];
  const blogLinks = ["FAQ", "Help Center", "Career", "Privacy"];
  const serviceLinks = [
    "Engineering, Procurement, and Construction (EPC)",
    "Procurement Management",
    "Industrial Automation 4.0",
    "Project Feasibility Report",
    "Detailed Project Report",
    "Cost Management Analysis to the Project",
    "Safety Consultancy",
    "License & Permissions Assistance (PESO, CPCB, Fire & Safety etc.)",
  ];
  const FooterList = ({ title, items, bulletPoints }) => (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className={`${bulletPoints ? "list-disc pl-5" : ""} space-y-2`}>
        {items.map((item, index) => (
          <li key={index}>
            <a href="#" className="hover:underline font-semibold">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer className="bg-[#135384] text-white py-16 pt-32 px-10 md:px-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
          <div className="space-y-4">
            <img src={LogoWithNameWhite} alt="Finsen Ritter" className="h-12" />
            <p className="text-sm leading-relaxed font-semibold">
              Finsen Ritter Technologies specializes in turnkey industrial
              solutions for gas plants, with expertise across various sectors
              globally.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            <FooterList title="Company" items={companyLinks} />
            <FooterList title="Blog" items={blogLinks} />
          </div>

          <div className="mt-8 md:mt-0">
            <FooterList
              title="Services"
              items={serviceLinks}
              bulletPoints={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
