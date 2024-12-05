import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const AllEquipment = () => {
    const navigate = useNavigate();
    const equipmentData = [
        { id: 1, name: "Football", category: "Team Sports", price: "$30" },
        { id: 2, name: "Tennis Racket", category: "Racquet Sports", price: "$80" },
        { id: 3, name: "Basketball", category: "Team Sports", price: "$25" },
        { id: 4, name: "Yoga Mat", category: "Fitness", price: "$15" },
      ];

  const handleViewDetails = (id) => {
    // Redirect to the details page with the product ID
    navigate(`/equipment/${id}`);
    
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
          {equipmentData.map((equipment) => (
            <tr key={equipment.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{equipment.name}</td>
              <td className="border px-4 py-2">{equipment.category}</td>
              <td className="border px-4 py-2">{equipment.price}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleViewDetails(equipment.id)}
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