import SideBarComponent from "../../../components/dashboard/SideBarComponent";

const UserSidebar = () => {
  const navLinks = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icons: "",
    },
    {
      name: "Cart",
      to: "/dashboard/products",
    },
    {
      name: "Orders",
      to: "/dashboard/orders",
    },
    {
      name: "Payment History",
      to: "/dashboard/users",
    },
  ];
     return (
       <SideBarComponent data={navLinks} settingPath="/dashboard/User/settings" />
     );

};

export default UserSidebar;