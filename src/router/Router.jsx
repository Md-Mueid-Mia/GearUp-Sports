import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../layouts/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/coffee",
      //   element: <AllCoffee></AllCoffee>,
      // },
      // {
      //   path: "/addCoffee",
      //   element: <AddCoffee></AddCoffee>,
      // },
      // {
      //   path: "/coffee/:id",
      //   element: <UpdateCoffee></UpdateCoffee>,
      // },
      // {
      //   path: "/update/:id",
      //   element: <UpdateCoffee></UpdateCoffee>,
      // },
      // {
      //   path: "/users",
      //   element: <Users></Users>,
      // },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
 
]);

export default router;
