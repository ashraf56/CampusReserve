import React from 'react';
import Navber from './HOME/Navber/Navber';
import Home from './HOME/Home';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div className='container mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Body;