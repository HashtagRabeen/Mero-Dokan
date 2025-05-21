import { Outlet } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";

function AdminDashboard() {
  return (
    <div className="flex h-auto">
      <div className="bg-[#00838F] w-[20%] text-white h-96">
         <AdminNavigation/>
      </div>
      <div className="bg-slate-100 w-[80%]">
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminDashboard;
