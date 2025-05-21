import { NavLink, useNavigate } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { RiGoogleFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Bounce, toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:9000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        response = await response.json();
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
        setEmail("");
        setPassword("");
        // console.log(response.token);
        dispatch({ type: "Login", payload: { token: response.token } });
        navigate("/");

        // localStorage.setItem("auth-token", response.token);
      } else {
        console.log("login failed");
        toast.error("login failed", {
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
      }
    } catch (error) {
      console.log("Error is ", error);
    }
  };
  return (
    <div className="h-[90vh]">
      <div className=" w-[55vh] m-auto mt-10 shadow-xl rounded-xl shadow-slate-500 ">
        <div className="text-center font-bold text-2xl">
          <h1 className="pt-6">Login</h1>
        </div>
        <form onSubmit={formSubmit} className="flex flex-col mt-8 pl-9 ">
          <label htmlFor="email">Email</label>
          <FaRegUser className="relative top-[30px] left-2" />
          <input
            type="email"
            placeholder="Type your email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" w-80 p-2 pl-8 rounded-lg outline-none"
          />
          <br />
          <label htmlFor="password">Password</label>
          <CiLock className="relative top-[30px] left-2" />
          <input
            type="password"
            placeholder="Type your password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" w-80 p-2 pl-8 rounded-lg outline-none"
          />
          <NavLink className="flex justify-end w-80">Forget password?</NavLink>
          <br />
          <button
            type="submit"
            className="bg-blue-400 py-2 rounded-full w-80 text-white"
          >
            LOGIN
          </button>
        </form>
        <div className="flex justify-center items-center mt-3">
          <p>Or Sign Up Using</p>
        </div>
        <div className="flex justify-center items-center gap-5 mt-4">
          <NavLink className="rounded-full h-10 w-10 flex justify-center items-center bg-[#1877F2]">
            <SiFacebook size={25} className="text-white" />
          </NavLink>
          <NavLink className=" rounded-full h-10 w-10 flex justify-center items-center">
            <SlSocialTwitter size={25} className="" />
          </NavLink>
          <NavLink className=" rounded-full h-10 w-10 flex justify-center items-center text-red-500">
            <RiGoogleFill size={25} />
          </NavLink>
        </div>
        <div className=" text-center py-7">
          <p>Or Sign Up Using</p>
          <NavLink to="/signup">
            <p className="py-4">SIGN UP</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
