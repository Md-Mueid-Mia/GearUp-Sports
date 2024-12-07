import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const AllEquipment = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
      // Fetch data from your MongoDB API with a limit of 6 products
      fetch("https://assignment-10-server-beta-rouge.vercel.app/equipment?limit=6",{
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
    navigate(`/products/${_id}`)
    
  };
  const sortProductsByPrice = () => {
    const sortedProducts = [...products].sort((a, b) =>
      sortOrder === "asc"
        ? parseFloat(a.price) - parseFloat(b.price)
        : parseFloat(b.price) - parseFloat(a.price)
    );
    setProducts(sortedProducts);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sorting order
  };
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>GearUp Sports || All Sports Equipment</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container mx-auto p-4">
            <div className='text-right'>
      <button
          onClick={sortProductsByPrice}
          className="btn btn-neutral hover:bg-orange-600 border-none mb-4"
        >
          Sort by Price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">All Sports Equipment</h1>
      
      <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-teal-300">
        <thead>
          <tr className="bg-teal-50">
          
            <th className="border px-4 py-2"><Zoom
                  delay={100}
                  duration={1200} // Animation duration (in milliseconds)
                  triggerOnce
                >
                  Image
                </Zoom></th>
            <th className="border px-4 py-2"><Zoom
                  delay={100}
                  duration={1200} // Animation duration (in milliseconds)
                  triggerOnce
                >
                  Name
                </Zoom></th>
            <th className="border px-4 py-2 "><Zoom
                  delay={100}
                  duration={1200} // Animation duration (in milliseconds)
                  triggerOnce
                >
                  Category
                </Zoom></th>
            <th className="border px-4 py-2 ">
            <Zoom
                  delay={100}
                  duration={1200} // Animation duration (in milliseconds)
                  triggerOnce
                >
                  Price $
                </Zoom></th>
            <th className="border px-4 py-2 ">
            <Zoom
                  delay={100}
                  duration={1200} // Animation duration (in milliseconds)
                  triggerOnce
                >
                  Actions
                </Zoom></th>
            
          </tr>
        </thead>
        <tbody>
          {products.map((equipment) => (
            <tr key={equipment.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">
              <Zoom
                  delay={200}
                  duration={1200} // Animation duration (in milliseconds)
                  triggerOnce
                >
                  <img className='w-16' src={equipment.image} alt="" />
                </Zoom></td>
              <td className="border px-4 py-2">
              <Zoom
                  delay={400}
                  duration={1400} // Animation duration (in milliseconds)
                  triggerOnce
                >
                  {equipment.itemName}
                </Zoom></td>
              <td className="border px-4 py-2 "><Zoom
                  delay={600}
                  duration={1600} // Animation duration (in milliseconds)
                  triggerOnce
                >
                  {equipment.category}
                </Zoom></td>
              <td className="border px-4 py-2 "> 
              <Zoom
                  delay={800}
                  duration={1800} // Animation duration (in milliseconds)
                  triggerOnce
                >
                   {equipment.price}
                </Zoom></td>
              <td className="border px-4 py-2 text-center">
              <Zoom
                  delay={800}
                  duration={1800} // Animation duration (in milliseconds)
                  triggerOnce
                >
                   <button
                  onClick={() => handleViewDetails(equipment._id)}
                  className="btn btn-neutral hover:bg-orange-600 text-white px-4 py-2 rounded border-none"
                >
                  View Details
                </button>
                </Zoom>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
        </div>
    );
};

export default AllEquipment;