import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ redirectTo = "/", component: Component }) => {
  const isLoggedIn = false;
  const isRefreshing = false;
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
