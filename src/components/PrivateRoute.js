import React from "react";
import { Route,  Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import BusinessLogin from "../Pages/BusinessLogIn";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useAuthContext()
    return currentUser ? <Outlet /> : <BusinessLogin/>
}
export default PrivateRoute;