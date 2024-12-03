import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    if(loading){
        return <div><span className="loading loading-bars loading-lg"></span></div>;
    }
    if (!user) {
        return <Navigate to="/login" replace={true} />
    }
    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default PrivateRoute;