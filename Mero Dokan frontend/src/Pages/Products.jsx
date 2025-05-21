import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const getProduct = async () => {
    let response = await fetch("http://localhost:9000/api/getProduct");
    response = await response.json();
    console.log(response);
    setProduct(response.showProduct);
    const filterProduct = response.showProduct.filter((item) => {
      return item.category === "Buff";
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
      <div className="flex flex-col justify-center items-center p-5">
        <div className=" text-center p-2 ">
          <h1 className="text-3xl">
            Featured{" "}
            <span className="text-[#734F96] font-medium"> Categories</span>{" "}
          </h1>
        </div>
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
        <div className="p-3 ">
          {filterProducts.length > 0 ? (
            <div className="flex gap-10 flex-wrap justify-center">
              {filterProducts.map((item) => {
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
                  {product.map((item) => {
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
      </div>
    </div>
  );
}

export default Products;
