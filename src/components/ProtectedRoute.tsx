import { ReactNode } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // List of restricted paths for customers
  const restrictedForCustomers = ["/reports", "/accounts", "/review"];
  
  // Show loading state if auth state is still being determined
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // Check if user is a customer and trying to access restricted paths
  const isRestrictedPath = restrictedForCustomers.some(path => 
    location.pathname.startsWith(path)
  );
  
  if (user.role === "customer" && isRestrictedPath) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <h2 className="text-2xl font-bold mb-2">Access Forbidden</h2>
          <p className="mb-4">You don't have permission to access this page.</p>
          <button 
            onClick={() => navigate("/dashboard")}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
