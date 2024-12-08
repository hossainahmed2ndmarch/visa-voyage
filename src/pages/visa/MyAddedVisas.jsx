import React, { useEffect, useState } from "react";
import { useContext } from "react"; // Assuming you're using a context for authentication

import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user's info
  const [myVisas, setMyVisas] = useState([]);

  // Fetch the user's visas based on their email
  useEffect(() => {
    fetch(`http://localhost:5000/visas/user?email=${user.email}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`, // If you use JWT, include the token
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyVisas(data);
      })
      .catch((error) => {
        console.error("Error fetching visas:", error);
      });
  }, [user.email]);

  // Handle delete visa
  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "This action cannot be undone!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`http://localhost:5000/visas/${id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount > 0) {
  //             Swal.fire("Deleted!", "Your visa has been deleted.", "success");
  //             setMyVisas(myVisas.filter((visa) => visa._id !== id));
  //           }
  //         });
  //     }
  //   });
  // };

  // Handle update (redirect to update form or modal)
  // const handleUpdate = (id) => {
  //   Swal.fire(
  //     "Update!",
  //     "Redirect to the update page or open a modal.",
  //     "info"
  //   );
  // };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Added Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {myVisas.map((visa) => (
          <div key={visa._id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={visa.countryImage}
              alt={visa.country}
              className="h-32 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{visa.countryName}</h3>
            <p>Visa Type: {visa.visaType}</p>
            <p>Processing Time: {visa.processingTime} days</p>
            <p>Fee: ${visa.fee}</p>
            <p>Validity: {visa.validity} months</p>
            <p>Application Method: {visa.applicationMethod}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                // onClick={() => handleUpdate(visa._id)}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
                // onClick={() => handleDelete(visa._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedVisas;
