import React, { useState } from "react";
import { GetYourQuoteFormLeft, GetYourQuoteHeroBg } from "../assets/images";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import { supabase } from "../supabaseClient";

const GetYourQuote = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    companyName: "",
    contactInfo: "",
    plantLocation: "",
    gstin: "",
    landAvailability: "",
    registeredAddress: "",
    plannedCapacity: "",
    rawMaterial: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("quotes").insert([formData]);

    if (error) {
      console.error("Error submitting form:", error.message);
    } else {
      console.log("Quote request submitted:", data);
      setFormData({
        clientName: "",
        companyName: "",
        contactInfo: "",
        plantLocation: "",
        gstin: "",
        landAvailability: "",
        registeredAddress: "",
        plannedCapacity: "",
        rawMaterial: "",
      });
    }
  };

  return (
    <>
      <HeroSection backgroundImage={GetYourQuoteHeroBg}></HeroSection>
      <div className="min-h-screen  my-20">
        <div className="max-w-6xl mx-auto p-4 md:p-8">
          <div className=" rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-blue-50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src={GetYourQuoteFormLeft}
                    alt="Customer Support"
                    className="max-w-[300px] w-full mx-auto"
                  />
                </div>
              </div>

              <div className="md:w-2/3 p-6 md:p-8 bg-blue-50">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name of the client
                      </label>
                      <input
                        type="text"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name of the Company/Firm
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Number / E-Mail
                      </label>
                      <input
                        type="text"
                        name="contactInfo"
                        value={formData.contactInfo}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.contactInfo
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        required
                      />
                      {errors.contactInfo && (
                        <p className="text-red-500 text-xs mt-1">
                          This is an ERROR message
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Plant Location
                      </label>
                      <input
                        type="text"
                        name="plantLocation"
                        value={formData.plantLocation}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        GSTIN (If applicable)
                      </label>
                      <input
                        type="text"
                        name="gstin"
                        value={formData.gstin}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.gstin ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.gstin && (
                        <p className="text-red-500 text-xs mt-1">
                          This is an ERROR message
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Land Availability
                      </label>
                      <input
                        type="text"
                        name="landAvailability"
                        value={formData.landAvailability}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Registered address of the company/firm
                      </label>
                      <textarea
                        name="registeredAddress"
                        value={formData.registeredAddress}
                        onChange={handleChange}
                        rows="2"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Planned Plant Production Capacity
                      </label>
                      <input
                        type="text"
                        name="plannedCapacity"
                        value={formData.plannedCapacity}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Raw Material
                      </label>
                      <input
                        type="text"
                        name="rawMaterial"
                        value={formData.rawMaterial}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
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
      </div>
      <ContactSection />
    </>
  );
};

export default GetYourQuote;
