import IntroLoader from "./components/IntroLoader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Apparel from "./pages/Apparel";
import Awards from "./pages/Awards";
import Trophy from "./pages/Trophy";
import Catalogue from "./pages/Catelogue.tsx";
import Packaging from "./pages/Packaging.tsx";
import Executive from "./pages/Executive.tsx";
import Corporate from "./pages/Corporate.tsx";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <IntroLoader />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Corporate" element={<Corporate />} />
          <Route path="/Executive" element={<Executive />} />
          <Route path="/Packaging" element={<Packaging />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/trophy" element={<Trophy />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/apparel" element={<Apparel />} />
      
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
