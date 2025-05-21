import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { BsCart } from "react-icons/bs";

import grocery from "../assets/grocery.jpg";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { CartContext } from "../Context/CartProvider";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const { state, dispatch, user } = useContext(AuthContext);
  const { cartState } = useContext(CartContext);
  const totalItems = cartState.CartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <div className="flex justify-center items-center gap-10 h-20 shadow-md sticky top-0 z-50 bg-white">
      <div className="flex justify-center items-center w-56 h-[48px] mb-2">
        <span>
          <img
            src={grocery}
            alt=""
            className="h-12 w-12 border border-[#734F96] rounded-full"
          />
        </span>
        <h1 className="font-bold w-[120px] h-[30px] ml-2 font-[Proxima Nova] text-xl text-[#734F96]">
          Mero Dokan
        </h1>
      </div>
      <div className="space-x-2 h-[50px] w-[700px] flex items-center justify-start text-center font-[inter] ml-36">
        <NavLink className="w-[80px] h-[32px] hover:border-b-2 border-[#734F96] hover:transition duration-200" to="/">
          Home
        </NavLink>
        <NavLink className=" w-[100px] h-[32px] hover:border-b-2 border-[#734F96] hover:transition duration-200" to="/AboutUs">
          AboutUs
        </NavLink>
        <NavLink className="w-[80px] h-[32px] hover:border-b-2 border-[#734F96] hover:transition duration-200" to="/products">
          All Product
        </NavLink>
        <NavLink className="w-[100px] h-[32px] hover:border-b-2 border-[#734F96] hover:transition duration-200" to="/Services">
          Our Services
        </NavLink>
        <NavLink
          className="w-[50px] h-[32px] flex justify-center  relative"
          to="/cart"
        >
          <span className="text-sm absolute bottom-6 left-8  border border-gray-400 rounded-full bg-orange-400 text-white h-4 w-4 flex items-center justify-center">
            {totalItems}
          </span>
          <BsCart size={25} />
        </NavLink>
        {state.token ? (
          <NavLink
            className="w-[50px] h-[32px] flex justify-center"
            onClick={() => {
              dispatch({ type: "Logout" });
            }}
          >
            <IoIosLogOut size={28} />
          </NavLink>
        ) : (
          <div className="w-[160px] h-[32px] space-x-5">
            <NavLink to="/login" className="w-[80px] h-[32px">
              Login
            </NavLink>
            <NavLink to="/signup" className="w-[80px] h-[32px]">
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
      <div className="flex items-center gap-5 h-[48px] w-[360px]">
        <NavLink to="/contact" className="h-[41px] w-[119px] flex items-center justify-center rounded-2xl bg-[#734F96] text-white">
          Contact Us
        </NavLink>
        <span className="flex gap-2 items-center font-semibold"><FaUserCircle size={30} />
            {user?.name}</span>
      </div>
    </div>
  );
}

export default Navbar;
