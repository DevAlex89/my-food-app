import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import BusinessLogin from "../Pages/BusinessLogIn";

const PrivateRoute = () => {
    const {currentUser} = useAuthContext()
    return currentUser ? <Outlet /> : <BusinessLogin/>
}
export default PrivateRoute;