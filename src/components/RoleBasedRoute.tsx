import { ReactNode, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate, useNavigate } from "react-router-dom";

interface RoleBasedRouteProps {
  children: ReactNode;
  forbiddenRoles?: string[];
  allowedRoles?: string[];
  redirectPath?: string;
}

const RoleBasedRoute = ({ 
  children, 
  forbiddenRoles = [], 
  allowedRoles = [], 
  redirectPath = "/forbidden" 
}: RoleBasedRouteProps) => {
  const { role, loading } = useAuth();
  const navigate = useNavigate();
  
  const isRoleForbidden = role && forbiddenRoles.includes(role);
  const isRoleNotAllowed = allowedRoles.length > 0 && role && !allowedRoles.includes(role);
  const shouldRedirect = isRoleForbidden || isRoleNotAllowed;
  
  useEffect(() => {
    console.log("RoleBasedRoute - Current role:", role);
    console.log("RoleBasedRoute - Forbidden roles:", forbiddenRoles);
    console.log("RoleBasedRoute - Allowed roles:", allowedRoles);
    console.log("RoleBasedRoute - Should redirect:", shouldRedirect);
    
    // Wait until authentication is complete and then check role
    if (!loading && shouldRedirect) {
      console.log(`Redirecting to ${redirectPath} due to role restrictions`);
      navigate(redirectPath, { replace: true });
    }
  }, [loading, role, forbiddenRoles, allowedRoles, navigate, redirectPath, shouldRedirect]);

  // If still loading, return a loading indicator
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  // If user has a forbidden role or doesn't have an allowed role, redirect immediately
  if (shouldRedirect) {
    return <Navigate to={redirectPath} replace />;
  }
  
  // Otherwise, render the protected content
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default RoleBasedRoute;
