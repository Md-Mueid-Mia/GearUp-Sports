import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
   
    return (
        <Carousel
      showArrows={true}
      autoPlay={true} 
      interval={3000} 
      infiniteLoop={true}
      stopOnHover={true} 
      showIndicators={true} 
      transitionTime={1000}
    >
      <div className="lg:h-[650px] md:h-[500px]">
        <img cla src="https://i.ibb.co.com/wzzTKZK/woman-8137977-1920.jpg" alt="Slide 1" />
        <p className="legend">Badminton</p>
      </div>
      <div className="lg:h-[650px] md:h-[500px]" >
        <img src="https://i.ibb.co.com/p0RwyYT/front-view-man-athleisure-holding-basketball.jpg" alt="Slide 2" />
        <p className="legend">Basket-Ball</p>
      </div>
      <div className="lg:h-[650px] md:h-[500px]">
        <img  src="https://i.ibb.co.com/9VFsQkb/pexels-annushka-ahuja-7991653.jpg" alt="Slide 3" />
        <p className="legend">kickboxing</p>
      </div>
      <div className="lg:h-[650px] md:h-[500px]">
        <img  src="https://i.ibb.co.com/BB6zdQm/pexels-runffwpu-5687405.jpg" alt="Slide 4" />
        <p className="legend">Cycling Race</p>
      </div>
      <div className="lg:h-[650px] md:h-[500px]">
        <img  src="https://i.ibb.co.com/bdWkzfc/football-5441486-1920.jpg" alt="Slide 5" />
        <p className="legend">Football</p>
      </div>
      <div className="lg:h-[650px] md:h-[500px]">
        <img  src="https://i.ibb.co.com/DMSg4pn/baseball-4323387-1920.jpg" alt="Slide 6" />
        <p className="legend">Baseball</p>
      </div>
    </Carousel>
    );
};

export default Slider;