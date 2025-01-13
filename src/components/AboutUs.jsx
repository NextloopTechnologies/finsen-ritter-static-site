import AboutUsLeftImg from "../assets/AboutUs/AboutUsLeftImg.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-12 p-8 mx-32">
      {/* Image section with elevation */}
      <div className="md:w-[65vh] relative">
        {/* Background elevation effect */}
        <div className="absolute top-0 left-0 w-[60%] h-[90%] bg-blue-900 transform -translate-x-4 translate-y-6 rounded-s-md" />

        {/* Main image */}
        <div className="relative">
          <img
            src={AboutUsLeftImg}
            alt="Rural landscape with fields"
            className="w-full h-auto relative z-10"
          />
        </div>
      </div>

      {/* Content section */}
      <div className=" max-w-xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">ABOUT US</h2>
        <p className="text-gray-700 leading-relaxed mb-8 font-semibold">
          Finsen Ritter Technologies specializes in industrial turnkey
          solutions, offering expertise in the design, supply, installation, and
          testing of chemical and gas plants. With a presence in Europe, Africa,
          and India, and a design center in Amsterdam, we focus on diverse
          sectors including oxygen, nitrogen, hydrogen, UVGI, water treatment,
          brewing, solar, biogas, and noise monitoring. Committed to innovation
          and Industry 4.0 standards, we deliver cutting-edge, high-quality
          solutions. Our vision is to be the leading provider of industrial
          gases and engineering solutions, offering eco-friendly innovations
          that add value to our clients.
        </p>
        <button className="bg-blue-900 text-white px-8 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
