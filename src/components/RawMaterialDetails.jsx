import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
// import { calculatorTableData } from "../utils/ExportCalculatorData";

const RawMaterialDetails = ({ tableTab, setTableTab, rows, setRowData }) => {
  // const initialData = [
  //   {
  //     id: 1,
  //     type: "Cattle Dung",
  //     rate: 1000,
  //     transport: 250,
  //     availability: 0,
  //     dryMatter: 22,
  //     cng: 2,
  //     mix: 5,
  //     dryOutput: 0,
  //   },
  //   {
  //     id: 2,
  //     type: "Poultry Waste",
  //     rate: 1000,
  //     transport: 250,
  //     availability: 0,
  //     dryMatter: 38,
  //     cng: 6,
  //     mix: 0,
  //     dryOutput: 0,
  //   },
  //   {
  //     id: 3,
  //     type: "Paddy Straw",
  //     rate: 1000,
  //     transport: 250,
  //     availability: 0,
  //     dryMatter: 86,
  //     cng: 12,
  //     mix: 0,
  //     dryOutput: 0,
  //   },
  //   {
  //     id: 4,
  //     type: "Napier Grass",
  //     rate: 1000,
  //     transport: 250,
  //     availability: 0,
  //     dryMatter: 35,
  //     cng: 7,
  //     mix: 0,
  //     dryOutput: 0,
  //   },
  //   {
  //     id: 5,
  //     type: "Presmud",
  //     rate: 1000,
  //     transport: 250,
  //     availability: 0,
  //     dryMatter: 40,
  //     cng: 9,
  //     mix: 0,
  //     dryOutput: 0,
  //   },
  // ];

  // const [data, setData] = useState(calculatorTableData.rawMaterials.rows);
  const [error, setError] = useState("");
  // const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState([...rows]);
  const [results, setResults] = useState({
    totalRM: 0,
    totalDryProduct: 0,
    totalMethane: 0,
    avgRate: 0,
    avgTransport: 0,
  });

  const handleInputChange = (e, row, field) => {
    const newData = data.map((item) =>
      item.id === row.id ? { ...item, [field]: e.target.value } : item
    );

    setData(newData);
  };

  useEffect(() => {
    setRowData(data);
  }, [data]);

  const columns = [
    {
      name: "Raw Material",
      selector: (row) => row.type,
      sortable: true,
      key: "",
    },
    {
      name: "Rate (₹/Ton)",
      cell: (row) => (
        <input
          type="number"
          value={row.rate}
          onChange={(e) => handleInputChange(e, row, "rate")}
          className="text-white border-2 border-white rounded-md px-2 py-1 w-36 focus:ring-2 focus:ring-white bg-[#336f9c]"
        />
      ),
    },
    {
      name: "Transport (₹/Ton)",
      cell: (row) => (
        <input
          type="number"
          value={row.transport}
          onChange={(e) => handleInputChange(e, row, "transport")}
          className="text-white border-2 border-white rounded-md px-2 py-1 w-36 focus:ring-2 focus:ring-white bg-[#336f9c]"
        />
      ),
    },
    {
      name: "Total Cost (₹)",
      selector: (row) => +row.rate + +row.transport,
    },

    {
      name: "Dry Matter %",
      selector: (row) => row.dryMatter,
      sortable: true,
    },
    {
      name: "CNG Output %",
      selector: (row) => row.cng,
      sortable: true,
    },

    {
      name: "Availability (TPD)",
      cell: (row) => (
        <input
          type="number"
          value={row.availability}
          onChange={(e) => handleInputChange(e, row, "availability")}
          className="text-white border-2 border-white rounded-md px-2 py-1 w-36 focus:ring-2 focus:ring-white bg-[#336f9c]"
        />
      ),
    },
    {
      name: "Mix %",
      selector: (row) => {
        const totalAvailability = data?.reduce(
          (sum, item) => sum + Number(item.availability),
          0
        );
        const mixPercent =
          row.availability > 0
            ? ((row.availability / totalAvailability) * 100).toFixed(2)
            : "0.00";

        return mixPercent;
      },
      sortable: true,
    },
    {
      name: "Dry Output (TDP)",
      selector: (row) => {
        const dryOutput = ((row.availability * row.dryMatter) / 100).toFixed(2);
        return dryOutput;
      },
      sortable: true,
    },
  ];

  useEffect(() => {
    calculate();
    // setAllTableData({
    //   data: data,
    //   summaryRows: [
    //     [],
    //     ["Summary"],
    //     ["Total Raw Material", results?.totalRM.toFixed(2) + " TPD"],
    //     ["Methane Potential", results.totalMethane.toFixed(2) + " TPD"],
    //     ["Total Dry Product", results.totalDryProduct.toFixed(2) + " TPD"],
    //     ["Avg Raw Material Cost", results.avgRate.toFixed(2) + " INR/Ton"],
    //     ["Avg Transport Cost", results.avgTransport.toFixed(2) + " INR/Ton"],
    //   ],
    // });
  }, [data]);

  const calculate = () => {
    let totalAvailability = 0;
    let totalDryProduct = 0;
    let totalMethane = 0;
    let weightedRate = 0;
    let weightedTransport = 0;

    data?.forEach((mat) => {
      totalAvailability += Number(mat?.availability);
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

  const handleTableNextChange = (number) => {
    const isValid = data.some(
      (item) => item.availability && +item.availability > 0
    );
    if (!isValid) {
      setError(
        "Please fill one of availabilty(TPD) fields with valid (non-zero) values."
      );
      return;
    }
    setTableTab((prev) => prev + 1);
  };
  const handleTablePrevChange = (number) => {
    setTableTab((prev) => prev - 1);
  };
  const generateExcelFile = () => {
    const headers = columns.map((col) => col.name);
    const dataKeys = columns.map((col) => {
      if (col.selector && typeof col.selector === "function") {
        const temp = col.selector(data[0]);
        for (const key in data[0]) {
          if (data[0][key] === temp) return key;
        }
      }
      return Object.keys(data[0]);
    });
    const rows = data.map((item) =>
      dataKeys[1].map((key) => (item[key] !== undefined ? item[key] : ""))
    );

    const summaryRows = [
      [],
      ["Summary"],
      ["Total Raw Material", results?.totalRM.toFixed(2) + " TPD"],
      ["Methane Potential", results.totalMethane.toFixed(2) + " TPD"],
      ["Total Dry Product", results.totalDryProduct.toFixed(2) + " TPD"],
      ["Avg Raw Material Cost", results.avgRate.toFixed(2) + " INR/Ton"],
      ["Avg Transport Cost", results.avgTransport.toFixed(2) + " INR/Ton"],
    ];

    const worksheetData = [headers, ...rows, ...summaryRows];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Raw Materials");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "raw-materials.xlsx");
  };

  return (
    <div className="bg-gray-100 min-h-[calc(50vh-50px)] w-full  flex flex-col justify-start items-start">
      <div className="min-w-full p-4">
        <div className="bg-[#347bb1] rounded-md">
          <h1 className="text-white font-bold text-start p-3">Raw Materials</h1>
          <DataTable
            columns={columns}
            data={data}
            // pagination
            highlightOnHover
            striped
            customStyles={{
              rows: {
                style: {
                  minHeight: "48px",
                  fontSize: "14px",
                },
                stripedStyle: {
                  backgroundColor: "#afc8db",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="flex items-start justify-center ml-4">
        <div className="w-[40vw] mx-auto rounded-md border p-2 shadow-sm bg-white space-y-2">
          <div className=" flex justify-between">
            <span className="font-bold   min-w-48 block ">
              Total Raw Material:
            </span>
            <span className="ml-1 min-w-48 block ">
              {results?.totalRM.toFixed(2)} TPD
            </span>
          </div>
          <div className=" flex justify-between">
            <span className="font-bold text-black  min-w-48 block ">
              Methane Potential:
            </span>
            <span className="ml-1 min-w-48 block  ">
              {results.totalMethane.toFixed(2)} TPD
            </span>
          </div>
          <div className=" flex justify-between">
            <span className="font-bold text-black  min-w-48 block ">
              Total Dry Product:
            </span>
            <span className="ml-1 min-w-48 block ">
              {results.totalDryProduct.toFixed(2)} TPD
            </span>
          </div>
          <div className=" flex justify-between">
            <span className="font-bold text-black  min-w-48 block ">
              Avg Raw Material Cost:
            </span>
            <span className="ml-1 min-w-48 block ">
              {results.avgRate.toFixed(2)} INR/Ton
            </span>
          </div>
          <div className=" flex justify-between">
            <span className="font-bold text-black  min-w-48 block ">
              Avg Transport Cost:
            </span>
            <span className="ml-1 min-w-48 block ">
              {results.avgTransport.toFixed(2)} INR/Ton
            </span>
          </div>
        </div>

        {error && (
          <span className="bg-yellow-100 p-3 rounded-md ml-4 shadow-md flex justify-center items-center gap-2 text-red-500">
            <span className=" justify-center items-center w-5 h-5 rounded-full bg-red-500 flex text-white">
              !
            </span>{" "}
            {error}
          </span>
        )}
      </div>
      <div className="flex justify-between w-full">
        <div className="ml-4 w-full">
          {/* <CSVLink data={data} filename={"cbg-data.csv"}> */}
          <button
            onClick={generateExcelFile}
            className="min-w-fit mt-4 px-4 py-2 bg-[#00457B] text-white rounded"
          >
            Download CSV
          </button>
          {/* </CSVLink> */}
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

export default RawMaterialDetails;
