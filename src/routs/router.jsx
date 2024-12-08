import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import AllVisas from "../pages/visa/AllVisas";
import LogIn from "../pages/auth/LogIn";
import Registration from "../pages/auth/Registration";
import PrivateRoute from "./PrivateRoute";
import VisaDetails from "../pages/visa/VisaDetails";
import AddVisa from "../pages/visa/AddVisa";
import MyAddedVisas from "../pages/visa/MyAddedVisas";
import MyApplications from "../pages/visa/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://visa-voyage-server.vercel.app/visas/home"),
      },
      {
        path: "all-visas",
        element: <AllVisas></AllVisas>,
        loader: () => fetch("https://visa-voyage-server.vercel.app/visas"),
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "/visa-details/:id",
        element: (
          <PrivateRoute>
            <VisaDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://visa-voyage-server.vercel.app/visas/${params.id}`),
      },
      {
        path: "/add-visa",
        element: (
          <PrivateRoute>
            <AddVisa />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-visas",
        element: (
          <PrivateRoute>
            <MyAddedVisas />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://visa-voyage-server.vercel.app/applications"),
      },
    ],
  },
]);

export default router;
