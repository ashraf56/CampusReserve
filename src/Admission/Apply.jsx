import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthService } from '../Auths/AuthProvider/AuthProvider';

const Apply = () => {
    
    let addmissionInfo =useLoaderData()

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
                    
    const { register, formState: { errors }, handleSubmit ,reset ,watch } = useForm();
    const onSubmit = data => {


 let userdata={name:data.collegeName , candidateName: data.candidateName, review: addmissionInfo[0]?.reviews[0]?.review ,  subject:data.subject, phone: data.phone , adress:data.adress , photoURL:data.photoURL , dateOfBirth:data.date , candidateEmail:data.email , userMail:mydata[0]?.email }

fetch('https://campusreserve-server.onrender.com/mycollege',{
    method:"POST",
    headers:{
        'content-type': 'application/json'            
    },
      body:JSON.stringify(userdata)
})
.then(res=>res.json()) 
.then(UserInfo=>{
    console.log(UserInfo);
    if (UserInfo.insertedId) {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Submitted',
            showConfirmButton: false,
            timer: 1500
          })
         
    } 
    reset();
})

    } 
    return (
        <div >
           {
            addmissionInfo.map(info => (

                <div className='card w-full items-center rounded-none '>
                <form className='card-body ' onSubmit={handleSubmit(onSubmit)} >
               
                <div className='form-control'>
                    <label htmlFor="" className='label'>
                        <span className='label-text '>Candidate Name</span>
                    </label>
                <input type="text" placeholder="Type here" {...register('candidateName')} className="input  input-bordered max-w-lg"  required  />
                </div>
                <div className='form-control'>
                    <label htmlFor="" className='label'>
                        <span className='label-text '>Subject</span>
                    </label>
                <input type="text" placeholder="Type here" {...register('subject',{required: true})} className="input  input-bordered max-w-lg"  required  />
                </div>
                <div className='form-control'>
                    <label htmlFor="" className='label'>
                        <span className='label-text '>College Name</span>
                    </label>
                <input type="text" placeholder="Type here" {...register('collegeName')} className="input  input-bordered max-w-lg"  defaultValue={info.collegeName}  />
                </div>
                <div className='form-control'>
                    <label htmlFor="" className='label'>
                        <span className='label-text '> Candidate Phone</span>
                    </label>
                <input type="text" placeholder="Type here" {...register('phone' )} className="input  input-bordered max-w-lg"  maxLength={11}  required  />
                </div>
                <div className='form-control'>
                    <label htmlFor="" className='label'>
                        <span className='label-text '>Candidate Email</span>
                    </label>
                <input type="email" placeholder="Type here" {...register('email')} className="input  input-bordered max-w-lg" required />
                </div>
                
                <div className='form-control'>
                    <label htmlFor="" className='label'>
                        <span className='label-text'>Adress</span>
                    </label>
                <input type="text" placeholder="N/A" {...register('adress')} className="input w-full input-bordered max-w-lg"  required />
                </div>
                <div className='form-control'>
                    <label htmlFor="" className='label'>
                        <span className='label-text'>Photo</span>
                    </label>
                <input type="text" placeholder="N/A" {...register('photoURL')} className="input w-full input-bordered max-w-lg"  required />
                </div>
                <div className='form-control'>
                    <label htmlFor="" className='label'>
                        <span className='label-text'>date of birth</span>
                    </label>
                <input type="date" placeholder="N/A"  {...register('date')}  className="input w-full input-bordered max-w-lg" required  />
                </div>
                
                <div className='py-5 '>
                <button className='btn btn-info   '>
                <span className='text-white'  >Submit</span>
                </button>
                </div>
                
                </form>
                
                                </div>  
            ))
           } 
        </div>
    );
};

export default Apply;