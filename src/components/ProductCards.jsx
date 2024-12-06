import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DetailsPage from './../pages/DetailsPage';
import { AuthContext } from "../authProvider/AuthProvider";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const {loading} = useContext(AuthContext)

  useEffect(() => {
    // Fetch data from your MongoDB API with a limit of 6 products
    fetch("http://localhost:4000/equipment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleViewDetails = (_id) => {
   
    // console.log(_id);
    
    // find one data from database
    const product = products.find((product) => product._id === _id);
    // console.log("Product details:", product);
    
    navigate(`/products/${_id}`); // Redirect to the details page
  };

  if(loading) {
    return <div>Loading...</div>  // Show loading state while data is being fetched
   } 
  return (
    <div className="mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4">Featured Products</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {products.slice(0, 6).map((product, index) => (
        <div
          key={product._id}
          className="product-card bg-white p-4 rounded shadow-lg"
        >
          <img
            src={product.image}
            alt={product.itemName}
            className="h-60 w-60 object-cover mb-4 rounded mb-5 mx-auto"
          />
          <h3 className="font-bold text-lg mb-2">{product.itemName}</h3>
          <p className="text-gray-700 mb-2">Price: ${product.price}</p>
          <p className="text-gray-500 mb-4">{product.description}</p>
          <button
            onClick={() => handleViewDetails(product._id)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
          >
            View Details
          </button>
        </div>
      ))}
         </div>
      
    </div>
  );
};

export default ProductCards;
