import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";

const App = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;