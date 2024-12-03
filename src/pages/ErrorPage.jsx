import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <FaExclamationTriangle className="text-red-500 mx-auto text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-2 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="btn btn-primary px-6 py-2 rounded-lg shadow-md"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
