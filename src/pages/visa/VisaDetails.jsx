import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

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

  // Submit functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const applicationData = Object.fromEntries(formData.entries());
    applicationData.countryName = countryName;
    applicationData.countryImage = countryImage;
    applicationData.visaType = visaType;
    applicationData.processingTime = processingTime;
    applicationData.validity = validity;
    applicationData.applicationMethod = applicationMethod;
    // console.log(applicationData);

    // Send data to the server
    fetch("https://visa-voyage-server.vercel.app/applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You have successfully applied",
            icon: "success",
            confirmButtonText: "Cool",
          });
          setIsModalOpen(false);
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-10  rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] bg-gray-100">
      <Helmet>
        <title>Visa Details | VisaVoyage</title>
      </Helmet>
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
      <div className="space-y-3 p-6">
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
          className="mt-6 py-2 px-4 bg-gradient-to-r from-blue-400 to-teal-300 text-white font-semibold rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)]"
        >
          Apply for the Visa
        </button>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg h-auto overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-400 to-teal-300 p-6 text-center">
              <h2 className="text-3xl font-bold text-white">
                Apply for the Visa
              </h2>
            </div>

            {/* Form Container */}
            <div className="overflow-y-auto flex-grow p-6 space-y-4">
              <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    readOnly
                    className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                  />
                </div>

                {/* First Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      First Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                  />
                </div>

                {/* Last Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Last Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                  />
                </div>

                {/* Applied Date */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Applied Date
                    </span>
                  </label>
                  <input
                    type="text"
                    name="appliedDate"
                    value={new Date().toISOString().split("T")[0]}
                    readOnly
                    className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                  />
                </div>

                {/* Fee */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-medium">Fee</span>
                  </label>
                  <input
                    type="text"
                    name="fee"
                    defaultValue={`$${fee}`}
                    readOnly
                    className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                  />
                </div>

                {/* Modal Actions */}
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 bg-gray-300 text-black font-semibold rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] hover:bg-blue-700 transition"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
