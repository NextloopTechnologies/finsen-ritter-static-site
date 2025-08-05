import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import AboutUs from "../components/AboutUs";
import { LogoFRSVG } from "../assets/svg";
import DemoVideo from "../components/DemoVideo";
import Slider from "../components/Slider";
import OurBiogasSection from "../components/OurBiogasSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import {
  cardsClients,
  productCards,
  testimonials,
} from "../utils/ExportStaticData";
import { TestimonialCard } from "../components/TestimonialCard";
import { ProductCard } from "../components/ProductCard";
import { IconCard } from "../components/IconCard";
import { getImageUrl } from "../utils/supabaseStorageHelper";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Home = () => {
  const gridRef = useRef();

  const [rowData, setRowData] = useState([
    {
      type: "Cattle Dung",
      rate: 1000,
      transport: 250,
      dryMatter: 22,
      cngOutput: 2.5,
      availability: 0,
    },
    {
      type: "Napier Grass",
      rate: 1000,
      transport: 250,
      dryMatter: 35,
      cngOutput: 7,
      availability: 0,
    },
  ]);

  const columnDefs = [
    { headerName: "Type of Raw Material", field: "type", editable: true },
    { headerName: "Rate (₹/Ton)", field: "rate", editable: true },
    { headerName: "Transport (₹/Ton)", field: "transport", editable: true },
    {
      headerName: "Total Cost (₹/Ton)",
      valueGetter: (params) => +params.data.rate + +params.data.transport,
    },
    { headerName: "Dry Matter %", field: "dryMatter", editable: true },
    { headerName: "CNG Output %", field: "cngOutput", editable: true },
    { headerName: "Availability (TPD)", field: "availability", editable: true },
  ];

  return (
    <>
      <Helmet>
        <title>Top Biogas Plant Manufacturers in India | Finsen Ritter</title>
        <meta
          name="description"
          content="Finsen Ritter is the best biogas plant manufacturer in India, offering Bio-CNG plants, biogas purification systems and turnkey waste-to-energy solutions"
        />
      </Helmet>
      <div className="flex flex-col gap-28 ">
          <div className="bg-[#135384]">
        <HeroSection>
            <div className="order-1 md:order-2 mb-8 md:mb-0 w-full md:w-auto md:mr-10">
              <LogoFRSVG className="w-[60vw] md:w-[30vw] h-auto mx-auto md:mx-0" />
            </div>

            <div className="order-2 md:order-1 text-center md:text-left w-full md:w-auto">
              <div className="flex flex-col gap-2 md:gap-4">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                  Leading Biogas Plant Manufacturers | Sustainable Energy
                  Solutions for Tomorrow
                </h1>
                {/* <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Energy with Advanced
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Biogas Solutions
              </h1> */}
                <p className="text-base md:text-lg lg:text-xl font-normal mt-4">
                  Transforming organic waste into clean, renewable{" "}
                  <br className="hidden md:block" /> energy for a sustainable
                  future.
                </p>
                <div className="mt-6">
                  <button className="text-[#135384] hover:bg-[rgb(17,25,60)] bg-white py-3 px-8 rounded-lg transition-colors duration-300 text-lg md:text-xl w-full md:w-auto">
                    <a href="/product/industrial-bio-cng-compressed-bio-gas-plant">
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
            </div>
        </HeroSection>
          </div>

        <DemoVideo />

        <AboutUs />
        <div
          className="relative w-full py-10"
          style={{
            backgroundImage: `url("${getImageUrl("ProductSectionBgImg.png")}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Slider
            visibleItems={3}
            showArrows={true}
            swiperParams={{ spaceBetween: 40 }}
            header={
              <div className="p-14 flex flex-col items-center text-center">
                <div className="text-blue-900 font-bold text-2xl md:text-3xl">
                  {productCards?.mainHeader}
                </div>
                <div className="font-semibold text-xl">
                  {productCards?.mainDescription}
                </div>
              </div>
            }
            slides={productCards?.items?.map((productCards) => (
              <ProductCard {...productCards} />
            ))}
          />
        </div>
        <OurBiogasSection />

        <Slider
          visibleItems={6}
          autoPlay={true}
          showDots={true}
          className="py-12 bg-gray-50"
          header={
            <div className="p-14 flex flex-col items-center text-center">
              <div className="text-blue-900 font-bold  text-2xl md:text-3xl">
                {cardsClients?.mainHeader}
              </div>
              <div className="font-semibold text-xl">
                {cardsClients?.mainDescription}
              </div>
            </div>
          }
          slides={cardsClients?.items?.map((client) => (
            <IconCard icon={client.icon} altText={client.name} />
          ))}
        />

        <Slider
          visibleItems={3}
          showArrows={true}
          showDots={true}
          swiperParams={{ spaceBetween: 40 }}
          header={
            <div className="p-14 flex flex-col items-center text-center">
              <div className="text-blue-900 font-bold text-2xl md:text-3xl">
                {testimonials?.mainHeader}
              </div>
              <div className="font-semibold text-xl">
                {testimonials?.mainDescription}
              </div>
            </div>
          }
          slides={testimonials?.items?.map((testimonial) => (
            <TestimonialCard {...testimonial} className="custom-testimonial" />
          ))}
        />

        <ContactSection />
      </div>
    </>
  );
};

export default Home;
