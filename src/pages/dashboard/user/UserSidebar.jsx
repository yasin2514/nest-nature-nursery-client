import SideBarComponent from "../../../components/dashboard/SideBarComponent";

const UserSidebar = () => {
  const navLinks = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icons: "",
    },
    {
      name: "My Cart",
      child: [
        {
          name: "Pending Items",
          to: "/dashboard/cart/pending-items",
        },
        {
          name: "Purchased Items",
          to: "/dashboard/cart/purchased-items",
        },
      ],
    },
    {
      name: "Payment History",
      to: "/dashboard/payment-history",
    },
  ];

  return (
    <SideBarComponent data={navLinks} settingPath="/dashboard/user-settings" />
  );
};

export default UserSidebar;
