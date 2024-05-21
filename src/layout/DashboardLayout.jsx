import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import SidebarHeader from "../components/dashboard/SidebarHeader";
import { useState } from "react";

const DashboardLayout = () => {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div className="max-h-screen h-full flex transition-all duration-500 ">
      <div
        className={`bg-[#01352c] text-white transition-all duration-500 ${
          collapse ? "w-1/6" : "w-0"
        } overflow-hidden`}
      >
        {collapse && (
          <div>
            <SidebarHeader />
            <Sidebar />
          </div>
        )}
      </div>
      <div
        className={`flex-1 transition-all duration-500 ${
          collapse ? "w-5/6" : "w-full h-screen"
        }`}
      >
        <Header collapse={collapse} toggleCollapse={toggleCollapse} />
        <div className="p-5 border h-full max-h-[calc(100vh-70px)] overflow-auto rounded-lg bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
