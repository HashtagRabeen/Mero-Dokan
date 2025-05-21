import { BsCart4 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

function Services() {
  return (
    <div>
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
    </div>
  );
}

export default Services;
