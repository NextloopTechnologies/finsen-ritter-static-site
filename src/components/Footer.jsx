import React from "react";
import { LogoWithNameWhite } from "../assets/images";
import {
  blogLinks,
  companyLinks,
  serviceLinks,
} from "../utils/ExportStaticData";
import { FooterText } from "../utils/ExportText";

const Footer = () => {
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
    <footer className="bg-blue-900 text-white py-16 pt-32 px-10 md:px-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
          <div className="space-y-4">
            <img src={LogoWithNameWhite} alt="Finsen Ritter" className="h-12" />
            <p className="text-sm leading-relaxed font-semibold">
              {FooterText.Description}
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
