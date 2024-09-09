import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import MyOrder from "../Components/MyOrder";
import Login from "../Components/Login";
import Register from "../Components/Register";
import NotFound from "../Components/NotFound";
import Clothing from "../Components/Clothing";
import ProductDetails from "../Components/ProductDetails";
import Sale from "../Components/Sale";
import NewIn from "../Components/menuPage/NewIn";
import Vacation from "../Components/menuPage/Vacation";
import LuckySizes from "../Components/menuPage/LuckySizes";
import CurvyChic from "../Components/menuPage/CurvyChic";
import Dresses from "../Components/menuPage/Dresses";
import Abayas from "../Components/menuPage/Abayas";
import Kaftans from "../Components/menuPage/Kaftans";
import CoordSets from "../Components/menuPage/CoordSets";
import Tops from "../Components/menuPage/Tops";
import Bottoms from "../Components/menuPage/Bottoms";
import Beachwear from "../Components/menuPage/Beachwear";
import Jumpsuit from "../Components/menuPage/Jumpsuit";
import ModestDressesAbayas from "../Components/menuPage/ModestDressesAbayas";
import ModestDressesKaftans from "../Components/menuPage/ModestDressesKaftans";
import ModestDressesHijabs from "../Components/menuPage/ModestDressesHijabs";
import AccessoriesBangs from "../Components/menuPage/AccessoriesBangs";
import AccessoriesHijabs from "../Components/menuPage/AccessoriesHijabs";
import Press from "../Components/menuPage/Press";
import BlogPosts from "../Components/menuPage/BlogPosts";
import Magazine from "../Components/menuPage/Magazine";
import InfluencerEdit from "../Components/menuPage/InfluencerEdit";
import About from "../Components/menuPage/About";
import LoveYourPlanet from "../Components/menuPage/LoveYourPlanet";

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
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/new-in",
        element: <NewIn />,
      },
      {
        path: "/vacation-edit",
        element: <Vacation />,
      },
      {
        path: "/lucky-sizes",
        element: <LuckySizes />,
      },
      {
        path: "/curvy-chic",
        element: <CurvyChic />,
      },
      {
        path: "/dresses",
        element: <Dresses />,
      },
      {
        path: "/abayas",
        element: <Abayas />,
      },
      {
        path: "/kaftans",
        element: <Kaftans />,
      },
      {
        path: "/co-ord-sets",
        element: <CoordSets />,
      },
      {
        path: "/tops",
        element: <Tops />,
      },
      {
        path: "/bottoms",
        element: <Bottoms />,
      },
      {
        path: "/beachwear",
        element: <Beachwear />,
      },
      {
        path: "/jumpsuit",
        element: <Jumpsuit />,
      },
      {
        path: "/modest-dresses/abayas",
        element: <ModestDressesAbayas />,
      },
      {
        path: "/modest-dresses/kaftans",
        element: <ModestDressesKaftans />,
      },
      {
        path: "/hijabs",
        element: <ModestDressesHijabs />,
      },
      {
        path: "/bags",
        element: <AccessoriesBangs />,
      },
      {
        path: "/accessories/hijabs",
        element: <AccessoriesHijabs />,
      },
      {
        path: "/press",
        element: <Press />,
      },
      {
        path: "/blog",
        element: <BlogPosts />,
      },
      {
        path: "/magazine",
        element: <Magazine />,
      },
      {
        path: "/influencer-edit",
        element: <InfluencerEdit />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/love-your-planet",
        element: <LoveYourPlanet />,
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
