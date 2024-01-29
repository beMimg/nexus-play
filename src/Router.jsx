import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
// layouts
import RootLayout from "./layouts/RootLayout";
import GamesLayout, { categoriesLoader } from "./layouts/GamesLayout";
import PopularLayout from "./layouts/PopularLayout";
// pages
import Home from "./pages/Home";
import Games, { categorieLoader } from "./pages/Games";
import GamesDefault from "./pages/GamesDefault";
import Checkout from "./pages/Checkout";
const Router = () => {
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout cart={cart} setCart={setCart}></RootLayout>,
      children: [
        { index: true, element: <Home></Home> },
        {
          path: "games",
          element: <GamesLayout></GamesLayout>,
          loader: categoriesLoader,
          children: [
            { index: true, element: <GamesDefault></GamesDefault> },
            {
              path: ":id",
              element: <Games setCart={setCart}></Games>,
              loader: categorieLoader,
            },
          ],
        },
        { path: "checkout", element: <Checkout /> },
        {
          path: "popular",
          element: <PopularLayout></PopularLayout>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
