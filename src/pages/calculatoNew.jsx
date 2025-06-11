import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import { getImageUrl } from "../utils/supabaseStorageHelper";
import jsPDF from "jspdf";

const Calculator = () => {
  const [unit, setUnit] = useState("kg");
  const [inputs, setInputs] = useState({
    napier: "",
    agrowaste: "",
    dung: "",
    pressmud: "",
    poultry: "",
    municipal: "",
  });
  const [results, setResults] = useState({
    totalKgGas: 0,
    totalNm3: 0,
    totalKWh: 0,
    totalMJ: 0,
    dieselLitres: 0,
    petrolLitres: 0,
  });

  const getInputValue = (value) => (unit === "ton" ? value * 1000 : value);

  useEffect(() => {
    calculateCNG();
  }, [inputs, unit]);
  const calculateCNG = () => {
    const { napier, agrowaste, dung, pressmud, poultry, municipal } = inputs;

    const yieldFactors = {
      napier: 0.07,
      agrowaste: 0.12,
      dung: 0.025,
      pressmud: 0.05,
      poultry: 0.05,
      municipal: 0.045,
    };

    const totalKgGas =
      getInputValue(napier) * yieldFactors.napier +
      getInputValue(agrowaste) * yieldFactors.agrowaste +
      getInputValue(dung) * yieldFactors.dung +
      getInputValue(pressmud) * yieldFactors.pressmud +
      getInputValue(poultry) * yieldFactors.poultry +
      getInputValue(municipal) * yieldFactors.municipal;

    const totalNm3 = totalKgGas / 0.744;
    const totalKWh = totalKgGas * 13.1;
    const totalMJ = totalKgGas * 47.2;
    const dieselLitres = totalKWh / 9.8;
    const petrolLitres = totalKWh / 9.5;

    setResults({
      totalKgGas,
      totalNm3,
      totalKWh,
      totalMJ,
      dieselLitres,
      petrolLitres,
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: parseFloat(value) || 0 }));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Bio-CNG Output Report", 20, 20);
    doc.setFontSize(11);

    const lines = [
      `Feedstock Inputs (per day in ${unit}):`,
      `Napier Grass: ${inputs.napier} ${unit}`,
      `Agrowaste: ${inputs.agrowaste} ${unit}`,
      `Cattle Dung: ${inputs.dung} ${unit}`,
      `Pressmud: ${inputs.pressmud} ${unit}`,
      `Poultry Waste: ${inputs.poultry} ${unit}`,
      `Municipal Waste: ${inputs.municipal} ${unit}`,
      "",
      "Calculated Outputs:",
      `Bio-CNG Output: ${results.totalKgGas.toFixed(
        2
      )} kg/day = ${results.totalNm3.toFixed(2)} Nm³/day`,
      `Energy Output: ${results.totalKWh.toFixed(
        2
      )} kWh/day (${results.totalMJ.toFixed(2)} MJ/day)`,
      `Diesel Equivalent: ${results.dieselLitres.toFixed(2)} litres/day`,
      `Petrol Equivalent: ${results.petrolLitres.toFixed(2)} litres/day`,
    ];

    lines.forEach((line, i) => {
      doc.text(line, 20, 30 + i * 8);
    });

    doc.save("Bio-CNG_Output_Report.pdf");
  };

  return (
    <>
      <Helmet>
        <title>Calculator | Finsen Ritter</title>
        <meta
          name="description"
          content="Discover a wealth of information on Finsenritter's blog, featuring engaging content that informs and inspires. Stay updated with our latest posts."
        />
      </Helmet>
      {/* <HeroSection
        backgroundImage={getImageUrl("BlogsHeroBg.png")}
        backgroundOpacity="opacity-50"
      >
        <div className="flex flex-col text-center w-full">
          <h2 className="text-3xl font-bold mb-5">Calculator</h2>
          <p className="text-lg">
            Eco-friendly biogas solutions for renewable energy and waste
            management needs.
          </p>
        </div>
      </HeroSection> */}
      <div className="bg-gradient-to-r from-[#0f2637] to-[#00457B] text-white py-10 px-6 min-h-80 flex justify-end items-end">
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-4xl font-bold">BIOGAS CALCULATOR</h1>
          <p className="text-lg mt-2">
            Eco-friendly biogas solutions for renewable energy and waste
            management needs.
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-300 py-12 px-4 mb-20">
        {/* <div
          className="min-h-screen bg-cover bg-center text-white"
          style={{ backgroundImage: `url('/cbgPIC.jpg')` }}
        >
          <div className="bg-black bg-opacity-70 min-h-screen p-5 md:p-10">
            <div className="max-w-3xl mx-auto bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-md">
              <h2 className="text-center text-teal-400 text-2xl font-bold mb-6">
                Bio-CNG Output Calculator (Mass-Based)
              </h2>

              <div className="mb-4">
                <label className="block font-semibold mb-1">Unit:</label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="unit"
                    value="kg"
                    checked={unit === "kg"}
                    onChange={() => setUnit("kg")}
                  />{" "}
                  Kilograms (kg)
                </label>
                <label>
                  <input
                    type="radio"
                    name="unit"
                    value="ton"
                    checked={unit === "ton"}
                    onChange={() => setUnit("ton")}
                  />{" "}
                  Metric Tons (t)
                </label>
              </div>

              {[
                { id: "napier", label: "Napier Grass (Yield:7%)" },
                { id: "agrowaste", label: "Agrowaste (Yield:12%)" },
                { id: "dung", label: "Cattle Dung (Yield:2.5%)" },
                { id: "pressmud", label: "Pressmud (Yield:5%)" },
                { id: "poultry", label: "Poultry Waste (Yield:5%)" },
                {
                  id: "municipal",
                  label: "Segregated Municipal Waste (Yield:4.5%)",
                },
              ].map(({ id, label }) => (
                <div key={id} className="mb-4">
                  <label htmlFor={id} className="block font-semibold">
                    {label}:
                  </label>
                  <input
                    type="number"
                    id={id}
                    value={inputs[id]}
                    onChange={handleInputChange}
                    className="w-full p-2 mt-1 rounded text-black"
                  />
                </div>
              ))}

              <button
                onClick={downloadPDF}
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded mt-4"
              >
                Download PDF Report
              </button>

              <div className="mt-6 p-4 bg-gray-900 bg-opacity-70 rounded-lg">
                <p>
                  Total Bio-CNG Output:{" "}
                  {unit === "ton"
                    ? (results.totalKgGas / 1000).toFixed(2) + " tons/day"
                    : results.totalKgGas.toFixed(2) + " kg/day"}{" "}
                  = {results.totalNm3.toFixed(2)} Nm³/day
                </p>
                <p>
                  Energy Output: {results.totalKWh.toFixed(2)} kWh/day (
                  {results.totalMJ.toFixed(2)} MJ/day)
                </p>
                <p>
                  Diesel Equivalent: {results.dieselLitres.toFixed(2)}{" "}
                  litres/day
                </p>
                <p>
                  Petrol Equivalent: {results.petrolLitres.toFixed(2)}{" "}
                  litres/day
                </p>
              </div>

              <hr className="border-teal-500 my-6" />

              <h4 className="text-lg font-semibold mb-2">
                Engineering Assumptions:
              </h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Yield: kg of Bio-CNG per kg of feedstock</li>
                <li>Bio-CNG density = 0.744 kg/Nm³</li>
                <li>Bio-CNG energy = 13.1 kWh/kg = 47.2 MJ/kg</li>
                <li>Diesel equivalent = 1 litre = 9.8 kWh</li>
                <li>Petrol equivalent = 1 litre = 9.5 kWh</li>
                <li>
                  Note: The yield is calculated on the basis of thermophillic
                  digesters with the minimum purification losses of less than 3%
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-[#00457B]">
          <h2 className="text-xl font-semibold mb-4">Raw Material</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Side */}
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Type of Raw Material
                </label>
                <select className="w-full border rounded p-2 focus:outline-none">
                  <option>Napier Grass</option>
                  <option>Cow Dung</option>
                  <option>Food Waste</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  CNG Output (Percentage; Reference IOCL)
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter %"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Total Cost
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter cost"
                  defaultValue={25}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Total Raw Material
                </label>
                <input
                  type="text"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="22.05 TBD"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter quantity"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  No. of Cascades Required Per Day{" "}
                  <span className="text-gray-500">
                    (Including 1 day Cascades)
                  </span>
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Land Required for Plant Installation
                </label>
                <select className="w-full border rounded p-2 focus:outline-none">
                  <option>Napier Grass</option>
                  <option>Cow Dung</option>
                  <option>Food Waste</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Average Raw Material Cost
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter cost"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Grass required per day
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter amount"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Total Cost
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter total cost"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-6 space-x-2">
            <button className="border border-[#00457B] text-[#00457B] px-4 py-2 rounded">
              Process to P&L
            </button>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Calculator;
