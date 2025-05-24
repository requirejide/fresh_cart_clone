import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../components/Product";
import Homepage from "./Homepage";
import Layout from "./Layout";
import Shop from "./Shop";
import WishList from "../components/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:title", element: <Product /> },
      { path: "shop/shop-wishlist", element: <WishList /> },
    ],
  },
]);

export default router;
