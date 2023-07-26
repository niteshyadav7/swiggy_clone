import Register from "./components/pages/Register";
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/pages/Login";
import "react-toastify/dist/ReactToastify.css";
import Body from "./components/body/Body";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Body />,
  },
]);
export default router;
