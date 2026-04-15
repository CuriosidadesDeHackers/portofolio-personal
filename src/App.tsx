import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const getRouterBasename = () => {
  const configuredBase = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (configuredBase) {
    return configuredBase;
  }

  if (typeof window === "undefined") {
    return undefined;
  }

  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";

  return normalizedPath === "/about" || normalizedPath.startsWith("/about/")
    ? "/about"
    : undefined;
};

const routerBasename = getRouterBasename();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
