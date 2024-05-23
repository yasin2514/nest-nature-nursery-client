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
import PendingItems from "../pages/dashboard/user/PendingItems";
import PurchasedItems from "../pages/dashboard/user/PurchasedItems";
import PaymentHistory from "../pages/dashboard/user/PaymentHistory";

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
    element: <DashboardLayout />,
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
        path: "user-settings",
        element: <UserSettings />,
      },
      {
        path: "cart/pending-items",
        element: <PendingItems />,
      },
      {
        path: "cart/purchased-items",
        element: <PurchasedItems />,
      },
      {
        path:"payment-history",
        element:<PaymentHistory/>
      }
    ],
  },
]);

export default router;
