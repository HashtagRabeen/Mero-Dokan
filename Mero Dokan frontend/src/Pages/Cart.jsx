import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { NavLink } from "react-router-dom";

import { MdDelete } from "react-icons/md";

function Cart() {
  const { cartState, cartDispatch } = useContext(CartContext);
  console.log(cartState.CartItems);

  let total_amount = cartState.CartItems.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);
  let total_items = cartState.CartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <div className="min-h-screen">
      {cartState.CartItems.length > 0 ? (
        <div className="flex relative">
          <div>
            {cartState.CartItems.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex gap-x-5 p-2 justify-center w-[80%] h-44 m-auto items-center mt-10 ml-40 shadow-md shadow-red-300 rounded-lg"
                >
                  <div>
                    <img
                      src={`http://localhost:9000/upload/${item.image}`}
                      alt=""
                      className="h-28 rounded"
                    />
                  </div>
                  <div className="w-96 overflow-auto">
                    <h1>{item.name}</h1>
                    <h1>{item.description}</h1>
                  </div>
                  <div>
                    <h1 className="my-2">Rs. {item.price}</h1>
                    <button
                      onClick={() => {
                        cartDispatch({
                          type: "Delete",
                          payload: { _id: item._id },
                        });
                      }}
                    >
                      <MdDelete size={25} color="red" />
                    </button>
                  </div>
                  <div className="  w-20 space-x-1">
                    <button
                      className=" w-4 bg-slate-400 rounded-xl"
                      onClick={() => {
                        cartDispatch({
                          type: "Decrement",
                          payload: { _id: item._id },
                        });
                      }}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="w-4 bg-slate-400 rounded-xl"
                      onClick={() => {
                        cartDispatch({
                          type: "Increment",
                          payload: { _id: item._id },
                        });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="shadow-md shadow-red-200 w-96 h-96 mt-16 fixed right-16 flex flex-col justify-center items-center gap-4 p-3 rounded-md">
            <h1 className="text-3xl">Order Summary</h1>
            <h1>Total Rs.{total_amount}</h1>

            <button className="bg-orange-700 rounded text-white w-80 p-3">
              <NavLink
                to="/payment"
                state={{ total_items: total_items, total_amount: total_amount }}
              >
                Proceed to Checkout ({total_items})
              </NavLink>
            </button>
            <button
              className="bg-red-600 rounded-md text-white w-80 p-3"
              onClick={() => {
                cartDispatch({ type: "ClearCart" });
              }}
            >
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="border-1 shadow-sm shadow-red-500 w-96 m-auto mt-10 text-center text-xl">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/515/488/small/empty-cart-flat-illustration-concept-vector.jpg"
            alt=""
            className="h-72"
          />
          <h1 className="pb-5">
            Your Cart is empty
            <NavLink to="/menu" className="text-red-500 underline ml-3">
              Shop Now
            </NavLink>
          </h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
