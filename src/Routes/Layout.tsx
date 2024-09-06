import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className=" bg-white h-full overflow-hidden">
      <div className="shadow fixed bg-white text-black lg:px-10 top-0 z-50 w-full h-[90px] ">
        <Navbar />
      </div>
      {/* pt-24 */}
      <div className="mx-auto pt-[82px] bg-white text-black w-full min-h-screen ">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
