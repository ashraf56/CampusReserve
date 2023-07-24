import axios from 'axios';
import React, { useContext } from 'react';
import { AuthService } from '../../Auths/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const CollegeCard = () => {

    let {user}=useContext(AuthService)
    let {data:clgdata=[],refetch}=useQuery( 
        ['alluser'],
       async()=>{
            let res= await axios.get(`http://localhost:3000/allcollege`)
            return res.data
            
                })

    return (
        <div className='my-12'>
<h1 className='md:text-4xl uppercase text-center font-extrabold py-20'>Elite Institutions of Learning</h1>

            <div className='grid justify-center gap-y-3 md:grid-cols-3'>
                {
                    clgdata.map(clgs=> (
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={clgs.collegeImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{clgs.collegeName}</h2>
    <p>{clgs.researchHistory}</p>
    <h4 className='font-bold'>Admission Date </h4>

            
<div className='grid grid-cols-1 gap-y-3'>

  <div className="badge  ">
  <p><span className='text-red-700 font-semibold uppercase'> Fall:</span> {clgs.admissionDates.fall}</p>
  
  </div> 
  <div className="badge  ">
  <p> <span className='text-red-700 font-semibold uppercase'> spring:</span> {clgs.admissionDates.spring}</p>
  
  </div> 
<div className="badge ">
 
<p> <span className='text-red-700 font-semibold uppercase'> summer:</span>{clgs.admissionDates.summer}</p>
</div>
 </div> 

<div className='w-full'>
     <h1 className='font-bold '>Events</h1>
     <ul className=" list-decimal rounded-box">
     
  <li><a>{clgs.events[0]}</a></li>
  <li><a>{clgs.events[1]}</a></li>
  <li><a>{clgs.events[2]}</a></li></ul>
</div>

<div>
<h1 className=" font-bold uppercase"> Top sports</h1>
      <ul className="steps steps-horizontal  w-full rounded-box">
  <li  className="step step-primary  "><a>{clgs.sports.categories[0]}</a></li>
  <li  className="step  step-warning"><a>{clgs.sports.categories[1]}</a></li>
  <li  className="step step-success  "><a>{clgs.sports.categories[2]}</a></li>

</ul>

</div>
    <div className="card-actions justify-end">
    <Link to={`/college/${clgs._id}`} className='w-full text-center'>
        <button className="btn btn-wide ">Details</button>
                </Link>
      
    </div>
  </div>
</div>

                    ))
                }

            </div>
        </div>
    );
};

export default CollegeCard;