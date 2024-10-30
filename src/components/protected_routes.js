import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ userAuth }) => {
  return userAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
