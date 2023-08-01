import React, { useContext, useState } from 'react';
import { AuthService } from '../Auths/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';
import { FaAddressCard, FaBook, FaCalendar, FaMessage, FaPhone, FaUser } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';

const Mycollege = () => {
    let {user}=useContext(AuthService)
    let url=`https://campusreserve-server.onrender.com/mycollege/${user?.email}`
        let {data:mycollegedata=[],refetch}=useQuery( 
            ['mycollege'],
           async()=>{
                let res= await axios.get(url)
                
                return res.data
                
                    })
       

let addReview=(user)=>{

fetch(`https://campusreserve-server.onrender.com/mycollege/${user?.email}`,{
  method:"PATCH"
})
.then(res=> res.json())
.then(data=>{
  console.log(data);
})

}


                    const [showInputField, setShowInputField] = useState(false);
                    const toggleInputField = () => {
                      setShowInputField(!showInputField);
                    };

 const { register, formState: { errors }, handleSubmit ,reset ,watch } = useForm();
    const onSubmit = data => {
      console.log(data);
    }

    return (
        <div className='my-6'>

     <div >

     <div className="hero  card shadow-md bg-gradient-to-r from-[#456fe8] to-[#19b0ec] ">
  <div className="hero-content  flex-col">

    <div className='w-5/5 card-body text-white'>
      <h1 className="text-md md:text-5xl font-bold"> Admission Detail of  {mycollegedata[0]?.candidateName}</h1>
     
    </div>
  </div>
</div>
          
          {
            mycollegedata.map(myclg=>(

<>




<div className='mx-auto '>
   <div className="card w-full glass my-2">

  <div className="card-body">

  <p className='flex ' > <FaUser className='w-8' /> <span className='ps-2'>{myclg.name}</span></p>
    <p className='flex'><FaMessage className='w-8'/> <span className='ps-2'></span> {myclg.candidateEmail}</p>
    <p className='flex'> <FaCalendar className='w-8'/> <span className='ps-2'></span>{myclg.dateOfBirth}</p>
    <p className='flex'><FaPhone className='w-8'/><span className='ps-2'></span> {myclg.phone}</p>
    <p className='flex'><FaBook className='w-8'/> <span className='ps-2'></span>{myclg.subject}</p>
    <p className='flex'><FaAddressCard className='w-8'/> <span className='ps-1'></span>{myclg.adress}</p>
    <p className='py-3'><span className='font-bold'>Review:</span>{myclg.review}</p>
   
        <div className=" justify-start  ">
        <button className="btn btn-primary  w-4/6"  >Send</button>

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

export default Mycollege;