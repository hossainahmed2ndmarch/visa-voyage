import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddVisa = () => {
  const [visaType, setVisaType] = useState("Tourist visa");
  const [requiredDocuments, setRequiredDocuments] = useState([]);
  const { user } = useContext(AuthContext);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setRequiredDocuments((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const visaData = Object.fromEntries(formData.entries());
    visaData.requiredDocuments = requiredDocuments;
    visaData.addedBy = user.email;
    console.log(visaData);

    // Send data to the server
    fetch("https://visa-voyage-server.vercel.app/visas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your visa added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-white/20 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-3xl p-6 md:p-12 shrink-0">
        <h2 className="text-4xl font-semibold text-navyText text-center">
          Add a Visa
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          {/* Country Image */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-navyText font-semibold">
                Country Image URL
              </span>
            </label>
            <input
              type="text"
              name="countryImage"
              placeholder="Enter the image URL"
              className="input outline-none bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl"
              required
            />
          </div>

          {/* Country Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-navyText font-semibold">
                Country Name
              </span>
            </label>
            <input
              type="text"
              name="countryName"
              placeholder="Enter the country name"
              className="input outline-none bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl"
              required
            />
          </div>

          {/* Visa Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-navyText font-semibold">
                Visa Type
              </span>
            </label>
            <select
              name="visaType"
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              className="select bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl"
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
              <span className="label-text text-xl text-navyText font-semibold">
                Processing Time (in days)
              </span>
            </label>
            <input
              type="number"
              name="processingTime"
              placeholder="Enter processing time"
              className="input outline-none bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl"
              required
            />
          </div>

          {/* Required Documents */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-navyText font-semibold">
                Required Documents
              </span>
            </label>
            <div className="space-y-2">
              {/* Loop through required documents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-navyText font-semibold">
                Description
              </span>
            </label>
            <textarea
              name="description"
              placeholder="Write a brief description"
              className="textarea bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl"
              required
            ></textarea>
          </div>

          {/* Age Restriction */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-navyText font-semibold">
                Age Restriction
              </span>
            </label>
            <input
              type="number"
              name="ageRestriction"
              placeholder="Enter the minimum age"
              className="input outline-none bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl"
              required
            />
          </div>

          {/* Fee */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-navyText font-semibold">
                Fee (in USD)
              </span>
            </label>
            <input
              type="number"
              name="fee"
              placeholder="Enter the visa fee"
              className="input outline-none bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl"
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
              placeholder="E.g., Online or In-person"
              className="input outline-none bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-blue-400 to-teal-300 text-navyText rounded-2xl border-none text-xl font-semibold shadow-xl">
              Add Visa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
