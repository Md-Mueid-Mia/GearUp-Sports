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
import UpdateEquipment from "../pages/UpdateEquipment ";
import DetailsPage from "../pages/DetailsPage";

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
        element: <AllEquipment/>
      },
      {
        path: "/addEquipment",
        element: <PrivateRoute><AddEquipment/></PrivateRoute>
      },
      {
        path: "/myEquipmentList",
        element: <PrivateRoute><MyEquipment/></PrivateRoute>,
        
      },
      {
        path: "/updateEquipment/:id",
        element: <PrivateRoute><UpdateEquipment/></PrivateRoute>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products/:id",
        element: <PrivateRoute><DetailsPage/></PrivateRoute>,
        loader: ()=> fetch('https://assignment-10-server-beta-rouge.vercel.app/equipment')
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>,
  }
 
]);

export default router;
