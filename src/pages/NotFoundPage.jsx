import { Link } from "react-router-dom";
import { Error404Svg } from "../assets/svg";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-2">
      <Error404Svg />
      <h2 className="text-5xl font-bold text-gray-700">Page Not Found</h2>
      <p className="text-2xl text-gray-700 mt-4 max-w-lg">
        Oops! It looks like the page you're looking for doesn't exist or has
        been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-900 text-white rounded-3xl hover:bg-blue-950"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
