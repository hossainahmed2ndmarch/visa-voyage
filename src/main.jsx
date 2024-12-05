import React from "react";
import "./index.css";
import router from "./routs/router";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        {" "}
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
