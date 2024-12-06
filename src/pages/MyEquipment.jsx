import React, { useContext, useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const MyEquipment = () => {
  const [products, setProducts] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/equipment")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const product = products.filter(
    (product) => product.userEmail === user.email
  );
  
  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:4000/equipment/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
    
        })
         .then((response) => response.json())
         .then(() => {
         
            
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            setProducts(products.filter((product) => product._id!== id));
          });
      }
    });
    
    
  }
  const updateProduct = (id) =>{
    
    navigate(`/updateEquipment/${id}`);
  }
if(loading) {
  return <span className="loading loading-bars loading-lg"></span>;

}
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GearUp Sports || My Equipment List</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="">
        {product.map((item) => (
          <div
            className="shadow border rounded-lg my-5 gap-6 flex flex-col md:flex-row p-4 md:p-8"
            key={item._id}
          >
            <div className="md:w-2/12">
              <img className="w-32  md:w-36 mx-auto" src={item.image} alt="" />
            </div>
            <div className="flex flex-col md:flex-row md:w-11/12  gap-6">
              <div className="flex-col justify-start  md:w-10/12 space-y-2">
                <h3>Name: {item.itemName}</h3>
                <p>Category: {item.categoryName}</p>
                <p>Category: {item.customization}</p>
                <p>Category: {item.processingTime}</p>
                <p>Price: ${item.price}</p>
              </div>
              <div className=" flex flex-col my-auto justify-end ">
                <button onClick={()=> updateProduct(item._id)} className="btn btn-neutral block w-full hover:bg-orange-600 border-none">
                 <Link> Update</Link>
                </button>
                <button onClick={()=>deleteProduct(item._id)} className="btn btn-neutral block mt-6 w-full hover:bg-orange-600 border-none">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
