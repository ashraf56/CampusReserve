import axios from 'axios';
import React, { useContext,  } from 'react';
import { AuthService } from '../Auths/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Profile = () => {


    let {user}=useContext(AuthService)
let url=`https://campusreserve-server.onrender.com/alluser/${user?.email}`
    let {data:mydata=[],isLoading,refetch}=useQuery( 
        ['alluser'],
       async()=>{
            let res= await axios.get(url)
            
            return res.data
            
                })
               

const { register, formState: { errors }, handleSubmit ,reset ,watch } = useForm();
const onSubmit = data => {
  
console.log(data.user);
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,

      }).then((result) => {
       if (result.isConfirmed) {
    fetch(`https://campusreserve-server.onrender.com/Oneuser/${user?.email}`,{
  method:"PUT",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(data)
})
.then(res=> res.json())
.then(data=>{
  console.log(data);
  if (data.modifiedCount>0) {
    Swal.fire('Saved!', '', 'success')
  }
})
      }
          else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        } 

      })

}



    return (
        <div>
        {
            mydata.map(singleus=>(
<div className='m-14 shadow-xl rounded-md lg:flex ' key={singleus._id}>


<div className='w-full lg:w-7/12 ' style={{backgroundImage:`url('https://cdni.iconscout.com/illustration/premium/thumb/update-system-2557432-2140062.png')`, backgroundRepeat:'no-repeat' }}>
        

      
        </div>         


<div className='w-full lg:w-5/12 '>
      <div className='card w-full   rounded-none '>
<form className='card-body ' onSubmit={handleSubmit(onSubmit)} >
<div className='form-control'>
    <label htmlFor="" className='label'>
        <span className='label-text '>Name</span>
    </label>
<input type="text" placeholder="Type here" {...register('name')} className="input  input-bordered max-w-lg" defaultValue={singleus.name}  />
</div>
<div className='form-control'>
    <label htmlFor="" className='label'>
        <span className='label-text '>Email</span>
    </label>
<input type="email" placeholder="Type here"  className="input  input-bordered max-w-lg" defaultValue={singleus.email} readOnly />
</div>

<div className='form-control'>
    <label htmlFor="" className='label'>
        <span className='label-text'>Adress</span>
    </label>
<input type="text" placeholder="N/A" {...register('adress')} className="input w-full input-bordered max-w-lg" defaultValue={singleus.adress}  />
</div>
<div className='form-control'>
    <label htmlFor="" className='label'>
        <span className='label-text'>Photo</span>
    </label>
<input type="text" placeholder="N/A" {...register('photoURL')} className="input w-full input-bordered max-w-lg" defaultValue={singleus.photoURL}  />
</div>
<div className='form-control'>
    <label htmlFor="" className='label'>
        <span className='label-text'>Institute</span>
    </label>
<input type="text" placeholder="N/A"  {...register('institute')}  className="input w-full input-bordered max-w-lg" defaultValue={singleus.institute}  />
</div>

<div className='py-5 '>
<button className='btn btn-info md:w-full  '>
<span className='text-white'  >Save Change</span>
</button>
</div>

</form>

                </div>

</div>

   
</div>
               
            ))
        } 
        </div>
    );
};

export default Profile;