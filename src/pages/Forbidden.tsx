import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Forbidden = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold text-red-500 mb-4">Access Forbidden</h1>
      <p className="text-gray-600 mb-6">You do not have permission to access this page.</p>
      <Button onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </Button>
    </div>
  );
};

export default Forbidden;
