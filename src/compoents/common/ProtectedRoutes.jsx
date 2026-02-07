import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({children}) {

    const {isLoggedIn} = useAuth();

    if(!isLoggedIn){
        return <Navigate to='/login'/>
    }
    return children;
  
}

export default ProtectedRoutes