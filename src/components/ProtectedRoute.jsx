import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "../context/authContext";

function ProtectedRoute({ redirectPath = "/login" }) {
  const location = useLocation();
  const { isAuthenticated, loading } = useAuthState();

  if (loading) return "loading";

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={redirectPath} state={{ from: location }} replace />
  );
}

export default ProtectedRoute;
