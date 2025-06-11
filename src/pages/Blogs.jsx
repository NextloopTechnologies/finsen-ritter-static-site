import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import { blogCards } from "../utils/ExportStaticData";
import ContactSection from "../components/ContactSection";
import { getImageUrl } from "../utils/supabaseStorageHelper";
import { BlogsHeroBg } from "../assets/images";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blogs & News | Finsen Ritter</title>
        <meta
          name="description"
          content="Discover a wealth of information on Finsenritter's blog, featuring engaging content that informs and inspires. Stay updated with our latest posts."
        />
      </Helmet>
      <HeroSection
        backgroundImage={BlogsHeroBg}
        backgroundOpacity="opacity-50"
      >
        <div className="flex flex-col text-center w-full">
          <h2 className="text-3xl font-bold mb-5">BLOGS</h2>
          <p className="text-lg">
            {/* Eco-friendly biogas solutions for renewable energy and waste
            management needs. */}
            Stay informed with expert blog from Finsen Ritter — your source for
            industrial biogas solution.
          </p>
        </div>
      </HeroSection>
      <div className="w-full bg-white py-12 px-4 mb-20">
        <div className="max-w-6xl mx-auto mb-16 mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center">
            BLOGS
          </h2>
          <p className="text-gray-600 text-center font-semibold">
            I am the first to understand and facilitate your energy and climate
            management needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {blogCards.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden"
              >
                <div className="md:w-1/3">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-2/3 p-6">
                  <h2 className="text-xl font-bold text-blue-900 mb-4">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {blog.content}
                  </p>
                  <button className="mt-4 text-blue-900 hover:text-blue-700 font-semibold transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Blogs;
