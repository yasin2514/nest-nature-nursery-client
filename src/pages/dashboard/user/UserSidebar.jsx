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
          to: "/dashboard/pending-items",
        },
        {
          name: "Purchased Items",
          to: "/dashboard/purchased-items",
        },
      ],
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
