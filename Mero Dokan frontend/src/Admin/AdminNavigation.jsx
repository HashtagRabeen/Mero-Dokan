import { NavLink } from "react-router-dom";

function AdminNavigation() {
  return (
    <div className="flex flex-col p-2 h-96 w-96 ml-20">
      <NavLink to='product' className="hover:bg-stone-500 w-[120px] h-10 flex justify-center items-center">Product</NavLink>
      <NavLink to='customer' className="hover:bg-stone-500 w-[120px] h-10 flex justify-center items-center">Customer</NavLink>
    </div>
  );
}

export default AdminNavigation;
