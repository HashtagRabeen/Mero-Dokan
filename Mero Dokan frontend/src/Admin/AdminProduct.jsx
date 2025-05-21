import { useEffect, useState } from "react";
import { Bounce, Flip, toast } from "react-toastify";

function AdminProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [unit, setUnit] = useState("");

  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    let response = await fetch("http://localhost:9000/api/getProduct");
    response = await response.json();
    console.log(response);
    setProduct(response.showProduct);
  };
  const deleteProduct = async (id) => {
    let response = await fetch(
      `http://localhost:9000/api/deleteProduct/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      response = await response.json();
      console.log(response);
      toast.warn(response.message, {
        transition: Flip,
      });
      getProduct();
    } else {
      toast("Product not found"); //replacement of alert function
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("unit", unit);
    console.log(name, price, description, image, category,unit);
    try {
      let response = await fetch("http://localhost:9000/api/createProduct", {
        method: "POST",
        body: formData,
      });
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
      setName("");
      setPrice("");
      setCategory("");
      setDescription("");
      setUnit("");
      
      getProduct();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      {/* this is add product from database or create product  */}
      <form
        onSubmit={createProduct}
        className="shadow-xl shadow-slate-400 rounded-md flex w-[70%] m-auto p-7 mt-10 flex-wrap space-x-4 my-10"
      >
        <div className="flex flex-col w-80 ml-4">
          <label htmlFor="name" className="font-semibold mb-1">
            Name:
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-80 outline-none border-2 border-gray-300 p-1 rounded-lg px-4 py-2"
            type="text"
            id="name"
            required
            placeholder="Enter product's name"
          />
        </div>
        <div className="flex flex-col w-80">
          <label htmlFor="price" className="font-semibold mb-1">
            Price:
          </label>
          <input
           value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="w-80 outline-none border-2 border-gray-300 p-1 rounded-lg px-4 py-2"
            type="number"
            id="price"
            required
            placeholder="Enter product's price"
          />
        </div>
        <div className="flex flex-col w-80 mt-2">
          <label htmlFor="image" className="font-semibold mb-1">
            Image:
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            className="outline-none px-4 py-2 file:bg-orange-500 file:text-white file:px-3 file:py-1 file:rounded-md"
            type="file"
            id="image"
            required
            placeholder="Enter product's image"
          />
        </div>
        <div className="flex flex-col w-80 mt-2">
          <label htmlFor="category" className="font-semibold mb-1">
            Category:
          </label>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
            required
            id="category"
            className="px-4 py-2 border-gray-300 border-2 w-80 rounded-lg"
          >
            <option value="">Select Category</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Non Veg">Non Veg</option>
            <option value="Beverages">Beverages</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy Products">Dairy Products</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Masalas">Masalas</option>
            <option value="Packaged Foods">Packaged Foods</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-col w-full mt-4">
          <label htmlFor="unit" className="font-semibold mb-1">
            Unit:
          </label>
          <select
          value={unit}
            onChange={(e) => {
              setUnit(e.target.value);
            }}
            required
            id="unit"
            className="px-4 py-2 border-gray-300 border-2 rounded-lg w-full"
          >
            <option value="">Select Unit</option>
            <option value="kg">Kg</option>
            <option value="liter">liter</option>
            <option value="piece">Piece</option>
            <option value="pack">Pack</option>
            <option value="ml">ml</option>
            <option value="g">g</option>
            <option value="dozen">Dozen</option>
          </select>
        </div>
        <div className="flex flex-col w-full mt-4">
          <label htmlFor="description" className="font-semibold mb-1">
            Description:
          </label>
          <textarea
            value={description}
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="border-2 border-gray-300 outline-none h-44 w-full rounded-lg p-2"
            type="text"
            id="description"
            placeholder="Enter product's description"
          />
        </div>
        <button
          className="p-3 bg-orange-500 rounded-xl text-white w-full mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        {/* product list */}
        <div>
          {product.length > 0 ? (
            <div className="w-[90%] flex flex-wrap justify-center gap-10 p-5 m-auto mt-10">
              {product.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="shadow-xl shadow-slate-300 w-96 flex justify-center items-center flex-col border-1 py-9 rounded-lg space-y-4"
                  >
                    <img
                      src={`http://localhost:9000/upload/${item.image}`}
                      alt=""
                      className="h-24"
                    />
                    <p>{item.name}</p>
                    <p>
                      Rs. {item.price}/
                      <span className="text-black">{item.unit}</span>
                    </p>
                    <div className="space-x-3">
                      <button className="bg-gray-600 text-white py-2 px-5 rounded-md">
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          deleteProduct(item._id);
                        }}
                        className="bg-red-600 text-white p-2 rounded-md px-5"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
