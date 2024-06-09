import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Banner from "../components/Shared/Header/Banner";
import StickyNavbar from "../components/Shared/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <StickyNavbar />
      <div className="container mx-auto">
        <Banner></Banner>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;