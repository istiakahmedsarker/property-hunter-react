
import useAuth from '../Hooks/useAuth';
import useMember from '../Hooks/useMember';
import { Navigate, useLocation } from 'react-router-dom';

const MemberRoute = ({children}) => {
    const {user,loading} = useAuth()
    const isMember = useMember()
    const location = useLocation()
    
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isMember){
        return children
    }

    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default MemberRoute;