import { useSelector } from 'react-redux';
//Lets import a component named Outlet from react redux dom, if there is user then we show the outlet else we navigate the user to sign in page, so lets import navigate as well, here we are importing navigate as a component, we are not importing useNavigate which is a hook
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
};