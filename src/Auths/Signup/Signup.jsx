import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthService } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
let navigation=useNavigate()
let {user,AllUser,googleSignin,updateUser}=useContext(AuthService)
    const { register, formState: { errors }, handleSubmit ,reset ,watch } = useForm();
    const onSubmit = data => {
        console.log(data);

AllUser(data.email,data.password)
.then((userCredential) => {

    const user = userCredential.user;
   updateUser(data.displayName , data.photoURL)
   .then(() => {
    let info={name:data.displayName , email:data.email , photoURL:data.photoURL, adress:'' , Institute:''}
    
              fetch('http://localhost:3000/alluser',{
                method:"POST"
                ,headers:{
                  'content-type': 'application/json'
                },
                body:JSON.stringify(info)
              })
              .then(r=> r.json()).then(data=> {
                if (data.insertedId) {
                  Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Account Created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              })
  })
  console.log(user);
navigation('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   seterr(errorMessage)
  });


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form className="card-body"  onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name"  {...register("displayName")}  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Url"  {...register("photoURL")}  className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email",{required: true})  }className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password"  {...register("password",{required: true ,minLength:6 })  } className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;