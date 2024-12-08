import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import UpdateVisaModal from "./UpdateVisaModal";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://visa-voyage-server.vercel.app/my-added-visas/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setVisas(data))
        .catch((error) => console.error("Error fetching visas:", error));
    }
  }, [user]);

  // Delete visa
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-voyage-server.vercel.app/visas/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Visa has been deleted.", "success");
            setVisas(visas.filter((visa) => visa._id !== id));
          });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My Added Visas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={visa.countryImage}
              alt={visa.country}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{visa.countryName}</h2>
              <p>
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p>
                <strong>Processing Time:</strong> {visa.processingTime} days
              </p>
              <p>
                <strong>Fee:</strong> ${visa.fee}
              </p>
              <p>
                <strong>Validity:</strong> {visa.validity} months
              </p>
              <p>
                <strong>Application Method:</strong> {visa.applicationMethod}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => setSelectedVisa(visa)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(visa._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for Updating Visa */}
      {selectedVisa && (
        <UpdateVisaModal
          visa={selectedVisa}
          setVisas={setVisas}
          visas={visas}
          onClose={() => setSelectedVisa(null)} // Close modal
          onUpdate={(updatedVisa) => {
            // Update visa in the list
            setVisas(
              visas.map((visa) =>
                visa._id === updatedVisa._id ? updatedVisa : visa
              )
            );
            setSelectedVisa(null); // Close modal
          }}
        />
      )}
    </div>
  );
};

export default MyAddedVisas;
