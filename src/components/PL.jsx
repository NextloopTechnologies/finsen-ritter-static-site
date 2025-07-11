import React, { useEffect, useMemo, useState } from "react";
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

  const processedIncomeData = useMemo(() => {
    const matchedRate = PLdata.find((item) => item.key === "electricityRate");
    const matchedTotalWorking = rightData.find(
      (item) => item.key === "totalWorking"
    );
    const matchedSolidManure = rightData.find(
      (item) => item.key === "solidManure"
    );

    return incomePData.map((row) => {
      let subTotal = 0;

      if (row.isInput) {
        if (row.key === "fertilizer") {
          subTotal = Number(row.rate) * Number(matchedSolidManure?.value || 0);
        } else {
          subTotal =
            (Number(matchedTotalWorking?.value || 0) / 1000) *
            20 *
            Number(row.rate);
        }
      } else {
        subTotal =
          Number(matchedTotalWorking?.value || 0) *
          Number(matchedRate?.value || 0);
      }

      return {
        ...row,
        subtotal: subTotal.toFixed(2), // Persist for UI + export
      };
    });
  }, [incomePData, PLdata, rightData]);

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
            value={row.rate}
            onChange={(e) => handleIncomeInputChange(e, row, "rate")}
          />
        ) : (
          <strong>{row?.isEditable ? matched?.value : row?.rate | 0}</strong>
        );
      },
      // selector: (row) => row.rate
    },
    {
      name: "Sub Total",
      selector: (row) => row.subtotal,

      // selector: (row) => {
      //   const matchedRate = PLdata.find(
      //     (item) => item.key === "electricityRate"
      //   );

      //   const matched = rightData.find((item) => item.key === "totalWorking");
      //   const matchedSolidManure = rightData.find(
      //     (item) => item.key === "solidManure"
      //   );
      //   let subtotal = row.isInput
      //     ? row.key === "fertilizer"
      //       ? Number(row.rate) * Number(matchedSolidManure.value)
      //       : (Number(matched.value) / 1000) * 20 * Number(row.rate)
      //     : Number(matched.value) * Number(matchedRate.value);
      //   return subtotal;
      // },
      sortable: true,
    },
  ];
  const processedEXpdata = useMemo(() => {
    const matchedRate = PLdata.find((item) => item.key === "totalBoilerFuel");
    const matchedTotalWorking = rightData.find(
      (item) => item.key === "totalWorking"
    );

    return expenditurePData.map((row) => {
      let subTotal = 0;

      if (row.isInput && row.key === "boilerFuel") {
        subTotal = Number(matchedRate?.value || 0) * Number(row.value || 0);
      } else if (row.isInput) {
        subTotal = Number(row.value || 0);
      } else {
        subTotal = Number(matchedTotalWorking?.value || 0);
      }

      return {
        ...row,
        subtotal: subTotal.toFixed(2), // store for table + export
      };
    });
  }, [expenditurePData, PLdata, rightData]);

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
            value={row.value | 0}
            onChange={(e) => handleExpInputChange(e, row, "value")}
          />
        ) : (
          <strong>{row?.isEditable ? matched?.value : row?.rate}</strong>
        );
      },
    },
    {
      name: "Sub Total",
      selector: (row) => row.subtotal,
      // selector: (row) => {
      //   const matchedRate = PLdata.find(
      //     (item) => item.key === "totalBoilerFuel"
      //   );
      //   const matched = rightData.find((item) => item.key === "totalWorking");
      //   return row.isInput
      //     ? row.key === "boilerFuel"
      //       ? Number(matchedRate.value) * Number(row.value)
      //       : Number(row.value)
      //     : Number(matched.value);
      // },
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

  const totalEarnings = processedIncomeData.reduce(
    (sum, item) => sum + Number(item.subtotal),
    0
  );
  const totalExpenditure = processedEXpdata.reduce(
    (sum, item) => sum + Number(item.subtotal),
    0
  );
  let dailyProfit = totalEarnings - totalExpenditure;
  let monthlyProfit = dailyProfit * 30;

  let YearlyProfit = dailyProfit * 330;
  const generateExcelFile = () => {
    const Rawheaders = columns.map((col) => col.name);
    const rawMateriaRows = data.map((row) => [row.label, row.value]);
    const planCapacityRows = rightData.map((row) => {
      return [], [row.label, row.value];
    });

    const plRows = PLdata.map((row) => {
      return [], [row.detail, row.value];
    });

    const incomeHeaders = columnsIPD.map((col) => col.name);
    const incomeyRows = processedIncomeData.map((row) => {
      return [row.id, row.specification, row?.rate, row.subtotal];
    });

    const expeditureRows = processedEXpdata.map((row) => {
      return [row.id, row.specification, row?.rate, row.subtotal];
    });

    const worksheetData = [
      Rawheaders,
      ...rawMateriaRows,
      [],
      Rawheaders,
      ...planCapacityRows,
      [],
      Rawheaders,
      ...plRows,
      [],
      incomeHeaders,
      ...incomeyRows,
      [],
      ["Total Earnings :-", totalEarnings],
      incomeHeaders,
      ...expeditureRows,
      [],
      ["Total Expenditure :-", totalExpenditure],
      [],
      ["Daily Profit:", "Monthly Profit:", "Yearly Profit:"],
      [dailyProfit, monthlyProfit, YearlyProfit],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "P&L");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "PL.xlsx");
  };

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
            data={processedIncomeData}
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
          <span>₹ {totalEarnings?.toFixed(2)}</span>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="bg-[#347bb1] rounded-md">
            <h1 className="text-white font-bold text-start p-3">
              Expenditure (Per Day)
            </h1>
            <DataTable
              columns={columnsExPD}
              data={processedEXpdata}
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
          <span>Total Expenditure:</span>{" "}
          <span>₹ {totalExpenditure?.toFixed(2)}</span>
        </div>

        <h2 className="text-lg font-semibold mt-6">Project Profits</h2>
        <div className="grid grid-cols-3 gap-4 text-sm border p-4 rounded bg-gray-50">
          <div>
            <div className="font-medium">Daily Profit:</div>{" "}
            <span>₹ {dailyProfit?.toFixed(2)}</span>
          </div>
          <div>
            <div className="font-medium">Monthly Profit:</div>
            <span>₹ {monthlyProfit?.toFixed(2)}</span>
          </div>
          <div>
            <div className="font-medium">Yearly Profit:</div>{" "}
            <span>₹ {YearlyProfit?.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full gap-x-4">
        <div className="flex w-full gap-x-4 ">
          {/* <div>
            <CSVLink data={data} filename={"cbg-data.csv"}>
              <button className="mt-4 px-4 py-2 bg-[#00457B] text-white rounded w-fit">
                Download CSV
              </button>
            </CSVLink>
          </div> */}
          <div>
            <button
              onClick={generateExcelFile}
              // onClick={exportMultipleTablesToExcel}
              className="mt-4 px-4 py-2 bg-[#00457B] text-white rounded"
            >
              Download All Table sheet
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
