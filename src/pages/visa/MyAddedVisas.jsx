import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import UpdateVisaModal from "./UpdateVisaModal";
import { Helmet } from "react-helmet-async";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://visa-voyage-server.vercel.app/my-added-visas?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setVisas(data));
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
    <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>MyAddedVisa | VisaVoyage</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-center">My Added Visas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="border rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] overflow-hidden bg-white/20 backdrop-blur-lg  transition-all"
          >
            <div>
              {" "}
              <img
                src={visa.countryImage}
                alt={visa.country}
                className="h-full w-full object-cover"
              />
            </div>
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
                  className="py-2 px-4 rounded-lg bg-white/20 backdrop-blur-md shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] font-semibold text-blue-600 transition-all hover:bg-blue-500 hover:text-white"
                  onClick={() => setSelectedVisa(visa)}
                >
                  Update
                </button>
                <button
                  className="py-2 px-4 rounded-lg bg-white/20 backdrop-blur-md shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] font-semibold text-red-600 transition-all hover:bg-red-500 hover:text-white"
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
