import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import LoadingSpinner from "../Shared/LoadingSpinner";


const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location =useLocation();

    if(loading){
    return <LoadingSpinner/>  
}

    if(!user){
        return <Navigate to={"/login"} state={location?.pathname || '/'}></Navigate>

    }
    return (
        <div >
             {/* <Helmet><title>Luxary State | view property</title></Helmet> */}
            {children}
        </div>
    );
};

export default PrivateRoute;