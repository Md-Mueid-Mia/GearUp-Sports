import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../authProvider/AuthProvider';
import { Form } from 'react-router-dom';

const AddEquipment = () => {
    const {user}= useContext(AuthContext)
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
        userName: user?.displayName
        || "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Form Data Submitted:", formData);
        // Add logic to send data to the server or database

        setFormData({
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
        
          e.target.reset();
      };
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>GearUp Sports || Add Equipment</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="add-product-container max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">Add New Product</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
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
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
        >
          Add Product
        </button>
      </form>
    </div>
        </div>
    );
};

export default AddEquipment;