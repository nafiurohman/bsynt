import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "./pages/HomePage";
import DocsPage from "./pages/DocsPage";
import AsistenPage from "./pages/AsistenPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ADMIN_BASE = "/admin/e8f4a7b9c2d1e6f3a4b8c9d2e1f6a7b9";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs/:slug" element={<DocsPage />} />
          <Route path="/asisten" element={<AsistenPage />} />
          <Route path={ADMIN_BASE} element={<AdminLogin />} />
          <Route path={`${ADMIN_BASE}/dashboard`} element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
