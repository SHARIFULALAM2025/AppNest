import React from 'react';
import Banner from './Banner';
import Review from './Review';
import Trending from './Trending';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <Trending></Trending>

        </div>
    );
};

export default Home;