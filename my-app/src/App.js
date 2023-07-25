import Register from "./components/pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
// export default function App() {
//   return (

//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route exact path="/register" element={<Register />} />
//     //     <Route exact path="/login" element={<Login />} />
//     //     <Route exact path="/" element={<Cards />} />
//     //   </Routes>
//     // </BrowserRouter>
//   );
// }
