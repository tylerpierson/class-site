import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, role, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/auth?mode=login" />;
  if (requiredRole && role !== requiredRole) return <Navigate to="/dashboard" />;

  return children;
};

export default ProtectedRoute;
