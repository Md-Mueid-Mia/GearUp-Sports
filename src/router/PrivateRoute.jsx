import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
     if(loading){
        return null;
    }
   
    if(user && user?.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/signIn'}></Navigate>
    );
};

export default PrivateRoute;