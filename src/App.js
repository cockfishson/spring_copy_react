import "./App.css";
import ProjectsPage from "./components/projects_page/projects_page";
import LoginPage from "./components/login_page/login_page";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/protected_routes";
import { ROUTES } from "./routes";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <HashRouter>
      <Routes>
        <Route
          path={ROUTES.LOGIN}
          element={
            !isAuthenticated ? <LoginPage /> : <Navigate to={ROUTES.HOME} />
          }
        />
        <Route element={<ProtectedRoutes userAuth={isAuthenticated} />}>
          <Route path={ROUTES.HOME} element={<ProjectsPage />} />
        </Route>
        <Route
          path="*"
          element={
            <Navigate
              to={isAuthenticated ? ROUTES.HOME : ROUTES.LOGIN}
              replace
            />
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
