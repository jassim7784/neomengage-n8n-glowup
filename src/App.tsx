import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Services Pages
import A2PSMSService from "./pages/services/A2PSMSService";
import BulkSMSMarketing from "./pages/services/BulkSMSMarketing";
import SMSAPIIntegration from "./pages/services/SMSAPIIntegration";
import CPaaSOMnichannel from "./pages/services/CPaaSOMnichannel";
import WebDesignDevelopment from "./pages/services/WebDesignDevelopment";

// Products Pages
import SMSSolutions from "./pages/products/SMSSolutions";
import WhatsAppSolutions from "./pages/products/WhatsAppSolutions";
import VoiceSolutions from "./pages/products/VoiceSolutions";
import EmailSolutions from "./pages/products/EmailSolutions";
import ChatbotSolutions from "./pages/products/ChatbotSolutions";
import RichCommunicationSolutions from "./pages/products/RichCommunicationSolutions";
import VoIPSolutions from "./pages/products/VoIPSolutions";

// Other Pages
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services Routes */}
          <Route path="/services/a2p-sms" element={<A2PSMSService />} />
          <Route path="/services/bulk-sms-marketing" element={<BulkSMSMarketing />} />
          <Route path="/services/sms-api-integration" element={<SMSAPIIntegration />} />
          <Route path="/services/cpaas-omnichannel" element={<CPaaSOMnichannel />} />
          <Route path="/services/web-design-development" element={<WebDesignDevelopment />} />
          
          {/* Products Routes */}
          <Route path="/products/sms-solutions" element={<SMSSolutions />} />
          <Route path="/products/whatsapp-solutions" element={<WhatsAppSolutions />} />
          <Route path="/products/voice-solutions" element={<VoiceSolutions />} />
          <Route path="/products/email-solutions" element={<EmailSolutions />} />
          <Route path="/products/chatbot-solutions" element={<ChatbotSolutions />} />
          <Route path="/products/rcs-solutions" element={<RichCommunicationSolutions />} />
          <Route path="/products/voip-solutions" element={<VoIPSolutions />} />
          
          {/* Other Pages */}
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
