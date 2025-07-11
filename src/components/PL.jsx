import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
const PL = ({
  tableTab,
  setTableTab,
  rows,
  setRows,
  PLIncomeData,
  setPLIncomeData,
  PLExpData,
  setPLExpData,
}) => {
  const initialData = [
    {
      id: 1,
      label: "Tonnage of Raw Material",
      value: "250 Ton",
    },
    {
      id: 2,
      label: "Average Rate of Raw Material per ton",
      value: "Rs. 1,000.00 per ton",
    },
    {
      id: 3,
      label: "Average Cost of Transport of Raw Material",
      value: "Rs. 250.00 per ton",
    },
    {
      id: 4,
      label: "Average Cost of Raw Material with Transportation",
      value: "Rs. 1,250.00 per ton",
    },
  ];
  const incomePDData = [
    {
      id: 1,
      specification: "CNG (₹)",
      rate: "₹ 66.00/Kg",
      subtotal: "₹ 9,10,800.00",
    },
    {
      id: 2,
      specification: "Fertilizer/Pallets (/Ton)",
      rate: "₹ 0.00/Ton",
      subtotal: "₹ 0.00",
      isInput: true,
    },
    {
      id: 3,
      specification: "Carbon Credits (₹)",
      rate: "₹0.00",
      subtotal: "₹ 0.00",
      isInput: true,
    },
  ];

  const [data, setData] = useState(initialData);
  const [PLdata, setPLData] = useState([...rows]);
  const [incomePData, setIncomePData] = useState([...PLIncomeData]);
  const [expenditurePData, setExpenditurePData] = useState([...PLExpData]);
  const handleCNGInputChange = (e, row, field) => {
    const newData = PLdata.map((item) =>
      item.id === row.id ? { ...item, [field]: e.target.value } : item
    );
    setPLData(newData);
  };
  console.log("expenditurePData", expenditurePData);
  const handleIncomeInputChange = (e, row, field) => {
    const newData = incomePData.map((item) =>
      item.id === row.id ? { ...item, [field]: e.target.value } : item
    );
    setIncomePData(newData);
  };

  const handleExpInputChange = (e, row, field) => {
    const newData = expenditurePData.map((item) =>
      item.id === row.id ? { ...item, [field]: e.target.value } : item
    );

    setExpenditurePData(newData);
  };

  useEffect(() => {
    setPLIncomeData(incomePData);
  }, [incomePData]);

  useEffect(() => {
    setPLExpData(expenditurePData);
  }, [expenditurePData]);

  useEffect(() => {
    setRows(PLdata);
  }, [PLdata]);
  const rightData = [
    {
      id: 1,
      label: "Highest Rated Capacity of Installed Plant (100%)",
      value: "17250 Kg/day",
    },
    {
      id: 2,
      label:
        "Total Working Capacity of Installed Plant (considered as 80%) (Kg/day)",
      value: 13800,
      key: "totalWorking",
    },
    {
      id: 3,
      label: "Total Solid Manure Production per day (ton)",
      value: 50,
      key: "solidManure",
    },
    {
      id: 4,
      label: "No. of Moving CNG Transportation Vehicle",
      value: "8",
      isInput: true,
    },
  ];

  const [incomeData] = useState([
    {
      id: 1,
      sno: 1,
      specification: "CNG",
      rate: "₹ 66.00/Kg",
      subtotal: 910800,
    },
    {
      id: 2,
      sno: 2,
      specification: "Fertilizer/Pallets",
      rate: "₹ 0.00/Ton",
      subtotal: 0,
    },
    {
      id: 3,
      sno: 3,
      specification: "Carbon Credits",
      rate: "₹ 0.00",
      subtotal: 0,
    },
  ]);

  const incomeColumns = [
    {
      name: "S.No",
      selector: (row) => row.sno,
      width: "80px",
      center: true,
      style: { fontWeight: "bold" },
    },
    {
      name: "Specification",
      selector: (row) => row.specification,
      grow: 2,
      style: { fontWeight: 500 },
    },
    {
      name: "Rate",
      selector: (row) => row.rate,
      center: true,
    },
    {
      name: "Sub Total",
      selector: (row) => `₹ ${row.subtotal.toLocaleString()}`,
      center: true,
      style: { fontWeight: "bold" },
    },
  ];

  const [priceOfCNGData] = useState([
    {
      id: 1,
      sno: 1,
      cng: `₹ 66.00/Kg`,
      electricityRate: "₹ 10.00/KWh",
      manure: "₹ 0.00/Kg",
      workingDays: 330,
      boilerFuel: `0.80 ton per day`,
      electricityRequirement: `~12545 kWh`,
    },
    {
      id: 2,
      sno: 2,
      specification: "Fertilizer/Pallets",
      rate: "₹ 0.00/Ton",
      subtotal: 0,
    },
    {
      id: 3,
      sno: 3,
      specification: "Carbon Credits",
      rate: "₹ 0.00",
      subtotal: 0,
    },
  ]);

  const totalEarning = data.reduce((sum, row) => sum + row.subtotal, 0);

  const columns = [
    {
      name: "Details",
      selector: (row) => row.label,
      wrap: true,
      grow: 2,
      style: {
        fontWeight: 500,
      },
    },
    // {
    //   name: "Value",
    //   selector: (row) => row.value,
    //   wrap: true,
    //   style: {
    //     fontWeight: "bold",
    //   },
    // },
    {
      name: "Value",
      cell: (row) =>
        row.isInput ? (
          <input
            type="text"
            className="text-white border-2 border-white rounded-md px-2 py-1 w-28 focus:ring-2 focus:ring-white bg-[#336f9c]"
            value={row.value}
            onChange={(e) => handleCNGInputChange(e, row, "value")}
          />
        ) : (
          <strong>{row.value}</strong>
        ),
    },
  ];

  const columnsIPD = [
    { name: "S.No", selector: (row) => row.id, width: "70px" },
    { name: "Specification", selector: (row) => row.specification, grow: 2 },
    {
      name: "Rate",
      cell: (row) => {
        const matched = PLdata.find((item) => item.key === "electricityRate");

        return row.isInput ? (
          <input
            type="text"
            className="text-white border-2 border-white rounded-md px-2 py-1 w-28 focus:ring-2 focus:ring-white bg-[#336f9c]"
            value={row.value}
            onChange={(e) => handleIncomeInputChange(e, row, "rate")}
          />
        ) : (
          <strong>{row?.isEditable ? matched?.value : row?.rate}</strong>
        );
      },
      // selector: (row) => row.rate
    },
    {
      name: "Sub Total",
      // selector: (row) => {
      //   const dryOutput = ((row.value * row.dryMatter) / 100).toFixed(2);
      //   return dryOutput;
      // },
      // let cng=rightData.

      selector: (row) => {
        const matchedRate = PLdata.find(
          (item) => item.key === "electricityRate"
        );

        const matched = rightData.find((item) => item.key === "totalWorking");
        const matchedSolidManure = rightData.find(
          (item) => item.key === "solidManure"
        );
        // return matched ? matched.unit : 'N/A';
        console.log("matched", { matched, row: row });
        let subtotal = row.isInput
          ? row.key === "fertilizer"
            ? Number(row.rate) * Number(matchedSolidManure.value)
            : (Number(matched.value) / 1000) * 20 * Number(row.rate)
          : Number(matched.value) * Number(matchedRate.value);
        return subtotal;
      },
      sortable: true,
    },
  ];
  console.log("columnsIPD", columnsIPD);
  const columnsExPD = [
    { name: "S.No", selector: (row) => row.id, width: "70px" },
    { name: "Specification", selector: (row) => row.specification, grow: 2 },
    {
      name: "Rate",
      cell: (row) => {
        const matched = PLdata.find((item) => item.key === "electricityRate");

        return row.isInput ? (
          <input
            type="text"
            className="text-white border-2 border-white rounded-md px-2 py-1 w-28 focus:ring-2 focus:ring-white bg-[#336f9c]"
            value={row.value}
            onChange={(e) => handleExpInputChange(e, row, "value")}
          />
        ) : (
          <strong>{row?.isEditable ? matched?.value : row?.rate}</strong>
        );
      },
      // selector: (row) => row.rate
    },
    {
      name: "Sub Total",
      // selector: (row) => {
      //   const dryOutput = ((row.value * row.dryMatter) / 100).toFixed(2);
      //   return dryOutput;
      // },
      // let cng=rightData.

      selector: (row) => {
        const matchedRate = PLdata.find(
          (item) => item.key === "totalBoilerFuel"
        );

        const matched = rightData.find((item) => item.key === "totalWorking");
        // const matchedSolidManure = rightData.find(
        //   (item) => item.key === "solidManure"
        // );
        // return matched ? matched.unit : 'N/A';
        console.log("matched", { matched, row: row });
        return row.isInput
          ? row.key === "boilerFuel"
            ? Number(matchedRate.value) * Number(row.value)
            : Number(row.value)
          : Number(matched.value);
      },
    },
  ];

  const handleInputChange = (e, row, field) => {
    const newData = data.map((item) =>
      item.id === row.id ? { ...item, [field]: e.target.value } : item
    );
    setData(newData);
  };

  const expenditureData = [
    {
      id: 1,
      specification: "Electricity Cost",
      rate: "₹ 10.00/KWh",
      subtotal: "₹ 1,25,454.55",
      // isInput: true,
    },
    {
      id: 2,
      specification: "Boiler Fuel Cost",
      rate: "₹ 7,000.00/Ton",
      subtotal: "5,600.00",
      isInput: true,
    },
    {
      id: 3,
      specification: "Average Raw Material",
      rate: "₹ 1,000.00/Ton",
      subtotal: "₹  2,50,000.00",
    },
    {
      id: 4,
      specification: "Average Transportation of Raw Material",
      rate: "₹ 250.00/Ton",
      subtotal: "₹ 62,500.00",
    },
    {
      id: 5,
      specification: "Human Resource",
      rate: "₹ 13,000.00/Day",
      subtotal: "13,000.00",
      isInput: true,
    },
    {
      id: 6,
      specification: "Maintenance",
      rate: "₹ 5,000.00/Day",
      subtotal: "5,000.00",
      isInput: true,
    },
    {
      id: 7,
      specification:
        "Transportation cost of CNG (Final Product) Estimated for Average of 70 km Round Trip from Plant.",
      rate: "₹ 700.00/trip",
      subtotal: "₹ 5,600.00",
    },
    {
      id: 8,
      specification: "Misc Expenses",
      rate: "₹ 3,000.00/Day",
      subtotal: "3,000.00",
      isInput: true,
    },
  ];

  // Table columns
  const columnsCNG = [
    {
      name: "Details",
      selector: (row) => row.detail,
      wrap: true,
      grow: 2,
    },
    {
      name: "Value",
      cell: (row) =>
        row.isInput ? (
          <input
            type="text"
            className="text-white border-2 border-white rounded-md px-2 py-1 w-28 focus:ring-2 focus:ring-white bg-[#336f9c]"
            value={row.value}
            onChange={(e) => handleCNGInputChange(e, row, "value")}
          />
        ) : (
          <strong>{row.value}</strong>
        ),
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
  // useEffect(() => {
  //   setAllTableData((prev) => {
  //     return {
  //       ...prev,
  //       dataV2: data,
  //       rightData: rightData,
  //       incomeData: incomeData,
  //       incomePDData: incomePDData,
  //       expenditureData: expenditureData,
  //     };
  //   });
  // }, [data]);
  const exportMultipleTablesToExcel = () => {
    const sheet = [];

    // Push each table with blank rows in between
    const pushTable = (table) => {
      const aoa = XLSX.utils.json_to_sheet(table, { skipHeader: false });
      const rows = XLSX.utils.sheet_to_json(aoa, { header: 1 });
      sheet.push(...rows, []); // add blank row after table
    };

    pushTable(data);
    pushTable(rightData);
    pushTable(incomeData);
    pushTable(incomePDData);
    pushTable(expenditurePData);

    const ws = XLSX.utils.aoa_to_sheet(sheet);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "PL Data");

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, "PL_Data.xlsx");
  };
  const totalincomePData = incomePData?.reduce(
    (sum, item) => sum + Number(item.subtotal),
    0
  );

  console.log("totalincomePData", totalincomePData);

  return (
    <div className="bg-gray-100 min-h-[calc(50vh-100px)]  flex  flex-col justify-evenly items-center gap-y-6 p-6">
      {/* <h1 className="text-[#135384] font-bold">Profit and Loss</h1> */}
      <div className="gap-6 w-full flex justify-between items-start">
        <div className="w-full overflow-x-auto">
          <div className="bg-[#347bb1] rounded-md">
            <h1 className="text-white font-bold text-start p-3">
              Raw Materials Details
            </h1>
            <DataTable
              columns={columns}
              data={data}
              // pagination
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
              striped
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="bg-[#347bb1] rounded-md">
            <h1 className="text-white font-bold text-start p-3">
              Plan Capacity & Tenure Details
            </h1>

            <DataTable
              columns={columns}
              data={rightData}
              // pagination
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
              striped
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="bg-[#347bb1] rounded-md">
            <h1 className="text-white font-bold text-start p-3">
              CNG & Fertilizer Profits
            </h1>
            <DataTable
              columns={columnsCNG}
              data={PLdata}
              // pagination
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
              striped
            />
          </div>
        </div>
      </div>

      <div className="space-y-6 w-full overflow-x-auto">
        <div className="bg-[#347bb1] rounded-md">
          <h1 className="text-white font-bold text-start p-3">
            Income (Per Day)
          </h1>
          <DataTable
            columns={columnsIPD}
            data={incomePData}
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

        <div className="flex  justify-between font-bold text-right text-green-600 mt-6">
          <span>Total Earnings:</span>{" "}
          <span>₹ {totalincomePData?.toFixed(2)}</span>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="bg-[#347bb1] rounded-md">
            <h1 className="text-white font-bold text-start p-3">
              Expenditure (Per Day)
            </h1>
            <DataTable
              columns={columnsExPD}
              data={expenditurePData}
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

        <div className="flex justify-between font-bold text-right text-red-600 mt-2">
          <span>Total Expenditure:</span> ₹ 4,70,154.55
        </div>

        <h2 className="text-lg font-semibold mt-6">Project Profits</h2>
        <div className="grid grid-cols-3 gap-4 text-sm border p-4 rounded bg-gray-50">
          <div>
            <div className="font-medium">Daily Profit:</div>₹ 4,40,645.45
          </div>
          <div>
            <div className="font-medium">Monthly Profit:</div>₹ 1,32,19,363.64
          </div>
          <div>
            <div className="font-medium">Yearly Profit:</div>₹ 14,54,13,000.00
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full gap-x-4">
        <div className="flex w-full gap-x-4 ">
          <div>
            <CSVLink data={data} filename={"cbg-data.csv"}>
              <button className="mt-4 px-4 py-2 bg-[#00457B] text-white rounded w-fit">
                Download CSV
              </button>
            </CSVLink>
          </div>
          <div>
            <button
              onClick={exportMultipleTablesToExcel}
              className="mt-4 px-4 py-2 bg-[#00457B] text-white rounded"
            >
              Download All Excel sheet
            </button>
          </div>
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

export default PL;
