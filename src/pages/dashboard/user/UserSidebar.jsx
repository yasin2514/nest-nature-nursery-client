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
          name: "Purchase Items",
          to: "/dashboard/cart/purchased-items",
        },
        {
          name: "To Receive Items",
          to: "/dashboard/cart/to-receive-items",
        },
        {
          name: "Receive Items",
          to: "/dashboard/cart/received-items",
        },
      ],
    },
    {
      name: "Payment History",
      child: [
        {
          name: "Stripe Payments",
          to: "/dashboard/payment-history/stripe",
        },
        {
          name: "COD Payments",
          to: "/dashboard/payment-history/cod",
        },
        {
          name: "SSL Payments",
          to: "/dashboard/payment-history/ssl",
        },
      ],
    },
  ];

  return (
    <SideBarComponent data={navLinks} settingPath="/dashboard/user-settings" />
  );
};

export default UserSidebar;
