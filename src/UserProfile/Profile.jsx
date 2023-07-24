import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthService } from '../Auths/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';

const Profile = () => {

    let {user}=useContext(AuthService)
    let {data:mydata=[],refetch}=useQuery( 
        ['alluser'],
       async()=>{
            let res= await axios.get(`https://campusreserve-server.onrender.com/alluser/${user.email}`)
            return res.data
            
                })


        


    return (
        <div>
        {
            mydata.map(singleus=>{
<>
<h1>profile</h1>
 <p>{singleus.name}</p>
                <p>{singleus.email}</p>
</>
               
            })
        }
        </div>
    );
};

export default Profile;