import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import DashboardPage from "./pages/dashboard";
import UsersPage from "./pages/users";
import UserCreatePage from "./pages/users/create";
import UserEditPage from "./pages/users/edit";
import UserViewPage from "./pages/users/view";
import LogsPage from "./pages/logpg";
import { DashboardLayout } from "./components/templates/dashboard-layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/create" element={<UserCreatePage />} />
        <Route path="users/edit/:id" element={<UserEditPage />} />
        <Route path="users/view/:id" element={<UserViewPage />} />
        <Route path="logs" element={<LogsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
