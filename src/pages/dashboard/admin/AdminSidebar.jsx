import SideBarComponent from "../../../components/dashboard/SideBarComponent";

const AdminSidebar = () => {
  const navLinks = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icons: "",
    },
    {
      name: "Products",
      to: "/dashboard/products",
    },
    {
      name: "Orders",
      to: "/dashboard/orders",
    },
    {
      name: "Users",
      to: "/dashboard/users",
    },
  ];

  return <SideBarComponent data={navLinks} settingPath="/dashboard/Admin/settings" />;
};

export default AdminSidebar;
