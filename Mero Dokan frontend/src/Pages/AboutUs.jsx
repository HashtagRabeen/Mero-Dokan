import { NavLink } from "react-router-dom";

import { BsCart4 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

function AboutUs() {
  return (
    <div className="px-6 md:px-20 py-12 space-y-16">
      <div className="text-center bg-[#734F96] text-white py-10 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className=" max-w-2xl mx-auto">
          Delivering fresh groceries, straight to your door. We believe in
          making your everyday shopping easy, fast, and affordable.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 shadow-[#734F96] shadow-lg rounded-3xl">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081648.png"
            alt="Grocery Team"
            className="rounded-lg w-full"
          />
        </div>
        <div className="md:w-1/2 shadow-md shadow-[#734F96] p-3">
          <h2 className="text-2xl font-semibold text-[#734F96] mb-4 ">
            Who We Are
          </h2>
          <p className="text-gray-700">
            We are a Nepal-based online grocery store committed to providing the
            best quality products at fair prices. From fresh vegetables and
            fruits to dairy, snacks, and personal care, we deliver everything
            you need — fast and fresh.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-green-50 p-6 rounded-lg shadow-md flex-1">
          <h3 className="text-xl font-semibold text-[#734F96] mb-3">
            Our Mission
          </h3>
          <p className="text-gray-700">
            To redefine grocery shopping in Nepal by bringing convenience and
            freshness to every household through reliable, fast, and friendly
            service.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md flex-1">
          <h3 className="text-xl font-semibold text-[#734F96] mb-3">
            Our Vision
          </h3>
          <p className="text-gray-700">
            To become Nepal’s most loved and trusted online grocery store by
            delivering excellence in quality and service.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-[#734F96] mb-6 text-center">
          Why Choose Us?
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center">
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
      </div>

      <div className="text-center mt-16">
        <h3 className="text-xl font-semibold mb-3">
          Have questions or suggestions?
        </h3>
        <p className="text-gray-600 mb-4">We{"'"}d love to hear from you.</p>
        <NavLink
          to="/contact"
          className="inline-block bg-[#734F96] text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}

export default AboutUs;
