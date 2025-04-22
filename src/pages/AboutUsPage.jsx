import React from "react";
import {
  AboutUsMissionSection,
  AboutUsVisionSection,
  OurValuesAboutUs,
} from "../assets/images";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import FlexContentImageSection from "../components/FlexContentImageSection";
import Slider from "../components/Slider";
import { cardsClients, testimonials } from "../utils/ExportStaticData";
import { AboutUsText } from "../utils/ExportText";
import { TestimonialCard } from "../components/TestimonialCard";
import { IconCard } from "../components/IconCard";
import { getImageUrl } from "../utils/supabaseStorageHelper";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.9 },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -75 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Right to left animation variant (for alternating sections)
  const slideInFromRight = {
    hidden: { opacity: 0, x: 75 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col gap-28">
      <HeroSection
        backgroundImage={getImageUrl("AboutSectionHeroBg.png")}
        backgroundOpacity="opacity-50"
      >
        <div className="flex flex-col text-center max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            className="text-3xl font-bold mb-5"
          >
            ABOUT US
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            className="text-lg"
          >
            Finsen Ritter Technologies specializes in industrial turnkey
            solutions, offering expertise in the design, supply, installation,
            and testing of chemical and gas plants.
          </motion.p>
        </div>
      </HeroSection>
      <div className="mt-4 mx-4 -mb-4 md:m-10 px-4 md:px-32">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          className="flex text-2xl md:text-3xl font-bold text-blue-900 justify-center"
        >
          ABOUT THE COMPANY
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          className="mt-4 text-gray-700 text-sm md:text-base"
        >
          {AboutUsText.AboutTheCompanyDescription}
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideInFromLeft}
        className="-my-10"
      >
        <FlexContentImageSection
          image={AboutUsVisionSection}
          title="OUR VISION"
          description={AboutUsText.OurVisionDescription}
          bgColoredCover={"true"}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideInFromRight}
        className="-my-10"
      >
        <FlexContentImageSection
          image={AboutUsMissionSection}
          title="OUR MISSION"
          description={AboutUsText.OurMissionDescription}
          orientation="right"
          bgColoredCover={"true"}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideInFromLeft}
      >
        <FlexContentImageSection
          image={OurValuesAboutUs}
          title="OUR VALUES"
          description={AboutUsText.OurValuesDescription}
          contentClassName="bg-white bg-opacity-10 p-5 md:p-10 max-w-full md:max-w-[50vw] my-10 md:my-20"
          orientation="right"
        />
      </motion.div>

      <Slider
        visibleItems={6}
        autoPlay={true}
        showDots={true}
        className="py-12 bg-gray-50"
        header={
          <div className="p-14 flex flex-col items-center text-center">
            <div className="text-blue-900 font-bold text-2xl md:text-3xl">
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
            <div className="text-blue-900 font-bold md:text-3xl text-2xl">
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
  );
};

export default AboutUsPage;
