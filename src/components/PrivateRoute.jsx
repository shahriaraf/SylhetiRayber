import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * A wrapper for routes that require authentication.
 * If the user is authenticated (has a token), it renders the child component.
 * If not, it redirects the user to the login page, saving the location they
 * were trying to access so they can be redirected back after logging in.
 */
const PrivateRoute = ({ children }) => {
    // 1. Check if the user is authenticated
    const isAuthenticated = !!localStorage.getItem('token');
    
    // 2. Get the current location to redirect back to it after login
    const location = useLocation();

    // 3. If not authenticated, redirect to login page
    if (!isAuthenticated) {
        // The `state` prop passes the original location to the login route.
        // The `replace` prop prevents the user from going "back" to the protected
        // route after being redirected to login, avoiding a redirect loop.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // 4. If authenticated, render the component they were trying to access
    return children;
};

export default PrivateRoute;