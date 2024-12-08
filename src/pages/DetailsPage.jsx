import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const products = useLoaderData();
  const equipment = products.find((e) => e._id === id);

  const {
    category,
    categoryName,
    customization,
    description,
    image,
    itemName,
    price,
    processingTime,
    rating,
    stockStatus,
    userEmail,
    userName,
  } = equipment;

  return (
    <div>
      <Slide
          direction="right" // Slide up
          delay={200}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        ><h1 className="text-3xl font-bold text-center mb-4">
          Product Details
        </h1>
        </Slide>
    <div className="hero bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row gap-10">
        {/* Product Image */}
        <Zoom
          delay={300}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >

        <img
          src={image}
          alt={itemName}
          className="w-[220px] md:w-[300px] md:max-w-sm rounded-lg shadow-2xl"
        />
        </Zoom>

        {/* Product Details */}
        <div className="space-y-6">
        <Zoom
          delay={300}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          <h1 className="text-2xl font-bold text-teal-500">{itemName}</h1>
          </Zoom>
          <Zoom
          delay={400}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          
          <p className="text-lg ">{description}</p>
          </Zoom>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Zoom
          delay={500}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
         
            <p>
              <span className="font-bold">Category:</span> {categoryName}
            </p>
          </Zoom>
          <Zoom
          delay={600}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
            <p>
              <span className="font-bold">Customization:</span> {customization}
            </p>
          </Zoom>
          <Zoom
          delay={700}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >

            <p>
              <span className="font-bold">Price:</span> ${price}
            </p>
        </Zoom>
        <Zoom
          delay={800}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >

            <p>
              <span className="font-bold">Rating:</span> {rating}⭐
            </p>
        </Zoom>
        <Zoom
          delay={900}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >

            <p>
              <span className="font-bold">Stock Status:</span> {stockStatus} items available
            </p>
        </Zoom>
        <Zoom
          delay={1500}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >

            <p>
              <span className="font-bold">Processing Time:</span> {processingTime}
            </p>
        </Zoom>
          </div>
          <Zoom
          delay={1500}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >

          <p>
            <span className="font-bold">Seller:</span> {userName} (
            <a href={`mailto:${userEmail}`} className="text-blue-500 underline">
              {userEmail}
            </a>
            )
          </p>
        </Zoom>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailsPage;
