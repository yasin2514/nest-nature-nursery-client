import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import SidebarHeader from "../components/dashboard/SidebarHeader";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-2 bg-[#01352c]">
        <SidebarHeader />
        <Sidebar />
      </div>
      <div className="col-span-10">
        <Header />
        <div className="p-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
