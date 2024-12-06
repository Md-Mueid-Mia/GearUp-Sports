import React from "react";
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
    <div className="hero bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row gap-10">
        {/* Product Image */}
        <img
          src={image}
          alt={itemName}
          className="w-[300px] md:max-w-sm rounded-lg shadow-2xl"
        />

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-teal-500">{itemName}</h1>
          <p className="text-lg text-gray-600">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <span className="font-bold">Category:</span> {categoryName}
            </p>
            <p>
              <span className="font-bold">Customization:</span> {customization}
            </p>
            <p>
              <span className="font-bold">Price:</span> ${price}
            </p>
            <p>
              <span className="font-bold">Rating:</span> {rating}⭐
            </p>
            <p>
              <span className="font-bold">Stock Status:</span> {stockStatus} items available
            </p>
            <p>
              <span className="font-bold">Processing Time:</span> {processingTime}
            </p>
          </div>

          <p>
            <span className="font-bold">Seller:</span> {userName} (
            <a href={`mailto:${userEmail}`} className="text-blue-500 underline">
              {userEmail}
            </a>
            )
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
