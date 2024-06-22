import {
    createBrowserRouter,
  } from "react-router-dom";
// import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Main from "./Main";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
// import Dashboard from "../pages/layout/Dashboard/Dashboard";
import Details from "../pages/Home/Details.jsx";
import Dashboard from "../pages/layout/Dashboard/Dashboard.jsx";
import AllUsers from "../pages/layout/Dashboard/AllUsers/AllUsers.jsx";
import Profile from "../pages/layout/Dashboard/Common/Profile.jsx";
import ManageUser from "../pages/layout/Dashboard/Sidebar/Admin/ManageUser.jsx";
import Booked from "../pages/Home/Booked.jsx";
import MyBook from "../pages/layout/Dashboard/Sidebar/Tourist/MyBook.jsx";
// import Admin from "../pages/layout/Dashboard/Sidebar/Admin/Admin.jsx";
import MyAssignedTours from "../pages/layout/Dashboard/Sidebar/TourGuide/MyAssignedTours.jsx";
import DetailsProfile from "../pages/Home/Home/DetailsProfile.jsx";
import Wishlist from "../pages/layout/Dashboard/Sidebar/Tourist/Wishlist.jsx";
import Blogs from "../pages/Blogs/Blogs.jsx";
import ErrorElement from "../pages/Error/ErrorElement.jsx";
import Contact from "../pages/ContactUs/Contact.jsx";
import AdminRoute from "../pages/AdminRoute/AdminRoute.jsx";
import AddPackages from "../pages/layout/Dashboard/Sidebar/Admin/AddPackages.jsx";
import Community from "../pages/Community/Community.jsx";

// import Admin from "../pages/layout/Dashboard/Sidebar/Admin/Admin.jsx";
// import Wishlist from "../pages/layout/Dashboard/Sidebar/Tourist/Wishlist.jsx";
// import Menu from "../pages/Menu/Menu/Menu";
// import Order from "../pages/Order/Order/Order";
// import Login from "../pages/Login/Login";
// import SignUp from "../pages/SignUp/SignUp";
// import PrivateRoute from "./PrivateRoute";
// import Secret from "../pages/Shared/Secret/Secret";
// import Dashboard from "../Layout/Dashboard";
// import Cart from "../pages/Dashboard/Cart/Cart";
// import AddItems from "../pages/Dashboard/AddItems/AddItems";
// import AdminRoute from "./AdminRoute";
// import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
// import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
// import Payment from "../pages/Dashboard/Payment/Payment";
// import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
// import UserHome from "../pages/Dashboard/UserHome/UserHome";
// import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorElement/>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: '/community',
            element: <Community></Community>
        }, 
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        }, 
        {
            path: '/contact',
            element: <Contact></Contact>
        }, 
        {
          path:"/details/:id",
          element:<PrivateRoute><Details></Details></PrivateRoute>,
         loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`),
        },
        {
          path: '/booked/:id',
          element:<PrivateRoute><Booked></Booked></PrivateRoute>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path:"/detailsProfile/:id",
          element:<PrivateRoute><DetailsProfile></DetailsProfile> </PrivateRoute>,
         loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/detailsProfile/${params.id}`),
        },


//         {
//           path: 'secret',
//           element: <PrivateRoute><Secret></Secret></PrivateRoute>
//         }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
//         // normal user routes
        {
          path: '/dashboard/profile',
          element: <Profile></Profile>
        },
        {
          path: '/dashboard/manageUser',
          element: <PrivateRoute><AdminRoute><ManageUser/></AdminRoute></PrivateRoute>
        },
        {
          path: '/dashboard/addPackage',
          element: <PrivateRoute><AdminRoute><AddPackages></AddPackages> </AdminRoute></PrivateRoute>
        },
        // {
        //   path: '/dashboard/wishlist',
        //   element: <Wishlist></Wishlist>
        // },
        {
          path: '/dashboard/myBook',
          element: <PrivateRoute><MyBook></MyBook></PrivateRoute>
        },
        {
          path: '/dashboard/mywishlist',
          element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
        },
        {
          path: '/dashboard/myAssign',
          element: <PrivateRoute><MyAssignedTours></MyAssignedTours></PrivateRoute>
        },
         

//         // admin only routes
//         {
//           path: 'adminHome',
//           element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
//         },
//         {
//           path: 'addItems',
//           element: <AdminRoute><AddItems></AddItems></AdminRoute>
//         },
//         {
//           path: 'manageItems',
//           element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
//         },
//         {
//           path: 'updateItem/:id',
//           element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
//           loader: ({params}) => fetch(`https://bistro-boss-server-seven-sage.vercel.app/menu/${params.id}`)
//         },
        {
          path: 'users',
          element:<AllUsers></AllUsers>
        }

      ]
    }
  ]);