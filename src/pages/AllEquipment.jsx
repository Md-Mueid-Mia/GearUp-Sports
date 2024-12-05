import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const AllEquipment = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Fetch data from your MongoDB API with a limit of 6 products
      fetch("http://localhost:4000/equipment?limit=6",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
      })
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error(err));
    }, []);
    // console.log(products);

  const handleViewDetails = (_id) => {
    // Redirect to the details page with the product ID
    // navigate(`/equipment/${_id}`);
    console.log(_id);
    
  };
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>GearUp Sports || All Sports Equipment</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Sports Equipment</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((equipment) => (
            <tr key={equipment.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{equipment.itemName}</td>
              <td className="border px-4 py-2">{equipment.category}</td>
              <td className="border px-4 py-2">$ {equipment.price}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => handleViewDetails(equipment._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default AllEquipment;