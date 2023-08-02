import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from '../Auths/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';
import { FaLocationDot, FaSchool , FaEnvelope} from "react-icons/fa6";

const Profilepage = () => {


    let {user}=useContext(AuthService)
    let url=`https://campusreserve-server.onrender.com/alluser/${user?.email}`
        let {data:mydata=[],isLoading,refetch}=useQuery( 
            ['alluser'],
           async()=>{
                let res= await axios.get(url)
                
                return res.data
                
                    })
                    if (isLoading) {
                      return <div className='text-center'><span className="loading loading-infinity loading-lg"></span></div>
                    
                    }

    return (
        <div>
  {
    mydata.map(md=>(

     <div>




<div className="hero min-h-screen card shadow-md bg-gradient-to-r from-[#456fe8] to-[#19b0ec] ">
  <div className="hero-content flex-col w-full lg:flex-row-reverse">
   
    <img src={md.photoURL} className='lg:rounded-s-full w-3/5'  />
    
    <div className='w-3/5 card-body text-white'>
      <h1 className="text-5xl font-bold">{md.name}</h1>
      <p className='pt-6 flex text-lg uppercase '> <span className='text-md pe-2'><FaLocationDot/>  </span>     {md.adress}</p>
      <p className=' py-2 flex text-lg uppercase '> <span className='text-md pe-2'><FaEnvelope/>  </span>     {md.email}</p>
      <p className=' pb-6 flex text-lg uppercase '> <span className='text-md pe-2'><FaSchool/>  </span>     {md.institute}</p>
      <button className="btn"><Link to={'/profile'} >Update Now</Link></button>
    </div>
  </div>
</div>
            
       
     </div>



  
        
     
        
     
        
           
        

    ))
  }
        </div>
    );
};

export default Profilepage;