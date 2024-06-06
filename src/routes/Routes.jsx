import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Terms from "../pages/terms";
import PlantCategory from "../pages/plantCategory";
import AllPlants from "../pages/allPlants";
import ContactUS from "../pages/contactUs";
import ProductDetails from "../components/ui/ProductDetails";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard";
import UploadProducts from "../pages/dashboard/admin/UploadProducts";
import MyProductListAdmin from "../pages/dashboard/admin/MyProductListAdmin";
import AdminProductList from "../pages/dashboard/admin/AdminProductList";
import PendingOrders from "../pages/dashboard/admin/PendingOrders";
import CompletedOrders from "../pages/dashboard/admin/CompletedOrders";
import UserList from "../pages/dashboard/admin/UserList";
import AdminSettings from "../pages/dashboard/admin/AdminSettings";
import UserSettings from "../pages/dashboard/user/UserSettings";
import PurchasedItems from "../pages/dashboard/user/PurchasedItems";
import UpdateProducts from "../pages/dashboard/admin/UpdateProducts";
import MakeSinglePayment from "../pages/dashboard/user/MakeSinglePayment";
import MakeAllPayment from "../pages/dashboard/user/MakeAllPayment";
import ToReceiveItems from "../pages/dashboard/user/ToReceiveItems";
import ReceiveItems from "../pages/dashboard/user/ReceiveItems";
import StripePaymentSingle from "../components/dashboard/StripePaymentSingle";
import CODSinglePayment from "../components/dashboard/CODSinglePayment";
import SslSinglePayment from "../components/dashboard/SslSinglePayment";
import StripeAllPayment from "../components/dashboard/StripeAllPayment";
import CODAllPayment from "../components/dashboard/CODAllPayment";
import SslAllPayment from "../components/dashboard/SslAllPayment";
import CartItems from "../pages/dashboard/user/CartItems";
import SSLPaymentHistory from "../pages/dashboard/user/SSLPaymentHistory";
import CODPaymentHistory from "../pages/dashboard/user/CODPaymentHistory";
import StripePaymentHistory from "../pages/dashboard/user/StripePaymentHistory";
import PaymentsDetails from "../components/dashboard/PaymentsDetails";
import PendingDelivery from "../pages/dashboard/admin/PendingDelivery";
import CompletedDelivery from "../pages/dashboard/admin/CompletedDelivery";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact-us",
        element: <ContactUS />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "plant-category",
        element: <PlantCategory />,
      },
      {
        path: "all-plants",
        element: <AllPlants />,
      },
      {
        path: "plant-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "products/upload",
        element: <UploadProducts />,
      },
      {
        path: "products/update/:id",
        element: <UpdateProducts />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "products/admin-products",
        element: <MyProductListAdmin />,
      },
      {
        path: "products/products-list",
        element: <AdminProductList />,
      },
      {
        path: "orders/pending",
        element: <PendingOrders />,
      },
      {
        path: "orders/completed",
        element: <CompletedOrders />,
      },
      {
        path: "admin/users-list",
        element: <UserList />,
      },
      {
        path: "admin-settings",
        element: <AdminSettings />,
      },
      {
        path: "delivery/pending",
        element: <PendingDelivery />,
      },
      {
        path: "delivery/completed",
        element: <CompletedDelivery />,
      },

      {
        path: "user-settings",
        element: <UserSettings />,
      },
      {
        path: "cart/pending-items",
        element: <CartItems />,
      },
      {
        path: "cart/purchased-items",
        element: <PurchasedItems />,
      },
      {
        path: "cart/to-receive-items",
        element: <ToReceiveItems />,
      },
      {
        path: "cart/received-items",
        element: <ReceiveItems />,
      },
      {
        path: "payment-history/stripe",
        element: <StripePaymentHistory />,
      },
      {
        path: "payment-history/cod",
        element: <CODPaymentHistory />,
      },
      {
        path: "payment-history/ssl",
        element: <SSLPaymentHistory />,
      },
      {
        path: "make-single-payment/:id",
        element: <MakeSinglePayment />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cartItem/${params?.id}`),
      },
      {
        path: "make-all-payment",
        element: <MakeAllPayment />,
      },
      {
        path: "payment-gateway/stripe",
        element: <StripeAllPayment />,
      },
      {
        path: "payment-gateway/cod",
        element: <CODAllPayment />,
      },
      {
        path: "payment-gateway/ssl",
        element: <SslAllPayment />,
      },
      {
        path: "payment-gateway/stripe/:id",
        element: <StripePaymentSingle />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cartItem/${params?.id}`),
      },
      {
        path: "payment-gateway/cod/:id",
        element: <CODSinglePayment />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cartItem/${params?.id}`),
      },
      {
        path: "payment-gateway/ssl/:id",
        element: <SslSinglePayment />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cartItem/${params?.id}`),
      },
      {
        path: "payment-details/:id",
        element: <PaymentsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singlePaymentInfo/${params?.id}`),
      },
    ],
  },
]);

export default router;
