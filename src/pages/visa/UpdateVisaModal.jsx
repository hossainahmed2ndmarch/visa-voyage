import React, { useContext, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";

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
      });
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
                className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
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
                className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
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
                className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                required
              >
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
                className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
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
                className="textarea outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                required
              />
            </div>

            {/* Age Restriction */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Age Restriction
                </span>
              </label>
              <input
                type="text"
                name="ageRestriction"
                defaultValue={ageRestriction}
                placeholder="Enter age restriction"
                className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                required
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
                defaultValue={fee}
                placeholder="Enter the visa fee"
                className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                required
              />
            </div>

            {/* Validity */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Validity</span>
              </label>
              <input
                type="text"
                name="validity"
                defaultValue={validity}
                placeholder="Enter visa validity"
                className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                required
              />
            </div>

            {/* Application Method */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Application Method
                </span>
              </label>
              <input
                type="text"
                name="applicationMethod"
                defaultValue={applicationMethod}
                placeholder="Enter the application method"
                className="input outline-none rounded-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-teal-300 font-semibold transition-all w-full focus:outline-none"
                required
              />
            </div>

            {/* Modal Actions */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)] hover:bg-gray-400 transition"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.2)]  hover:bg-blue-700 transition"
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
