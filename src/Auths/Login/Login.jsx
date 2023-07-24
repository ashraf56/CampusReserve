import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

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
            <Link to={'/signup'}>Create Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Log IN</button>
        </div>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;