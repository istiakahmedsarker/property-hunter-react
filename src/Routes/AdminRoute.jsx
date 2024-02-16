
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const isAdmin = useAdmin()
    const location = useLocation()

    // console.log(isAdmin)
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;