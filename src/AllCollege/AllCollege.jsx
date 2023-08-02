import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const AllCollege = () => {


  let {data:Col=[],isLoading,refetch}=useQuery( 
      ['college'],
     async()=>{
          let res= await axios.get(`https://campusreserve-server.onrender.com/college`)
          return res.data
          
              })
              if (isLoading) {
                return <div className='text-center'><span className="loading loading-infinity loading-lg"></span></div>
              
              }

//let [Col,setCol]=useState([])
// useEffect(()=>{
// fetch('https://campusreserve-server.onrender.com/college').then(res=> res.json())
// .then(data => {
//   setCol(data)
// })


// },[])



    return (
        <div>
            <div className='grid md:grid-cols-1 md:mx-auto lg:grid-cols-3 m-6 gap-3'>
        {
        Col.map(clg => (
          <div key={clg.collegeId} className="card card-compact w-96 bg-base-100 shadow-xl h-full">

          <div className="card-body">
            <div>
              <img src={clg.collegeImage} alt="" srcset="" />
            </div>
            <h2 className="card-title">{clg.collegeName}</h2>
            <h4 className='font-bold'>Admission Date </h4>

            
           <div className='grid grid-cols-1 gap-y-3'>

             <div className="badge badge-outline ">
             <p><span className='text-red-700 font-semibold uppercase'> Fall:</span> {clg.admissionDates.fall}</p>
             
             </div> 
             <div className="badge badge-outline ">
             <p> <span className='text-red-700 font-semibold uppercase'> spring:</span> {clg.admissionDates.spring}</p>
             
             </div> 
           <div className="badge badge-outline">
            
           <p> <span className='text-red-700 font-semibold uppercase'> summer:</span>{clg.admissionDates.summer}</p>
           </div>
            </div> 

            <div>
              <p> <div className="rating rating-xs">
 
 
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>  {clg.rating}</p>
            </div>

            <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-title">Total Research Works</div>
    <div className="stat-value">{clg.researchWorks.length}</div>
  </div>
  
</div>

            <div className="card-actions justify-end">
              <button className="btn btn-outline  "  >
                <Link to={`/college/${clg._id}`}>Details
                </Link>
                </button>
            </div>
          </div>
        </div>

        ))
        }

            </div>
        </div>
    );
};

export default AllCollege;