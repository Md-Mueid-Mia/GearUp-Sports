import React, { useContext, useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Slide, Zoom } from "react-awesome-reveal";

const MyEquipment = () => {
  const [products, setProducts] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://assignment-10-server-beta-rouge.vercel.app/equipment")
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
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-beta-rouge.vercel.app/equipment/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setProducts(products.filter((product) => product._id !== id));
          });
      }
    });
  };
  const updateProduct = (id) => {
    navigate(`/updateEquipment/${id}`);
  };
  if (loading) {
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
        <Slide
          direction="right" // Slide up
          delay={200}
          duration={1500} // Animation duration (in milliseconds)
          triggerOnce
        >
          <h1 className="text-3xl font-bold text-center mb-4">
            My Equipment List
          </h1>
        </Slide>
        {product.map((item) => (
          <div
            className="shadow border rounded-lg my-5 gap-6 flex flex-col md:flex-row p-4 md:p-8"
            key={item._id}
          >
            <div className="md:w-2/12">
              <Zoom
                delay={300}
                duration={1500} // Animation duration (in milliseconds)
                triggerOnce
              >
                <img
                  className="w-32  md:w-36 mx-auto"
                  src={item.image}
                  alt=""
                />
              </Zoom>
            </div>
            <div className="flex flex-col md:flex-row md:w-11/12  gap-6">
              <div className="flex-col justify-start  md:w-10/12 space-y-2">
              <Zoom
                delay={400}
                duration={1500} // Animation duration (in milliseconds)
                triggerOnce
              >

                <h3 className="text-xl font-medium"> {item.itemName}</h3>
              </Zoom>
              <Zoom
                delay={500}
                duration={1500} // Animation duration (in milliseconds)
                triggerOnce
              >

                <p>Category: {item.categoryName}</p>
              </Zoom>
              <Zoom
                delay={600}
                duration={1500} // Animation duration (in milliseconds)
                triggerOnce
              >

                <p>customization: {item.customization}</p>
              </Zoom>
              <Zoom
                delay={700}
                duration={1500} // Animation duration (in milliseconds)
                triggerOnce
              >

                <p>processing Time: {item.processingTime}</p>
              </Zoom>
              <Zoom
                delay={800}
                duration={1500} // Animation duration (in milliseconds)
                triggerOnce
              >

                <p>Price: ${item.price}</p>
              </Zoom>
              </div>
              <div className=" flex flex-col my-auto justify-end ">
              <Zoom
                delay={900}
                duration={1500} // Animation duration (in milliseconds)
                triggerOnce
              >
                <button
                  onClick={() => updateProduct(item._id)}
                  className="btn btn-neutral block w-full hover:bg-orange-600 border-none"
                >
                  <Link> Update</Link>
                </button>
                </Zoom>
                <Zoom
                delay={1500}
                duration={1500} // Animation duration (in milliseconds)
                triggerOnce
              >

                <button
                  onClick={() => deleteProduct(item._id)}
                  className="btn btn-neutral block mt-6 w-full hover:bg-orange-600 border-none"
                >
                  Delete
                </button>
              </Zoom>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
