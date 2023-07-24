import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailCollege = () => {
  let ColInfo =useLoaderData()
 


    return (
        <div className='mb-12'>



 {
  ColInfo.map(cg=> (

    <div>
<div className="hero min-h-screen" style={{backgroundImage: `url(${cg.collegeImage})`, backgroundSize:"cover"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{cg.collegeName}</h1>
      <p className='font-semibold text-xl'>{cg.researchHistory}</p>
  
    </div>
  </div>
</div>

<div className='place-items-center my-5'>

    <div className="stats stats-vertical md:stats-horizontal  shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Explore Fall Admissions</div>
    <div className="stat-value">FALL</div>
    <div className="stat-desc">From {cg.admissionDates.fall}</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Join Mid-Year Admissions</div>
    <div className="stat-value text-secondary">spring</div>
    <div className="stat-desc text-secondary">{cg.admissionDates.spring}</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Enroll in Summer Admissions</div>
    <div className="stat-value">summer</div>
    <div className="stat-desc">{cg.admissionDates.summer}</div>
  </div>
  
</div>
</div>




<div className="card  bg-base-100">
  <div className="card-body">  
   <h4 className='uppercase font-semibold menu-title '>admission Process</h4>
    <p className='menu-title text-black' >{cg.admissionProcess}</p>
   <div>
   <h1 className='font-bold menu-title'>Events</h1>
    <ul className=" px-10   ">
  <li><a>{cg.events[0]}</a></li>
  <li><a>{cg.events[1]}</a></li>
  <li><a>{cg.events[2]}</a></li>
</ul>

   </div>

  </div>
</div>


<div className="card w-full bg-base-200 ">
  <div className="card-body">
    <h2 className="card-title uppercase text-center text-2xl">research Works</h2>
    <span className='uppercase '>researchName </span> 
    <p className='text-base font-bold md:text-5xl'> {cg.researchWorks[0].researchName}</p>
    <span className='uppercase '>researchLink</span>
    <p className='link link-hover overflow-x-auto'>  {cg.researchWorks[0].researchLink}</p><span className='uppercase '>researchDetails</span>
    <p className='text-base md:text-xl'> {cg.researchWorks[0].researchDetails}</p>
   
  </div>
</div>





<div>

<div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
   <div >
   <img src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?w=740&t=st=1690115452~exp=1690116052~hmac=a1322629dd2ac82af76d5d599f0997a0f818cc4ecf59ee2db951082e71677251" className=" w-1/2 md:max-w-sm rounded-lg " />
   </div>
    <div className='w-9/12 text-center'>
      <h1 className="text-5xl font-bold uppercase"> All sports</h1>
      <ul className="steps steps-vertical  w-56 rounded-box">
  <li  className="step step-primary  "><a>{cg.sports.categories[0]}</a></li>
  <li  className="step  step-warning"><a>{cg.sports.categories[1]}</a></li>
  <li  className="step step-success  "><a>{cg.sports.categories[2]}</a></li>
  <li  className="step step-secondary "><a>{cg.sports.categories[3]}</a></li>
  <li  className="step step-primary "><a>{cg.sports.categories[4]}</a></li>
</ul>


    </div>
  </div>
</div>

</div>

    </div>




  ))
 }


        </div>
    );
};

export default DetailCollege;