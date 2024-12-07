import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 my-6">
      <div className="container mx-auto p-6 md:p-12">
        <div className="text-center mb-8">
          <Slide
            direction="right" // Slide up
            delay={300} // Delay animation by 500ms
            duration={1500} // Animation duration (in milliseconds)
            triggerOnce
          >
            <h2 className="text-4xl font-bold text-teal-500">About Us</h2>
          </Slide>
          <Slide
            direction="right" // Slide up
            delay={700} // Delay animation by 500ms
            duration={1500} // Animation duration (in milliseconds)
            triggerOnce
          >
            <p className="text-lg text-gray-600 mt-4">
              Empowering athletes and sports enthusiasts with premium-quality
              gear.
            </p>
          </Slide>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Content */}
          <div>
            <Slide
              direction="left"
              delay={900}
              duration={1500} // Animation duration (in milliseconds)
              triggerOnce
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to GearUp Sports
              </h3>
            </Slide>

            <Zoom
              delay={1500}
              duration={1500} // Animation duration (in milliseconds)
              triggerOnce
            >
              
            <p className="text-gray-600 leading-relaxed">
              At GearUp Sports, we are passionate about helping athletes excel
              in their journey. Whether you're a professional or a beginner, our
              collection of sports equipment and accessories is designed to
              support your goals. From high-performance gear to the latest
              trends in sports fashion, we have it all.
            </p>
            </Zoom>
            <Zoom
              delay={1500}
              duration={1500} // Animation duration (in milliseconds)
              triggerOnce
            >
              
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our mission is simple: to provide high-quality products,
              outstanding customer service, and a seamless shopping experience.
              With GearUp Sports, you're not just buying equipment; you're
              investing in your potential.
            </p>
            </Zoom>
          </div>

          {/* Right Section: Image */}
          <div className="relative">
         
            <img
              src="https://i.ibb.co.com/WVSyYXy/Sporting-Goods21-03-2024-06-47-02.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute top-0 left-0 bg-blue-600 bg-opacity-70 text-white p-4 rounded-br-lg">
              <h4 className="text-xl font-semibold">Trusted by Athletes</h4>
              <p>Thousands of satisfied customers worldwide.</p>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mt-12">
        <Slide
              direction="right"
              delay={100}
              duration={1500} // Animation duration (in milliseconds)
              triggerOnce
            >
              
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Why Choose GearUp Sports?
          </h3>
            </Slide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Zoom
              direction="right"
              delay={200}
              duration={1600} // Animation duration (in milliseconds)
              triggerOnce
            >
             
              <h4 className="text-xl font-semibold text-teal-500">
                Premium Quality
              </h4>
            </Zoom>
            <Zoom
              direction="right"
              delay={400}
              duration={1600} // Animation duration (in milliseconds)
              triggerOnce
            >
             
              <p className="text-gray-600 mt-2">
                All products are rigorously tested for durability and
                performance.
              </p>
            </Zoom>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Zoom
              direction="right"
              delay={200}
              duration={1600} // Animation duration (in milliseconds)
              triggerOnce
            >
             
              <h4 className="text-xl font-semibold text-teal-500">
                Global Shipping
              </h4>
            </Zoom>
            <Zoom
              direction="right"
              delay={400}
              duration={1600} // Animation duration (in milliseconds)
              triggerOnce
            >
             
              <p className="text-gray-600 mt-2">
                We deliver sports gear to your doorstep, anywhere in the world.
              </p>
            </Zoom>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Zoom
              direction="right"
              delay={200}
              duration={1600} // Animation duration (in milliseconds)
              triggerOnce
            >
             
             
              <h4 className="text-xl font-semibold text-teal-500">
                Expert Support
              </h4>
            </Zoom>
            <Zoom
              direction="right"
              delay={400}
              duration={1600} // Animation duration (in milliseconds)
              triggerOnce
            >
             
              <p className="text-gray-600 mt-2">
                Our dedicated team is here to assist you with any queries.
              </p>
            </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;