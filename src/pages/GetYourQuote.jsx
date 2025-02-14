import React, { useState } from "react";
import { GetYourQuoteFormLeft, GetYourQuoteHeroBg } from "../assets/images";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import { supabase } from "../supabaseClient";
import { getImageUrl } from "../utils/supabaseStorageHelper";

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
  const [isLoading, setIsLoading] = useState();
  const [submitError, setSubmitError] = useState("");
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
    setIsLoading(true);
    setSubmitError("");
    try {
      const { data, error } = await supabase.from("quotes").insert([formData]);
      if (error) throw error;
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
    } catch (error) {
      setSubmitError(
        error.message || "Failed to submit form. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HeroSection
        backgroundImage={getImageUrl("GetYourQuoteHeroBg.png")}
        backgroundOpacity="opacity-50"
      >
        <div className="flex flex-col text-center w-full">
          <h2 className="text-3xl font-bold mb-5">GET YOUR QUOTE</h2>
          <p className="text-lg">
            Looking for innovative solutions? Connect with us on our website and
            let's make it happen!
          </p>
        </div>
      </HeroSection>
      <div className="w-full px-5 py-20">
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
                          {errors.contactInfo}
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
                        required
                        className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.plantLocation
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.plantLocation && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.plantLocation}
                        </p>
                      )}
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
                          {errors.gstin}
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
                        required
                        className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.landAvailability
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.landAvailability && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.landAvailability}
                        </p>
                      )}
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
                        required
                        className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.registeredAddress
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.registeredAddress && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.registeredAddress}
                        </p>
                      )}
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
                        required
                        className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.plannedCapacity
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.plannedCapacity && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.plannedCapacity}
                        </p>
                      )}
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
                        required
                        className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.rawMaterial
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.rawMaterial && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.rawMaterial}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-2 px-4 rounded-md transition-colors duration-300 ${
                      isLoading
                        ? "bg-blue-300 cursor-not-allowed"
                        : "bg-blue-900 hover:bg-blue-800"
                    } text-white flex items-center justify-center`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
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
