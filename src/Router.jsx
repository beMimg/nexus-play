import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
// layouts
import RootLayout from "./layouts/RootLayout";
import GamesLayout, { categoriesLoader } from "./layouts/GamesLayout";
import PopularLayout from "./layouts/PopularLayout";
// pages
import Home from "./pages/Home";
import Games, { categorieLoader } from "./pages/Games";
import GamesDefault from "./pages/GamesDefault";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        { index: true, element: <Home></Home> },
        {
          path: "games",
          element: <GamesLayout></GamesLayout>,
          loader: categoriesLoader,
          children: [
            { index: true, element: <GamesDefault></GamesDefault> },
            { path: ":id", element: <Games></Games>, loader: categorieLoader },
          ],
        },
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
