import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateVisaModal = ({ visa, onClose, onUpdate, visas, setVisas }) => {
  // const { user } = useContext(AuthContext);
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

  const [updatedVisaType, setUpdatedVisaType] = useState(visaType);
  const [updatedRequiredDocuments, setUpdatedRequiredDocuments] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setUpdatedRequiredDocuments((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedVisaData = Object.fromEntries(formData.entries());
    updatedVisaData.requiredDocuments = updatedRequiredDocuments;
    // updatedVisaData.addedBy = user.email;
    fetch(`https://visa-voyage-server.vercel.app/visas/${visa._id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updatedVisaData),
    })
      .then((res) => res.json())
      .then((data) => {
        onUpdate(data); // Pass updated visa back to parent
        setVisas((prevVisas) =>
          prevVisas.map((v) =>
            v._id === visa._id ? { ...v, ...updatedVisaData } : v
          )
        );
        onClose(); // Close modal
      })
      // .catch((error) => console.error("Error updating visa:", error));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl h-auto md:h-[90%] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-400 to-teal-300 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Update Visa</h2>
        </div>

        {/* Form Container with Scrolling */}
        <div className="overflow-y-auto flex-grow p-6 space-y-4">
          <form onSubmit={handleSubmit}>
            {/* Country Image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Country Image URL
                </span>
              </label>
              <input
                type="text"
                name="countryImage"
                defaultValue={countryImage}
                placeholder="Enter the image URL"
                className="input outline-none bg-gray-100 rounded-lg"
                required
              />
            </div>

            {/* Country Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Country Name
                </span>
              </label>
              <input
                type="text"
                name="countryName"
                defaultValue={countryName}
                placeholder="Enter the country name"
                className="input outline-none bg-gray-100 rounded-lg"
                required
              />
            </div>

            {/* Visa Type */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Visa Type
                </span>
              </label>
              <select
                name="visaType"
                defaultValue={visaType}
                value={updatedVisaType}
                onChange={(e) => setUpdatedVisaType(e.target.value)}
                className="select bg-gray-100 rounded-lg"
                required
              >
                {/* Visa type options */}
                <option value="Tourist visa">Tourist visa</option>
                <option value="Student visa">Student visa</option>
                <option value="Official visa">Official visa</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Business Visa">Business Visa</option>
                <option value="Transit Visa">Transit Visa</option>
                <option value="Family/Spouse Visa">Family/Spouse Visa</option>
                <option value="Immigrant Visa">Immigrant Visa</option>
                <option value="Medical Visa">Medical Visa</option>
                <option value="Investor Visa">Investor Visa</option>
                <option value="Cultural Exchange Visa">
                  Cultural Exchange Visa
                </option>
                <option value="Religious Visa">Religious Visa</option>
                <option value="Digital Nomad Visa">Digital Nomad Visa</option>
                <option value="Retirement Visa">Retirement Visa</option>
                <option value="Freelancer Visa">Freelancer Visa</option>
                <option value="Asylum Visa">Asylum Visa</option>
              </select>
            </div>

            {/* Processing Time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Processing Time (in days)
                </span>
              </label>
              <input
                type="number"
                name="processingTime"
                defaultValue={processingTime}
                placeholder="Enter processing time"
                className="input outline-none bg-gray-100 rounded-lg"
                required
              />
            </div>

            {/* Required Documents */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Required Documents
                </span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Valid passport",
                  "Visa application form",
                  "Recent passport-sized photograph",
                  "Travel itinerary",
                  "Proof of accommodation",
                  "Proof of financial means",
                  "Employment letter",
                  "Invitation letter",
                  "Proof of enrollment",
                  "Health insurance",
                  "Medical reports",
                  "Criminal record certificate",
                  "Proof of ties to home country",
                  "Visa fee payment receipt",
                  "Vaccination certificates",
                  "Marriage/Birth certificates",
                  "Employment contract",
                  "Educational certificates",
                  "Proof of business ownership",
                  "Letter of purpose/intent",
                ]?.map((document) => (
                  <label key={document} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value={document}
                      checked={requiredDocuments?.includes(document)}
                      onChange={handleCheckboxChange}
                      className="checkbox"
                    />
                    <span>{document}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Other Fields */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                defaultValue={description}
                placeholder="Write a brief description"
                className="textarea bg-gray-100 rounded-lg"
                required
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Age Restriction
                </span>
              </label>
              <input
                type="number"
                name="ageRestriction"
                defaultValue={ageRestriction}
                placeholder="Enter the minimum age"
                className="input outline-none bg-gray-100 rounded-lg"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Fee (in USD)
                </span>
              </label>
              <input
                type="number"
                name="fee"
                placeholder="Enter the visa fee"
                defaultValue={fee}
                className="input outline-none bg-gray-100 rounded-lg"
                required
              />
            </div>
            {/* Validity */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-navyText font-semibold">
                  Validity (in months)
                </span>
              </label>
              <input
                type="number"
                name="validity"
                defaultValue={validity}
                placeholder="Enter validity period"
                className="input outline-none bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl"
                required
              />
            </div>

            {/* Application Method */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-navyText font-semibold">
                  Application Method
                </span>
              </label>
              <input
                type="text"
                name="applicationMethod"
                defaultValue={applicationMethod}
                placeholder="E.g., Online or In-person"
                className="input outline-none bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl"
                required
              />
            </div>
            {/* Footer Buttons */}
            <div className="p-4 flex justify-end gap-4 border-t border-gray-200">
              <button
                type="button"
                className="btn bg-gray-500 text-white rounded-lg"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-gradient-to-r from-blue-400 to-teal-300 text-white rounded-lg"
              >
                Update Visa
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateVisaModal;
