import React from "react";
import "./index.css";
import router from "./routs/router";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./provider/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <HelmetProvider>
          {" "}
          <RouterProvider router={router} />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            toastStyle={{
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              borderRadius: "10px",
              color: "#0077b6",
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
        </HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
