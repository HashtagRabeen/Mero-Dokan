import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";
import { Bounce, toast } from "react-toastify";

function ProductDescription() {
  const [single, setSingle] = useState({});
  const { cartDispatch } = useContext(CartContext);
  const { id } = useParams();
  //const data=useParams()
  //let id=data.id

  console.log(id);

  const getSingleProduct = async () => {
    let response = await fetch(
      `http://localhost:9000/api/getProductById/${id}`
    ); //in this useParams give id not _id
    response = await response.json();
    // console.log(response.singleMomo);
    setSingle(response.singleProduct);
  };

  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); //id as a dependency
  return (
    <div className="min-h-screen">
      <div className="flex gap-10 w-[65%] m-auto p-5 mt-12 shadow-xl shadow-red-200">
        <div className="">
          <img
            src={`http://localhost:9000/upload/${single.image}`}
            alt=""
            className="h-60"
          />
        </div>
        <div className="space-y-2 flex flex-col justify-center text-xl font-serif">
          <h1>{single.name}</h1>
          <h1>{single.description}</h1>
          <h1 className="text-red-500">Rs. {single.price}</h1>
          <h1>Product Category: {single.category}</h1>
          <div className="space-x-10">
            <button className="bg-blue-500 w-40 text-white p-3 rounded-sm">
              <NavLink
                to="/payment"
                state={{ total_items: 1, total_amount: single.price }}
              >
                Buy Now
              </NavLink>
            </button>
            <button
              onClick={() => {
                cartDispatch({ type: "ADD_TO_CART", payload: { ...single } });
                toast.success(`${single.name} Added to Cart`, {
                  position: "top-right",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                });
              }}
              className="bg-orange-600 w-40 text-white p-3 "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
