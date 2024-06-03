import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import Banner from "../components/Shared/Header/Banner";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;