import React from 'react';

const DetailsPage = () => {
    const equipmentData = [
        { id: 1, name: "Football", category: "Team Sports", price: "$30", description: "A durable football for all weather conditions." },
        { id: 2, name: "Tennis Racket", category: "Racquet Sports", price: "$80", description: "Lightweight tennis racket with excellent grip." },
        { id: 3, name: "Basketball", category: "Team Sports", price: "$25", description: "Premium basketball for indoor and outdoor play." },
        { id: 4, name: "Yoga Mat", category: "Fitness", price: "$15", description: "Comfortable and non-slip yoga mat for your daily practice." },
      ];
      
     
        const { id } = useParams();
        const equipment = equipmentData.find((item) => item.id === parseInt(id));
      
        if (!equipment) {
          return <p>Equipment not found!</p>;
        }
      
        return (
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{equipment.name}</h1>
            <p><strong>Category:</strong> {equipment.category}</p>
            <p><strong>Price:</strong> {equipment.price}</p>
            <p><strong>Description:</strong> {equipment.description}</p>
          </div>
        );
};

export default DetailsPage;