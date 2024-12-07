import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { Slide, Zoom } from "react-awesome-reveal";

const categories = [
  {
    id: 1,
    name: "Team Sports",
    image: "https://i.ibb.co.com/R6mfsg2/Team-sports.jpg",
  },
  { id: 2, name: "Fitness", image: "https://i.ibb.co.com/6gmQ9zF/Fitness.jpg" },
  {
    id: 3,
    name: "Outdoor Sports",
    image: "https://i.ibb.co.com/9gczTc8/Outdoor-Sports.jpg",
  },
  {
    id: 4,
    name: "Water Sports",
    image: "https://i.ibb.co.com/SnV8YzN/Water-Sports.jpg",
  },
  {
    id: 5,
    name: "Racket Sports",
    image: "https://i.ibb.co.com/T03bQKR/Racket-Sports.jpg",
  },
  { id: 6, name: "Cycling", image: "https://i.ibb.co.com/7zP7Cpy/Cycling.jpg" },
  {
    id: 7,
    name: "Winter Sports",
    image: "https://i.ibb.co.com/Km8VnwB/Winter-Sports.jpg",
  },
  {
    id: 8,
    name: "Yoga & Wellness",
    image: "https://i.ibb.co.com/G5bwfGK/Yoga-Wellness.jpg",
  },
];

const SportsCategories = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update the `isMobile` state on window resize
  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth < 768);
  });
  return (
    <div>
      <div className="container mx-auto p-4">
        <Slide
          direction="right" // Slide up
          delay={500} // Delay animation by 500ms
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          <h2 className="text-2xl font-bold mb-4">Explore Categories</h2>
        </Slide>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={isMobile ? 1 : 3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <div className="">
            {categories.map((category) => (
              <SwiperSlide>
                <div
                  key={category.id}
                  className="rounded overflow-hidden shadow-lg"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <Zoom
                      delay={200} // Delay animation by 500ms
                      duration={1500} // Animation duration (in milliseconds)
                      triggerOnce
                    >
                      <h3 className="text-lg font-bold text-center">
                        {category.name}
                      </h3>
                    </Zoom>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default SportsCategories;
