import React, { useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const MyApplications = () => {
  const applications = useLoaderData(); // Load all applications
  const [userApplications, setUserApplications] = useState(applications); // State for displaying applications
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-voyage-server.vercel.app/applications/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire(
              "Canceled!",
              "Your application has been removed.",
              "success"
            );
            setUserApplications(
              userApplications.filter((app) => app._id !== id)
            );
          })
          .catch((error) => {
            Swal.fire("Error!", "Something went wrong.", "error");
            // console.error("Error deleting application:", error);
          });
      }
    });
  };

  const handleSearch = () => {
    const filteredApplications = applications.filter((app) =>
      app.countryName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setUserApplications(filteredApplications);
  };

  return (
    <div className="p-6">
      <Helmet>
        <title>My Applications | VisaVoyage</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Your Visa Applications
      </h2>

      {/* Search Section */}
      <div className="mb-6 flex justify-center gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by country"
            className="w-full p-4  bg-white/20 backdrop-blur-md   placeholder-gray-500    rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-lg px-4 py-2 shadow-xl hover:bg-blue-600 transition-all "
          >
            Search
          </button>
        </div>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userApplications.length > 0 ? (
          userApplications.map((app) => (
            <div
              key={app._id}
              className="border rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)]  space-y-4 bg-white/20 backdrop-blur-md overflow-hidden transition-all"
            >
              {/* Country Image */}
              <div >
                {" "}
                <img
                  src={app.countryImage}
                  alt={app.country}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4">
                {/* Country */}
                <h3 className="text-xl font-bold">{app.countryName}</h3>

                {/* Visa Info */}
                <p>
                  <strong>Visa Type:</strong> {app.visaType}
                </p>
                <p>
                  <strong>Processing Time:</strong> {app.processingTime} days
                </p>
                <p>
                  <strong>Fee:</strong> {app.fee}
                </p>
                <p>
                  <strong>Validity:</strong> {app.validity} months
                </p>
                <p>
                  <strong>Application Method:</strong> {app.applicationMethod}
                </p>

                {/* Applicant Info */}
                <p>
                  <strong>Applied Date:</strong>{" "}
                  {new Date(app.appliedDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Applicant:</strong>{" "}
                  {`${app.firstName} ${app.lastName}`}
                </p>
                <p>
                  <strong>Email:</strong> {app.email}
                </p>

                {/* Cancel Button */}
                <button
                  onClick={() => handleCancel(app._id)}
                  className="bg-red-500 text-white rounded-lg py-2 px-4 shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] hover:bg-red-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No applications found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
