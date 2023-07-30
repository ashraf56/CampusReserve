import axios from 'axios';
import React, { useContext } from 'react';
import { AuthService } from '../../Auths/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const CollegeCard = () => {

    let {user}=useContext(AuthService)
    let {data:clgdata=[],refetch}=useQuery( 
        ['allcollege'],
       async()=>{
            let res= await axios.get(`https://campusreserve-server.onrender.com/allcollege`)
            return res.data
            
                })

    return (
        <div className='my-12'>
<h1 className='md:text-4xl uppercase text-center font-extrabold pt-20'>Elite Institutions of Learning</h1>
<p className=' text-center text-md py-5 pb-8 px-4'>
Institutions form the backbone of society, providing essential structures that govern, educate, and support communities on various levels. Ranging from governmental bodies and educational establishments to non-profit organizations and research centers, institutions play a vital role in shaping our collective future.</p>
            <div className='grid justify-center gap-y-3 lg:grid-cols-2 xl:grid-cols-3'>
                {
                    clgdata.map(clgs=> (
<div className="card md:w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={clgs.collegeImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{clgs.collegeName}</h2>
    <p>{clgs.researchHistory}</p>
    <h4 className='font-bold'>Admission Date </h4>

            
<div className='grid grid-cols-1 gap-y-3'>

  <div className="badge  ">
  <p><span className='text-red-700 font-semibold uppercase'> Fall:</span> {clgs.admissionDates?.fall}</p>
  
  </div> 
  <div className="badge  ">
  <p> <span className='text-red-700 font-semibold uppercase'> spring:</span> {clgs.admissionDates?.spring}</p>
  
  </div> 
<div className="badge ">
 
<p> <span className='text-red-700 font-semibold uppercase'> summer:</span>{clgs.admissionDates?.summer}</p>
</div>
 </div> 

<div className='w-full'>
     <h1 className='font-bold '>Events</h1>
     <ul className=" list-decimal rounded-box">
     
  <li><a>{clgs?.events ? clgs?.events[0]:''}</a></li>
  <li><a>{clgs?.events ? clgs?.events[1]:''}</a></li>
  <li><a>{clgs?.events ? clgs?.events[2]:''}</a></li></ul>
</div>

<div>
<h1 className=" font-bold uppercase"> Top sports</h1>
      <ul className="steps steps-horizontal  w-full rounded-box">
  <li  className="step step-primary  "><a>{clgs.sports?.categories[0]}</a></li>
  <li  className="step  step-warning"><a>{clgs.sports?.categories[1]}</a></li>
  <li  className="step step-success  "><a>{clgs.sports?.categories[2]}</a></li>

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