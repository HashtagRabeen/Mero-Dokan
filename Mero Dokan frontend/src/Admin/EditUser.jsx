import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { Bounce, toast } from "react-toastify";

function EditUser() {
  const location = useLocation();
  const navigate=useNavigate();
  console.log(location.state);

  const id = location.state._id;

  const { state } = useContext(AuthContext);

  const [name, setName] = useState(location.state.name);
  const [email, setEmail] = useState(location.state.email);
  const [phone, setPhone] = useState(location.state.phone);
  const [role, setRole] = useState(location.state.role);

  const editUser = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://localhost:9000/api/editUser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify({ name, email, phone, role }),
    });
    if (response.ok) {
      response = await response.json();
      console.log(response.message);
      toast.success(response.message, {
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
      navigate('/AdminDashboard/customer');
    
    } else {
      console.log("Error while editting user");
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form
        onSubmit={editUser}
        className="flex flex-col w-96 m-auto mt-10 shadow-xl shadow-red-200 p-5 space-y-3 px-3 "
      >
        <label htmlFor="name">Name:</label>
        <input
          className="border-b-2  border-black outline-none"
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          className="border-b-2  border-black outline-none"
          type="text"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          className="border-b-2  border-black outline-none"
          type="number"
          id="phone"
          placeholder="Enter your phone no"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label htmlFor="role">Role:</label>
        <input
          className="border-b-2  border-black outline-none"
          type="text"
          id="role"
          placeholder="Enter your Role"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <button type="submit" className="bg-orange-600 text-white mt-5 p-3">
          Update User
        </button>
      </form>
    </div>
  );
}

export default EditUser;
