import { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Forbidden from "@/pages/Forbidden";

interface RoleBasedRouteProps {
  children: ReactNode;
  forbiddenRoles: string[];
}

const RoleBasedRoute = ({ children, forbiddenRoles }: RoleBasedRouteProps) => {
  const { role } = useAuth();
  
  return (
    <ProtectedRoute>
      {forbiddenRoles.includes(role || "") ? <Forbidden /> : children}
    </ProtectedRoute>
  );
};

export default RoleBasedRoute;
