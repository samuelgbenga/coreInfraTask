import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import React from "react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-[#014DAF] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Oops! The page you are looking for
        <br /> doesn't exist or has been moved.
      </p>
      <div className="mt-6">
        <button
          className="w-[9rem] h-[36px] bg-[#014DAF] hover:bg-[#014DAF]/80 text-white cursor-pointer px-3 py-2 rounded-[4px] text-xs flex items-center justify-center gap-2 font-medium"
          onClick={() => navigate("/complaints-log")}
        >
          <BsArrowLeft /> Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
