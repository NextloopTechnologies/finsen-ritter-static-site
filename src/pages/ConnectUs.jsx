import React, { useState } from "react";
import { ConnectUsHandshake, ConnectUsHeroBg } from "../assets/images";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import { supabase } from "../supabaseClient";

const ConnectUs = () => {
  const [formData, setFormData] = useState({
    vendorName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    vendorType: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("vendors").insert([formData]);

    if (error) {
      console.error("Error submitting form:", error.message);
    } else {
      console.log("Form submitted successfully:", data);
      setFormData({
        vendorName: "",
        companyName: "",
        email: "",
        phone: "",
        address: "",
        vendorType: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <HeroSection backgroundImage={ConnectUsHeroBg}></HeroSection>
      <div className="w-full max-w-6xl mx-auto px-5 py-20 mb-20">
        <div className="text-center p-6 mb-10">
          <h1 className="text-2xl font-bold text-blue-900">CONNECT US</h1>
          <p className="text-gray-600 ">
            Looking for innovative solutions? Connect with us on our website and
            let's make it happen!
          </p>
        </div>
        <div className="bg-white shadow-xl ring-1 ring-gray-100 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={ConnectUsHandshake}
                alt="Handshake"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-6">
              <h2 className="text-xl font-semibold mb-6">
                Vendor Registration Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm text-gray-600">
                    Name of the Vendor
                  </label>
                  <input
                    type="text"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-600">
                    Company/Firm Name of the Vendor
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-600">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-600">
                    Registered Company Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-600">
                    Are you a new or existing vendor?
                  </label>
                  <select
                    name="vendorType"
                    value={formData.vendorType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="new">New Vendor</option>
                    <option value="existing">Existing Vendor</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default ConnectUs;
