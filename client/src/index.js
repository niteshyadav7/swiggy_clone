import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import Body from "./components/body/Body";
import About from "./components/body/About";
import Contact from "./components/body/Contact";
import Service from "./components/body/Services";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import InnerCardShow from "./components/Offers/InnerCardShow";
import ErrorElement from "./components/body/ErrorElement";
import RestaurantMenu from "./components/menu/RestaurantMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/innerCard",
        element: <InnerCardShow />,
      },
      {
        path: "/menu/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<RouterProvider router={router} />);
