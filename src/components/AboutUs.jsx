import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 my-6">
      <div className="container mx-auto p-6 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-teal-500">About Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            Empowering athletes and sports enthusiasts with premium-quality gear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to GearUp Sports
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At GearUp Sports, we are passionate about helping athletes excel
              in their journey. Whether you're a professional or a beginner,
              our collection of sports equipment and accessories is designed to
              support your goals. From high-performance gear to the latest
              trends in sports fashion, we have it all.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our mission is simple: to provide high-quality products,
              outstanding customer service, and a seamless shopping experience.
              With GearUp Sports, you're not just buying equipment; you're
              investing in your potential.
            </p>
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
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Why Choose GearUp Sports?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-teal-500">
                Premium Quality
              </h4>
              <p className="text-gray-600 mt-2">
                All products are rigorously tested for durability and
                performance.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-teal-500">
                Global Shipping
              </h4>
              <p className="text-gray-600 mt-2">
                We deliver sports gear to your doorstep, anywhere in the world.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-teal-500">
                Expert Support
              </h4>
              <p className="text-gray-600 mt-2">
                Our dedicated team is here to assist you with any queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
