import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllVisas = () => {
  const loadedAllVisas = useLoaderData(); // Data loaded from the router loader
  const [filteredVisas, setFilteredVisas] = useState(loadedAllVisas); // Visas to display
  const [visaTypes, setVisaTypes] = useState([]); // Unique visa types
  const navigate = useNavigate();

  // Extract unique visa types for the dropdown when data is loaded
  useEffect(() => {
    const uniqueTypes = [
      ...new Set(loadedAllVisas.map((visa) => visa.visaType)),
    ];
    setVisaTypes(uniqueTypes);
  }, [loadedAllVisas]);

  // Filter visas based on selected visa type
  const handleFilterChange = (type) => {
    if (type) {
      setFilteredVisas(loadedAllVisas.filter((visa) => visa.visaType === type));
    } else {
      setFilteredVisas(loadedAllVisas); // Reset to show all visas
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        All Visas
      </h2>

      {/* Dropdown for Visa Type Filtering */}
      <div className="mb-8 text-center">
        <select
          onChange={(e) => handleFilterChange(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg shadow focus:outline-none"
        >
          <option value="">All Visa Types</option>
          {visaTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVisas.map((visa) => (
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
