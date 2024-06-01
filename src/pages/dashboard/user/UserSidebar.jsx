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
          name: "Cart Items",
          to: "/dashboard/cart/pending-items",
        },
        {
          name: "Purchased Items",
          to: "/dashboard/cart/purchased-items",
        },
        {
        name:"To Receive Items",
        to:"/dashboard/cart/to-receive-items"
        },
        {
          name:"Received Items",
          to:"/dashboard/cart/received-items"
        }
      ],
    },
    {
      name: "Payment History",
      child:[
        {
          name: "Online Payments",
          to: "/dashboard/payment-history/online",
        },
        {
          name: "COD Payments",
          to: "/dashboard/payment-history/cod", 
        }
      ]
    },
  ];

  return (
    <SideBarComponent data={navLinks} settingPath="/dashboard/user-settings" />
  );
};

export default UserSidebar;
