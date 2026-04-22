import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import DashboardPage from "./pages/dashboard"
import UsersPage from "./pages/users"
import UserCreatePage from "./pages/user-create"
import UserEditPage from "./pages/user-edit"
import UserViewPage from "./pages/user-view"
import { DashboardLayout } from "./components/templates/dashboard-layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={
        <DashboardLayout>
          <DashboardPage />
        </DashboardLayout>
      } />
      <Route path="/users" element={
        <DashboardLayout>
          <UsersPage />
        </DashboardLayout>
      } />
      <Route path="/users/create" element={
        <DashboardLayout>
          <UserCreatePage />
        </DashboardLayout>
      } />
      <Route path="/users/edit/:id" element={
        <DashboardLayout>
          <UserEditPage />
        </DashboardLayout>
      } />
      <Route path="/users/view/:id" element={
        <DashboardLayout>
          <UserViewPage />
        </DashboardLayout>
      } />
    </Routes>
  )
}

export default App
