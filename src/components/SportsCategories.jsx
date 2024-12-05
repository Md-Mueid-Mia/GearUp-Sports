import React from "react";

const categories = [
  { id: 1, name: "Team Sports", image: "/images/team-sports.jpg" },
  { id: 2, name: "Fitness", image: "/images/fitness.jpg" },
  { id: 3, name: "Outdoor Sports", image: "/images/outdoor-sports.jpg" },
];

const SportsCategories = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Explore Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="rounded overflow-hidden shadow-lg">
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsCategories;
