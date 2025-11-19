import routesConfig from "@/providers/routing/config";
import { Navigate, useRoutes } from "react-router-dom";

const AppRouter = () => {
  const routes = useRoutes([
    routesConfig,
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return routes;
};

export default AppRouter;
