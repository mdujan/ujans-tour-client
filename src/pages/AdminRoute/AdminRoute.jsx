import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useRole from "../../hook/useRole";


const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [role,isLoading ] = useRole();
    const location = useLocation();

    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (role==='admin' && user   ) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;