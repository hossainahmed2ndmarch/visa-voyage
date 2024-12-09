import React from "react";
import { Link } from "react-router-dom";
import {
  FaPassport,
  FaRegMoneyBillAlt,
  FaPlaneDeparture,
  FaUserCheck,
} from "react-icons/fa";

const TopServices = () => {
  const services = [
    {
      icon: (
        <FaPassport size={40} className="text-blue-600 dark:text-teal-300" />
      ),
      title: "Visa Applications",
      description:
        "Apply for various types of visas easily with our guided process.",
      // link: "/services/visa-applications",
    },
    {
      icon: (
        <FaRegMoneyBillAlt
          size={40}
          className="text-blue-600 dark:text-teal-300"
        />
      ),
      title: "Fee Calculator",
      description: "Calculate visa fees and get transparent cost breakdowns.",
      // link: "/services/fee-calculator",
    },
    {
      icon: (
        <FaPlaneDeparture
          size={40}
          className="text-blue-600 dark:text-teal-300"
        />
      ),
      title: "Travel Assistance",
      description:
        "Get help with travel bookings and visa-related travel advice.",
      // link: "/services/travel-assistance",
    },
    {
      icon: (
        <FaUserCheck size={40} className="text-blue-600 dark:text-teal-300" />
      ),
      title: "Document Verification",
      description:
        "Ensure your visa documents are complete and meet requirements.",
      // link: "/services/document-verification",
    },
  ];

  return (
    <section className="dark:bg-gray-800 py-12">
      <h2 className="text-center text-2xl font-bold text-blue-600 dark:text-teal-300 mb-6">
        Top Services Offered
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {services.map((service, index) => (
          <Link
            key={index}
            // to={service.link}
            className="bg-white dark:bg-gray-700 rounded-3xl p-6 flex flex-col items-center text-center shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.5)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.1)] transition-transform transform hover:scale-105"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopServices;
