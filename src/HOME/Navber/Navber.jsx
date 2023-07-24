import React, { useContext, useEffect, useState } from 'react';
import imgs from '../../assets/education.png'
import { Link } from 'react-router-dom';
import { AuthService } from '../../Auths/AuthProvider/AuthProvider';
const Navber = () => {
  let {user,Signout}=useContext(AuthService);

  let Logout=()=>{
    Signout()
    .then(() => {

    }).catch((error) => {
    });
  }

    return (
        <div>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost xl:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/college'>College</Link>
        </li>
        <li>
          <Link to='/admission' >Admission</Link>
        </li>
        <li>
          <Link to='/Myclg' >My College</Link>
        </li>
<li>
        { user?.displayName && <Link to={`/profile`} >{user.displayName}</Link> }
        </li>

        <li>
         { user?  <>
          <Link onClick={Logout} >Log Out</Link>
         </>   : <Link to='/login' >Log IN</Link>}
        </li>
        <li>
        <input type="text" placeholder="Serch here"  className="input input-bordered input-sm input-error w-1/2 max-w-xs" />
        </li>
              </ul>
    </div>


    <a className="btn btn-ghost font-extrabold md:text-xl uppercase  text-xs "> <img src={imgs} className='md:w-8 w-4' /> CampusReserve</a>
  </div>
  <div className="navbar-center hidden xl:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/college'>College</Link>
        </li>
        <li>
          <Link to='/admission' >Admission</Link>
        </li>
        <li>
          <Link to='/Myclgt' >My College</Link>
        </li>
<li>
        { user?.displayName && <Link to={`/profile`} >{user.displayName}</Link> }
        </li>

        <li>
         { user?  <>
          <Link onClick={Logout} >Log Out</Link>
         </>   : <Link to='/login' >Log IN</Link>}
        </li>
        
    </ul>
  </div>
  <div className="navbar-end">
  <input type="text" placeholder=" Serch here"  className="input input-bordered input-sm  w-1/2 hidden md:block md:max-w-xs" />
  </div>
</div>  
        </div>
    );
};

export default Navber;