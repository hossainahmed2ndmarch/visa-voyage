import React from "react";
import { useNavigate } from "react-router-dom";

const LatestVisas = ({ loadedVisas }) => {
  const navigate = useNavigate();

  return (
    <section className="py-10 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700 dark:text-teal-300">
        Latest Visas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Render Visa Cards */}
        {loadedVisas.map((visa) => (
          <div
            key={visa._id}
            className=" rounded-3xl bg-gray-100 dark:bg-gray-700 shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.1)] hover:shadow-[10px_10px_20px_rgba(0,0,0,0.3),-10px_-10px_20px_rgba(255,255,255,0.2)] transition-all transform hover:scale-105 overflow-hidden"
          >
            <div>
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="rounded-lg w-full h-full object-cover mb-4 shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.1)]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {visa.countryName}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Processing Time:</strong> {visa.processingTime}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Fee:</strong> ${visa.fee}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Validity:</strong> {visa.validity}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Application Method:</strong> {visa.applicationMethod}
              </p>
              <button
                onClick={() => navigate(`/visa-details/${visa._id}`)}
                className="mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-400 to-teal-300 text-white font-semibold hover:from-blue-500 hover:to-teal-400 shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] transition-all"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See All Visas Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/all-visas")}
          className="py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-bold shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.1)] hover:shadow-[10px_10px_20px_rgba(0,0,0,0.3),-10px_-10px_20px_rgba(255,255,255,0.2)] transition-all"
        >
          See All Visas
        </button>
      </div>
    </section>
  );
};

export default LatestVisas;
