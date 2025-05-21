import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Customer() {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();
  const { state } = useContext(AuthContext);
  const getAllUser = async () => {
    let response = await fetch("http://localhost:9000/api/getAllUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });
    response = await response.json();
    console.log(response);
    setUser(response.showUser);
  };
  const deleteUser = async (id) => {
    let response = await fetch(`http://localhost:9000/api/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });
    if (response.ok) {
      response = await response.json();
      console.log(response);
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
      getAllUser();
    } else {
      console.log("You are not allowed to delete");
    }
  };
  // useEffect(() => {
  //   getAllUser();
  // }, []);
  useEffect(() => {
    if (state.token) {
      getAllUser();
    }
  }, [state.token]); // Ensure token is available before calling API
  return (
    <div>
      <h1 className="text-5xl text-center font-bold underline my-3">
        <span className="text-blue-900">Customer</span> List
      </h1>
      <div>
        {users.length > 0 ? (
          <div className="p-6 flex flex-wrap gap-10">
            {users.map((user) => (
              <div
                key={user._id}
                className="shadow-lg shadow-red-200 p-5 rounded-md space-y-3 w-80"
              >
                <h1>
                  <span className="bg-orange-400 rounded-3xl w-28 px-4 text-white py-1">
                    {user.role}
                  </span>{" "}
                </h1>
                <h1>User Name: {user.name}</h1>
                <h1>User Phone: {user.phone}</h1>
                <h1>User Email: {user.email}</h1>
                <button
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                  className="bg-red-500 text-white px-5 py-2 rounded-xl"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    navigate("/editUser", { state: user });
                  }}
                  className="bg-gray-700 text-white p-2 rounded-xl ml-2 px-5"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>Customer not found</div>
        )}
      </div>
    </div>
  );
}

export default Customer;
