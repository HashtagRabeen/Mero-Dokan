import { NavLink, useNavigate } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { RiGoogleFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      let response = await fetch("http://localhost:9000/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      });
      response = await response.json();
      console.log(response);
      toast.success(response.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      console.log("Errorr while signing up", error);
    }
  };
  return (
    <div className="h-[90vh]">
      <div className=" w-[60vh] m-auto mt-10 shadow-xl rounded-md shadow-slate-500">
        <div className="text-center font-bold text-2xl">
          <h1 className="pt-6">Sign up</h1>
        </div>
        <form onSubmit={formSubmit} className="flex flex-col mt-5 pl-9">
          <label htmlFor="name">Full Name</label>
          <FaRegUser className="relative top-[25px] left-2" />
          <input
            type="text"
            placeholder="Enter your Name"
            id="name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className=" w-80 p-1 pl-8 rounded-lg outline-none"
          />
          <label htmlFor="email">Email</label>
          <FaRegUser className="relative top-[25px] left-2" />
          <input
            type="email"
            id="email"
            placeholder="Type your email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" w-80 p-1 pl-8 rounded-lg outline-none"
          />
          <br />
          <label htmlFor="phone">Phone No:</label>
          <CiLock className="relative top-[25px] left-2" />
          <input
            type="text"
            id="phone"
            placeholder="Type your Phone No"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className=" w-80 p-1 pl-8 rounded-lg outline-none"
          />
          <label htmlFor="password">Password:</label>
          <CiLock className="relative top-[25px] left-2" />
          <input
            type="password"
            id="password"
            placeholder="Type your password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" w-80 p-1 pl-8 rounded-lg outline-none"
          />
          <NavLink
            to="https://www.facebook.com/"
            className="flex justify-end w-72"
          >
            <input type="checkbox" />I agree all the terms and conditions
          </NavLink>
          <br />
          <button
            type="submit"
            className="bg-blue-400 py-2 rounded-full w-80 text-white mb-6"
          >
            Register
          </button>
        </form>
        <div className="flex justify-center items-center mt-3">
          <p>Or Sign Up Using</p>
        </div>
        <div className="flex justify-center items-center gap-5 mt-4 pb-5">
          <NavLink className="rounded-full h-10 w-10 flex justify-center items-center bg-[#1877F2]">
            <SiFacebook size={25} className="text-white" />
          </NavLink>
          <NavLink className=" rounded-full h-10 w-10 flex justify-center items-center">
            <SlSocialTwitter size={25} className="" />
          </NavLink>
          <NavLink className=" rounded-full h-10 w-10 flex justify-center items-center">
            <RiGoogleFill size={25} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Signup;
