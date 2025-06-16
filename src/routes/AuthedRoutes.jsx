import { Route, Routes, Navigate } from "react-router";
import { Dashboard } from "../pages/Dashboard/Dashboard.page";
import Login from "../pages/Login/Login.page";

const AuthedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export { AuthedRoutes };