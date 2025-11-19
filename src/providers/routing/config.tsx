import { Home } from "@/pages/Home";
import { Outlet, type RouteObject } from "react-router-dom";

const routesConfig: RouteObject = {
  element: <Outlet />,
  children: [
    {
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
};
export default routesConfig;
