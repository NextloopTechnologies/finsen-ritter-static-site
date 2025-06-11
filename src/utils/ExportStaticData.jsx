import { productAssets } from "../assets";
import {
  AAIIcon,
  AdityaBirlaIcon,
  AjayDeepIcon,
  AvanthaGroupIcon,
  AwfisIcon,
  BengaluruAirportIcon,
  BharatOmanIcon,
  CharteredIcon,
  CustomerServiceIcon,
  FeedbackCapacityIcon,
  GasStationIcon,
  H2SCO2ScrubberIcon,
  ImpetusIcon,
  IndustrialBioCngIcon,
  IndustrialBiogasPurificationIcon,
  IndustrialDesiccantIcon,
  IndustrialGasBleedingSkidIcon,
  IndustrialIcon,
  IndustrialNitrogenIcon,
  IndustrialScreChillersIcon,
  IndustrialSyngasIcon,
  JaypeeGroupIcon,
  LocationIcon,
  LogoManIcon,
  MedalIcon,
  MedicalOxygenIcon,
  MPGovIcon,
  MurugappaIcon,
  MVJMedicalCollegeIcon,
  NavodayaIcon,
  PESMedicalCollegeIcon,
  PipelineIcon,
  PMProjectsIcon,
  SAIMSIcon,
  ShuttleIcon,
  TestimonialProfileIcon,
  UniqueHospitalIcon,
  ServicesFoodBeveragesIcon,
  ServicesIndustrialGasesIcon,
  ServicesPetrochemicalIcon,
  ServicesPowerAndUtilityInfrastructureIcon,
  ServicesRenewableEnergy,
  ServicesWaterTreatmentIcon,
} from "../assets/icons";
import {
  BlogsLeft,
  IndustrialSiteCircular,
  ProductAdvantagesRight,
  ProductDescriptionLeft,
  ProductWhyChooseFR,
  ServicesCostMgmtAnalysis,
  ServicesECP,
  ServicesEcpEnggExcellence,
  ServicesEcpSeamlessConstruction,
  ServicesEcpStrategicProcurement,
  ServicesIndustrialAutomation,
  ServicesLicenseAndPermission,
  ServicesProcurementMgmt,
  ServicesProjectDetailedReport,
  ServicesProjectFeasibility,
  ServicesSafetyConsultancy,
} from "../assets/images";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  LinkedinIcon,
  MailRoundedIcon,
  RoundedNumbers,
  TwitterIcon,
} from "../assets/svg";
import { ProductText, ServicesText } from "./ExportText";
import { getImageUrl } from "./supabaseStorageHelper";

export const cardsClients = {
  mainHeader: "OUR CORPORATE CLIENTS",
  mainDescription:
    "Trusted by diverse businesses, delivering tailored solutions for corporate success.",
  items: [
    {
      icon: JaypeeGroupIcon,
    },
    {
      icon: ImpetusIcon,
    },
    {
      icon: AAIIcon,
    },
    {
      icon: AwfisIcon,
    },
    {
      icon: BengaluruAirportIcon,
    },
    {
      icon: PESMedicalCollegeIcon,
    },
    {
      icon: BharatOmanIcon,
    },
    {
      icon: MurugappaIcon,
    },
    {
      icon: NavodayaIcon,
    },
    {
      icon: AdityaBirlaIcon,
    },
    {
      icon: LogoManIcon,
    },
    {
      icon: AjayDeepIcon,
    },
    {
      icon: PMProjectsIcon,
    },
    {
      icon: MVJMedicalCollegeIcon,
    },
    {
      icon: CharteredIcon,
    },
    {
      icon: AvanthaGroupIcon,
    },
    {
      icon: UniqueHospitalIcon,
    },
    {
      icon: MPGovIcon,
    },
    {
      icon: SAIMSIcon,
    },
  ],
};

export const productCards = {
  mainHeader: "OUR PRODUCT",
  mainDescription:
    "We are known Biogas Plant Manufacturers in Indore offering a quality range of Biogas Plant, Bio CNG Plant, Bio purification plant, Bio Fertilizer, EPC, etc. So, what are you waiting for, contact now.",
  items: [
    {
      icon: H2SCO2ScrubberIcon,
      heading: "H2S & CO2 Scrubber",
      description:
        "Finsen Ritter's H2S & CO2 Scrubbers ensure efficient gas purification and compliance.",
      link: "/product/scrubber",
    },
    {
      icon: IndustrialBioCngIcon,
      heading: "Industrial Bio-CNG (Compressed Bio-Gas) Plant",
      description:
        "Finsen Ritter's Bio-CNG plant converts organic waste into renewable, clean energy.",
      link: "/product/bio-cng",
    },
    {
      icon: IndustrialBiogasPurificationIcon,
      heading: "Industrial Biogas Purification and Refining Plants",
      description:
        "Finsen Ritter's Biogas Purification Plants convert raw biogas into high-purity biomethane.",
      link: "/product/biogas",
    },
    {
      icon: IndustrialDesiccantIcon,
      heading: "Industrial Desiccant Dryers",
      description:
        "Finsen Ritter's Industrial Desiccant Dryers ensure efficient moisture removal and reliability.",
      link: "/product/desiccant-dryers",
    },
    {
      icon: IndustrialGasBleedingSkidIcon,
      heading: "Industrial Gas Blending Skid (CH4, H2, and CO2)",
      description:
        "Finsen Ritter's Gas Blending Skids ensure precise, efficient gas-mixing solutions.",
      link: "/product/gas-blending",
    },
    {
      icon: IndustrialNitrogenIcon,
      heading: "Industrial Nitrogen Plant (PSA & VPSA)",
      description:
        "Finsen Ritter's Industrial Nitrogen Plants produce efficient, on-site high-purity nitrogen.",
      link: "/product/nitrogen",
    },
    {
      icon: IndustrialScreChillersIcon,
      heading: "Industrial Screw Chillers & Heat Pumps",
      description:
        "Finsen Ritter's Screw Chillers and Heat Pumps offer efficient, reliable performance.",
      link: "/product/chillers",
    },
    {
      icon: IndustrialSyngasIcon,
      heading: "Industrial Syngas Refining Plants",
      description:
        "Finsen Ritter's Syngas Refining Plants provide high-purity syngas for industries.",
      link: "/product/syngas",
    },
    {
      icon: MedicalOxygenIcon,
      heading: "Medical Oxygen Plants (PSA & VPSA)",
      description:
        "Finsen Ritter's Medical Oxygen Plants ensure reliable high-purity oxygen supply.",
      link: "/product/medical-oxygen",
    },
  ],
};

export const testimonials = {
  mainHeader: "What Our Clients Say",
  mainDescription: "Customer Feedback",
  items: [
    {
      name: "Bobby Chandel",
      designation: "Operations Manager",
      text: "Finsen Ritter’s team handled oxygen plant deliveries on tight deadlines. Mr. Aniket Awasthi’s support was outstanding.",
      rating: 5,
      icon: TestimonialProfileIcon,
    },
    {
      name: "AWFIS",
      designation: "Corporate Client",
      text: "Their UVGI products helped us reopen offices safely during COVID, all within budget. Great planning support!",
      rating: 4,
      icon: TestimonialProfileIcon,
    },
    {
      name: "Satish Narle",
      designation: "Technical Head",
      text: "Professional service and quick response. Their biogas innovation made a real impact on our project.",
      rating: 5,
      icon: TestimonialProfileIcon,
    },
    {
      name: "RS Agrawal",
      designation: "Industrial Consultant",
      text: "Timely execution and smart clean energy solutions. Highly recommended for industrial projects.",
      rating: 4,
      icon: TestimonialProfileIcon,
    },
    {
      name: "Ganesh Sharma",
      designation: "Site Supervisor",
      text: "The installation and support were smooth. The Finsen Ritter team is very capable and helpful.",
      rating: 5,
      icon: TestimonialProfileIcon,
    },
    {
      name: "Ashwin Mahajan",
      designation: "Project Lead",
      text: "Efficient biogas systems with expert guidance. We had a great experience from start to finish.",
      rating: 5,
      icon: TestimonialProfileIcon,
    },
    {
      name: "Faisal Mirza",
      designation: "Facility Manager",
      text: "Excellent AHU UVGI products and post-installation support. Reliable and responsive team.",
      rating: 4,
      icon: TestimonialProfileIcon,
    },
    {
      name: "Subhash Saini",
      designation: "Operations In-Charge",
      text: "Helpful from planning to execution. Great communication and clean energy knowledge.",
      rating: 5,
      icon: TestimonialProfileIcon,
    },
    {
      name: "Satya Sai Ram Bitta",
      designation: "Maintenance Lead",
      text: "Finsen Ritter delivered exactly what we needed, right on time. Solid and consistent work.",
      rating: 5,
      icon: TestimonialProfileIcon,
    },
    {
      name: "Kalyan Sathi",
      designation: "Energy Consultant",
      text: "Their systems helped us reduce costs and operate more sustainably. Great value.",
      rating: 4,
      icon: TestimonialProfileIcon,
    },
    {
      name: "Varun Satya Teja Bitta",
      designation: "Project Coordinator",
      text: "Impressed with their dedication to sustainability and innovative approach to biogas tech.",
      rating: 5,
      icon: TestimonialProfileIcon,
    },
  ],
};

export const companyLinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Products", link: "/product/bio-cng" },
  { title: "Services", link: "/services" },
  { title: "Blogs & News", link: "/blogs" },
  { title: "Connect With Us", link: "/connectus" },
  { name: "Calculator", path: "/cbg-calculator" },
];
export const blogLinks = [
  { title: "FAQ", link: "/#" },
  { title: "Help Center", link: "/#" },
  { title: "Career", link: "/#" },
  { title: "Privacy", link: "/#" },
];

export const technicalSpecifications = [
  {
    title: "Feedstock Capacity",
    description: ">50 tons per day",
    icon: FeedbackCapacityIcon,
  },
  { title: "Methane Purity", description: ">60%", icon: LocationIcon },
  {
    title: "Biogas Yield",
    description: "Depends on input raw material",
    icon: MedalIcon,
  },
  {
    title: "Power Consumption",
    description: "Low-energy demand and high operational efficiency",
    icon: ShuttleIcon,
  },
  {
    title: "By-Product Output",
    description: "Organic fertilizer with nutrient enrichment (carbon locking)",
    icon: CustomerServiceIcon,
  },
];

export const blogCards = [
  {
    id: 1,
    title: "Finsen Ritter Technologies specializes",
    content:
      "Finsen Ritter Technologies specializes in industrial turnkey solutions. We have developed in-house expertise in the design, supply, installation, and testing of chemical and gas plants. Our presence spans Europe, Africa, and India, with a state-of-the-art design center located in Amsterdam.",
    image: BlogsLeft,
  },
  {
    id: 2,
    title: "Finsen Ritter Technologies specializes",
    content:
      "Finsen Ritter Technologies specializes in industrial turnkey solutions. We have developed in-house expertise in the design, supply, installation, and testing of chemical and gas plants. Our presence spans Europe, Africa, and India, with a state-of-the-art design center located in Amsterdam.",
    image: BlogsLeft,
  },
  {
    id: 3,
    title: "Finsen Ritter Technologies specializes",
    content:
      "Finsen Ritter Technologies specializes in industrial turnkey solutions. We have developed in-house expertise in the design, supply, installation, and testing of chemical and gas plants. Our presence spans Europe, Africa, and India, with a state-of-the-art design center located in Amsterdam.",
    image: BlogsLeft,
  },
  {
    id: 4,
    title: "Finsen Ritter Technologies specializes",
    content:
      "Finsen Ritter Technologies specializes in industrial turnkey solutions. We have developed in-house expertise in the design, supply, installation, and testing of chemical and gas plants. Our presence spans Europe, Africa, and India, with a state-of-the-art design center located in Amsterdam.",
    image: BlogsLeft,
  },
  {
    id: 5,
    title: "Finsen Ritter Technologies specializes",
    content:
      "Finsen Ritter Technologies specializes in industrial turnkey solutions. We have developed in-house expertise in the design, supply, installation, and testing of chemical and gas plants. Our presence spans Europe, Africa, and India, with a state-of-the-art design center located in Amsterdam.",
    image: BlogsLeft,
  },
  {
    id: 6,
    title: "Finsen Ritter Technologies specializes",
    content:
      "Finsen Ritter Technologies specializes in industrial turnkey solutions. We have developed in-house expertise in the design, supply, installation, and testing of chemical and gas plants. Our presence spans Europe, Africa, and India, with a state-of-the-art design center located in Amsterdam.",
    image: BlogsLeft,
  },
];

export const ServicesIndustryCards = [
  {
    icon: ServicesPowerAndUtilityInfrastructureIcon,
    text: "Industrial Gases and Chemical Plants",
  },
  {
    icon: ServicesPetrochemicalIcon,
    text: "Water Treatment and Wastewater Solutions",
  },
  {
    icon: ServicesRenewableEnergy,
    text: "Food and Beverage Processing Plants",
  },
  {
    icon: ServicesFoodBeveragesIcon,
    text: "Renewable Energy and Biogas Projects",
  },
  {
    icon: ServicesWaterTreatmentIcon,
    text: "Petrochemical and Refining Facilities",
  },
  {
    icon: ServicesIndustrialGasesIcon,
    text: "Power and Utility Infrastructure",
  },
];

export const ServicesCards = [
  {
    title: "Engineering Procurement & Construction (EPC)",
    image: ServicesECP,
    link: "/services/epc",
  },
  {
    title: "Procurement Management",
    image: ServicesProcurementMgmt,
    link: "/services/procurement-management",
  },
  {
    title: "Industrial Automation",
    image: ServicesIndustrialAutomation,
    link: "/services/industrial-automation",
  },
  {
    title: "Project Feasibility Report",
    image: ServicesProjectFeasibility,
    link: "/services/project-feasibility",
  },
  {
    title: "Detailed Project Report",
    image: ServicesProjectDetailedReport,
    link: "/services/detailed-report",
  },
  {
    title: "Cost Management Analysis & High Tech",
    image: ServicesCostMgmtAnalysis,
    link: "/services/cost-management",
  },
  {
    title: "Safety Consultancy",
    image: ServicesSafetyConsultancy,
    link: "/services/safety-consultancy",
  },
  {
    title: "Health & Environmental Safety & Risk Assessment",
    image: ServicesLicenseAndPermission,
    link: "/services/license-permission",
  },
];

export const IconTextCardContent = [
  {
    icon: ServicesPowerAndUtilityInfrastructureIcon,
    descp: "Industrial Gases and Chemical Plants",
  },
  {
    icon: ServicesPetrochemicalIcon,
    descp: "Water Treatment and Wastewater Solutions",
  },
  {
    icon: ServicesRenewableEnergy,
    descp: "Food and Beverage Processing Plants",
  },
  {
    icon: ServicesFoodBeveragesIcon,
    descp: "Renewable Energy and Biogas Projects",
  },
  {
    icon: ServicesWaterTreatmentIcon,
    descp: "Petrochemical and Refining Facilities",
  },
  {
    icon: ServicesIndustrialGasesIcon,
    descp: "Power and Utility Infrastructure",
  },
];

export const ProductBioCNGData = {
  heroBackgroundImage: productAssets.bioCng,
  heroTitle: "PRODUCT",
  heroSubtitle: "Leading Industrial Bio-CNG Plant Manufacturers & Installers ",
  descriptionImage: ProductDescriptionLeft,
  descriptionMainHeading:
    "INDUSTRIAL BIO-CNG (COMPRESSED BIO-GAS) PLANT: PRODUCT DESCRIPTION",
  descriptionText: `Make the waste pure fuel with our advanced Bio CNG Plant Manufacturers in Indore. FINSEN RITTER one of the largest manufacturers of agricultural machinery and high -quality plants that meet the energy requirements of farmers and agricultural -based industries. We make BIO -CNG high -quality systems that convert organic waste into environmentally friendly compressed natural gas, which helps companies to reduce the costs of protecting the environment.  The selection of our products includes livestock manure and different types of plants that can produce renewable energy sources. 

  FINSEN RITTER BIO -CNG plants provide a smart solution for permanent energy production. Manufactured with durable materials such as GFS and RC, these systems effectively treat organic waste and convert it into pure combustion of CNG fuel. This process not only reduces your carbon footprint but also cuts operating expenses significantly. 
  
  We design Best BIO -CNG plants with processing skills up to 500 TPD to 500 TPD, making them suitable for all sizes of companies. Whether you are a small business or a large industrial facility, we have the right solution for your needs. 
  
  Our BIO –CNG plants in Indore is fully in line with the government initiative, which has the government initiative, including continuous, cow dung and Kvic schemes, and gets you from the available accessible and support programs available. 
  
  As a reliable BIO -CNG system exporters and suppliers, we serve customers throughout India with complete installation, commissioning and later support. Our expert team ensures easy integration with your current business. 
  
  Save money and the environment with Bio CNG Plant Exporters and Suppliers in India. Connect with us Now 
  `,
  majorFeatures: [
    {
      title: "High-efficiency Anaerobic Digestion (AD) System",
      color: "bg-blue-500",
      icon: RoundedNumbers.Number1,
      points: [
        "Converts organic waste (e.g. agricultural residues, municipal solid waste and food waste) into biogas;",
        "Operates with optimal conditions to maximize biogas yield;",
        "Low energy consumption and high output efficiency;",
      ],
    },
    {
      title: "Advanced Biogas Upgrading Technology",
      color: "bg-green-500",
      icon: RoundedNumbers.Number2,
      points: [
        "Uses Vaccum Pressure Swing Adsorption (VPSA) along with the water scrubbing technologies to remove impurities such as CO2, H2S, and moisture.",
        "Delivers methane purity levels of over 96%, suitable for vehicle fuel or pipeline injection.",
      ],
    },
    {
      title: "Customizable Capacity",
      color: "bg-red-500",
      icon: RoundedNumbers.Number3,
      points: [
        "Designed to cater to medium, and large-scale industrial requirements.",
        "Modular configurations allow scalability to meet future needs.",
      ],
    },
    {
      title: "Robust Automation and Control Systems",
      color: "bg-cyan-500",
      icon: RoundedNumbers.Number4,
      points: [
        "Equipped with industry 4.0-compatible control systems for real-time monitoring and data analytics.",
        "Ensures seamless operation with minimal manual intervention.",
      ],
    },
    {
      title: "Sustainability-Oriented Design",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number5,
      points: [
        "Reduces greenhouse gas emissions by converting waste into energy.",
        "Produces nutrient-rich organic slurry as a by-product, ideal for use as bio-fertilizer.",
      ],
    },
  ],
  applicationCards: {
    mainHeader: "APPLICATIONS",
    mainDescription: "",
    items: [
      {
        icon: GasStationIcon,
        heading: "Transportation Fuel",
        description:
          "Bio-CNG is a clean and cost-effective alternative to conventional fuels such as diesel and petrol, suitable for powering commercial and industrial vehicles.",
      },
      {
        icon: IndustrialIcon,
        heading: "Industrial Use",
        description:
          "Provides a sustainable energy source for industrial heating, electricity generation, and other processes.",
      },
      {
        icon: PipelineIcon,
        heading: "Pipeline Injection",
        description:
          "Injects purified Bio-CNG into natural gas pipelines for widespread distribution and use.",
      },
    ],
  },
  advantagesHeader: "Advantages",
  advantagesImage: ProductAdvantagesRight,
  advantagesText: ProductText.Advantages,
  technicalSpecifications: {
    "Feedstock Capacity": "≥30 tons per day",
    "Methane Purity": "≥96%",
    "Biogas Yield": "depends on input raw material",
    "Power Consumption": "Low-energy demand with high operational efficiency",
    "By-product Output":
      "Organic fertilizer which needs some treatment before selling to the market according to the seasonal crops (solid or liquid)",
  },
  whyChooseImage: ProductWhyChooseFR,
  whyChooseText: [
    "Proven Expertise: Years of experience in industrial gas and chemical plant development.",
    "Comprehensive Support: From feasibility studies to commissioning and after-sales service.",
    "Innovative Solutions: Leveraging state-of-the-art technology to deliver exceptional efficiency and reliability.",
    "Sustainability Commitment: Dedicated to creating environmentally friendly solutions for a better tomorrow.",
  ],
  whyChooseCircularImage: IndustrialSiteCircular,
};

export const ProductMedicalOxygenData = {
  heroBackgroundImage: productAssets.medicalOxygen,
  heroTitle: "PRODUCT",
  heroSubtitle: "Complete Medical Oxygen Plant Solutions - Design to Delivery ",
  descriptionImage: ProductDescriptionLeft,
  descriptionMainHeading:
    "Medical oxygen plant ( PSA & VPSA) : Product description",
  descriptionText:
    "Finsen Ritter Technologies' Medical Oxygen Plants, utilizing PSA (Pressure Swing Adsorption) and VPSA (Vacuum Pressure Swing Adsorption) technologies, are engineered to meet the stringent demands of medical-grade oxygen production. These state-of-the-art systems provide a reliable and on-site supply of oxygen with a purity of > 95.5%, ensuring uninterrupted service to hospitals, clinics, and healthcare facilities. Designed for efficiency, safety, and compliance, our oxygen plants deliver exceptional performance while adhering to international medical standards.",
  majorFeatures: [
    {
      title: "Advanced Oxygen Generation Technology: ",
      color: "bg-blue-500",
      icon: RoundedNumbers.Number1,
      points: [
        "Utilizes PSA or VPSA technology for efficient oxygen separation from atmospheric air.",
        "Produces oxygen with purity levels of 93% to 97%, compliant with medical-grade requirements.",
      ],
    },
    {
      title: "Customizable Capacities: ",
      color: "bg-green-500",
      icon: RoundedNumbers.Number2,
      points: [
        "Available in various capacities ranging from 15 Nm³/hour to over 1000 Nm³/hour.",
        "Tailored designs to suit small, medium, and large healthcare facilities.",
      ],
    },
    {
      title: "High Efficiency and Low Operating Costs: ",
      color: "bg-red-500",
      icon: RoundedNumbers.Number3,
      points: [
        "Energy-efficient systems designed to reduce power consumption.",
        "Minimal maintenance requirements ensure cost-effectiveness over the plant’s lifecycle.",
      ],
    },
    {
      title: "Robust Automation and Control Systems: ",
      color: "bg-cyan-500",
      icon: RoundedNumbers.Number4,
      points: [
        "Equipped with Industry 4.0-compatible PLC/SCADA systems for real-time monitoring and remote operation.",
        "Alarms and alerts ensure prompt attention to any deviations in system performance.",
      ],
    },
    {
      title: "Compact and Modular Design: ",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number5,
      points: [
        "Space-efficient layout allows for easy installation within existing facility infrastructures.",
        "Modular configuration enables scalability for future expansion needs.",
      ],
    },
    {
      title: "Compliance with Medical Standards: ",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number6,
      points: [
        "Meets or exceeds ISO 10083, European Pharmacopoeia, and US FDA standards for medical oxygen production.",
        "Ensures consistent quality and safety for critical healthcare applications.",
      ],
    },
  ],
  applicationCards: {
    mainHeader: "APPLICATIONS",
    mainDescription: "",
    items: [
      {
        icon: GasStationIcon,
        heading: "Hospitals and Clinics:",
        description:
          "Reliable source of oxygen for operating rooms, ICUs, ventilators, and general patient care.",
      },
      {
        icon: IndustrialIcon,
        heading: "Ambulance Services:",
        description:
          "On-site oxygen production reduces dependency on cylinder logistics.",
      },
      {
        icon: PipelineIcon,
        heading: "Field Hospitals and Emergency Medical Facilities:",
        description:
          "Ideal for temporary or remote healthcare setups requiring consistent oxygen supply.",
      },
    ],
  },
  advantagesHeader: "Advantages",
  advantagesImage: ProductAdvantagesRight,
  advantagesText: [
    {
      title: "Continuous Oxygen Supply",
      bullets: [
        "Eliminates reliance on oxygen cylinders, reducing logistical challenges and costs.",
        "Guarantees uninterrupted supply even during emergencies or peak demand.",
      ],
    },
    {
      title: "High Reliability",
      bullets: [
        "Designed for 24/7 operation with minimal downtime.",
        "Robust components ensure long-term durability and consistent performance.",
      ],
    },
    {
      title: "Safety First",
      bullets: [
        "Inbuilt safety systems including pressure relief valves, oxygen purity monitors, and automatic shutdown features.",
        "Fully enclosed systems to protect operators and maintain hygiene standards.",
      ],
    },
    {
      title: "Cost-Effective Solution",
      bullets: [
        "Reduces recurring costs associated with cylinder procurement and transportation.",
        "Energy-efficient design minimizes operational expenses.",
      ],
    },
    {
      title: "Environmentally Friendly",
      bullets: [
        "No hazardous emissions or chemicals involved in the oxygen generation process.",
        "Sustainable solution reducing carbon footprint compared to traditional supply chains.",
      ],
    },
  ],
  technicalSpecifications: {
    "Capacity Range": "15-500 Nm³/hour",
    "Oxygen Purity": "93%-97%",
    "Operating Pressure": "4-5 bar(g) (customizable as needed)",
    "Power Consumption": " Energy-efficient systems tailored to facility needs",
    "Automation Level": " Fully automated with advanced PLC/SCADA controls",
  },
  whyChooseImage: ProductWhyChooseFR,
  whyChooseText: [
    "Global Expertise: Years of experience in designing and manufacturing gas plants for diverse industries.",
    "Turnkey Solutions: Comprehensive support from consultation and design to installation, commissioning, and maintenance.",
    "Technological Excellence: Cutting-edge PSA and VPSA technologies ensuring top-tier efficiency and reliability.",
    "Commitment to Quality: Strict adherence to international standards for medical oxygen production.",
  ],
  whyChooseCircularImage: IndustrialSiteCircular,
};

export const ProductIndustrialNitrogenData = {
  heroBackgroundImage: productAssets.nitrogen,
  heroTitle: "PRODUCT",
  heroSubtitle: "Advanced PSA & VPSA Technology for Industrial Nitrogen ",
  descriptionImage: ProductDescriptionLeft,
  descriptionMainHeading:
    "Medical oxygen plant ( PSA & VPSA) : Product description",
  descriptionText:
    "Finsen Ritter Technologies' Industrial Nitrogen Plants, employing PSA (Pressure Swing Adsorption) and VPSA (Vacuum Pressure Swing Adsorption) technologies, are designed to meet the varied nitrogen needs of industries across the globe. These plants offer an efficient, cost-effective, and on-site solution for producing high-purity nitrogen, ensuring reliable supply for critical industrial applications. With cutting-edge technology, superior build quality, and adherence to global standards, our nitrogen plants are an ideal choice for industries requiring uninterrupted nitrogen supply.",
  majorFeatures: [
    {
      title: "Advanced Oxygen Generation Technology: ",
      color: "bg-blue-500",
      icon: RoundedNumbers.Number1,
      points: [
        "Utilizes PSA or VPSA technology for separating nitrogen from atmospheric air with exceptional efficiency.",
        "Produces nitrogen with purity levels ranging from 95% to 99.999% to meet diverse industrial requirements.",
      ],
    },
    {
      title: "Customizable Capacities: ",
      color: "bg-green-500",
      icon: RoundedNumbers.Number2,
      points: [
        "Available in various capacities ranging from 15 Nm³/hour to over 1000 Nm³/hour.",
        "Tailored to meet the specific needs of small, medium, and large-scale industries.",
      ],
    },
    {
      title: "Energy-Efficient Operation: ",
      color: "bg-red-500",
      icon: RoundedNumbers.Number3,
      points: [
        "VPSA systems ensure reduced energy consumption for high-capacity plants.",
        "Optimized designs provide cost savings over the plant’s operational lifecycle.",
      ],
    },
    {
      title: "State-of-the-Art Automation: ",
      color: "bg-cyan-500",
      icon: RoundedNumbers.Number4,
      points: [
        "Fully automated PLC/SCADA-based systems for real-time monitoring, diagnostics, and remote operation.",
        "Alerts and alarms ensure quick resolution of any performance deviations.",
      ],
    },
    {
      title: "Robust and Compact Design:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number5,
      points: [
        "Durable components designed to withstand demanding industrial environments.",
        "Modular and space-saving layouts for easy installation and future scalability.",
      ],
    },
    {
      title: "Quality and Compliance:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number6,
      points: [
        "Conforms to ISO 8573-1 and other international standards for industrial nitrogen production.",
        "Ensures consistent output quality suitable for mission-critical applications.",
      ],
    },
  ],
  applicationCards: {
    mainHeader: "APPLICATIONS",
    mainDescription: "",
    items: [
      {
        icon: GasStationIcon,
        heading: "Manufacturing and Fabrication:",
        description:
          "Used for blanketing, purging, and inerting processes in metal fabrication, electronics, and chemical industries.",
      },
      {
        icon: IndustrialIcon,
        heading: "Food and Beverage:",
        description:
          "Preserves product freshness and prevents spoilage during packaging and storage.",
      },
      {
        icon: PipelineIcon,
        heading: "Pharmaceuticals",
        description:
          "Provides a contamination-free environment for manufacturing and packaging operations.",
      },
      {
        icon: PipelineIcon,
        heading: "Oil and Gas:",
        description:
          "Enhances safety and efficiency during drilling, pipeline purging, and reservoir pressure maintenance.",
      },
      {
        icon: PipelineIcon,
        heading: "Electronics and Semiconductor:",
        description:
          "Delivers ultra-high-purity nitrogen for semiconductor manufacturing and component testing.",
      },
    ],
  },
  advantagesHeader: "Advantages",
  advantagesImage: ProductAdvantagesRight,
  advantagesText: [
    {
      title: "Uninterrupted Nitrogen Supply",
      bullets: [
        "Eliminates dependency on external nitrogen supply and transportation logistics.",
        "Ensures continuous and reliable operation, even in high-demand scenarios.",
      ],
    },
    {
      title: "Cost Savings",
      bullets: [
        "Significantly reduces recurring costs associated with cylinder or bulk nitrogen procurement.",
        "Energy-efficient systems lower operational expenses.",
      ],
    },
    {
      title: "Safety First",
      bullets: [
        "Inbuilt safety systems including pressure relief valves, oxygen purity monitors, and automatic shutdown features.",
        "Fully enclosed systems to protect operators and maintain hygiene standards.",
      ],
    },
    {
      title: "High Customization",
      bullets: [
        "Flexible configurations to cater to specific industry requirements and purity levels.",
        "Expandable capacity for future needs without major overhauls.",
      ],
    },
    {
      title: "Operational Reliability",
      bullets: [
        "Designed for 24/7 operation with minimal maintenance.",
        "High-quality components ensure long-term durability and consistent performance.",
      ],
    },
    {
      title: "Environmental Responsibility",
      bullets: [
        "Sustainable technology with no harmful emissions.",
        "On-site production reduces carbon footprint associated with nitrogen transportation.",
      ],
    },
  ],
  technicalSpecifications: {
    "Capacity Range": "10–1,000 Nm³/hour",
    "Nitrogen Purity": "95%–99.999%",
    "Operating Pressure": "5-10 bar(g) (customizable as needed)",
    "Power Consumption": " Energy-efficient systems tailored to facility needs",
    "Automation Level": " Fully automated with advanced PLC/SCADA controls",
  },
  whyChooseImage: ProductWhyChooseFR,
  whyChooseText: [
    "Proven Expertise: Decades of experience in delivering industrial gas solutions across multiple sectors.",
    "Turnkey Solutions: Comprehensive services from consultation and design to installation, commissioning, and after-sales support.",
    "Technological Leadership: Cutting-edge PSA and VPSA technologies for superior efficiency and reliability.",
    "Technological Leadership: Cutting-edge PSA and VPSA technologies for superior efficiency and reliability.",
    "Global Standards: Compliance with international quality and safety standards ensures consistent performance.",
  ],
  whyChooseCircularImage: IndustrialSiteCircular,
};
export const ProductDesiccantDryersData = {
  heroBackgroundImage: productAssets.desiccantDryers,
  heroTitle: "PRODUCT",
  heroSubtitle:
    "Reliable Desiccant Dryer Systems - Ensuring Optimal Humidity Control for Industry ",
  descriptionImage: ProductDescriptionLeft,
  descriptionMainHeading: "INDUSTRIAL DESICCANT DRYERS: PRODUCT DESCRIPTION",
  descriptionText:
    "Finsen Ritter Technologies' Industrial Desiccant Dryers are engineered to deliver superior performance in air and gas drying applications across diverse industries. These high-efficiency dryers utilize advanced desiccant technology to remove moisture from compressed air and gases, ensuring optimal performance and longevity of equipment. Designed to handle demanding industrial environments, our dryers provide consistent and reliable dew point control, making them an indispensable part of any compressed air or gas system.",
  majorFeatures: [
    {
      title: "Advanced Desiccant Technology:",
      color: "bg-blue-500",
      icon: RoundedNumbers.Number1,
      points: [
        "Uses high-performance desiccant materials to achieve extremely low dew points (up to -70°C/-94°F).",
        "Ensures effective removal of moisture, oil vapor, and contaminants from air or gas streams.",
      ],
    },
    {
      title: "Customizable Configurations:",
      color: "bg-green-500",
      icon: RoundedNumbers.Number2,
      points: [
        "Available in heatless, heated, and blower purge designs to meet specific industrial requirements.",
        "Wide capacity range to handle small to large air and gas flow rates.",
      ],
    },
    {
      title: "Energy Efficiency:",
      color: "bg-red-500",
      icon: RoundedNumbers.Number3,
      points: [
        "Designed with energy-saving features such as purge air minimization and efficient regeneration cycles.",
        "Blower purge models further reduce energy consumption by eliminating the need for compressed air during regeneration.",
      ],
    },
    {
      title: "Durable and Robust Construction:",
      color: "bg-cyan-500",
      icon: RoundedNumbers.Number4,
      points: [
        "Built with high-grade materials to withstand harsh industrial conditions.",
        "Corrosion-resistant and long-lasting design ensures minimal downtime and maintenance costs.",
      ],
    },
    {
      title: "Automation and Control:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number5,
      points: [
        "Equipped with advanced PLC/SCADA systems for real-time monitoring and control.",
        "Includes alarms and indicators for easy operation and timely maintenance.",
      ],
    },
    {
      title: "Compact and Space-Saving Design:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number6,
      points: [
        "Modular and skid-mounted options available for easy installation and reduced footprint.",
        "Flexible configurations to fit into existing system setups.",
      ],
    },
  ],
  applicationCards: {
    mainHeader: "APPLICATIONS",
    mainDescription: "",
    items: [
      {
        icon: GasStationIcon,
        heading: "Manufacturing and Processing:",
        description:
          "Protects pneumatic equipment, controls, and tools from moisture-related damage and corrosion.",
      },
      {
        icon: IndustrialIcon,
        heading: "Food and Beverage:",
        description:
          "Ensures dry and clean air for packaging, filling, and conveying operations.",
      },
      {
        icon: PipelineIcon,
        heading: "Pharmaceuticals:",
        description:
          "Delivers ultra-dry air for manufacturing and packaging processes requiring stringent humidity control.",
      },
      {
        icon: PipelineIcon,
        heading: "Electronics:",
        description:
          "Prevents condensation and corrosion in sensitive electronic and semiconductor manufacturing processes.",
      },
      {
        icon: PipelineIcon,
        heading: "Oil and Gas:",
        description:
          "Provides moisture-free gas for pipeline transmission, refining, and petrochemical applications.",
      },
    ],
  },
  advantagesHeader: "Advantages",
  advantagesImage: ProductAdvantagesRight,
  advantagesText: [
    {
      title: "Reliable Performance",
      bullets: [
        "Maintains consistent dew points under varying load and environmental conditions.",
        "Ensures dry air and gas quality that meets or exceeds industry standards.",
      ],
    },
    {
      title: "Improved Equipment Longevity",
      bullets: [
        "Reduces the risk of corrosion, freezing, and operational inefficiencies in compressed air systems.",
        "Protects downstream equipment and processes, leading to lower maintenance costs.",
      ],
    },
    {
      title: "Operational Flexibility",
      bullets: [
        "Multiple regeneration options (heatless, heated, blower purge) allow customization based on energy availability and application needs.",
        "Easy integration into existing systems.",
      ],
    },
    {
      title: "Energy and Cost Savings",
      bullets: [
        "Regeneration techniques optimized for minimal energy usage.",
        "Reduces operational costs over the lifecycle of the dryer.",
      ],
    },
    {
      title: "Environmentally Friendly",
      bullets: [
        "Efficient drying systems with minimal waste and energy consumption.",
        "Contributes to sustainable operations.",
      ],
    },
  ],
  technicalSpecifications: {
    "Capacity Range": "10–5,000 Nm³/hour",
    "Dew Point": "Up to -70°C (-94°F)",
    "Operating Pressure": "4–10 bar(g) (customizable as needed)",
    "Regeneration Options": "Heatless, heated, blower purge",
    "Control System": "Fully automated with advanced PLC/SCADA interface",
  },
  whyChooseImage: ProductWhyChooseFR,
  whyChooseText: [
    "Expertise in Industrial Drying Solutions: Decades of experience in air and gas treatment technologies.",
    "Comprehensive Product Line: Wide range of desiccant dryers tailored to specific industries and applications.",
    "Turnkey Solutions: From consultation and design to installation, commissioning, and after-sales service.",
    "Global Standards Compliance: Adheres to international quality standards, ensuring reliable and efficient operation.",
  ],
  whyChooseCircularImage: IndustrialSiteCircular,
};

export const ProductBiogasData = {
  heroBackgroundImage: productAssets.bioGas,
  heroTitle: "PRODUCT",
  heroSubtitle:
    "From Waste to Pure Energy - Complete Biogas Refining Solutions ",
  descriptionImage: ProductDescriptionLeft,
  descriptionMainHeading:
    "INDUSTRIAL BIOGAS PURIFICATION AND REFINING PLANTS: PRODUCT DESCRIPTION",
  descriptionText:
    "Finsen Ritter Technologies' Industrial Biogas Purification and Refining Plants are cutting-edge solutions designed to transform raw biogas into high-purity biomethane. Leveraging advanced purification technologies, our plants remove impurities such as CO2, H2S, moisture, and other trace contaminants, ensuring that the refined gas meets stringent quality standards for use as vehicle fuel, pipeline injection, or industrial energy. These systems are ideal for industries, municipalities, and agribusinesses seeking sustainable and cost-effective energy solutions.",
  majorFeatures: [
    {
      title: "Advanced Purification Technologies: ",
      color: "bg-blue-500",
      icon: RoundedNumbers.Number1,
      points: [
        "Multiple purification methods available, including: Pressure Swing Adsorption (PSA): Cost-effective and efficient gas separation.",
        "Tailored solutions to suit feedstock composition and desired purity levels.",
      ],
    },
    {
      title: "High Methane Recovery Efficiency: ",
      color: "bg-green-500",
      icon: RoundedNumbers.Number2,
      points: [
        "Achieves methane recovery rates of up to 97-98%.",
        "Produces biomethane with a purity of ≥96%, suitable for CNG-grade or pipeline injection standards.",
      ],
    },
    {
      title: "Customizable Capacities:",
      color: "bg-red-500",
      icon: RoundedNumbers.Number3,
      points: [
        "Modular designs for biogas flows ranging from 50 Nm³/hour to over 5,000 Nm³/hour.",
        "Scalable systems to accommodate future expansion needs.",
      ],
    },
    {
      title: "Energy-Efficient Operation: ",
      color: "bg-cyan-500",
      icon: RoundedNumbers.Number4,
      points: [
        "Optimized designs to minimize power consumption during purification.",
        "Options for waste heat recovery to enhance overall system efficiency.",
      ],
    },
    {
      title: "Robust Automation and Monitoring: ",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number5,
      points: [
        "Industry 4.0-compatible PLC/SCADA systems for real-time control and diagnostics.",
        "Remote monitoring capabilities for proactive maintenance and reduced downtime.",
      ],
    },
    {
      title: "Environmentally Friendly Design: ",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number6,
      points: [
        "Eliminates flaring of raw biogas, reducing greenhouse gas emissions.",
        "By-product management, including CO2 reuse and organic fertilizer recovery.",
      ],
    },
  ],
  applicationCards: {
    mainHeader: "APPLICATIONS",
    mainDescription: "",
    items: [
      {
        icon: GasStationIcon,
        heading: "Transportation Fuel:",
        description:
          "Converts raw biogas into compressed biomethane (Bio-CNG), a sustainable alternative to traditional fossil fuels.",
      },
      {
        icon: IndustrialIcon,
        heading: "Pipeline Injection:",
        description:
          "Purifies biogas to meet stringent quality standards for injection into natural gas pipelines.",
      },
      {
        icon: PipelineIcon,
        heading: "Industrial Energy:",
        description:
          "Supplies refined biomethane for industrial heating, power generation, and other energy-intensive processes.",
      },
      {
        icon: PipelineIcon,
        heading: "Residential and Commercial Use:",
        description:
          "Supports decentralized energy solutions for cooking, heating, and electricity.",
      },
    ],
  },
  advantagesHeader: "Advantages",
  advantagesImage: ProductAdvantagesRight,
  advantagesText: [
    {
      title: "Economic Benefits",
      bullets: [
        "Monetizes waste by converting it into a valuable energy resource.",
        "Generates revenue streams through biomethane sales, carbon credits, and organic by-products.",
      ],
    },
    {
      title: "Environmental Impact",
      bullets: [
        "Reduces methane emissions by capturing and refining raw biogas.",
        "Supports circular economy principles by recycling organic waste into clean energy.",
      ],
    },
    {
      title: "Energy Security",
      bullets: [
        "Provides a renewable and locally available energy source, reducing reliance on fossil fuels.",
      ],
    },
    {
      title: "Regulatory Compliance",
      bullets: [
        "Meets global standards for biomethane quality, including ISO 15403 and regional pipeline specifications.",
      ],
    },
    {
      title: "Operational Flexibility",
      bullets: [
        "Capable of handling varying biogas compositions and flow rates.",
        "Easy integration into existing waste management or biogas production facilities.",
      ],
    },
  ],
  whyChooseImage: ProductWhyChooseFR,
  whyChooseText: [
    "Proven Expertise: Decades of experience in designing and implementing biogas purification systems globally.",
    "Turnkey Solutions: Comprehensive support from feasibility studies to installation, commissioning, and maintenance",
    "Technological Innovation: Utilizes the latest advancements in biogas purification for superior efficiency and reliability.",
    "Sustainability Commitment: Dedicated to delivering environmentally friendly solutions that align with global energy transition goals.",
  ],
  whyChooseCircularImage: IndustrialSiteCircular,
  technicalSpecifications: {
    "Capacity Range": "50–5,000 Nm³/hour of raw biogas",
    "Methane Purity": "≥96%",
    "Methane Recovery": "Up to 99%",
    "Power Consumption":
      "Energy-optimized systems tailored to plant size and configuration",
    "Automation Level: ": "Fully automated with advanced PLC/SCADA controls",
    "Operating Pressure ":
      "Designed for pipeline injection or storage requirements",
  },
};
export const ProductIndustrialSynGasData = {
  heroBackgroundImage: productAssets.synthesisGas,
  heroTitle: "PRODUCT",
  heroSubtitle:
    "Industrial Synthesis Gas Solutions - From Design to Commissioning, We Deliver ",
  descriptionImage: ProductDescriptionLeft,
  descriptionMainHeading:
    "INDUSTRIAL SYNGAS REFINING PLANTS: PRODUCT DESCRIPTION",
  descriptionText:
    "Finsen Ritter Technologies' Industrial Syngas Refining Plants are state-of-the-art solutions designed to purify and process synthetic gas (syngas) for diverse industrial applications. Utilizing advanced technologies, these plants efficiently remove impurities such as CO, CO2, H2S, and other contaminants while optimizing the composition of hydrogen, methane, and other valuable components. Our solutions cater to industries focused on clean energy, petrochemical production, and advanced material synthesis, ensuring reliable, high-purity syngas tailored to meet stringent industry requirements.",
  majorFeatures: [
    {
      title: "Advanced Refining Technologies: ",
      color: "bg-blue-500",
      icon: RoundedNumbers.Number1,
      points: [
        {
          text: "Multiple purification and separation methods, including: ",
          subpoints: [
            "Pressure Swing Adsorption (PSA): For efficient hydrogen extraction.",
            "Membrane Separation: Compact and energy-efficient for component segregation.",
            "Chemical Scrubbing: Effective for removing CO2, H2S, and other acidic gases.",
            "Cryogenic Separation: High-purity recovery of hydrogen, methane, or carbon monoxide.",
          ],
        },
        "Customizable solutions based on feedstock composition and desired product purity.",
      ],
    },
    {
      title: "Customizable Capacities:",
      color: "bg-green-500",
      icon: RoundedNumbers.Number2,
      points: [
        "Modular and scalable designs to handle syngas flow rates from 50 Nm³/hour to over 5,000 Nm³/hour.",
        "Flexible configurations for small-scale pilot projects to large-scale industrial operations.",
      ],
    },
    {
      title: "Energy Optimization: ",
      color: "bg-red-500",
      icon: RoundedNumbers.Number3,
      points: [
        "Integration of heat recovery systems to improve thermal efficiency.",
        "Advanced process designs to minimize energy consumption during refining.",
      ],
    },
    {
      title: "Automation and Control:",
      color: "bg-cyan-500",
      icon: RoundedNumbers.Number4,
      points: [
        "Equipped with Industry 4.0-compatible PLC/SCADA systems for real-time monitoring and seamless control.",
        "Smart alarms and diagnostic features ensure operational reliability.",
      ],
    },
    {
      title: "Rugged and Durable Design:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number5,
      points: [
        "Built with high-grade materials to withstand extreme operating conditions.",
        "Corrosion-resistant components for extended lifecycle and minimal downtime.",
      ],
    },
  ],
  applicationCards: {
    mainHeader: "APPLICATIONS",
    mainDescription: "",
    items: [
      {
        icon: GasStationIcon,
        heading: "Clean Energy Production:",
        description:
          "Refines syngas for hydrogen production, a critical component in fuel cells and clean energy technologies.",
      },
      {
        icon: IndustrialIcon,
        heading: "•	Fertilizer Industry:",
        description:
          "Produces feedstock gases (ammonia and methanol) for urea and other nitrogenous fertilizers.",
      },
      {
        icon: PipelineIcon,
        heading: "•	Petrochemical and Refining:",
        description:
          "Converts syngas into valuable chemicals like methanol, ethanol, and synthetic hydrocarbons.",
      },
      {
        icon: PipelineIcon,
        heading: "•	Steel and Metal Processing:",
        description:
          "Supplies syngas for direct reduction processes and other metallurgical applications.",
      },
      {
        icon: PipelineIcon,
        heading: "•	Carbon Capture and Utilization (CCU):",
        description:
          "Refines syngas for CO2 capture and reuse in industrial or agricultural applications.",
      },
    ],
  },
  advantagesHeader: "Advantages",
  advantagesImage: ProductAdvantagesRight,
  advantagesText: [
    {
      title: "High Purity Outputs",
      bullets: [
        "Achieves ultra-high purity levels for hydrogen and other refined syngas components.",
        "Consistently meets or exceeds industry-specific quality standards.",
      ],
    },
    {
      title: "Economic Efficiency",
      bullets: [
        "Reduces operational costs through energy-efficient designs and optimized processes.",
        "Enhances overall value by converting low-grade syngas into high-purity, marketable products.",
      ],
    },
    {
      title: "Environmental Sustainability",
      bullets: [
        "Minimizes emissions and pollutants through integrated scrubbing and waste management systems.",
        "Supports carbon-neutral and green energy initiatives.",
      ],
    },
    {
      title: "Operational Reliability",
      bullets: [
        "Designed for 24/7 operation with minimal maintenance requirements.",
        "Advanced control systems ensure stable performance under varying operating conditions.",
      ],
    },
    {
      title: "Flexible Integration",
      bullets: [
        "Easily integrates with upstream gasifiers and downstream processing units.",
        "Accommodates diverse feedstocks, including biomass, coal, natural gas, and industrial waste.",
      ],
    },
  ],
  whyChooseImage: ProductWhyChooseFR,
  whyChooseText: [
    "Industry Leadership: Expertise in syngas processing and refining solutions backed by decades of innovation.",
    "Tailored Solutions: Customized designs to meet unique operational and product requirements.",
    "Turnkey Services: End-to-end support, including feasibility analysis, design, installation, commissioning, and maintenance.",
    "Global Standards Compliance: Adheres to ISO, ASME, and other international safety and quality benchmarks.",
  ],
  whyChooseCircularImage: IndustrialSiteCircular,
  technicalSpecifications: {
    "Capacity Range": "50–5,000 Nm³/hour",
    "Product Purity": "Up to 99.999% hydrogen or customized syngas composition",
    "Power Consumption":
      "Energy-optimized systems tailored to plant size and configuration",
    "Operating Pressure":
      "Configurable to meet downstream process requirements",
    "Automation Level": "Fully automated with advanced PLC/SCADA systems",
  },
};
export const ProductChillersData = {
  heroBackgroundImage: productAssets.chillers,
  heroTitle: "PRODUCT",
  heroSubtitle:
    "Industrial Temperature Control Specialists - Screw Chillers & Heat Pump Solutions ",
  descriptionImage: ProductDescriptionLeft,
  descriptionMainHeading:
    "INDUSTRIAL SCREW CHILLERS & HEAT PUMPS: PRODUCT DESCRIPTION",
  descriptionText:
    "FINSEN RITTER screw chillers have a wide range of uses and are suitable for water-scarce areas. A nano-coating on the unit's body increases durability. Units can be designed for T3 working conditions, suitable for environments with temperatures exceeding 50°C. Feature renowned brand screw compressors for high efficiency and long service life. With a shell and tube evaporator equipped with high-efficiency DAC corrugated copper tubes. The condenser layout is inverted M-shaped to maximize the condenser area and, heat exchange capacity is improved.",
  majorFeatures: [
    {
      title: "Advanced Screw Compressor Technology:",
      color: "bg-blue-500",
      icon: RoundedNumbers.Number1,
      points: [
        "Features high-efficiency screw compressors with low noise and vibration levels.",
        "Ensures superior energy performance and reliability even at partial loads.",
      ],
    },
    {
      title: "Customizable Configurations:",
      color: "bg-green-500",
      icon: RoundedNumbers.Number2,
      points: [
        "Available in water-cooled and air-cooled variants to suit diverse operational environments.",
        "Wide capacity range for small to large-scale industrial applications.",
      ],
    },
    {
      title: "Energy Efficiency:",
      color: "bg-red-500",
      icon: RoundedNumbers.Number3,
      points: [
        "Equipped with variable speed drives (VSD) for optimized energy consumption.",
        "Integrated heat recovery systems maximize efficiency by utilizing waste heat.",
      ],
    },
    {
      title: "Precision Temperature Control:",
      color: "bg-cyan-500",
      icon: RoundedNumbers.Number4,
      points: [
        "Provides precise temperature regulation with a wide operating range.",
        "Suitable for applications requiring strict temperature stability.",
      ],
    },
    {
      title: "Durable Construction:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number5,
      points: [
        "Built with corrosion-resistant materials for long-term durability in harsh environments.",
        "Compact and modular design for easy installation and maintenance.",
      ],
    },
    {
      title: "Smart Automation and Monitoring:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number6,
      points: [
        "Advanced PLC/SCADA systems for real-time monitoring and diagnostics.",
        "Remote control capabilities for efficient system management.",
      ],
    },
  ],
  applicationCards: {
    mainHeader: "APPLICATIONS",
    mainDescription: "",
    items: [
      {
        icon: GasStationIcon,
        heading: "Industrial Process Cooling:",
        description:
          "Ensures reliable cooling for manufacturing processes in industries such as chemical, pharmaceutical, and food & beverage.",
      },
      {
        icon: IndustrialIcon,
        heading: "HVAC Systems:",
        description:
          "Provides efficient cooling and heating for large commercial and industrial spaces.",
      },
      {
        icon: PipelineIcon,
        heading: "Data Centers:",
        description:
          "Maintains optimal temperatures for critical IT infrastructure.",
      },
      {
        icon: PipelineIcon,
        heading: "Heat Recovery:",
        description:
          "Utilizes waste heat from industrial processes for hot water generation or space heating.",
      },
      {
        icon: PipelineIcon,
        heading: "Cold Storage:",
        description:
          "Maintains low temperatures for perishable goods in warehouses and logistics centers.",
      },
    ],
  },
  advantagesHeader: "Advantages",
  advantagesImage: ProductAdvantagesRight,
  advantagesText: [
    {
      title: "Enhanced Performance",
      bullets: [
        "High COP (Coefficient of Performance) ensures superior cooling and heating efficiency.",
        "Consistently meets or exceeds industry-specific quality standards.",
      ],
    },
    {
      title: "Energy Savings",
      bullets: [
        "Advanced technologies minimize power consumption, reducing operational costs.",
        "Heat pumps offer a sustainable alternative to conventional heating methods.",
      ],
    },
    {
      title: "Environmental Responsibility",
      bullets: [
        "Uses eco-friendly refrigerants with low Global Warming Potential (GWP).",
        "Supports sustainable practices through energy-efficient designs.",
      ],
    },
    {
      title: "Low Maintenance Requirements",
      bullets: [
        "Simplified design reduces maintenance frequency and costs.",
        "Intelligent control systems provide early fault detection and easy troubleshooting.",
      ],
    },
    {
      title: "Flexibility and Scalability",
      bullets: [
        "Modular systems allow for capacity upgrades to meet future requirements.",
        "Versatile configurations ensure seamless integration into existing systems.",
      ],
    },
  ],
  whyChooseImage: ProductWhyChooseFR,
  whyChooseText: [
    "Proven Expertise: Decades of experience in designing and manufacturing industrial cooling and heating systems.",
    "Innovative Solutions: Cutting-edge technology ensuring optimal performance and sustainability.",
    "Comprehensive Support: From system design and installation to after-sales service and maintenance.",
    "Global Standards Compliance: Meets international quality and environmental standards, including ISO and ASHRAE.",
  ],
  whyChooseCircularImage: IndustrialSiteCircular,
  technicalSpecifications: {
    "Cooling Capacity": "20 kW–2,000 kW",
    "Heating Capacity": "30 kW–1,500 kW",
    "Compressor Type": " High-efficiency twin-screw compressor",
    Refrigerants: "R134a, R513A, R1234ze, and other eco-friendly options",
    "Energy Efficiency": "COP > 5.5 for chillers, COP > 4.5 for heat pumps",
    "Operating Temperature Range": "-10°C to +55°C",
    Automation: " Fully automated with PLC/SCADA interface",
  },
};
export const ProductScrubberData = {
  heroBackgroundImage: productAssets.scrubber,
  heroTitle: "PRODUCT",
  heroSubtitle:
    "Energy-Efficient Screw Chillers and Heat Pumps for Smart Industries ",
  descriptionImage: ProductDescriptionLeft,
  descriptionMainHeading: "H2S & CO2 SCRUBBER: PRODUCT DESCRIPTION",
  descriptionText:
    "Finsen Ritter Technologies' Industrial H₂S & CO₂ Scrubbers are high-performance systems designed to efficiently remove hydrogen sulfide (H₂S) and carbon dioxide (CO₂) from industrial gas streams. These scrubbers are ideal for applications in biogas purification, natural gas processing, petrochemical industries, and other sectors where gas quality and environmental compliance are critical. With advanced scrubbing technologies, customizable configurations, and energy-efficient designs, our scrubbers ensure consistent operation, regulatory adherence, and reduced environmental impact.",
  majorFeatures: [
    {
      title: "Advanced Scrubbing Technologies:",
      color: "bg-blue-500",
      icon: RoundedNumbers.Number1,
      points: [
        {
          text: "Available in multiple configurations to suit specific applications: ",
          subpoints: [
            "Chemical Absorption: Utilizes amines or caustic solutions for high-efficiency H₂S and CO₂ removal.",
            "Physical Absorption: Employs solvents like Selexol® or Rectisol® for selective gas separation.",
            "Biological Scrubbing: Uses biofilters for eco-friendly and cost-effective gas purification.",
            "Membrane Separation: Compact and energy-efficient, ideal for CO₂-rich gas streams.",
          ],
        },
      ],
    },
    {
      title: "Customizable Designs:",
      color: "bg-green-500",
      icon: RoundedNumbers.Number2,
      points: [
        "Tailored solutions to handle diverse gas compositions and flow rates.",
        "Scalable systems for small, medium, and large-scale operations.",
      ],
    },
    {
      title: "High Removal Efficiency:",
      color: "bg-red-500",
      icon: RoundedNumbers.Number3,
      points: [
        "Achieves H₂S removal efficiencies of up to 99.99%.",
        "CO₂ removal tailored to desired gas specifications, reaching purity levels suitable for pipeline injection or industrial use.",
      ],
    },
    {
      title: "Energy-Efficient Operation:",
      color: "bg-cyan-500",
      icon: RoundedNumbers.Number4,
      points: [
        "Optimized designs minimize energy consumption during gas treatment.",
        "Options for heat recovery to enhance overall system efficiency.",
      ],
    },
    {
      title: "Robust Construction:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number5,
      points: [
        "Built with corrosion-resistant materials to ensure longevity in harsh industrial environments.",
        "Modular design for easy installation, operation, and maintenance.",
      ],
    },
    {
      title: "Automation and Monitoring:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number6,
      points: [
        "Integrated PLC/SCADA systems for real-time monitoring and control.",
        "Remote diagnostics to ensure minimal downtime and proactive maintenance.",
      ],
    },
  ],
  applicationCards: {
    mainHeader: "APPLICATIONS",
    mainDescription: "",
    items: [
      {
        icon: GasStationIcon,
        heading: "Biogas Purification:",
        description:
          "Removes H₂S and CO₂ to upgrade biogas into biomethane for vehicle fuel, pipeline injection, or industrial energy.",
      },
      {
        icon: IndustrialIcon,
        heading: "Natural Gas Processing:",
        description:
          "Enhances gas quality by removing corrosive and unwanted impurities.",
      },
      {
        icon: PipelineIcon,
        heading: "Petrochemical and Refining:",
        description:
          "Ensures gas stream purity for downstream processes, including synthesis and catalytic reactions.",
      },
      {
        icon: PipelineIcon,
        heading: "Industrial Waste Gas Treatment:",
        description:
          "Treats exhaust or process gases to comply with environmental standards.",
      },
      {
        icon: PipelineIcon,
        heading: "Carbon Capture and Utilization (CCU):",
        description:
          "Captures CO₂ for reuse in industrial or agricultural applications.",
      },
    ],
  },
  advantagesHeader: "Advantages",
  advantagesImage: ProductAdvantagesRight,
  advantagesText: [
    {
      title: "Regulatory Compliance",
      bullets: [
        "Meets stringent environmental standards for gas emissions and quality, including ISO, EPA, and local regulatory requirements.",
      ],
    },
    {
      title: "Enhanced Operational Safety",
      bullets: [
        "Eliminates hazardous H₂S to protect equipment and personnel.",
        "Reduces the risk of corrosion and damage in pipelines and storage facilities.",
      ],
    },
    {
      title: "Economic Benefits",
      bullets: [
        "Converts waste gases into valuable resources like biomethane.",
        "Reduces costs associated with environmental penalties and equipment maintenance.",
      ],
    },
    {
      title: "Sustainability",
      bullets: [
        "Supports carbon-neutral initiatives through effective CO₂ capture.",
        "Offers environmentally friendly scrubbing options with minimal waste generation.",
      ],
    },
    {
      title: "Scalable Solutions",
      bullets: [
        "Designed to grow with your operational needs, ensuring long-term adaptability.",
      ],
    },
  ],
  whyChooseImage: ProductWhyChooseFR,
  whyChooseText: [
    "Expertise and Innovation: Decades of experience in designing advanced gas treatment solutions.",
    "Turnkey Solutions: Comprehensive services, including system design, installation, commissioning, and after-sales support.",
    "Global Reach: Proven track record across industries in Europe, Africa, and India.",
    "Commitment to Quality: Adherence to international standards and best practices in design and manufacturing.",
  ],
  whyChooseCircularImage: IndustrialSiteCircular,
  technicalSpecifications: {
    "Flow Capacity": "100–5,000 Nm³/hour",
    "H₂S Removal Efficiency": "Up to 99.99%",
    "CO₂ Removal Efficiency": "Configurable up to 95% or as required",
    "Operating Pressure": "Atmospheric to high-pressure designs available",
    "Automation Level": "Fully automated with PLC/SCADA controls",
    Materials:
      "Stainless steel, FRP, or other corrosion-resistant options based on application",
  },
};
export const ProductGasBlendingData = {
  heroBackgroundImage: productAssets.gasBlending,
  heroTitle: "PRODUCT",
  heroSubtitle:
    "Custom Gas Blending Skid Solutions for Efficient Industrial Applications ",
  descriptionImage: ProductDescriptionLeft,
  descriptionMainHeading:
    "INDUSTRIAL GAS BLENDING SKID (CH4, H2, AND O2): PRODUCT DESCRIPTION",
  descriptionText:
    "FINSEN RITTER gas blending skid systems deliver precise, automated mixing of methane (CH4), hydrogen (H2), and oxygen (O2) for industrial applications. Engineered for reliability and accuracy, these custom-built skids feature state-of-the-art flow control technology, safety monitoring systems. our blending skids ensure optimal performance with minimal operational complexity. Each system includes integrated safety features, real-time monitoring capabilities, and complies with international safety standards for seamless integration into your existing infrastructure. ",
  majorFeatures: [
    {
      title: "Precision Gas Mixing Technology:",
      color: "bg-blue-500",
      icon: RoundedNumbers.Number1,
      points: [
        "Accurate blending of CH₄, H₂, and O₂ gases to achieve desired compositions.",
        "Configurable flow rates and mixing ratios for specific process requirements.",
        "High-precision mass flow controllers (MFC) ensure stable and consistent gas output.",
      ],
    },
    {
      title: "Advanced Safety Systems:",
      color: "bg-green-500",
      icon: RoundedNumbers.Number2,
      points: [
        "Equipped with sensors to monitor pressure, flow, and gas composition in real-time.",
        "Integrated safety interlocks and alarms to prevent hazardous conditions, such as explosive mixtures.",
        "Explosion-proof design for high-risk environments.",
      ],
    },
    {
      title: "Modular and Compact Design:",
      color: "bg-red-500",
      icon: RoundedNumbers.Number3,
      points: [
        "Skid-mounted for easy integration with existing systems.",
        "Compact footprint, suitable for limited-space installations.",
        "Modular components enable scalability and easy upgrades.",
      ],
    },
    {
      title: "Automation and Monitoring:",
      color: "bg-cyan-500",
      icon: RoundedNumbers.Number4,
      points: [
        "Fully automated operation with PLC/SCADA systems for seamless control.",
        "Remote monitoring capabilities via IoT-enabled features for real-time diagnostics and control.",
      ],
    },
    {
      title: "High-Quality Materials:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number5,
      points: [
        "Constructed with corrosion-resistant stainless steel for durability.",
        "High-quality seals and fittings ensure leak-free performance.",
      ],
    },
    {
      title: "Compliance and Standards:",
      color: "bg-yellow-500",
      icon: RoundedNumbers.Number6,
      points: [
        "Designed to meet international safety and quality standards, including ISO and ATEX certifications.",
      ],
    },
  ],
  applicationCards: {
    mainHeader: "APPLICATIONS",
    mainDescription: "",
    items: [
      {
        icon: GasStationIcon,
        heading: "Energy and Power Generation:",
        description:
          "Precise blending of CH₄ and H₂ for use in turbines and fuel cells.",
      },
      {
        icon: IndustrialIcon,
        heading: "Metal Processing and Cutting:",
        description:
          "O₂-enhanced gas mixtures for cutting, welding, and metal refining processes.",
      },
      {
        icon: PipelineIcon,
        heading: "Petrochemical and Refining Industries:",
        description:
          "Blended gases for chemical synthesis, including methanol and ammonia production.",
      },
      {
        icon: PipelineIcon,
        heading: "Biogas and Renewable Energy:",
        description:
          "Upgrading biogas by adding precise amounts of CH₄ and H₂ for enhanced calorific value.",
      },
      {
        icon: PipelineIcon,
        heading: "Environmental Solutions:",
        description:
          "Customized gas mixtures for emissions reduction and carbon capture processes.",
      },
      {
        icon: PipelineIcon,
        heading: "Research and Development:",
        description:
          "Controlled gas blending for testing and experimental setups in laboratories and pilot plants.",
      },
    ],
  },
  advantagesHeader: "Advantages",
  advantagesImage: ProductAdvantagesRight,
  advantagesText: [
    {
      title: "Exceptional Accuracy",
      bullets: [
        "Advanced controls ensure exact gas ratios, minimizing process variability and maximizing efficiency.",
      ],
    },
    {
      title: "Operational Safety",
      bullets: [
        "Built-in safety features reduce the risk of accidents and maintain operational integrity in sensitive environments.",
      ],
    },
    {
      title: "Energy Efficiency",
      bullets: [
        "Optimized systems reduce energy consumption during blending and delivery.",
      ],
    },
    {
      title: "Reduced Downtime",
      bullets: [
        "Robust design and reliable components ensure uninterrupted operation.",
      ],
    },
    {
      title: "Customizable Solutions",
      bullets: [
        "o	Tailored designs to meet specific operational and regulatory needs.",
        "o	Scalable systems allow for future capacity expansion.",
      ],
    },
    {
      title: "Cost-Effective Operation",
      bullets: [
        "Low maintenance requirements and energy-efficient components minimize operational costs.",
      ],
    },
  ],
  whyChooseImage: ProductWhyChooseFR,
  whyChooseText: [
    "Industry Expertise: Over two decades of experience in gas handling and processing technologies.",
    "Tailored Solutions: Customized gas blending skids designed to fit unique industrial needs.",
    "Cutting-Edge Technology: Integration of the latest automation and safety features for superior performance.",
    "Global Support: Comprehensive service network across Europe, Africa, and India for installation, maintenance, and technical support.",
  ],
  whyChooseCircularImage: IndustrialSiteCircular,
  technicalSpecifications: {
    "Flow Rate": "50–10,000 Nm³/hour",
    "Gas Ratios": "Configurable from 0.1% to 100% for each gas",
    "Operating Pressure": "1–200 bar (adjustable based on application)",
    Materials:
      "Stainless steel (316/304) for high durability and corrosion resistance",
    "Control System": "PLC/SCADA with touchscreen HMI interface",
    "Safety Features":
      "Integrated pressure relief valves, gas detectors, and alarms",
    "Standards Compliance": "ISO 9001, ASME, ATEX, and PED certifications",
  },
};

export const ServicesEpcData = {
  heroBackgroundImage: getImageUrl("ServiceSubPageEcpHeroBg.png"),
  heroHeading: "ENGINEERING, PROCUREMENT, AND CONSTRUCTION (EPC)",
  heroDescription:
    "Engineering, Procurement, and Construction (EPC) Services At Finsen Ritter Technologies, we provide comprehensive EPC (Engineering, Procurement, and Construction) services tailored to meet the unique requirements of industrial projects across diverse sectors. Our end-to-end solutions ensure seamless project execution, from concept to commissioning, with an unwavering focus on quality, safety, and efficiency.",
  multiImageData: {
    heading: "Our EPC Services Include:",
    images: [
      ServicesEcpEnggExcellence,
      ServicesEcpSeamlessConstruction,
      ServicesEcpStrategicProcurement,
    ],
    title: "ADVANTAGES",
    sections: ServicesText.OurEcpServices,
  },
  iconCardsData: {
    title: "Key Industries We Serve:",
    content: IconTextCardContent,
  },
  whatSetsUsApart: {
    title: "What Sets Us Apart?",
    description:
      "At Finsen Ritter Technologies, we go beyond traditional EPC services by offering a collaborative approach that ensures transparency, flexibility, and alignment with your strategic goals. Our commitment to excellence drives us to deliver projects that exceed expectations, creating long-lasting value for our clients.",
  },
  transformVision: {
    title: "Transform Your Vision into Reality",
    description:
      "Partner with Finsen Ritter Technologies for reliable and innovative EPC solutions. Contact us today to discuss your project requirements and explore how we can bring your ideas to life.",
  },
};

export const ServicesProcurementManagementData = {
  heroBackgroundImage: getImageUrl("ServiceSubPageEcpHeroBg.png"),
  heroHeading: "PROCUREMENT MANAGEMENT",
  heroDescription:
    "Procurement Management Services At Finsen Ritter Technologies, our Procurement Management Services are designed to streamline the acquisition of high-quality materials, equipment, and resources essential for your industrial projects. With a focus on efficiency, cost optimization, and supplier reliability, we ensure your project requirements are met on time and within budget.",
  multiImageData: {
    heading: "Our Procurement Management Capabilities:",
    images: [
      ServicesEcpEnggExcellence,
      ServicesEcpSeamlessConstruction,
      ServicesEcpStrategicProcurement,
    ],
    title: "",
    sections: ServicesText.ProcurementManagement,
  },
  iconCardsData: {
    title: "Key Industries We Serve:",
    content: [
      {
        icon: ServicesPowerAndUtilityInfrastructureIcon,
        descp: "Chemical and Gas Plants",
      },
      {
        icon: ServicesPetrochemicalIcon,
        descp: "Renewable Energy Projects",
      },
      {
        icon: ServicesRenewableEnergy,
        descp: "Water Treatment Systems",
      },
      {
        icon: ServicesFoodBeveragesIcon,
        descp: "Food and Beverage Processing",
      },
      {
        icon: ServicesWaterTreatmentIcon,
        descp: "Petrochemical and Refining Sectors",
      },
      {
        icon: ServicesIndustrialGasesIcon,
        descp: "Manufacturing and Heavy Industries",
      },
    ],
  },
  whatSetsUsApart: {
    title: "What Sets Us Apart?",
    description:
      "At Finsen Ritter Technologies, we take a proactive, transparent, and customer-centric approach to procurement management. Our commitment to delivering value drives us to exceed client expectations at every stage of the process.",
  },
  transformVision: {
    title: "Procurement Done Right",
    description:
      "Partner with Finsen Ritter Technologies for reliable and efficient procurement management. Let us help you secure the resources you need to achieve project success. Contact us today to learn more!",
  },
};

export const ServicesIndustrialAutomationData = {
  heroBackgroundImage: getImageUrl("ServiceSubPageEcpHeroBg.png"),
  heroHeading: "Industrial Automation 4.0 / SCADA Services",
  heroDescription:
    "At Finsen Ritter Technologies, we empower industries to achieve next-level operational efficiency with our cutting-edge Industrial Automation 4.0 and SCADA (Supervisory Control and Data Acquisition) solutions. By integrating advanced technologies, real-time monitoring, and intelligent control systems, we help businesses streamline processes, enhance productivity, and stay ahead in the digital age.",
  multiImageData: {
    heading: "Our Industrial Automation 4.0 / SCADA Capabilities:",
    images: [
      ServicesEcpEnggExcellence,
      ServicesEcpSeamlessConstruction,
      ServicesEcpStrategicProcurement,
    ],
    title: "",
    sections: ServicesText.IndustrialAutomation,
  },
  iconCardsData: {
    title: "Key Industries We Serve:",
    content: [
      {
        icon: ServicesPowerAndUtilityInfrastructureIcon,
        descp: "Manufacturing and Assembly Lines",
      },
      {
        icon: ServicesPetrochemicalIcon,
        descp: "Chemical and Gas Plants",
      },
      {
        icon: ServicesRenewableEnergy,
        descp: "Water and Wastewater Treatment",
      },
      {
        icon: ServicesFoodBeveragesIcon,
        descp: "Renewable Energy Projects",
      },
      {
        icon: ServicesWaterTreatmentIcon,
        descp: "Food and Beverage Processing",
      },
      {
        icon: ServicesIndustrialGasesIcon,
        descp: "Power and Utility Sectors",
      },
    ],
  },
  whatSetsUsApart: {
    title: "Stay Ahead with Smart Solutions",
    description:
      "With Finsen Ritter Technologies' Industrial Automation 4.0 and SCADA Services, your operations become smarter, safer, and more sustainable. Let us help you embrace the future of industry with innovative automation solutions tailored to your needs.",
  },
  transformVision: {
    title: "Contact Us",
    description:
      "Contact us today to discuss how we can revolutionize your processes and drive success.",
  },
};

export const ServicesCostManagementData = {
  heroBackgroundImage: getImageUrl("ServiceSubPageEcpHeroBg.png"),
  heroHeading: "COST MANAGEMENT ANALYSIS TO THE PROJECT",
  heroDescription:
    "At Finsen Ritter Technologies, we offer expert Cost Management Analysis services to ensure your projects remain on budget without compromising quality or timelines. Our team employs advanced financial modeling, resource optimization strategies, and real-time cost monitoring to identify potential savings, control expenditures, and maximize return on investment. Whether at the planning, execution, or completion stage, we deliver actionable insights and tailored solutions to enhance financial efficiency and project success.",
  multiImageData: {
    heading: "Our EPC Services Include:",
    images: [
      ServicesEcpEnggExcellence,
      ServicesEcpSeamlessConstruction,
      ServicesEcpStrategicProcurement,
    ],
    title: "ADVANTAGES",
    sections: ServicesText.OurEcpServices,
  },
  iconCardsData: {
    title: "Key Industries We Serve:",
    content: IconTextCardContent,
  },
  whatSetsUsApart: {
    title: "What Sets Us Apart?",
    description:
      "At Finsen Ritter Technologies, we go beyond traditional EPC services by offering a collaborative approach that ensures transparency, flexibility, and alignment with your strategic goals. Our commitment to excellence drives us to deliver projects that exceed expectations, creating long-lasting value for our clients.",
  },
  transformVision: {
    title: "Transform Your Vision into Reality",
    description:
      "Partner with Finsen Ritter Technologies for reliable and innovative EPC solutions. Contact us today to discuss your project requirements and explore how we can bring your ideas to life.",
  },
};

export const ServicesSafetyConsultancyData = {
  heroBackgroundImage: getImageUrl("ServiceSubPageEcpHeroBg.png"),
  heroHeading: "SAFETY CONSULTANCY",
  heroDescription:
    "At Finsen Ritter Technologies, our Safety Consultancy Services are designed to ensure the highest standards of safety across all industrial operations. We provide expert guidance in risk assessment, hazard identification, and the implementation of comprehensive safety management systems. Our team of certified safety professionals works closely with your organization to create customized safety protocols, conduct safety audits, and ensure compliance with local and international regulations. With a strong focus on proactive measures and continuous improvement, we help you safeguard your employees, assets, and environment, fostering a culture of safety and operational excellence.",
  multiImageData: {
    heading: "Our EPC Services Include:",
    images: [
      ServicesEcpEnggExcellence,
      ServicesEcpSeamlessConstruction,
      ServicesEcpStrategicProcurement,
    ],
    title: "ADVANTAGES",
    sections: ServicesText.OurEcpServices,
  },
  iconCardsData: {
    title: "Key Industries We Serve:",
    content: IconTextCardContent,
  },
  whatSetsUsApart: {
    title: "What Sets Us Apart?",
    description:
      "At Finsen Ritter Technologies, we go beyond traditional EPC services by offering a collaborative approach that ensures transparency, flexibility, and alignment with your strategic goals. Our commitment to excellence drives us to deliver projects that exceed expectations, creating long-lasting value for our clients.",
  },
  transformVision: {
    title: "Transform Your Vision into Reality",
    description:
      "Partner with Finsen Ritter Technologies for reliable and innovative EPC solutions. Contact us today to discuss your project requirements and explore how we can bring your ideas to life.",
  },
};

export const ServicesLicensePermissionData = {
  heroBackgroundImage: getImageUrl("ServiceSubPageEcpHeroBg.png"),
  heroHeading:
    "LICENSE & PERMISSIONS ASSISTANCE (PESO, CPCB, FIRE & SAFETY ETC.)",
  heroDescription:
    "At Finsen Ritter Technologies, we offer expert License & Permissions Assistance to ensure your operations meet all regulatory requirements. Our team provides seamless support for obtaining crucial certifications such as PESO (Petroleum and Explosives Safety Organization), CPCB (Central Pollution Control Board), and Fire & Safety Compliance, helping you navigate the complexities of legal frameworks with ease. Whether it's securing environmental clearances or ensuring adherence to safety standards, we guide you through the entire process, ensuring your business remains compliant and operational without delays. Let us handle the paperwork, so you can focus on growing your business.",
  multiImageData: {
    heading: "Our EPC Services Include:",
    images: [
      ServicesEcpEnggExcellence,
      ServicesEcpSeamlessConstruction,
      ServicesEcpStrategicProcurement,
    ],
    title: "ADVANTAGES",
    sections: ServicesText.OurEcpServices,
  },
  iconCardsData: {
    title: "Key Industries We Serve:",
    content: IconTextCardContent,
  },
  whatSetsUsApart: {
    title: "What Sets Us Apart?",
    description:
      "At Finsen Ritter Technologies, we go beyond traditional EPC services by offering a collaborative approach that ensures transparency, flexibility, and alignment with your strategic goals. Our commitment to excellence drives us to deliver projects that exceed expectations, creating long-lasting value for our clients.",
  },
  transformVision: {
    title: "Transform Your Vision into Reality",
    description:
      "Partner with Finsen Ritter Technologies for reliable and innovative EPC solutions. Contact us today to discuss your project requirements and explore how we can bring your ideas to life.",
  },
};

export const ServicesProjectFeasibilityData = {
  heroBackgroundImage: getImageUrl("ServiceSubPageEcpHeroBg.png"),
  heroHeading: "PROJECT FEASIBILITY REPORT",
  heroDescription:
    "At Finsen Ritter Technologies, we deliver comprehensive and data-driven Project Feasibility Reports to empower informed decision-making for your industrial ventures. Our reports provide a meticulous analysis of technical, financial, and operational aspects, ensuring your project's viability and success. From evaluating market potential and resource requirements to identifying risks and recommending optimal strategies, we deliver actionable insights tailored to your objectives. Partner with us for precise, reliable, and impactful feasibility assessments that lay the foundation for your project's sustainable growth.",
  multiImageData: {
    heading: "Our EPC Services Include:",
    images: [
      ServicesEcpEnggExcellence,
      ServicesEcpSeamlessConstruction,
      ServicesEcpStrategicProcurement,
    ],
    title: "ADVANTAGES",
    sections: ServicesText.OurEcpServices,
  },
  iconCardsData: {
    title: "Key Industries We Serve:",
    content: IconTextCardContent,
  },
  whatSetsUsApart: {
    title: "What Sets Us Apart?",
    description:
      "At Finsen Ritter Technologies, we go beyond traditional EPC services by offering a collaborative approach that ensures transparency, flexibility, and alignment with your strategic goals. Our commitment to excellence drives us to deliver projects that exceed expectations, creating long-lasting value for our clients.",
  },
  transformVision: {
    title: "Transform Your Vision into Reality",
    description:
      "Partner with Finsen Ritter Technologies for reliable and innovative EPC solutions. Contact us today to discuss your project requirements and explore how we can bring your ideas to life.",
  },
};

export const ServicesDetailedProjectReportData = {
  heroBackgroundImage: getImageUrl("ServiceSubPageEcpHeroBg.png"),
  heroHeading: "DETAILED PROJECT REPORT",
  heroDescription:
    "At Finsen Ritter Technologies, we deliver meticulously crafted Detailed Project Reports (DPRs) that serve as the cornerstone for successful project execution. Our DPRs provide in-depth insights, including feasibility studies, technical specifications, financial projections, risk assessments, and compliance requirements, tailored to your industry and project scope. By combining expert analysis with precision planning, we empower stakeholders to make informed decisions, ensuring projects are executed efficiently, on time, and within budget. Trust us to transform your vision into actionable blueprints for success.",
  multiImageData: {
    heading: "Our EPC Services Include:",
    images: [
      ServicesEcpEnggExcellence,
      ServicesEcpSeamlessConstruction,
      ServicesEcpStrategicProcurement,
    ],
    title: "ADVANTAGES",
    sections: ServicesText.OurEcpServices,
  },
  iconCardsData: {
    title: "Key Industries We Serve:",
    content: IconTextCardContent,
  },
  whatSetsUsApart: {
    title: "What Sets Us Apart?",
    description:
      "At Finsen Ritter Technologies, we go beyond traditional EPC services by offering a collaborative approach that ensures transparency, flexibility, and alignment with your strategic goals. Our commitment to excellence drives us to deliver projects that exceed expectations, creating long-lasting value for our clients.",
  },
  transformVision: {
    title: "Transform Your Vision into Reality",
    description:
      "Partner with Finsen Ritter Technologies for reliable and innovative EPC solutions. Contact us today to discuss your project requirements and explore how we can bring your ideas to life.",
  },
};

export const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61574775376322",
    icon: FacebookIcon,
  },
  { href: "#", icon: GoogleIcon },
  { href: "#", icon: MailRoundedIcon },
  { href: "https://www.instagram.com/finsenritter/", icon: InstagramIcon },
  { href: "https://www.linkedin.com/company/finsenritter", icon: LinkedinIcon },
  { href: "https://x.com/FinsenRitter", icon: TwitterIcon },
];
