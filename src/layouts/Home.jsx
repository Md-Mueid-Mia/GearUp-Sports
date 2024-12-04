import React from 'react';
import Slider from '../components/Slider';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>GearUp Sports || Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Slider/>

        </div>
    );
};

export default Home;