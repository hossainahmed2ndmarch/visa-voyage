import React from "react";
import { useNavigate } from "react-router-dom";

const LatestVisas = ({ loadedVisas }) => {
 const navigate = useNavigate()
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Render Visa Cards */}
        {loadedVisas.map((visa) => (
          <div
            key={visa._id}
            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            style={{
              boxShadow:
                "inset 4px 4px 6px rgba(0, 0, 0, 0.1), inset -4px -4px 6px rgba(255, 255, 255, 0.3)",
            }}
          >
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="rounded-lg w-full h-40 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">
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
            <p className="text-sm text-gray-600">
              <strong>Validity:</strong> {visa.validity}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Application Method:</strong> {visa.applicationMethod}
            </p>
            <button
              onClick={() => navigate(`/visa-details/${visa._id}`)}
              className="mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-400 to-teal-300 text-white font-semibold hover:bg-blue-500 shadow-sm hover:shadow-md transition-all"
            >
              See Details
            </button>
          </div>
        ))}
      </div>

      {/* See All Visas Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/all-visas")}
          className="py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-bold shadow-lg hover:shadow-2xl transition-all"
        >
          See All Visas
        </button>
      </div>
    </section>
  );
};

export default LatestVisas;
