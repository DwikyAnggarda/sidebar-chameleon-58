
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Deals from "./pages/Deals";
import Accounts from "./pages/Accounts";
import Competitors from "./pages/Competitors";
import Chat from "./pages/Chat";
import Knowledge from "./pages/Knowledge";
import Feedback from "./pages/Feedback";
import Review from "./pages/Review";
import Members from "./pages/Members";
import Integrations from "./pages/Integrations";
import SelectOrg from "./pages/SelectOrg";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/competitors" element={<Competitors />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/library/knowledge" element={<Knowledge />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/review" element={<Review />} />
          <Route path="/members" element={<Members />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/select-org" element={<SelectOrg />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
