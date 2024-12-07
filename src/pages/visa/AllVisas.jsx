import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllVisas = () => {
  const loadedAllVisas = useLoaderData(); // Load data from the backend
  const navigate = useNavigate(); // To navigate to the Visa Details page
  

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        All Visas
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loadedAllVisas.map((visa) => (
          <div
            key={visa._id}
            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="rounded-lg w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {visa.countryName}
            </h3>
            <p className="text-sm text-gray-600">
              <strong>Visa Type:</strong> {visa.visaType}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Processing Time:</strong> {visa.processingTime}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Fee:</strong> ${visa.fee}
            </p>
            <button
              onClick={() => navigate(`/visa-details/${visa._id}`)}
              className="mt-4 py-2 px-4 w-full rounded-lg bg-gradient-to-r from-blue-400 to-teal-300 text-white font-semibold hover:shadow-md transition-all"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
