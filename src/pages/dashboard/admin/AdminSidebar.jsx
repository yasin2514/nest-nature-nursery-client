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
          to: "/dashboard/products/upload",
        },
        {
          name: "My Product List",
          to: "/dashboard/products/admin-products",
        },
        {
          name: "Total Product List",
          to: "products/products-list",
        },
      ],
    },
    {
      name: "Orders",
      child: [
        {
          name: "Pending Orders",
          to: "/dashboard/orders/pending",
        },
        {
          name: "Completed Orders",
          to: "/dashboard/orders/completed",
        },
      ],
    },
    {
      name: "User List",
      to: "/dashboard/admin/users-list",
    },
  ];

  return (
    <SideBarComponent data={navLinks} settingPath="/dashboard/admin-settings" />
  );
};

export default AdminSidebar;
