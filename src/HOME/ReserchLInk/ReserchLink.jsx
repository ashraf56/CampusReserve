import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const ReserchLink = () => {
    let {data:reserchlink=[],isLoading,refetch}=useQuery( 
        ['college'],
       async()=>{
            let res= await axios.get(`https://campusreserve-server.onrender.com/college`)
            return res.data
            
                })

    if (isLoading) {
   return <div className='text-center'><span className="loading loading-infinity loading-lg"></span></div>
  }


    return (
        <div className='my-12 p-12  bg-base-200'>
          <h1 className='md:text-4xl uppercase text-center font-extrabold pt-20'>Recommended Research </h1>
          <p className=' text-center text-lg py-5 pb-8 px-4'>Exploring the Frontiers of Knowledge: In-Depth Research Spotlights.Unveiling the Latest Breakthroughs: Illuminating Innovations and Advancements Across Diverse Disciplines</p>
          <div className='grid md:grid-cols-2 gap-3 mx-auto'>
          {
reserchlink.map(rl=>(
<>
<div className="card   md:w-full bg-gray-800 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{rl.researchWorks[0].researchName} </h2>
    <p>{rl.researchWorks[0].researchDetails}</p>
      <p > <a className='btn ' href={rl.researchWorks[0].researchLink} > View Detail  </a> </p>
   
  </div>
</div>

</>

))
            }
          </div>
           
        </div>
    );
};

export default ReserchLink;