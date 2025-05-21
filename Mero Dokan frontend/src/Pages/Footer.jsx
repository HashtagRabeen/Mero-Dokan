import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-2xl font-bold">Mero Dokan</div>

        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-400"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-400"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mero Dokan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
