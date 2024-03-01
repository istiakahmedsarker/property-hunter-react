import useUserRole from '../Hooks/useUserRole';
import { Navigate, useLocation } from 'react-router-dom';

const ModeratorRoute = ({ children }) => {
    const userRole = useUserRole();
    const location = useLocation()

    // console.log(isAdmin)
    if(userRole === 'moderator' || userRole === 'admin'){
        return children
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default ModeratorRoute;