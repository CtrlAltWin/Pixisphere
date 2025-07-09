import React from "react";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-4 text-center">
      <div className="bg-white p-8 rounded-xl border border-gray-300 max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 text-red-500 p-4 rounded-full">
            <AlertTriangle size={40} />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Oops! Something Went Wrong
        </h1>
        <p className="text-gray-600 mb-4 text-sm">
          We encountered an error while fetching data. Please try refreshing the page or come back later.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
