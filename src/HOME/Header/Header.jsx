import React from 'react';

const Header = () => {
    return (
        <div>
         

          
            <div className="hero min-h-screen rounded-3xl" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1583373834259-46cc92173cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)'}}>
  <div className="hero-overlay  bg-opacity-40 rounded-3xl"></div>
  <div className="hero-content text-center  text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">CampusReserve Book College Services</h1>
      <p className="mb-5">Welcome to Campus-Reserve, the ultimate platform designed to simplify your college experience! Whether you're a student, faculty member, or visitor, our user-friendly web application offers seamless access to a wide range of college services and facilities. </p>
      <button className="btn btn-wide">Explore</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Header;