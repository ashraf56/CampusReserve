import React, { useContext } from 'react';
import { AuthService } from '../Auths/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
    let {user ,Loading}=useContext(AuthService)

    if (Loading) {
        return <div className='text-center'><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (user) {
        return  children
    }
    
        return <Navigate to='/login' replace></Navigate>
    };


export default Protected;