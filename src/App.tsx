import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // ✅ added Navigate
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BookingForm from "./pages/BookingForm";
import Dashboard from "./pages/Dashboard"; // ✅ Dashboard
import DashboardLogin from "./pages/DashboardLogin"; // ✅ Login page

const queryClient = new QueryClient();

const App = () => {
  const token = localStorage.getItem("dashboardToken"); // ✅ check if user is logged in

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book/:serviceName" element={<BookingForm />} />
              
              {/* ✅ Login route */}
              <Route path="/login" element={<DashboardLogin />} />

              {/* ✅ Protected dashboard route */}
              <Route
                path="/dashboard"
                element={token ? <Dashboard /> : <Navigate to="/login" />}
              />

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
