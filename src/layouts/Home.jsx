import React from "react";
import Slider from "../components/Slider";
import { Helmet } from "react-helmet";
import SportsCategories from "../components/SportsCategories";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import ProductCards from "../components/ProductCards";
import { Bounce, Zoom, Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GearUp Sports || Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Slider />
      
      <SportsCategories />
      <ProductCards />
      <Testimonials />
      <AboutUs />
      
    </div>
  );
};

export default Home;
