import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import MyOrder from "../Components/MyOrder";
import Login from "../Components/Login";
import Register from "../Components/Register";
import NotFound from "../Components/NotFound";
import Clothing from "../Components/Clothing";
import ProductDetails from "../Components/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/clothing",
        element: <Clothing />,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },

      {
        path: "/orders",
        element: <MyOrder />,
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default routes;
