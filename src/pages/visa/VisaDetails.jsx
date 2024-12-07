import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const VisaDetails = () => {
  const visa = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
    requiredDocuments,
  } = visa;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 rounded-xl shadow-md bg-gray-100">
      <div className="flex flex-col items-center">
        <img
          src={countryImage}
          alt={countryName}
          className="w-full h-full object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{countryName}</h1>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Visa Type:</strong> {visaType}
        </p>
      </div>
      <div className="space-y-3">
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Age Restriction:</strong> {ageRestriction || "N/A"}
        </p>
        <p>
          <strong>Processing Time:</strong> {processingTime} days
        </p>
        <p>
          <strong>Fee:</strong> ${fee}
        </p>
        <p>
          <strong>Validity:</strong> {validity} months
        </p>
        <p>
          <strong>Application Method:</strong> {applicationMethod}
        </p>
        <p>
          <strong>Required Documents:</strong>{" "}
          {requiredDocuments?.join(", ") || "None"}
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 py-2 px-4 bg-gradient-to-r from-blue-400 to-teal-300 text-white font-semibold rounded-lg shadow hover:shadow-md"
        >
          Apply for the Visa
        </button>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Apply for the Visa</h2>
            <form>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Applied Date</label>
                <input
                  type="text"
                  name="appliedDate"
                  value={formData.appliedDate}
                  readOnly
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Fee</label>
                <input
                  type="text"
                  name="fee"
                  value={`$${formData.fee}`}
                  readOnly
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mr-4 py-2 px-4 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
