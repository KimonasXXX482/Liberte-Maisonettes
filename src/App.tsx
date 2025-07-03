import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { FontSizeProvider } from "./contexts/FontSizeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EconomyRoom from "./pages/EconomyRoom";
import SuperiorRoom from "./pages/SuperiorRoom";
import MaisonetteRoom from "./pages/MaisonetteRoom";
import DiscoverParga from "./pages/DiscoverParga";
import RoomDetails from "./pages/RoomDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <FontSizeProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/RoomDetails" element={<RoomDetails />} />
              <Route path="/economy-room" element={<EconomyRoom />} />
              <Route path="/superior-room" element={<SuperiorRoom />} />
              <Route path="/maisonette-room" element={<MaisonetteRoom />} />
              <Route path="/location" element={<DiscoverParga />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </FontSizeProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
