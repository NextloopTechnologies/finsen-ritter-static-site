import React from "react";
import AboutUs from "../components/AboutUs";
import DemoImage from "../assets/demoImage.png";
import { LogoFRSVG } from "../assets/svg";
import DemoVideo from "../components/DemoVideo";
import BackgroundImg from "../assets/HomePage/Background.png";
import Slider from "../components/ProductSection";
import {
  H2SCO2ScrubberIcon,
  IndustrialBioCngIcon,
  IndustrialBiogasPurificationIcon,
  IndustrialDesiccantIcon,
  IndustrialGasBleedingSkidIcon,
  IndustrialNitrogenIcon,
  IndustrialScreChillersIcon,
  IndustrialSyngasIcon,
  MedicalOxygenIcon,
} from "../assets/icons";

const Home = () => {
  const feedbacks = [
    {
      name: "Lana Bernier",
      text: "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
      rating: 5,
    },
    {
      name: "Mrs. Van Hartman",
      text: "I like Infinity Estate more and more each day because it makes my life a lot easier. We can't understand how we've been living without Infinity Estate. Infinity Estate has got everything I need. The service was excellent.",
      rating: 5,
    },
    {
      name: "Philip Decleow",
      text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
      rating: 5,
    },
  ];

  const cards = [
    {
      icon: H2SCO2ScrubberIcon,
      heading: "H2S & CO2 Scrubber",
      description:
        "Finsen Ritter's H2S & CO2 Scrubbers ensure efficient gas purification and compliance.",
    },
    {
      icon: IndustrialBioCngIcon,
      heading: "Industrial Bio-CNG (Compressed Bio-Gas) Plant",
      description:
        "Finsen Ritter's Bio-CNG plant converts organic waste into renewable, clean energy.",
    },
    {
      icon: IndustrialBiogasPurificationIcon,
      heading: "Industrial Biogas Purification and Refining Plants",
      description:
        "Finsen Ritter's Biogas Purification Plants convert raw biogas into high-purity biomethane.",
    },
    {
      icon: IndustrialDesiccantIcon,
      heading: "Industrial Desiccant Dryers",
      description:
        "Finsen Ritter's Industrial Desiccant Dryers ensure efficient moisture removal and reliability.",
    },
    {
      icon: IndustrialGasBleedingSkidIcon,
      heading: "Industrial Gas Blending Skid (CH4, H2, and CO2)",
      description:
        "Finsen Ritter's Gas Blending Skids ensure precise, efficient gas-mixing solutions.",
    },
    {
      icon: IndustrialNitrogenIcon,
      heading: "Industrial Nitrogen Plant (PSA & VPSA)",
      description:
        "Finsen Ritter's Industrial Nitrogen Plants produce efficient, on-site high-purity nitrogen.",
    },
    {
      icon: IndustrialScreChillersIcon,
      heading: "Industrial Screw Chillers & Heat Pumps",
      description:
        "Finsen Ritter's Screw Chillers and Heat Pumps offer efficient, reliable performance.",
    },
    {
      icon: IndustrialSyngasIcon,
      heading: "Industrial Syngas Refining Plants",
      description:
        "Finsen Ritter's Syngas Refining Plants provide high-purity syngas for industries.",
    },
    {
      icon: MedicalOxygenIcon,
      heading: "Medical Oxygen Plants (PSA & VPSA)",
      description:
        "Finsen Ritter's Medical Oxygen Plants ensure reliable high-purity oxygen supply.",
    },
  ];

  return (
    <div className="flex flex-col gap-28">
      {/* Hero Section */}
      <div
        className="text-white py-40 px-4 flex justify-between min-h-screen"
        style={{
          backgroundImage: `url("${BackgroundImg}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% auto",
        }}
      >
        {/* Rest of the hero section content remains the same */}
        <div className="relative z-10 mx-10 text-left">
          <div className="text-6xl font-bold flex flex-col gap-4">
            <h2 className="">Empowering Sustainable</h2>
            <h2>Energy with Advanced</h2>
            <h2 className="">Biogas Solutions</h2>
            <p className="text-xl font-normal">
              Transforming organic waste into clean, renewable <br /> energy for
              a sustainable future.
            </p>
            <button className="bg-[#135384] hover:bg-[rgb(17,25,60)] text-white py-3 px-8 rounded-lg transition-colors duration-300 text-xl max-w-60">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative z-10">
          <LogoFRSVG className="w-[30vw] h-auto -py-36" />
        </div>
      </div>

      <DemoVideo />

      {/* About Us Section */}
      <AboutUs />

      <Slider cards={cards} />
      {/* What is Biogas Section */}
      <div className="text-center p-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          What is Biogas
        </h2>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
          Biogas is a renewable energy source produced from organic waste
          through anaerobic digestion, where bacteria break down organic
          material without oxygen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:transform hover:scale-105">
            <img
              src={DemoImage}
              alt="Biogas Systems"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-2">
                BIOGAS SYSTEMS & SOLUTIONS
              </h3>
              <p className="text-gray-200">
                Comprehensive solutions for generating clean energy from organic
                waste.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:transform hover:scale-105">
            <img
              src={DemoImage}
              alt="Installation and Maintenance"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-2">
                INSTALLATION & MAINTENANCE
              </h3>
              <p className="text-gray-200">
                Expert installation and ongoing maintenance for optimal
                performance.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:transform hover:scale-105">
            <img
              src={DemoImage}
              alt="Customized Solutions"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-2">
                CUSTOMIZED SOLUTIONS
              </h3>
              <p className="text-gray-200">
                Tailored biogas solutions for a variety of industries.
              </p>
            </div>
          </div>
        </div>

        <button className="mt-12 bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg transition-colors duration-300">
          Learn More
        </button>
      </div>

      {/* Our Biogas Solutions */}
      <div className="flex flex-col md:flex-row p-5 md:mx-12">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-3xl font-bold text-green-700">
            Our Biogas Solutions
          </h2>
          <p className="mt-2 text-gray-700">
            With years of expertise in biogas technology, we specialize in
            designing, installing, and maintaining biogas systems that reduce
            waste and generate renewable energy. Our commitment to
            sustainability and customer success sets us apart in the industry.
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <img
              src={DemoImage}
              alt="Solution 1"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">
              Inventing a Sustainable Future
            </h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <img
              src={DemoImage}
              alt="Solution 2"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">
              Inventing a Sustainable Future
            </h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <img
              src={DemoImage}
              alt="Solution 3"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">
              Inventing a Sustainable Future
            </h3>
          </div>
        </div>
      </div>

      {/* What Our Clients Say */}
      <div className="p-5 text-center">
        <h2 className="text-3xl font-bold text-green-700">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-gray-700">Customer Feedback</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <div className="text-yellow-500">
                  {"★".repeat(feedback.rating)}
                  {"☆".repeat(5 - feedback.rating)}
                </div>
              </div>
              <p className="text-gray-800 mb-2">"{feedback.text}"</p>
              <p className="font-semibold">{feedback.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* get in touch */}
      <div
        className="relative z-20 bg-white p-5 rounded-lg mt-10 md:mx-10 mx-5 mb-[-80px] "
        style={{ boxShadow: "0 0 10px #808080" }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700">Get in Touch</h2>
          <p className="mt-2 text-gray-700">
            Have a question or need assistance? Please fill out the form below,
            and we’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="md:w-1/2 pr-4 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-green-700">
              Contact Information
            </h3>
            <p className="text-gray-800">📧 info@nextlooptechnologies.com</p>
            <p className="text-gray-800">
              🏢 101, Kanchan Sagar, 18/1, Near Industry House, Old Palasia,
              Indore, Madhya Pradesh 452001
            </p>
            <p className="text-gray-800">📞 +91-6351 673 645</p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <div className="bg-gray-200 h-40 flex items-center justify-center rounded">
              <span className="text-gray-500">Map</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap space-x-4 mt-4">
          <a href="#" className="text-gray-600">
            Facebook
          </a>
          <a href="#" className="text-gray-600">
            Google
          </a>
          <a href="#" className="text-gray-600">
            Email
          </a>
          <a href="#" className="text-gray-600">
            Instagram
          </a>
          <a href="#" className="text-gray-600">
            LinkedIn
          </a>
          <a href="#" className="text-gray-600">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
