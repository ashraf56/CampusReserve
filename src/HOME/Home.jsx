import React from 'react';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import CollegeCard from './CollegeCard/CollegeCard';
import ReserchLink from './ReserchLInk/ReserchLink';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CollegeCard></CollegeCard>
            <Gallery></Gallery>
            <ReserchLink></ReserchLink>
            <Review></Review>
        </div>
    );
};

export default Home;