import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    
const location =useLocation()
    console.log("this is user",user);
    console.log("load",loading);

    // Show a loading indicator while loading
    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>;
    }

    // If the user is logged in, render the protected children
 if (user) {
        return children;
    }

    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login"  state={{from:location}} replace />;
};

export default PrivateRoute;
