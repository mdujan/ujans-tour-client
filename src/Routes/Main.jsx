import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../pages/Footer/Footer";

const Main = () => {
    return (
        
        <div className="relative">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        {/* <Footer></Footer> */}
    </div>
    
    );
};

export default Main;