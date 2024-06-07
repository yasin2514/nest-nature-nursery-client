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
import Error from "../components/ui/Error";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";

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
          fetch(
            `https://nest-nature-nursery-server.vercel.app/product/${params.id}`
          ),
      },
    ],
    errorElement: <Error />,
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
        element: (
          <AdminRoute>
            <UploadProducts />
          </AdminRoute>
        ),
      },
      {
        path: "products/update/:id",
        element: (
          <AdminRoute>
            <UpdateProducts />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-nature-nursery-server.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "products/admin-products",
        element: (
          <AdminRoute>
            <MyProductListAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "products/products-list",
        element: (
          <AdminRoute>
            <AdminProductList />
          </AdminRoute>
        ),
      },
      {
        path: "orders/pending",
        element: (
          <AdminRoute>
            <PendingOrders />
          </AdminRoute>
        ),
      },
      {
        path: "orders/completed",
        element: (
          <AdminRoute>
            <CompletedOrders />
          </AdminRoute>
        ),
      },
      {
        path: "admin/users-list",
        element: (
          <AdminRoute>
            <UserList />
          </AdminRoute>
        ),
      },
      {
        path: "admin-settings",
        element: (
          <AdminRoute>
            <AdminSettings />
          </AdminRoute>
        ),
      },
      {
        path: "delivery/pending",
        element: (
          <AdminRoute>
            <PendingDelivery />
          </AdminRoute>
        ),
      },
      {
        path: "delivery/completed",
        element: (
          <AdminRoute>
            <CompletedDelivery />
          </AdminRoute>
        ),
      },

      {
        path: "user-settings",
        element: (
          <UserRoute>
            {" "}
            <UserSettings />{" "}
          </UserRoute>
        ),
      },
      {
        path: "cart/pending-items",
        element: (
          <UserRoute>
            {" "}
            <CartItems />{" "}
          </UserRoute>
        ),
      },
      {
        path: "cart/purchased-items",
        element: (
          <UserRoute>
            {" "}
            <PurchasedItems />{" "}
          </UserRoute>
        ),
      },
      {
        path: "cart/to-receive-items",
        element: (
          <UserRoute>
            {" "}
            <ToReceiveItems />{" "}
          </UserRoute>
        ),
      },
      {
        path: "cart/received-items",
        element: (
          <UserRoute>
            {" "}
            <ReceiveItems />{" "}
          </UserRoute>
        ),
      },
      {
        path: "payment-history/stripe",
        element: (
          <UserRoute>
            {" "}
            <StripePaymentHistory />{" "}
          </UserRoute>
        ),
      },
      {
        path: "payment-history/cod",
        element: (
          <UserRoute>
            {" "}
            <CODPaymentHistory />{" "}
          </UserRoute>
        ),
      },
      {
        path: "payment-history/ssl",
        element: (
          <UserRoute>
            {" "}
            <SSLPaymentHistory />{" "}
          </UserRoute>
        ),
      },
      {
        path: "make-single-payment/:id",
        element: (
          <UserRoute>
            {" "}
            <MakeSinglePayment />{" "}
          </UserRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-nature-nursery-server.vercel.app/cartItem/${params?.id}`
          ),
      },
      {
        path: "make-all-payment",
        element: (
          <UserRoute>
            {" "}
            <MakeAllPayment />{" "}
          </UserRoute>
        ),
      },
      {
        path: "payment-gateway/stripe",
        element: (
          <UserRoute>
            {" "}
            <StripeAllPayment />{" "}
          </UserRoute>
        ),
      },
      {
        path: "payment-gateway/cod",
        element: (
          <UserRoute>
            {" "}
            <CODAllPayment />{" "}
          </UserRoute>
        ),
      },
      {
        path: "payment-gateway/ssl",
        element: (
          <UserRoute>
            {" "}
            <SslAllPayment />{" "}
          </UserRoute>
        ),
      },
      {
        path: "payment-gateway/stripe/:id",
        element: (
          <UserRoute>
            {" "}
            <StripePaymentSingle />{" "}
          </UserRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-nature-nursery-server.vercel.app/cartItem/${params?.id}`
          ),
      },
      {
        path: "payment-gateway/cod/:id",
        element: (
          <UserRoute>
            {" "}
            <CODSinglePayment />{" "}
          </UserRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-nature-nursery-server.vercel.app/cartItem/${params?.id}`
          ),
      },
      {
        path: "payment-gateway/ssl/:id",
        element: (
          <UserRoute>
            {" "}
            <SslSinglePayment />{" "}
          </UserRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-nature-nursery-server.vercel.app/cartItem/${params?.id}`
          ),
      },
      {
        path: "payment-details/:id",
        element: <PaymentsDetails />,
        loader: ({ params }) =>
          fetch(
            `https://nest-nature-nursery-server.vercel.app/singlePaymentInfo/${params?.id}`
          ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
