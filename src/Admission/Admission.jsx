import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthService } from '../Auths/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Apply from './Apply';

const Admission = () => {
    let {data:allclgdata=[],isLoading,refetch}=useQuery( 
        ['college'],
       async()=>{
            let res= await axios.get(`https://campusreserve-server.onrender.com/college`)
            return res.data
            
                })
                if (isLoading) {
                  return <div className='text-center'><span className="loading loading-infinity loading-lg"></span></div>
                
                }
    return (
        <div>
           <div className='mx-auto justify-center mb-5'>
           {
            allclgdata.map(cgd=> (<>  
<div className='mx-auto'>
    
    
<div className="card w-4/5 bg-base-100 shadow-xl my-3 mx-auto">
  <div className="card-body">
    <h2 className='card-title font-semibold'>{cgd.collegeName}</h2>
    <p>{cgd.admissionProcess}</p>
    <div className="card-actions justify-end items-center">

      <button className="btn ">
    <Link to={`/apply/${cgd._id}`}>   Apply now</Link>
      </button>
    </div>
    
  </div>
</div>
    
    
    </div>

    </>
            ))
           }
           </div>
        </div>
    );
};

export default Admission;