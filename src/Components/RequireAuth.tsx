import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from '../Services/store';

export const RequireAuth = () => {
    const isLogged = useSelector((state: RootState) => state.userList.user.isLogged);
    const location = useLocation();
    return(
        isLogged ? <Outlet /> : <Navigate to='/signin' state={{from: location}} replace />
    )
}