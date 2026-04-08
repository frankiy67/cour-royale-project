import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop.tsx";

const Index            = lazy(() => import("./pages/Index.tsx"));
const NotFound         = lazy(() => import("./pages/NotFound.tsx"));
const LotCB9CB10Page   = lazy(() => import("./pages/LotCB9CB10Page.tsx"));
const LotH4Page        = lazy(() => import("./pages/LotH4Page.tsx"));
const LotD14Page       = lazy(() => import("./pages/LotD14Page.tsx"));
const LotH7Page        = lazy(() => import("./pages/LotH7Page.tsx"));
const GrandeSallePage  = lazy(() => import("./pages/GrandeSallePage.tsx"));
const SalleAtelierPage = lazy(() => import("./pages/SalleAtelierPage.tsx"));
const MentionsLegalesPage = lazy(() => import("./pages/MentionsLegalesPage.tsx"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                       element={<Index />} />
            <Route path="/lots/cb9-cb10"          element={<LotCB9CB10Page />} />
            <Route path="/lots/h4"                element={<LotH4Page />} />
            <Route path="/lots/d14"               element={<LotD14Page />} />
            <Route path="/lots/h7"                element={<LotH7Page />} />
            <Route path="/salles/grande-salle"    element={<GrandeSallePage />} />
            <Route path="/salles/salle-atelier"   element={<SalleAtelierPage />} />
            <Route path="/mentions-legales"       element={<MentionsLegalesPage />} />
            <Route path="*"                       element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
