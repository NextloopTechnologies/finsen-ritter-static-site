import { StarIcon } from "../assets/svg";

export const TestimonialCard = ({
  name,
  designation,
  text,
  rating,
  icon,
  className,
}) => (
  <div className={`bg-white p-8 rounded-xl shadow-lg h-60 mb-5 ${className}`}>
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-lg">{name}</p>
          <p className="text-gray-500 text-sm">{designation}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
    </div>
    <p className="text-gray-600 italic">"{text}"</p>
  </div>
);
