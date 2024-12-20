import "./App.css";
import ProjectsPage from "./components/projects_page/projects_page";
import LoginPage from "./components/login_page/login_page";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/protected_routes";
import { ROUTES } from "./routes";
import SignUpPage from "./components/sign_up_page/sign_up_page";
const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route element={<ProtectedRoutes userAuth={isAuthenticated} />}>
          <Route path={ROUTES.HOME} element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
