import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { lazy } from "react";
import { Layout } from "./Components/Layout/Layout";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";

const Home = lazy(() => import("./pages/Home/Home"));
const Psychologists = lazy(() => import("./pages/Psychologists/Psychologists"));
const Favorites = lazy(() => import("./pages/Favorite/Favorites"));

function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "psychologists", element: <Psychologists /> },
        {
          path: "favorites",
          element: <PrivateRoute redirectTo="/" component={Favorites} />,
        },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
  ];

  const routerOptions = {
    basename: "/psychologists-services/",
  };
  const router = createBrowserRouter(routes, routerOptions);

  return <RouterProvider router={router} />;
}

export default App;
