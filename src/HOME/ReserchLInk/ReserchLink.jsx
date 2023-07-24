import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const ReserchLink = () => {
    let {data:reserchlink=[],refetch}=useQuery( 
        ['allcollege'],
       async()=>{
            let res= await axios.get(`https://campusreserve-server.onrender.com/college`)
            return res.data
            
                })
    return (
        <div className='my-12 p-12  bg-base-200'>
          <h1 className='md:text-4xl uppercase text-center font-extrabold py-20'>Recommended Research Spotlight</h1>
          <div className='grid md:grid-cols-2 gap-3 mx-auto'>
          {
reserchlink.map(rl=>(
<>
<div className="card   md:w-full bg-yellow-950 text-primary-content">
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