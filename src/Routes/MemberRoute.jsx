
import useUserRole from '../Hooks/useUserRole';
import { Navigate, useLocation } from 'react-router-dom';

const MemberRoute = ({children}) => {
    const userRole = useUserRole();
    const location = useLocation()
    
    if(userRole === 'member' || userRole === 'admin' || userRole === 'moderator'){
        return children
    }

    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default MemberRoute;