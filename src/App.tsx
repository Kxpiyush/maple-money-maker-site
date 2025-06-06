import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import TfsaVsRrsp from "./pages/TfsaVsRrsp";
import TopDividendStocks from "./pages/TopDividendStocks";
import AllPosts from "./pages/AllPosts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<AllPosts />} />
          <Route path="/blog/7-best-passive-income-ideas-canada-2025" element={<BlogPost />} />
          <Route path="/blog/tfsa-vs-rrsp-passive-income" element={<TfsaVsRrsp />} />
          <Route path="/blog/top-canadian-dividend-stocks-2024" element={<TopDividendStocks />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;