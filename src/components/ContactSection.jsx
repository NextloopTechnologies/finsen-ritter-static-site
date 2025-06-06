import React from "react";
import {
  HorizontalLine,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "../assets/svg";
import MapComponent from "./MapplsWebMaps";
import { socialLinks } from "../utils/ExportStaticData";

const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-[#135384]/90 transition-colors"
  >
    <Icon className="w-4 h-4 md:w-5 md:h-5" />
  </a>
);

const ContactSection = () => {
  return (
    <div
      className="relative z-20 bg-white p-4 md:p-10 rounded-3xl mx-4 md:mx-20 mb-[-60px] md:mb-[-80px]"
      style={{ boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="text-center px-2 md:px-0 mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          GET IN TOUCH
        </h2>
        <p className="mt-2 text-gray-700 text-sm md:text-base font-semibold px-2 md:px-0">
          Have a question or need assistance? Please fill out the form below,
          and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-4 justify-between p-2 md:p-4">
        <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MailIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-900 flex-shrink-0" />
              <a
                href="mailto:contact@finsenritter.com"
                className="text-sm md:text-base text-gray-700 hover:text-blue-900 break-all"
              >
                contact@finsenritter.com
              </a>
            </div>

            <div className="flex items-start gap-2">
              <LocationIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-900 mt-1 flex-shrink-0" />
              <address className="text-sm md:text-base text-gray-700 not-italic">
                3rd Floor, 8 Kanchan Vihar, Near MR-11, Indore, Madhya
                Pradesh-452010
              </address>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-900 flex-shrink-0" />
              <a
                href="tel:1800-8892141"
                className="text-sm md:text-base text-gray-700 hover:text-blue-900"
              >
                1800-8892141
              </a>
            </div>
          </div>

          <div className="my-4 md:my-5">
            <HorizontalLine color="#135384" thickness="2" width="100%" />
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {socialLinks.map(({ href, icon }, index) => (
              <SocialIcon key={index} href={href} icon={icon} />
            ))}
          </div>
        </div>

        <div className="w-full md:w-[30%] mt-6 md:mt-0 h-40 md:h-56">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
