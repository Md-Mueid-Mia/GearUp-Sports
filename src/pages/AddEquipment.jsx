import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../authProvider/AuthProvider';
import { Form } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Slide, Zoom } from 'react-awesome-reveal';

const AddEquipment = () => {
    const {user}= useContext(AuthContext)
  
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const image = form.image.value;
        const categoryName = form.categoryName.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.categoryName.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const userEmail = user?.email || "";
        const userName = user?.displayName || "";
        
        const formData = {
          itemName,
          image,
          categoryName,
          description,
          price,
          rating,
          category,
          customization,
          processingTime,
          stockStatus,
          userEmail,
          userName,
        }

        
        fetch('https://assignment-10-server-beta-rouge.vercel.app/equipment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),

        })
         .then(response => response.json())
         .then(data => toast.success("Successfully Added Product"))

         form.reset();

      };
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>GearUp Sports || Add Equipment</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="add-product-container max-w-4xl mx-auto p-6 rounded-lg shadow-md">
            <Slide
          direction="right" // Slide up
          delay={200}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          
          <h1 className="text-3xl font-bold text-center mb-4">Add New Product</h1>
        </Slide>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
         {/* Item Name */}
         <div className="form-group">
         <Zoom // Slide up
          delay={200}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          <label className="block font-semibold mb-1">
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            placeholder="Enter item name"
            className="w-full p-2 border rounded"
          />
        </Zoom>
          
        </div>
        
        {/* Image URL */}
        <div className="form-group">
        <Zoom // Slide up
          delay={400}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          <label className="block font-semibold mb-1" >
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            className="w-full p-2 border rounded"
          />
          </Zoom>
        </div>

       

        {/* Category Name */}
        <div className="form-group">
        <Zoom // Slide up
          delay={600}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          <label className="block font-semibold mb-1" >
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            placeholder="Enter category name"
            className="w-full p-2 border rounded"
          />
          </Zoom>
        </div>

       

        {/* Price and Rating */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
          <Zoom // Slide up
          delay={800}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
            <label className="block font-semibold mb-1" >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
              className="w-full p-2 border rounded"
            />
            </Zoom>
          </div>
          <div className="form-group">
          <Zoom // Slide up
          delay={1500}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
            <label className="block font-semibold mb-1" >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              placeholder="Enter rating (1-5)"
              step="0.1"
              max="5"
              min="1"
              className="w-full p-2 border rounded"
            />
            </Zoom>
          </div>
        </div>

        {/* Customization */}
        <div className="form-group">
        <Zoom // Slide up
          delay={1500}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          <label className="block font-semibold mb-1" >
            Customization
          </label>
          <input
            type="text"
            id="customization"
            name="customization"
            placeholder="e.g., Extra grip, Hit paper"
            className="w-full p-2 border rounded"
          />
          </Zoom>
        </div>

        {/* Processing Time */}
        <div className="form-group">
        <Zoom // Slide up
          delay={1500}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          <label className="block font-semibold mb-1" >
            Processing Time
          </label>
          <input
            type="text"
            id="processingTime"
            name="processingTime"
            placeholder="Enter delivery time"
            className="w-full p-2 border rounded"
          />
          </Zoom>
        </div>

        {/* Stock Status */}
        <div className="form-group">
        <Zoom // Slide up
          delay={1600}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          <label className="block font-semibold mb-1" >
            Stock Status
          </label>
          <input
            type="number"
            id="stockStatus"
            name="stockStatus"
            placeholder="Enter available product quantity"
            className="w-full p-2 border rounded"
          />
          </Zoom>
        </div>
         {/* Description */}
         <div className="form-group">
         <Zoom // Slide up
          delay={1800}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          <label className="block font-semibold mb-1" >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
          </Zoom>
        </div>

        {/* User Email and Name (Read-only) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
          <Zoom // Slide up
          delay={600}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
            <label className="block font-semibold mb-1" >
              User Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={user.email}
              readOnly
              className="w-full p-2 border  rounded"
            />
            </Zoom>
          </div>
          <div className="form-group">
          <Zoom // Slide up
          delay={600}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
            <label className="block font-semibold mb-1" >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={user.displayName}
              readOnly
              className="w-full p-2 border  rounded"
            />
            </Zoom>
          </div>
        </div>

        {/* Submit Button */}
        <Zoom // Slide up
          delay={800}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >

        <button
          type="submit"
          className="w-full btn btn-neutral hover:bg-orange-600 text-white py-2 rounded transition border-none"
        >
          Add Product
        </button>
        </Zoom>
        
      </form>
    </div>
        </div>
    );
};

export default AddEquipment;