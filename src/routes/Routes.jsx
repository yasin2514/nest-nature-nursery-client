import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Terms from "../pages/terms";
import PlantCategory from "../pages/plantCategory";
import AllPlants from "../pages/allPlants";
import AdminLayout from "../layout/AdminLayout";
import ContactUS from "../pages/contactUs";

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
        path: "/contact-us",
        element: <ContactUS />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/plant-category",
        element: <PlantCategory />,
      },
      {
        path: "/all-plants",
        element: <AllPlants />,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<AdminLayout/>,
    children:[
      {
        index:true,
        element:<h1>Dashboard</h1>
      }
    ]
  }
]);

export default router;
