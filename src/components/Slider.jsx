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
      <div className="lg:h-[650px] relative md:h-[500px]">
        <img cla src="https://i.ibb.co.com/wzzTKZK/woman-8137977-1920.jpg" alt="Slide 1" />
        <p className="legend"> Advanced Tennis Racket</p>
        <h3 className="text-3xl p-6 text-white  backdrop-blur-2xl   font-bold absolute md:w-[500px] top-1/2 right-10">Ace Your Game with Our Lightweight Tennis Racket</h3>
      </div>
      <div className="lg:h-[650px] relative md:h-[500px]" >
        <img src="https://i.ibb.co.com/p0RwyYT/front-view-man-athleisure-holding-basketball.jpg" alt="Slide 2" />
        <p className="legend"> All-Weather Basketball</p>
        <h3 className="text-3xl p-6 text-white  backdrop-blur-2xl   font-bold absolute md:w-[500px] top-1/2 right-10">Shoot Hoops Anytime with Our All-Weather Basketball</h3>
      </div>
      <div className="lg:h-[650px] relative md:h-[500px]">
        <img  src="https://i.ibb.co.com/9VFsQkb/pexels-annushka-ahuja-7991653.jpg" alt="Slide 3" />
        <p className="legend">Multifunctional Gym Set</p>
        <h3 className="text-3xl p-6 text-white  backdrop-blur-3xl   font-bold absolute md:w-[500px] top-1/2 right-10">Transform Your Home Workouts with Our Multifunctional Gym Set</h3>
      </div>
      <div className="lg:h-[650px] relative md:h-[500px]">
        <img  src="https://i.ibb.co.com/BB6zdQm/pexels-runffwpu-5687405.jpg" alt="Slide 4" />
        <p className="legend">Outdoor Adventure Gear Set</p>
        <h3 className="text-3xl p-6 text-white  backdrop-blur-2xl   font-bold absolute md:w-[500px] top-1/2 right-10">Gear Up for the Great Outdoors with Our Adventure Set</h3>
      </div>
      <div className="lg:h-[650px] md:h-[500px] relative">
        <img  src="https://i.ibb.co.com/bdWkzfc/football-5441486-1920.jpg" alt="Slide 5" />
        <p className="legend">High-Performance Running Shoes</p>
        <h3 className="text-3xl p-6 text-white  backdrop-blur-2xl   font-bold absolute md:w-[500px] top-1/2 right-10">Experience Speed and Comfort with High-Performance Running Shoes</h3>
      </div>
      <div className="lg:h-[650px] relative md:h-[500px]">
        <img  src="https://i.ibb.co.com/DMSg4pn/baseball-4323387-1920.jpg" alt="Slide 6" />
        <p className="legend">Premium Baseball Bat</p>
        <h3 className="text-3xl p-6 text-white  backdrop-blur-2xl   font-bold absolute md:w-[500px] top-1/2 right-10">Swing for the Fences with Our Premium Aluminum Baseball Bat</h3>
      </div>
    </Carousel>
    );
};

export default Slider;