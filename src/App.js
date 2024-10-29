import "./App.css";
import ProjectsPage from "./components/projects_page/projects_page";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/login_page/login_page";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./components/redux/reducers/auth_reducer";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? <LoginPage /> : <Navigate to="/projects" />
          }
        />
        <Route
          path="/projects"
          element={isAuthenticated ? <ProjectsPage /> : <Navigate to="/" />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
