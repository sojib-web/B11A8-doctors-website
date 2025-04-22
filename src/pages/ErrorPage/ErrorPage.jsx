import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4 font-semibold text-gray-800">
          Oops! Page not found
        </p>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-[#176AE5] text-white rounded-full shadow hover:bg-[#077d27] transition duration-200"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
