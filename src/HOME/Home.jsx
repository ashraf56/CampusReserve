import React from 'react';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import CollegeCard from './CollegeCard/CollegeCard';
import ReserchLink from './ReserchLInk/ReserchLink';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CollegeCard></CollegeCard>
            <ReserchLink></ReserchLink>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;