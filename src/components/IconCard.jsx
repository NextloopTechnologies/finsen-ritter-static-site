export const IconCard = ({ icon, altText = "Logo", className = "" }) => (
  <div
    className={`bg-white p-6 rounded-full shadow-md flex items-center justify-center h-48 ${className} mb-5`}
  >
    <img src={icon} alt={altText} className="block max-h-20 object-contain" />
  </div>
);
