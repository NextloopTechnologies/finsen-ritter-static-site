import React from "react";
import {
  FacebookIcon,
  GoogleIcon,
  HorizontalLine,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  MailRoundedIcon,
  PhoneIcon,
  TwitterIcon,
} from "../assets/svg";

const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#135384] text-white flex items-center justify-center hover:bg-[#135384]/90 transition-colors"
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
      <div className="text-center px-2 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-[#135384]">
          Get in Touch
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
              <MailIcon className="w-6 h-6 md:w-8 md:h-8 text-[#135384] flex-shrink-0" />
              <a
                href="mailto:info@nextlooptechnologies.com"
                className="text-sm md:text-base text-gray-700 hover:text-[#135384] break-all"
              >
                info@nextlooptechnologies.com
              </a>
            </div>

            <div className="flex items-start gap-2">
              <LocationIcon className="w-6 h-6 md:w-8 md:h-8 text-[#135384] mt-1 flex-shrink-0" />
              <address className="text-sm md:text-base text-gray-700 not-italic">
                101, Kanchan Sagar, 18/1, Near Industry House, Old Palasia,
                Indore, Madhya Pradesh 452001
              </address>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 text-[#135384] flex-shrink-0" />
              <a
                href="tel:+916351673645"
                className="text-sm md:text-base text-gray-700 hover:text-[#135384]"
              >
                +91-6351 673 645
              </a>
            </div>
          </div>

          <div className="my-4 md:my-5">
            <HorizontalLine
              className=""
              color="#135384"
              thickness="2"
              width="100%"
            />
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <SocialIcon href="#" icon={FacebookIcon} />
            <SocialIcon href="#" icon={GoogleIcon} />
            <SocialIcon href="#" icon={MailRoundedIcon} />
            <SocialIcon href="#" icon={InstagramIcon} />
            <SocialIcon href="#" icon={LinkedinIcon} />
            <SocialIcon href="#" icon={TwitterIcon} />
          </div>
        </div>

        <div className="w-full md:w-[30%] mt-6 md:mt-0">
          <div className="bg-gray-200 h-40 md:h-56 flex items-center justify-center rounded">
            <span className="text-gray-500">Map</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
