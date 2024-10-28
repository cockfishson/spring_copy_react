import "./App.css";
import ProjectsPage from "./components/projects_page/projects_page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login_page/login_page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
