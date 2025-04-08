import { ReactNode, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate, useNavigate } from "react-router-dom";

interface RoleBasedRouteProps {
  children: ReactNode;
  forbiddenRoles: string[];
}

const RoleBasedRoute = ({ children, forbiddenRoles }: RoleBasedRouteProps) => {
  const { role, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Wait until authentication is complete and then check role
    if (!loading && role && forbiddenRoles.includes(role)) {
      navigate("/forbidden", { replace: true });
    }
  }, [loading, role, forbiddenRoles, navigate]);

  // If still loading, return null or a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }
  
  // If user has a forbidden role, redirect immediately
  if (role && forbiddenRoles.includes(role)) {
    return <Navigate to="/forbidden" replace />;
  }
  
  // Otherwise, render the protected content
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default RoleBasedRoute;
