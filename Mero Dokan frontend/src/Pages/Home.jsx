import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import Contact from "./Contact";

function Home() {
  const [product, setProduct] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const getProduct = async () => {
    let response = await fetch("http://localhost:9000/api/getProduct");
    response = await response.json();
    console.log(response);
    setProduct(response.showProduct);
    const filterProduct = response.showProduct.filter((item) => {
      return item.category === "Vegetables";
    });
    setFilterProducts(filterProduct);
  };

  useEffect(() => {
    getProduct(), filterProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterProduct = async (category) => {
    const filterProduct = product.filter((item) => {
      return item.category === category;
    });
    setFilterProducts(filterProduct);
  };
  return (
    <div>
      <section className="relative h-[70vh] bg-cover bg-center flex justify-center gap-10 items-center bg-[#00838F]">
        <div className="p-10 rounded-xl flex flex-col items-center justify-center max-w-full h-[60vh] text-white">
          <h1 className="text-5xl font-bold mb-4">Fresh Groceries Delivered</h1>
          <p className="text-xl mb-6">
            Get your daily needs delivered to your doorstep with ease and speed.
          </p>
          <NavLink
            to="/products"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg"
          >
            Shop Now
          </NavLink>
        </div>
        <div className="rounded-t-full h-[60vh]">
          <img
            src="https://png.pngtree.com/png-clipart/20240701/original/pngtree-man-arm-holding-a-bag-of-groceries-with-vegetable-png-image_15456627.png"
            alt=""
            className="h-96 w-96"
          />
        </div>
      </section>
      <div className="flex flex-col justify-center items-center p-5 h-[70vh] my-16">
        <div className=" text-center p-2">
          <h1 className="text-3xl font-semibold">
            Featured
            <span className="text-[#734F96] font-medium"> Categories</span>{" "}
          </h1>
        </div>
        {/* button section */}
        <div className="space-x-3 p-4">
          <button
            onClick={() => {
              filterProduct("Vegetables");
            }}
            className="border border-gray-700 rounded-2xl px-2 py-1"
          >
            Vegetables
          </button>
          <button
            onClick={() => {
              filterProduct("Non Veg");
            }}
            className="border border-gray-700 rounded-2xl px-2 py-1"
          >
            Non Veg
          </button>
          <button
            onClick={() => {
              filterProduct("Beverages");
            }}
            className="border border-gray-700 rounded-2xl px-2 py-1"
          >
            Beverages
          </button>
          <button
            onClick={() => {
              filterProduct("Fruits");
            }}
            className="border border-gray-700 rounded-2xl px-2 py-1"
          >
            Fruits
          </button>
          <button
            onClick={() => {
              filterProduct("Dairy Products");
            }}
            className="border border-gray-700 rounded-2xl px-2 py-1"
          >
            Dairy Products
          </button>
          <button
            onClick={() => {
              filterProduct("Personal Care");
            }}
            className="border border-gray-700 rounded-2xl px-2 py-1"
          >
            Personal Care
          </button>
          <button
            onClick={() => {
              filterProduct("Masalas");
            }}
            className="border border-gray-700 rounded-2xl px-2 py-1"
          >
            Masalas
          </button>
          <button
            onClick={() => {
              filterProduct("Packaged Foods");
            }}
            className="border border-gray-700 rounded-2xl px-2 py-1"
          >
            Packaged Foods
          </button>
          <button
            onClick={() => {
              filterProduct("Others");
            }}
            className="border border-gray-700 rounded-2xl px-2 py-1"
          >
            Others
          </button>
        </div>
        {/* food section */}
        <div className="p-3 ">
          {filterProducts.length > 0 ? (
            <div className="flex gap-10 flex-wrap justify-center">
              {filterProducts.slice(0, 4).map((item) => {
                return (
                  <div key={item._id}>
                    <div className="p-2 flex justify-center items-center bg-gray-100 py-10 rounded-md w-64 ">
                      <NavLink to={`/productDescription/${item._id}`}>
                        <img
                          src={`http://localhost:9000/upload/${item.image}`}
                          alt=""
                          className="h-44 rounded-md"
                        />
                        <h1 className="font-semibold mt-4">{item.name}</h1>
                        <h1>Category: {item.category}</h1>
                        <h1>
                          Rs.
                          <span className="text-red-500 font-bold">
                            {item.price}/
                            <span className="text-black font-normal">
                              {item.unit}
                            </span>
                          </span>{" "}
                        </h1>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              {" "}
              {product.length > 0 ? (
                <div className="flex gap-10 flex-wrap">
                  {product.slice(0, 4).map((item) => {
                    return (
                      <div key={item._id}>
                        <div className="bg-gray-100 w-64 flex items-center justify-center flex-col p-2 py-10 rounded-md">
                          <NavLink to={`/productDescription/${item._id}`}>
                            <img
                              src={`http://localhost:9000/upload/${item.image}`}
                              alt=""
                              className="h-44 rounded-md"
                            />
                            <h1 className="font-semibold mt-4">{item.name}</h1>
                            <h1 className="">{item.category}</h1>
                            <h1>
                              Rs.
                              <span className="text-red-500 font-bold">
                                {item.price}/
                                <span className="text-black font-normal">
                                  {item.unit}
                                </span>
                              </span>{" "}
                            </h1>
                          </NavLink>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>Product not found</div>
              )}
            </div>
          )}
        </div>
        <div className="mt-8">
          <NavLink
            to="/products"
            className="bg-[#734F96] rounded-xl text-white py-3 px-6"
          >
            Explore Our Products
          </NavLink>
        </div>
      </div>
      <div className=" h-[70vh] flex flex-wrap bg-gray-200">
        <div className="m-auto flex gap-32 justify-center rounded-xl bg-[#00838F] text-white px-10 w-[170vh] h-96">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="text-5xl max-w-2xl font-semibold">
              We Delivery on Next Day
            </h1>
            <h1 className="text-4xl max-w-2xl font-semibold">
              from 10:00 AM to 08:00 PM{" "}
            </h1>
            <h1 className="text-xl">For orders starts from Rs. 1000</h1>
          </div>
          <div className="bg-[#00838F]">
            <img
              src="https://png.pngtree.com/png-clipart/20240310/original/pngtree-courier-on-a-vintage-motor-bike-cartoon-character-express-delivery-concept-png-image_14558408.png"
              alt=""
              className="h-96 bg-[#00838F] rounded-full"
            />
          </div>
        </div>
      </div>
      <section>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center py-20">
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition w-64 flex flex-col justify-center items-center">
            <BsCart4 size={80} />
            <h4 className="font-medium mb-1">Fresh Products</h4>
            <p className="text-sm text-gray-600">
              We ensure fresh vegetables, fruits, and dairy delivered daily.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition w-64 flex flex-col justify-center items-center">
            <CiDeliveryTruck size={80} />
            <h4 className="font-medium mb-1">Fast Delivery</h4>
            <p className="text-sm text-gray-600">
              Get your order delivered at your convenience, quickly and
              reliably.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition w-64 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4298/4298671.png"
              alt="Affordable"
              className="w-16 mx-auto mb-3"
            />
            <h4 className="font-medium mb-1">Affordable Prices</h4>
            <p className="text-sm text-gray-600">
              Competitive pricing without compromising quality or service.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default Home;
