import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../layouts/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ErrorPage from './../pages/ErrorPage';
import AllEquipment from "../pages/AllEquipment";
import AddEquipment from "../pages/AddEquipment";
import MyEquipment from "../pages/MyEquipment";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/allEquipment',
        element: <PrivateRoute><AllEquipment/></PrivateRoute>
      },
      {
        path: "/addEquipment",
        element: <PrivateRoute><AddEquipment/></PrivateRoute>
      },
      {
        path: "/myEquipmentList",
        element: <PrivateRoute><MyEquipment/></PrivateRoute>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>,
  }
 
]);

export default router;
