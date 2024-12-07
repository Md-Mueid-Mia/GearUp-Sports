import React from "react";
import { Slide, Zoom } from 'react-awesome-reveal';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "John Doe", feedback: "Amazing quality sports equipment!" },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Fast delivery and great customer service.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      feedback: "The customization options were perfect for my needs!",
    },
    {
      id: 4,
      name: "Emily Davis",
      feedback: "Great variety of products at reasonable prices!",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <Slide
      direction="right"
      duration={1500} // Animation duration (in milliseconds)
      triggerOnce>
    
      <h2 className="text-2xl font-bold text-center mb-4">
        What Our <span className="text-teal-500">Customers Say</span>
      </h2>
      </Slide>
      <div className="container mx-auto flex flex-col md:flex-row justify-center flex-wrap gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-4 rounded shadow text-center w-full md:w-1/3"
          >
            <Zoom
              delay={300} // Delay animation by 500ms
              duration={1500} // Animation duration (in milliseconds)
              triggerOnce
            >
              <p>"{testimonial.feedback}"</p>
            </Zoom>
            <Zoom
              delay={600} // Delay animation by 500ms
              duration={1500} // Animation duration (in milliseconds)
              triggerOnce
            >
              <p className="font-bold mt-2">- {testimonial.name}</p>
            </Zoom>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
