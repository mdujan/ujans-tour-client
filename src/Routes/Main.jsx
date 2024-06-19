import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Main = () => {
    return (
        
        <div className="relative">
        <Navbar></Navbar>
        <Outlet></Outlet>
        {/* <Footer></Footer> */}
    </div>
    );
};

export default Main;