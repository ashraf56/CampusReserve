import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthService } from '../Auths/AuthProvider/AuthProvider';

const useAlluser = () => {
    let {user}=useContext(AuthService)

    let {data:userdata=[],refetch}=useQuery( 
        ['alluser'],
       async()=>{
            let res= await axios.get(`http://localhost:3000/alluser`)
            
            return res.data
            
                })

            return [userdata,refetch];
      
};

export default useAlluser;