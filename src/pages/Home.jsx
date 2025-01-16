import React from "react";
import AboutUs from "../components/AboutUs";
import { LogoFRSVG } from "../assets/svg";
import DemoVideo from "../components/DemoVideo";
import BackgroundImg from "../assets/HomePage/Background.png";
import Slider from "../components/Slider";
import {
  H2SCO2ScrubberIcon,
  IndustrialBioCngIcon,
  IndustrialBiogasPurificationIcon,
  IndustrialDesiccantIcon,
  IndustrialGasBleedingSkidIcon,
  IndustrialNitrogenIcon,
  IndustrialScreChillersIcon,
  IndustrialSyngasIcon,
  JaypeeGroupIcon,
  MedicalOxygenIcon,
  ImpetusIcon,
  AAIIcon,
  AwfisIcon,
  BengaluruAirportIcon,
  PESMedicalCollegeIcon,
  BharatOmanIcon,
  MurugappaIcon,
  NavodayaIcon,
  AdityaBirlaIcon,
  LogoManIcon,
  AjayDeepIcon,
  PMProjectsIcon,
  MVJMedicalCollegeIcon,
  CharteredIcon,
  AvanthaGroupIcon,
  UniqueHospitalIcon,
  MPGovIcon,
  SAIMSIcon,
  TestimonialProfileIcon,
} from "../assets/icons";
import OurBiogasSection from "../components/OurBiogasSection";
import { ProductSectionBgImg } from "../assets/images";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const cards = {
    mainHeader: "OUR PRODUCT",
    mainDescription:
      "Eco-friendly biogas solutions for renewable energy and waste management needs.",
    items: [
      {
        icon: H2SCO2ScrubberIcon,
        heading: "H2S & CO2 Scrubber",
        description:
          "Finsen Ritter's H2S & CO2 Scrubbers ensure efficient gas purification and compliance.",
      },
      {
        icon: IndustrialBioCngIcon,
        heading: "Industrial Bio-CNG (Compressed Bio-Gas) Plant",
        description:
          "Finsen Ritter's Bio-CNG plant converts organic waste into renewable, clean energy.",
      },
      {
        icon: IndustrialBiogasPurificationIcon,
        heading: "Industrial Biogas Purification and Refining Plants",
        description:
          "Finsen Ritter's Biogas Purification Plants convert raw biogas into high-purity biomethane.",
      },
      {
        icon: IndustrialDesiccantIcon,
        heading: "Industrial Desiccant Dryers",
        description:
          "Finsen Ritter's Industrial Desiccant Dryers ensure efficient moisture removal and reliability.",
      },
      {
        icon: IndustrialGasBleedingSkidIcon,
        heading: "Industrial Gas Blending Skid (CH4, H2, and CO2)",
        description:
          "Finsen Ritter's Gas Blending Skids ensure precise, efficient gas-mixing solutions.",
      },
      {
        icon: IndustrialNitrogenIcon,
        heading: "Industrial Nitrogen Plant (PSA & VPSA)",
        description:
          "Finsen Ritter's Industrial Nitrogen Plants produce efficient, on-site high-purity nitrogen.",
      },
      {
        icon: IndustrialScreChillersIcon,
        heading: "Industrial Screw Chillers & Heat Pumps",
        description:
          "Finsen Ritter's Screw Chillers and Heat Pumps offer efficient, reliable performance.",
      },
      {
        icon: IndustrialSyngasIcon,
        heading: "Industrial Syngas Refining Plants",
        description:
          "Finsen Ritter's Syngas Refining Plants provide high-purity syngas for industries.",
      },
      {
        icon: MedicalOxygenIcon,
        heading: "Medical Oxygen Plants (PSA & VPSA)",
        description:
          "Finsen Ritter's Medical Oxygen Plants ensure reliable high-purity oxygen supply.",
      },
    ],
  };
  const cardsClients = {
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
  const testimonials = {
    mainHeader: "What Our Clients Say",
    mainDescription: "Customer Feedback",
    items: [
      {
        name: "Lana Bernier",
        designation: "Property Manager",
        text: "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
        rating: 5,
        icon: TestimonialProfileIcon,
      },
      {
        name: "Mrs. Van Hartmann",
        designation: "Business Owner",
        text: "I like Infinity Estate more and more each day because it makes my life a lot easier. We can't understand how we've been living without Infinity Estate.",
        rating: 5,
        icon: TestimonialProfileIcon,
      },
      {
        name: "Philip Decleow",
        designation: "Real Estate Agent",
        text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
        rating: 5,
        icon: TestimonialProfileIcon,
      },
      {
        name: "Philip Decleow",
        designation: "Real Estate Agent",
        text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
        rating: 5,
        icon: TestimonialProfileIcon,
      },
      {
        name: "Philip Decleow",
        designation: "Real Estate Agent",
        text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
        rating: 5,
        icon: TestimonialProfileIcon,
      },
      {
        name: "Philip Decleow",
        designation: "Real Estate Agent",
        text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
        rating: 5,
        icon: TestimonialProfileIcon,
      },
      {
        name: "Philip Decleow",
        designation: "Real Estate Agent",
        text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
        rating: 5,
        icon: TestimonialProfileIcon,
      },
      {
        name: "Philip Decleow",
        designation: "Real Estate Agent",
        text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
        rating: 5,
        icon: TestimonialProfileIcon,
      },
      {
        name: "Philip Decleow",
        designation: "Real Estate Agent",
        text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
        rating: 5,
        icon: TestimonialProfileIcon,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-28">
      <HeroSection />

      <DemoVideo />

      <AboutUs />

      <Slider
        cards={cards}
        backgroundImage={ProductSectionBgImg}
        cardClass="rounded-lg w-[80%] md-[15%]"
      />

      <OurBiogasSection />

      <Slider
        cards={cardsClients}
        backgroundColor="rgba(19, 83, 132, 0.1)"
        cardClass="rounded-full w-[40%] md:w-[15%] p-2 md:p-4"
        iconOnly={true}
        cardContainerClass=""
      />

      <Slider
        cards={testimonials}
        isTestimonial={true}
        cardContainerClass="px-4"
        backgroundColor=""
        cardClass="md:w-[30%] w-[80%] rounded-xl p-4"
      />

      <ContactSection />
    </div>
  );
};

export default Home;
