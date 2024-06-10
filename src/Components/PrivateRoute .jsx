import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = localStorage.getItem('username');

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
