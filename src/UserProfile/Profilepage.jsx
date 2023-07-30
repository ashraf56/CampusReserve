import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from '../Auths/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';

const Profilepage = () => {


    let {user}=useContext(AuthService)
    let url=`http://localhost:3000/alluser/${user?.email}`
        let {data:mydata=[],refetch}=useQuery( 
            ['alluser'],
           async()=>{
                let res= await axios.get(url)
                
                return res.data
                
                    })


    return (
        <div>
  {
    mydata.map(md=>(

     <div>

<div class="flex items-center h-screen w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
    <div className="avatar ">
  <div className="w-24 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={md.photoURL}  alt="Movie"/>

  </div>
</div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">john@exmaple.com</td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
            </div>

        </div>
    </div>
</div>

</div>





       <div className="card card-side w-full bg-base-100 shadow-xl  ">
 
 
 
    
 
      <div className="card-body ">
    <h2 className="card-title">{md.name}</h2>
    <p>adress: {md.adress}</p>
    <p>institute: {md.institute}</p> 
    <p>{md.email}</p> 
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={'/profile'} >Update Now</Link></button>
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