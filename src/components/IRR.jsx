import React, { useState } from "react";
import { CSVLink } from "react-csv";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const IRR = ({ tableTab, setTableTab, allTableData }) => {
  const irrData = [
    { label: "Plant Capacity at 100% Production", value: "17250.0 Kg/Day" },
    { label: "Project Capacity at 80% Production", value: "13800.0 Kg/Day" },
    { label: "Raw Input", value: "Napier Grass" },
    { label: "Project Cost Rs. In Lakhs", value: "1500.0" },
  ];

  const equityData = [
    { label: "Equity in Lakhs", value: "450.0" },
    { label: "Term Loan in Lakhs", value: "1050.0" },
    { label: "Bank Rate of Interest in %", value: "10.00" },
    { label: "Term Loan Tenure Years", value: "10" },
    { label: "Debt to equity ratio", value: "70%" },
    { label: "Capital Expenditure", value: "80%" },
  ];

  const otherData = [
    { label: "Yearly Cost Escalation", value: "3%" },
    { label: "Tariff escalation", value: "3%" },
    { label: "Project Tenure", value: "15" },
    { label: "Plant Degredation", value: "0.1%" },
    { label: "Number of operational Days in a Year", value: "330" },
    { label: "Corporate Tax", value: "17%" },
  ];

  const summaryData = [
    { label: "PRE Tax Equity IRR", value: "#NUM!" },
    { label: "Pre Tax Project IRR", value: "3261.0%" },
    { label: "Average DSCR", value: "10.71" },
    { label: "Project Pay back", value: "1 Years and -6 Months" },
    { label: "Equity Pay back Period", value: "<1 Year" },
  ];

  const columns = [
    { name: "Details", selector: (row) => row.label, grow: 2 },
    { name: "Value", selector: (row) => row.value, grow: 1 },
  ];

  //   const [data, setData] = useState(initialData);

  const handleInputChange = (e, row, field) => {
    const newData = data.map((item) =>
      item.id === row.id ? { ...item, [field]: e.target.value } : item
    );
    setData(newData);
  };
  // console.log("allTableData", allTableData);
  //   const columns = [
  //     {
  //       name: "Raw Material",
  //       selector: (row) => row.type,
  //       sortable: true,
  //     },
  //     {
  //       name: "Rate (₹/Ton)",
  //       cell: (row) => (
  //         <input
  //           type="number"
  //           value={row.rate}
  //           onChange={(e) => handleInputChange(e, row, "rate")}
  //           className="border px-2 py-1 rounded w-24"
  //         />
  //       ),
  //     },
  //     {
  //       name: "Transport (₹/Ton)",
  //       cell: (row) => (
  //         <input
  //           type="number"
  //           value={row.transport}
  //           onChange={(e) => handleInputChange(e, row, "transport")}
  //           className="border px-2 py-1 rounded w-24"
  //         />
  //       ),
  //     },
  //     {
  //       name: "Total Cost (₹)",
  //       selector: (row) => +row.rate + +row.transport,
  //     },

  //     {
  //       name: "Dry Matter %",
  //       selector: (row) => row.type,
  //       sortable: true,
  //     },
  //     {
  //       name: "CNG Output %",
  //       selector: (row) => row.type,
  //       sortable: true,
  //     },

  //     {
  //       name: "Availability (TPD)",
  //       cell: (row) => (
  //         <input
  //           type="number"
  //           value={row.availability}
  //           onChange={(e) => handleInputChange(e, row, "availability")}
  //           className="border px-2 py-1 rounded w-24"
  //         />
  //       ),
  //     },
  //     {
  //       name: "Mix %",
  //       selector: (row) => row.type,
  //       sortable: true,
  //     },
  //     {
  //       name: "Dry Output (TDP)",
  //       selector: (row) => row.type,
  //       sortable: true,
  //     },
  //   ];

  const columnsProjected = [
    { name: "Col. No", selector: (row) => row.colNo, width: "80px" },
    { name: "Details/Years", selector: (row) => row.details, grow: 2 },
    { name: "1 (2025)", selector: (row) => row.y1 },
    { name: "2 (2026)", selector: (row) => row.y2 },
    { name: "3 (2027)", selector: (row) => row.y3 },
    { name: "4 (2028)", selector: (row) => row.y4 },
    { name: "5 (2029)", selector: (row) => row.y5 },
    { name: "6 (2030)", selector: (row) => row.y6 },
    { name: "7 (2031)", selector: (row) => row.y7 },
    { name: "8 (2032)", selector: (row) => row.y8 },
    { name: "9 (2033)", selector: (row) => row.y9 },
    { name: "10 (2034)", selector: (row) => row.y10 },
  ];

  const dataProjected = [
    {
      colNo: 1,
      details: "Year",
      y1: 2025,
      y2: 2026,
      y3: 2027,
      y4: 2028,
      y5: 2029,
      y6: 2030,
      y7: 2031,
      y8: 2032,
      y9: 2033,
      y10: 2034,
    },
    {
      colNo: 2,
      details: "Plant Efficiency",
      y1: "100%",
      y2: "99.90%",
      y3: "99.80%",
      y4: "99.70%",
      y5: "99.60%",
      y6: "99.50%",
      y7: "99.40%",
      y8: "99.30%",
      y9: "99.20%",
      y10: "99.10%",
    },
    {
      colNo: 3,
      details: "CNG",
      y1: "3,005.64",
      y2: "3,092.71",
      y3: "3,179.13",
      y4: "3,264.69",
      y5: "3,349.20",
      y6: "3,432.46",
      y7: "3,514.27",
      y8: "3,594.44",
      y9: "3,672.76",
      y10: "3,749.03",
    },
    {
      colNo: 4,
      details: "Electricity Cost",
      y1: 414,
      y2: 426.42,
      y3: 439.21,
      y4: 452.39,
      y5: 465.96,
      y6: 479.94,
      y7: 494.34,
      y8: 509.17,
      y9: 524.44,
      y10: 540.18,
    },
    {
      colNo: 5,
      details: "Boiler Fuel Cost",
      y1: 18.48,
      y2: 19.03,
      y3: 19.61,
      y4: 20.19,
      y5: 20.8,
      y6: 21.42,
      y7: 22.07,
      y8: 22.73,
      y9: 23.41,
      y10: 24.11,
    },
    {
      colNo: 6,
      details: "Average Raw Material",
      y1: 825,
      y2: 849.75,
      y3: 875.24,
      y4: 901.5,
      y5: 928.54,
      y6: 956.4,
      y7: 985.09,
      y8: 1014.65,
      y9: 1045.09,
      y10: 1076.44,
    },
    {
      colNo: 7,
      details: "Avg. Transportation of Raw Material",
      y1: 206.25,
      y2: 212.44,
      y3: 218.81,
      y4: 225.37,
      y5: 232.14,
      y6: 239.1,
      y7: 246.27,
      y8: 253.66,
      y9: 261.27,
      y10: 269.11,
    },
  ];

  const handleTableNextChange = (number) => {
    const isValid = data.every(
      (item) =>
        item.rate &&
        +item.rate > 0 &&
        item.transport &&
        +item.transport >= 0 &&
        item.availability &&
        +item.availability >= 0
      // Add more field checks if needed
    );

    // if (!isValid) {
    //   alert("Please fill all required fields with valid (non-zero) values.");
    //   return;
    // }

    setTableTab((prev) => prev + 1);
  };
  const handleTablePrevChange = (number) => {
    setTableTab((prev) => prev - 1);
  };

  const generateExcelFile = () => {
    const wb = XLSX.utils.book_new();

    // 1. Raw Material Sheet
    const rawMaterialData = [
      [
        "Raw Material",
        "Rate (₹/Ton)",
        "Transport (₹/Ton)",
        "Total Cost (₹)",
        "Dry Matter %",
        "CNG Output %",
        "Availability (TPD)",
        "Mix %",
        "Dry Output (TDP)",
      ],
      ["Cattle Dung", 1000, 250, 1250, 22, 2.5, 1000, 0, 220],
      ["Poultry Waste", 1000, 250, 1250, 38, 6, 0, 0, 0],
      ["Paddy Straw", 1000, 250, 1250, 86, 12, 0, 0, 0],
      ["Napier Grass", 1000, 250, 1250, 35, 7, 0, 0, 0],
      ["Presmud", 1000, 250, 1250, 40, 9, 0, 0, 0],
      [],
      ["Total Raw Material", "2000 TPD"],
      ["Methane Potential", "25.00 TPD"],
      ["Total Dry Product", "220.00 TPD"],
      ["Avg Raw Material Cost", "₹ 500.00 INR/Ton"],
      ["Avg Transport Cost", "₹ 125.00 INR/Ton"],
    ];
    const rawSheet = XLSX.utils.aoa_to_sheet(rawMaterialData);
    XLSX.utils.book_append_sheet(wb, rawSheet, "Raw Material");

    //2. IRR Summary
    const incomeData = [];

    // Push each table with blank rows in between
    const pushTable = (table) => {
      const aoa = XLSX.utils.json_to_sheet(table, { skipHeader: false });
      const rows = XLSX.utils.sheet_to_json(aoa, { header: 1 });
      incomeData.push(...rows, []); // add blank row after table
    };

    pushTable(irrData);
    pushTable(equityData);
    pushTable(otherData);
    pushTable(summaryData);
    pushTable(dataProjected);

    const incomeSheet = XLSX.utils.aoa_to_sheet(incomeData);
    XLSX.utils.book_append_sheet(wb, incomeSheet, "P&L Table");

    // 3. P&L Income Sheet
    const irrSummary = [
      ["Plant Capacity at 100% Production", "17250.0 Kg/Day"],
      ["Project Capacity at 80% Production", "13800.0 Kg/Day"],
      ["Raw Input", "Napier Grass"],
      ["Project Cost Rs. In Lakhs", "1500.0"],
      [],
      ["Equity in Lakhs", "450.0"],
      ["Term Loan in Lakhs", "1050.0"],
      ["Bank Rate of Interest in %", "10.00"],
      ["Term Loan Tenure Years", "10"],
      ["Debt to equity ratio", "70%"],
      ["Capital Expenditure", "80%"],
      [],
      ["Yearly Cost Escalation", "3%"],
      ["Tariff Escalation", "3%"],
      ["Project Tenure", "15"],
      ["Plant Degredation", "0.1%"],
      ["Operational Days in a Year", "330"],
      ["Corporate Tax", "17%"],
      [],
      ["SUMMARY"],
      ["PRE Tax Equity IRR", "#NUM!"],
      ["Pre Tax Project IRR", "3261.0%"],
      ["Average DSCR", "10.71"],
      ["Project Pay back", "1 Years and -6 Months"],
      ["Equity Pay back Period", "<1 Year"],
    ];

    // Push each table with blank rows in between
    const pushTable2 = (table) => {
      const aoa = XLSX.utils.json_to_sheet(table, { skipHeader: false });
      const rows = XLSX.utils.sheet_to_json(aoa, { header: 1 });
      incomeData.push(...rows, []); // add blank row after table
    };

    pushTable2(dataProjected);
    const irrSheet = XLSX.utils.aoa_to_sheet(irrSummary);
    XLSX.utils.book_append_sheet(wb, irrSheet, "IRR Summary");

    // Save File
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], { type: "application/octet-stream" });
    saveAs(blob, "Project-Financials-Master.xlsx");
  };

  return (
    <div className="bg-gray-100 min-h-[calc(50vh-100px)] px-5">
      {/* <h1 className="text-[#135384] font-bold">IRR</h1> */}

      <div className="my-4">
        <div className="flex space-x-20 justify-center items-start mb-4">
          <div className="w-full overflow-x-auto">
            <div className="bg-[#347bb1] rounded-md">
              <h1 className="text-white font-bold text-start p-3">
                IRR Details
              </h1>
              <DataTable
                columns={columns}
                data={irrData}
                striped
                highlightOnHover
                customStyles={{
                  rows: {
                    style: {
                      minHeight: "48px",
                      fontSize: "14px",
                    },
                    stripedStyle: {
                      backgroundColor: "#afc8db", // Tailwind's gray-50 equivalent
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="bg-[#347bb1] rounded-md">
              <h1 className="text-white font-bold text-start p-3">
                Equity & Loan Details
              </h1>
              <DataTable
                columns={columns}
                data={equityData}
                striped
                highlightOnHover
                customStyles={{
                  rows: {
                    style: {
                      minHeight: "48px",
                      fontSize: "14px",
                    },
                    stripedStyle: {
                      backgroundColor: "#afc8db", // Tailwind's gray-50 equivalent
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <div className="bg-[#347bb1] rounded-md">
              <h1 className="text-white font-bold text-start p-3">
                Project Assumptions
              </h1>
              <DataTable
                columns={columns}
                data={otherData}
                striped
                highlightOnHover
                customStyles={{
                  rows: {
                    style: {
                      minHeight: "48px",
                      fontSize: "14px",
                    },
                    stripedStyle: {
                      backgroundColor: "#afc8db", // Tailwind's gray-50 equivalent
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-5 items-center justify-center">
          <div className="w-full overflow-x-auto">
            <div className="bg-[#347bb1] rounded-md">
              <h1 className="text-white font-bold text-start p-3">Summary</h1>
              <DataTable
                columns={columns}
                data={summaryData}
                striped
                highlightOnHover
                customStyles={{
                  rows: {
                    style: {
                      minHeight: "48px",
                      fontSize: "14px",
                    },
                    stripedStyle: {
                      backgroundColor: "#afc8db", // Tailwind's gray-50 equivalent
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <CSVLink data={summaryData} filename={"cbg-data.csv"}>
        <button className="mt-4 px-4 py-2 bg-[#00457B] text-white rounded">
          Download CSV
        </button>
      </CSVLink> */}
      <div className="w-full overflow-x-auto mt-4">
        <div className="bg-[#347bb1] rounded-md">
          <h1 className="text-white font-bold text-start p-3">IRR Details</h1>
          <DataTable
            columns={columnsProjected}
            data={dataProjected}
            dense
            striped
            highlightOnHover
            customStyles={{
              rows: {
                style: {
                  minHeight: "48px",
                  fontSize: "14px",
                },
                stripedStyle: {
                  backgroundColor: "#afc8db", // Tailwind's gray-50 equivalent
                },
              },
            }}
            pagination
          />
        </div>
      </div>
      <div className="flex justify-between w-full mt-4">
        <div className=" w-full flex ">
          <CSVLink data={dataProjected} filename={"cbg-data.csv"}>
            <button className="block mt-4 px-4 py-2 bg-[#00457B] text-white rounded">
              Download CSV
            </button>
          </CSVLink>
          <button
            onClick={generateExcelFile}
            className="ml-2 mt-4 px-4 py-2 bg-[#00457B] text-white rounded"
          >
            Download All Excel sheet
          </button>
        </div>

        <div className="flex justify-end w-full">
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
        </div>
      </div>
    </div>
  );
};

export default IRR;
