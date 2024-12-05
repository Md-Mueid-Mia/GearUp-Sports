import React, { useState } from 'react';

const ProductCards = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Fetch data from your MongoDB API with a limit of 6 products
      fetch("http://localhost:4000/equipment?limit=6")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error(err));
    }, []);
    console.log("from product cards",products);
    return (
        <div>
            
        </div>
    );
};

export default ProductCards;