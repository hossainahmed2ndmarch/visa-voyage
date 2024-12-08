import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const MyApplications = () => {
  const applications = useLoaderData();
  const [userApplications, setUserApplications] = useState(applications);

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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Visa Applications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userApplications.map((app) => (
          <div
            key={app._id}
            className="border rounded-lg shadow p-4 flex flex-col space-y-4"
          >
            {/* Country Image */}
            <img
              src={app.countryImage}
              alt={app.country}
              className="rounded-lg object-cover w-full h-full"
            />

            {/* Country */}
            <h3 className="text-xl font-bold">{app.country}</h3>

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
              <strong>Email:</strong> {app.applicantEmail}
            </p>

            {/* Cancel Button */}
            <button
              onClick={() => handleCancel(app._id)}
              className="btn bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
