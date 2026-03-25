import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import LotCB9CB10Page from "./pages/LotCB9CB10Page.tsx";
import LotH4Page from "./pages/LotH4Page.tsx";
import LotD14Page from "./pages/LotD14Page.tsx";
import LotH7Page from "./pages/LotH7Page.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lots/cb9-cb10" element={<LotCB9CB10Page />} />
          <Route path="/lots/h4" element={<LotH4Page />} />
          <Route path="/lots/d14" element={<LotD14Page />} />
          <Route path="/lots/h7" element={<LotH7Page />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
