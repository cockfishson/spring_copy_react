import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({ userAuth }) {
  return userAuth ? <Outlet /> : <Navigate to="/" />;
}
