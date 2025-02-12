import { Link } from "react-router-dom";

export const ProductCard = ({
  icon,
  heading,
  description,
  className,
  link,
}) => (
  <Link to={link} className="block">
    <div className={`bg-white p-6 rounded-xl shadow-md h-80 my-5 ${className}`}>
      <img
        src={icon}
        alt={heading}
        className="mx-auto w-1/2 h-32 object-contain mb-6"
      />
      <h3 className="text-md font-bold mb-3">{heading}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </Link>
);
