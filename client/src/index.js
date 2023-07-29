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
import CardShow from "./components/body/CardShow";
import InnerCardShow from "./components/Offers/InnerCardShow";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
