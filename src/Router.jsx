import { RouterProvider, createBrowserRouter } from "react-router-dom";
// layouts
import RootLayout from "./layouts/RootLayout";
import GamesLayout from "./layouts/GamesLayout";
import PopularLayout from "./layouts/PopularLayout";
// pages
import Home from "./pages/Home";
import Games from "./pages/Games";

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
          children: [{ index: true, element: <Games></Games> }],
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
