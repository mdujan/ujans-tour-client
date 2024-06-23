import { 
    // FaAd,
  
    //  FaCalendar,
      FaEnvelope, FaHome, FaList, FaSearch, 
    //    FaUtensils 
    } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import useRole from "../../../hook/useRole";
import Sidebar from "./Sidebar/Sidebar";
import TourGuide from "./Sidebar/TourGuide/TourGuide";
import Admin from "./Sidebar/Admin/Admin";
import Tourist from "./Sidebar/Tourist/Tourist";

// import { useState } from "react";



const Dashboard = () => {
    // const [cart] = useCart();

    // // TODO: get isAdmin value from the database
    const { user } = useAuth() || {};
    const [role,isLoading] =useRole()
console.log(user,role,isLoading);
// Todo :




    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-72  min-h-screen bg-gradient-to-r from-[#b0c2f5] to-[#734b6d] ">
                <ul className="menu p-4">
                    

{role ==='tourGuide' && <TourGuide></TourGuide>}
{role ==='tourist' && <Tourist/>}
{role ==='admin' && <Admin />}


                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile">
                            <FaSearch></FaSearch>
                            My Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;