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

const ContactSection = () => {
  const SocialIcon = ({ href, icon: Icon }) => (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-[#135384] text-white flex items-center justify-center hover:bg-[#135384]/90"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
  return (
    <div
      className="relative z-20 bg-white p-10 rounded-3xl md:mx-20 mx-10 mb-[-80px]"
      //   style={{ boxShadow: "0 0 10px #808080" }}
      style={{ boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2" }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#135384]">Get in Touch</h2>
        <p className="mt-2 text-gray-700 text-wrap font-semibold ">
          Have a question or need assistance? Please fill out the form below,
          and
        </p>
        <p className=" text-gray-700 text-wrap font-semibold">
          we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-4 justify-between p-4">
        {/* Contact Information */}
        <div className="md:w-1/2 pr-4 mb-4 md:mb-0">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MailIcon className="w-8 h-8 text-[#135384]" />
              <a
                href="mailto:info@nextlooptechnologies.com"
                className="text-gray-700 hover:text-[#135384]"
              >
                info@nextlooptechnologies.com
              </a>
            </div>

            <div className="flex items-start gap-2">
              <LocationIcon className="w-10 h-10 text-[#135384] mt-1" />
              <address className="text-gray-700 not-italic">
                101, Kanchan Sagar, 18/1, Near Industry House, Old Palasia,
                Indore, Madhya Pradesh 452001
              </address>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon className="w-8 h-8 text-[#135384]" />
              <a
                href="tel:+916351673645"
                className="text-gray-700 hover:text-[#135384]"
              >
                +91-6351 673 645
              </a>
            </div>
          </div>

          <div className="my-5">
            <HorizontalLine
              className=""
              color="blue"
              thickness={"2"}
              width={"80%"}
            />
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap space-x-4 mt-4">
            <SocialIcon href="#" icon={FacebookIcon} />
            <SocialIcon href="#" icon={GoogleIcon} />
            <SocialIcon href="#" icon={MailRoundedIcon} />
            <SocialIcon href="#" icon={InstagramIcon} />
            <SocialIcon href="#" icon={LinkedinIcon} />
            <SocialIcon href="#" icon={TwitterIcon} />
          </div>
        </div>

        {/* Map Section */}
        <div className="md:w-[30%] mt-4 md:mt-0">
          <div className="bg-gray-200 h-56 flex items-center justify-center rounded">
            <span className="text-gray-500">Map</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
