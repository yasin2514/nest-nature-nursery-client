import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import SidebarHeader from "../components/dashboard/SidebarHeader";
import { useState } from "react";

const AdminLayout = () => {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div className="h-screen flex transition-all duration-500">
      <div
        className={`bg-[#01352c] transition-all duration-500 ${
          collapse ? "w-1/6" : "w-0"
        } overflow-hidden`}
      >
        {collapse && (
          <div className="p-4">
            <SidebarHeader />
            <Sidebar />
          </div>
        )}
      </div>
      <div
        className={`flex-1 transition-all duration-500 ${
          collapse ? "w-5/6" : "w-full"
        }`}
      >
        <Header collapse={collapse} toggleCollapse={toggleCollapse} />
        <div className="p-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
