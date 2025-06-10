import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import { getImageUrl } from "../utils/supabaseStorageHelper";
import jsPDF from "jspdf";

const initialMaterials = [
  {
    name: "Cattle Dung",
    rate: 1000,
    transport: 250,
    dryMatter: 22,
    cng: 2.5,
    availability: 0,
  },
  {
    name: "Poultry Waste",
    rate: 2000,
    transport: 250,
    dryMatter: 38,
    cng: 6.0,
    availability: 0,
  },
  {
    name: "Paddy Straw",
    rate: 2500,
    transport: 500,
    dryMatter: 86,
    cng: 12.0,
    availability: 0,
  },
  {
    name: "Napier Grass",
    rate: 1000,
    transport: 250,
    dryMatter: 35,
    cng: 7.0,
    availability: 0,
  },
];

const Calculator = () => {
  const [materials, setMaterials] = useState(initialMaterials);
  const [results, setResults] = useState({
    totalRM: 0,
    totalDryProduct: 0,
    totalMethane: 0,
    avgRate: 0,
    avgTransport: 0,
  });

  useEffect(() => {
    calculate();
  }, [materials]);

  const handleChange = (index, field, value) => {
    const updated = [...materials];
    updated[index][field] = parseFloat(value) || 0;
    setMaterials(updated);
  };

  const calculate = () => {
    let totalAvailability = 0;
    let totalDryProduct = 0;
    let totalMethane = 0;
    let weightedRate = 0;
    let weightedTransport = 0;

    materials.forEach((mat) => {
      totalAvailability += mat.availability;
      totalDryProduct += (mat.availability * mat.dryMatter) / 100;
      totalMethane += (mat.availability * mat.cng) / 100;
      weightedRate += mat.availability * mat.rate;
      weightedTransport += mat.availability * mat.transport;
    });

    const avgRate =
      totalAvailability > 0 ? weightedRate / totalAvailability : 0;
    const avgTransport =
      totalAvailability > 0 ? weightedTransport / totalAvailability : 0;

    setResults({
      totalRM: totalAvailability,
      totalDryProduct,
      totalMethane,
      avgRate,
      avgTransport,
    });
  };

  //   const downloadPDF = () => {
  //     html2canvas(document.querySelector("#capture"), { scale: 2 }).then(
  //       (canvas) => {
  //         const imgData = canvas.toDataURL("image/png");
  //         const pdf = new jsPDF("landscape", "mm", "a4");
  //         const pdfWidth = pdf.internal.pageSize.getWidth();
  //         const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  //         pdf.addImage(imgData, "PNG", 10, 10, pdfWidth - 20, pdfHeight - 20);
  //         pdf.save("CBG_Capacity_Calculation.pdf");
  //       }
  //     );
  //   };

  const downloadPDF = () => {
    const captureElement = document.getElementById("capture");
    if (!captureElement) return alert("Capture area not found!");

    html2canvas(captureElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, pdfWidth - 20, pdfHeight - 20);
      pdf.save("CBG_Capacity_Calculation.pdf");
    });
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

      <div className="bg-gray-100 min-h-screen p-14">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          CBG Plant – {results.totalMethane.toFixed(2)} TPD Capacity Calculation
        </h2>

        <div id="capture" className="overflow-x-auto">
          <table className="w-full min-w-[1000px] bg-white rounded shadow">
            <thead>
              <tr className="bg-blue-600 text-white text-sm">
                <th className="p-2">Raw Material</th>
                <th className="p-2">Rate (Rs/Ton)</th>
                <th className="p-2">Transport (Rs/Ton)</th>
                <th className="p-2">Total Cost</th>
                <th className="p-2">Dry Matter %</th>
                <th className="p-2">CNG Output %</th>
                <th className="p-2">Availability (TPD)</th>
                <th className="p-2">Mix %</th>
                <th className="p-2">Dry Output (TPD)</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((mat, index) => {
                const totalCost = mat.rate + mat.transport;
                const dryOutput = (
                  (mat.availability * mat.dryMatter) /
                  100
                ).toFixed(2);
                const totalAvailability = materials.reduce(
                  (sum, item) => sum + item.availability,
                  0
                );
                const mixPercent =
                  totalAvailability > 0
                    ? ((mat.availability / totalAvailability) * 100).toFixed(2)
                    : "0.00";

                return (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
                  >
                    <td className="p-2 text-center">{mat.name}</td>
                    <td className="p-2 text-center">
                      <input
                        type="number"
                        className="w-20 p-1 border rounded text-right bg-yellow-50"
                        value={mat.rate}
                        onChange={(e) =>
                          handleChange(index, "rate", e.target.value)
                        }
                      />
                    </td>
                    <td className="p-2 text-center">
                      <input
                        type="number"
                        className="w-20 p-1 border rounded text-right bg-yellow-50"
                        value={mat.transport}
                        onChange={(e) =>
                          handleChange(index, "transport", e.target.value)
                        }
                      />
                    </td>
                    <td className="p-2 text-center">{totalCost}</td>
                    <td className="p-2 text-center">{mat.dryMatter}</td>
                    <td className="p-2 text-center">{mat.cng}</td>
                    <td className="p-2 text-center">
                      <input
                        type="number"
                        className="w-20 p-1 border rounded text-right bg-yellow-50"
                        value={mat.availability}
                        onChange={(e) =>
                          handleChange(index, "availability", e.target.value)
                        }
                      />
                    </td>
                    <td className="p-2 text-center">{mixPercent}%</td>
                    <td className="p-2 text-center">{dryOutput}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="bg-white p-4 mt-4 rounded shadow border-l-4 border-blue-600">
            <div className="text-gray-800">
              <strong>Total Raw Material:</strong> {results.totalRM.toFixed(2)}{" "}
              TPD
            </div>
            <div className="text-gray-800">
              <strong>Methane Potential:</strong>{" "}
              {results.totalMethane.toFixed(2)} TPD
            </div>
            <div className="text-gray-800">
              <strong>Total Dry Product:</strong>{" "}
              {results.totalDryProduct.toFixed(2)} TPD
            </div>
            <div className="text-gray-800">
              <strong>Avg Raw Material Cost:</strong>{" "}
              {results.avgRate.toFixed(2)} INR/Ton
            </div>
            <div className="text-gray-800">
              <strong>Avg Transport Cost:</strong>{" "}
              {results.avgTransport.toFixed(2)} INR/Ton
            </div>
          </div>
        </div>

        <button
          onClick={downloadPDF}
          className="block mx-auto mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
      <ContactSection />
    </>
  );
};

export default Calculator;
