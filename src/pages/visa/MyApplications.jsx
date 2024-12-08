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
        fetch(`http://localhost:5000/applications/${id}`, {
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
            console.error("Error deleting application:", error);
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
      <h2 className="text-2xl font-bold mb-4">Your Visa Applications</h2>

      {/* Search Section */}
      <div className="mb-6 flex items-center gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by country"
          className="border rounded-md p-2 w-full md:w-1/3"
        />
        <button
          onClick={handleSearch}
          className="btn bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userApplications.length > 0 ? (
          userApplications.map((app) => (
            <div
              key={app._id}
              className="border rounded-lg shadow p-4 flex flex-col space-y-4"
            >
              {/* Country Image */}
              <img
                src={app.countryImage}
                alt={app.countryName}
                className="rounded-lg object-cover w-full h-full"
              />

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
                <strong>Fee:</strong> ${app.fee}
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
                <strong>Applicant:</strong> {`${app.firstName} ${app.lastName}`}
              </p>
              <p>
                <strong>Email:</strong> {app.email}
              </p>

              {/* Cancel Button */}
              <button
                onClick={() => handleCancel(app._id)}
                className="btn bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
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
