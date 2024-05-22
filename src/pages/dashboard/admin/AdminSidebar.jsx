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
      child: [
        {
          name: "Upload Product",
          to: "/dashboard/admin-products",
        },
        {
          name: "My Product List",
          to: "/dashboard/admin-products",
        },

        {
          name: "Total Product List",
          to: "/dashboard/admin-products",
        },
      ],
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

  return (
    <SideBarComponent data={navLinks} settingPath="/dashboard/Admin/settings" />
  );
};

export default AdminSidebar;
