import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";


import router from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<RouterProvider router={router}/>);

// root.render(<Header />);
