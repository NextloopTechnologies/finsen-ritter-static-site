import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import { getImageUrl } from "../utils/supabaseStorageHelper";
import jsPDF from "jspdf";
import RawMaterialDetails from "../components/RawMaterialDetails";
import PL from "../components/PL";
import IRR from "../components/IRR";
import { calculatorTableData } from "../utils/ExportCalculatorData";

const Calculator = () => {
  const [tableTab, setTableTab] = useState(0);
  const [unit, setUnit] = useState("kg");
  const [allTableData, setAllTableData] = useState(
    calculatorTableData.rawMaterials.rows
  );
  const [PLTableData, setPLTableData] = useState(
    calculatorTableData.cngFetilizerProfits.rows
  );
  const [PLIncomeData, setPLIncomeData] = useState(
    calculatorTableData.incomePerDay.rows
  );
   const [PLExpData, setPLExpData] = useState(
    calculatorTableData.expenditurePerDay.rows
  );
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

  const handleDownloadCSV = () => {
    const csvHeaders = [
      "Tonnage of Raw Material",
      "Average Cost of Transport of Raw Material",
      "Highest Rated Capacity",
      "Total Working Capacity",
      "Electricity Rate",
      "Price of CNG",
      "Total Fertilizer Production/Pallets",
      "No. of Working Days",
      "Profit Type",
      "Project Profits",
      "Total Earning",
      "Total Expenditure",
    ];

    const csvRows = [
      [
        formData.rawMaterial,
        formData.transportCost,
        formData.highestRatedCapacity,
        formData.totalWorkingCapacity,
        formData.electricityRate,
        formData.priceOfCNG,
        formData.fertilizerProduction,
        formData.workingDays,
        formData.profitType,
        results.projectProfits,
        results.totalEarning,
        results.totalExpenditure,
      ],
    ];

    const csvContent =
      csvHeaders.join(",") +
      "\n" +
      csvRows.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "CBG_Capacity_Calculation.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const handleTableNextChange = (number) => {
  //   setTableTab((prev) => prev + 1);
  // };
  // const handleTablePrevChange = (number) => {
  //   setTableTab((prev) => prev - 1);
  // };
  console.log("allTableData", allTableData);
  const renderTable = useMemo(() => {
    if (tableTab == 0) {
      return (
        <RawMaterialDetails
          tableTab={tableTab}
          setTableTab={setTableTab}
          rows={allTableData}
          setRowData={setAllTableData}
        />
      );
    } else if (tableTab == 1) {
      return (
        <PL
          tableTab={tableTab}
          setTableTab={setTableTab}
          rows={PLTableData}
          setRows={setPLTableData}
          PLIncomeData={PLIncomeData} setPLIncomeData={setPLIncomeData}

          PLExpData={PLExpData} setPLExpData={setPLExpData}
          // setAllTableData={setAllTableData}
        />
      );
    } else if (tableTab == 2) {
      return (
        <IRR
          tableTab={tableTab}
          setTableTab={setTableTab}
          // allTableData={allTableData}
        />
      );
    }
  }, [tableTab]);

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
      {/* <div className="w-full bg-white py-12 px-4 mb-10">
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Raw Material
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="text-[#585858]">
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
                <label className="block text-sm font-medium mb-1 text-[#585858]">
                  CNG Output{" "}
                  <span className="font-normal">
                    (Percentage; Reference IOCL)
                  </span>
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter %"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#585858]">
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
                <label className="block text-sm font-medium mb-1 text-[#585858]">
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
                <label className="block text-sm font-medium mb-1 text-[#585858]">
                  Quantity
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter quantity"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#585858]">
                  No. of Cascades Required Per Day{" "}
                  <span className="font-normal">
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
                <label className="block text-sm font-medium mb-1 text-[#585858]">
                  Land Required for Plant Installation
                </label>
                <select className="w-full border rounded p-2 focus:outline-none">
                  <option>Napier Grass</option>
                  <option>Cow Dung</option>
                  <option>Food Waste</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#585858]">
                  Average Raw Material Cost
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter cost"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#585858]">
                  Grass required per day
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-2 focus:outline-none"
                  placeholder="Enter amount"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#585858]">
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

          <div className="flex justify-end mt-6 space-x-2">
            <button className="border border-[#00457B] text-[#00457B] px-4 py-2 rounded">
              Process to P&L
            </button>
          </div>
        </div>
      </div> */}
      {renderTable}
      {/* <div className="flex justify-end">
        <button
          type="button"
          disabled={tableTab < 1}
          onClick={handleTablePrevChange}
          className="text-white w-10 h-10 p-4 bg-[#00457B] disabled:bg-gray-400 flex items-center justify-center m-2"
        >
          {"<"}
        </button>

        <button
          disabled={tableTab > 1}
          onClick={handleTableNextChange}
          className="text-white w-10 h-10 p-4 bg-[#00457B] disabled:bg-gray-400 flex items-center justify-center m-2"
        >
          {">"}
        </button>
      </div> */}

      {/* <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200 mb-10">
        <h2 className="text-lg font-semibold text-blue-800 mb-4">
          Profit & Loss
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#585858]">
                Tonnage of Raw Material
              </label>
              <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-100">
                <option>Napier Grass</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-[#585858]">
                Average Cost of Transport of Raw Material
              </label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                placeholder="......"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-[#585858]">
                  Highest Rated Capacity
                </label>
                <input
                  type="text"
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#585858]">
                  Total Working Capacity
                </label>
                <input
                  type="text"
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="......"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-[#585858]">
                  Electricity Rate
                </label>
                <input
                  type="text"
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#585858]">
                  Price of CNG
                </label>
                <input
                  type="text"
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="......"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#585858]">
                Total Fertilizer Production/Pallets
              </label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                placeholder="22.05 TBD"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#585858]">
                No. of Working Days
              </label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                placeholder="......"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute bottom-12 right-0">
                <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>Daily</option>
                </select>
              </div>
              <label className="text-sm font-medium text-[#585858]">
                Project Profits
              </label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                value="₹76,600.00"
                readOnly
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#585858]">
                Total Earning
              </label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                value="₹189,000.00"
                readOnly
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#585858]">
                Total Expenditure
              </label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                value="₹189,000.00"
                readOnly
              />
            </div>
          </div>
        </div>

      
      </div> */}
      <div className="flex justify-center mt-6 gap-4">
        {/* <button className="min-w-32 px-6 py-1 border border-[#00457B] text-[#00457B] rounded-md hover:bg-blue-50 transition">
          View
        </button>
        <button
          onClick={handleDownloadCSV}
          className="min-w-32 px-6 py-1 bg-[#00457B] text-white rounded-md hover:bg-blue-900 transition"
        >
          Download
        </button> */}
      </div>
      <ContactSection />
    </>
  );
};

export default Calculator;
