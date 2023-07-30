import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Login = () => {


    let navigation=useNavigate()
    let {user,Login,googleSignin}=useContext(AuthService)
        const { register, formState: { errors }, handleSubmit ,reset ,watch } = useForm();
        const onSubmit = data => {
            console.log(data);
           Login(data.email,data.password)
            .then((userCredential) => {
                const user = userCredential.user;
              console.log(user);
              navigation('/')
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });

        }

        let GOOglelogin=()=>{
          googleSignin()
          .then((result) => {
        
            const user = result.user;
            let info={name:user.displayName , email:user.email, photoURL:user.photoURL ,adress:'' , Institute:'' }
        
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
                    position: 'center',
                    icon: 'success',
                    title: 'Account Created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
                navigation('/')
              })
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        
          });
        
        }

    return (
        <div>
                      <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
<img src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=740&t=st=1690212706~exp=1690213306~hmac=58ee92dfb480582124a9ffbc7e6fb84c908e0d4779af614f2d3f64a4d857e806" alt="" srcset="" />

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

    <form className="card-body"  onSubmit={handleSubmit(onSubmit)}>
       
    

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
            <Link to={'/signup'} className="label-text-alt link link-hover">Create Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn ">Log IN</button>
        </div>
      </form>
      
      <div className='text-center mb-5 '>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={GOOglelogin} >G</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;