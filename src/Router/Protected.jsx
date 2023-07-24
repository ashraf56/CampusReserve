import React, { useContext } from 'react';
import { AuthService } from '../Auths/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
    let {user ,Loading}=useContext(AuthService)

    if (Loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return  children
    }
    
        return <Navigate to='/login' replace></Navigate>
    };


export default Protected;