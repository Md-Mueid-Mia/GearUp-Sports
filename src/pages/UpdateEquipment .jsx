import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../authProvider/AuthProvider";

const UpdateEquipment = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // Get the ID of the equipment to update
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    image: "",
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
    userEmail: user?.email || "",
    userName: user?.displayName || "",
  });

  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch the existing equipment data
  // useEffect(() => {
  //   fetch(`/api/equipment/${id}`) // Replace with your API endpoint
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFormData({ ...data, userEmail: user?.email, userName: user?.displayName });
  //       setLoading(false);
  //     })
  //     .catch((error) => console.error("Error fetching equipment:", error));
  // }, [id, user?.email, user?.displayName]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send updated data to the backend
    fetch(`/api/equipment/${id}`, {
      method: "PUT", // Use PUT or PATCH method for updates
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated Equipment:", data);
        setSuccessMessage("Equipment updated successfully!");
        setTimeout(() => navigate("/equipment"), 2000); // Redirect to another page after 2 seconds
      })
      .catch((error) => console.error("Error updating equipment:", error));
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GearUp Sports || Update Equipment</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="update-product-container max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Update Equipment</h1>
        {successMessage && (
          <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">
            {successMessage}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
         {/* Item Name */}
         <div className="form-group">
          <label className="block font-semibold mb-1">
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder="Enter item name"
            className="w-full p-2 border rounded"
          />
        </div>
        
        {/* Image URL */}
        <div className="form-group">
          <label className="block font-semibold mb-1" >
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            placeholder="Enter image URL"
            className="w-full p-2 border rounded"
          />
        </div>

       

        {/* Category Name */}
        <div className="form-group">
          <label className="block font-semibold mb-1" >
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            placeholder="Enter category name"
            className="w-full p-2 border rounded"
          />
        </div>

       

        {/* Price and Rating */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label className="block font-semibold mb-1" >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="form-group">
            <label className="block font-semibold mb-1" >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter rating (1-5)"
              step="0.1"
              max="5"
              min="1"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Customization */}
        <div className="form-group">
          <label className="block font-semibold mb-1" >
            Customization
          </label>
          <input
            type="text"
            id="customization"
            name="customization"
            value={formData.customization}
            onChange={handleChange}
            placeholder="e.g., Extra grip, Hit paper"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Processing Time */}
        <div className="form-group">
          <label className="block font-semibold mb-1" >
            Processing Time
          </label>
          <input
            type="text"
            id="processingTime"
            name="processingTime"
            value={formData.processingTime}
            onChange={handleChange}
            placeholder="Enter delivery time"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Stock Status */}
        <div className="form-group">
          <label className="block font-semibold mb-1" >
            Stock Status
          </label>
          <input
            type="number"
            id="stockStatus"
            name="stockStatus"
            value={formData.stockStatus}
            onChange={handleChange}
            placeholder="Enter available product quantity"
            className="w-full p-2 border rounded"
          />
        </div>
         {/* Description */}
         <div className="form-group">
          <label className="block font-semibold mb-1" >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Enter description"
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
        </div>

        {/* User Email and Name (Read-only) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label className="block font-semibold mb-1" >
              User Email
            </label>
            <input
              type="email"
              id="userEmail"
              onChange={handleChange}
              name="userEmail"
              value={formData.userEmail}
              readOnly
              className="w-full p-2 border bg-gray-100 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block font-semibold mb-1" >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              onChange={handleChange}
              name="userName"
              value={formData.userName}
              readOnly
              className="w-full p-2 border bg-gray-100 rounded"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full btn btn-neutral hover:bg-orange-600 text-white py-2 rounded transition border-none"
        >
          Update Product
        </button>
      </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
