// dataStore.js

export const calculatorTableData = {
  rawMaterials: {
    rows: [
      {
        id: 1,
        type: "Cattle Dung",
        rate: 1000,
        transport: 250,
        availability: 0,
        dryMatter: 22,
        cng: 2,
        mix: 5,
        dryOutput: 0,
        totalCost: 0,
      },
      {
        id: 2,
        type: "Poultry Waste",
        rate: 1000,
        transport: 250,
        availability: 0,
        dryMatter: 38,
        cng: 6,
        mix: 0,
        dryOutput: 0,
        totalCost: 0,
      },
      {
        id: 3,
        type: "Paddy Straw",
        rate: 1000,
        transport: 250,
        availability: 0,
        dryMatter: 86,
        cng: 12,
        mix: 0,
        dryOutput: 0,
        totalCost: 0,
      },
      {
        id: 4,
        type: "Napier Grass",
        rate: 1000,
        transport: 250,
        availability: 0,
        dryMatter: 35,
        cng: 7,
        mix: 0,
        dryOutput: 0,
        totalCost: 0,
      },
      {
        id: 5,
        type: "Presmud",
        rate: 1000,
        transport: 250,
        availability: 0,
        dryMatter: 40,
        cng: 9,
        mix: 0,
        dryOutput: 0,
        totalCost: 0,
      },
    ],
  },

  planCapacityDetails: {
    rows: [
      {
        label: "Highest Rated Capacity of Installed Plant (100%)",
        value: "17250 Kg/day",
      },
      {
        label: "Total Working Capacity of Installed Plant (80%)",
        value: "13800 Kg/day",
      },
      { label: "Total Solid Manure Production per day", value: "50 ton" },
      { label: "No. of Moving CNG Transportation Vehicle", value: "8 Nos" },
    ],
  },

  cngFetilizerProfits: {
    rows: [
      {
        id: 1,
        detail:
          "Price of CNG (Including GST) As per IOCL Document (Slab-04) (₹ /Kg)",
        value: "66.00",
        isInput: true,
      },
      {
        id: 2,
        detail: "Electricity Rate (₹ /KWh)",
        value: 10.0,
        isInput: true,
        isEditable: true,
        key: "electricityRate",
      },
      {
        id: 3,
        detail: "Rate of Solid Manure (₹ /Kg)",
        value: "0.00",
        isInput: true,
      },
      { id: 4, detail: "No. of Working Days", value: "330" },
      {
        id: 5,
        detail: "Total Boiler Fuel Required (Ton per day)",
        value: "0.80",
        isInput: true,
        key: "totalBoilerFuel",
      },
      {
        id: 6,
        detail: "Electricity Requirement per day",
        value: 0,
        isInput: true,
      },
    ],
  },

  cngProfits: {
    rows: [
      {
        id: 1,
        specification: "CNG",
        rate: "₹ 66.00/Kg",
        subTotal: "₹ 910,800",
      },
      {
        id: 2,
        specification: "Fertilizer/Pallets",
        rate: "₹ 0.00/Ton",
        subTotal: "₹ 0",
      },
      {
        id: 3,
        specification: "Carbon Credits",
        rate: "₹ 0.00",
        subTotal: "₹ 0",
      },
    ],
  },

  incomePerDay: {
    rows: [
      {
        id: 1,
        specification: "CNG (₹ /Kg)",
        rate: 0,
        subtotal: "9,10,800.00",
        isEditable: true,
      },
      {
        id: 2,
        specification: "Fertilizer/Pallets (₹/Ton)",
        rate: 0,
        subtotal: "₹ 0.00",
        isInput: true,
        key: "fertilizer",
      },
      {
        id: 3,
        specification: "Carbon Credits (₹)",
        rate: 0,
        subtotal: "₹ 0.00",
        isInput: true,
        isEditable: true,
        key: "carbonCredit",
      },
    ],
  },

  expenditurePerDay: {
    rows: [
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
        key: "boilerFuel",
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
    ],
  },

  irrDetails: {
    rows: [
      { label: "Plant Capacity at 100% Production", value: "17250.0 Kg/Day" },
      { label: "Project Capacity at 80% Production", value: "13800.0 Kg/Day" },
      { label: "Raw Input", value: "Napier Grass" },
      { label: "Project Cost Rs. In Lakhs", value: "1500.0" },
    ],
  },

  equityLoanDetails: {
    rows: [
      { label: "Equity in Lakhs", value: "450.0" },
      { label: "Term Loan in Lakhs", value: "1050.0" },
      { label: "Bank Rate of Interest in %", value: "10.00" },
      { label: "Term Loan Tenure Years", value: "10" },
      { label: "Debt to equity ratio", value: "70%" },
      { label: "Capital Expenditure", value: "80%" },
    ],
  },

  projectAssumptions: {
    rows: [
      { label: "Yearly Cost Escalation", value: "3%" },
      { label: "Tariff escalation", value: "3%" },
      { label: "Project Tenure", value: "15" },
      { label: "Plant Degredation", value: "0.1%" },
      { label: "Number of operational Days in a Year", value: "330" },
      { label: "Corporate Tax", value: "17%" },
    ],
  },

  summary: {
    rows: [
      { label: "PRE Tax Equity IRR", value: "#NUM!" },
      { label: "Pre Tax Project IRR", value: "3261.0%" },
    ],
  },
};
