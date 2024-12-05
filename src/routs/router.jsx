import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import AllVisas from "../pages/visa/AllVisas";
import LogIn from "../pages/auth/LogIn";
import Registration from "../pages/auth/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "all-visas",
        element: <AllVisas></AllVisas>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
