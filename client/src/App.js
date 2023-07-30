import { Outlet } from "react-router-dom";
import Header from "./components/body/Header";
import Footer from "./components/body/Footer";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import appStore from "./components/redux/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
export default App;
