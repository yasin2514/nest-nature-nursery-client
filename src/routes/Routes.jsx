import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/about";
import Login from "../pages/login";
import Register from "../pages/register";
import Terms from "../pages/terms";

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
        path: "/about",
        element: <About />,
      },
      {
        path:"/login",
        element: <Login />,
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/terms",
        element:<Terms/>
      }
    ],
  },
]);

export default router;
