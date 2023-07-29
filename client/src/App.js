import { Outlet } from "react-router-dom";
import Header from "./components/body/Header";
import Footer from "./components/body/Footer";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
 
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
