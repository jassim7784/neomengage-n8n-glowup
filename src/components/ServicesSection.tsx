import { Send, Code2, Globe, MessageSquare, Mail, Bot, Layers, MessagesSquare, MessageCircle, Phone, Sparkles, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import GlowingCard from "@/components/ui/GlowingCard";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const services = [
    { title: "A2P SMS Service", description: "Application-to-person messaging for OTP, alerts, notifications, and transactional messages with high deliverability.", icon: MessageSquare, gradient: "from-blue-500 to-cyan-500", link: "/services/a2p-sms" },
    { title: "Bulk SMS Marketing Enterprise", description: "Send large-scale promotional campaigns to thousands of recipients with advanced scheduling and analytics.", icon: Send, gradient: "from-green-500 to-emerald-500", link: "/services/bulk-sms-marketing" },
    { title: "SMS API Integration", description: "Developer-friendly APIs with comprehensive documentation, SDKs, and 99.9% uptime for seamless integration.", icon: Code2, gradient: "from-amber-500 to-orange-500", link: "/services/sms-api-integration" },
    { title: "CPaaS/Omnichannel", description: "Unified communication platform combining SMS, voice, email, and chat into a single powerful omnichannel solution.", icon: Layers, gradient: "from-purple-500 to-pink-500", link: "/services/cpaas-omnichannel" },
    { title: "Web Design & Development", description: "Professional web design and development services to build stunning, responsive websites for your business.", icon: Globe, gradient: "from-teal-500 to-cyan-500", link: "/services/web-design-development" },
    { title: "SMS Solutions", description: "Reach your customers with reliable, fast, and secure SMS messaging. Perfect for OTP, alerts, and promotional campaigns.", icon: MessagesSquare, gradient: "from-sky-500 to-blue-500", link: "/products/sms-solutions" },
    { title: "WhatsApp Solutions", description: "Connect with customers on their preferred platform. Send rich media messages, notifications, and enable two-way conversations.", icon: MessageCircle, gradient: "from-green-400 to-green-600", link: "/products/whatsapp-solutions" },
    { title: "Voice Solutions", description: "Deliver automated voice calls, OTP verification, and interactive voice response systems with crystal-clear quality.", icon: Phone, gradient: "from-violet-500 to-purple-500", link: "/products/voice-solutions" },
    { title: "Email Solutions", description: "Professional email marketing and transactional email services with high deliverability and detailed analytics.", icon: Mail, gradient: "from-orange-500 to-red-500", link: "/products/email-solutions" },
    { title: "Chatbot Solutions", description: "AI-powered chatbots that handle customer queries 24/7, improve engagement, and reduce support costs.", icon: Bot, gradient: "from-indigo-500 to-blue-500", link: "/products/chatbot-solutions" },
    { title: "Rich Communication (RCS)", description: "Next-generation messaging with rich media, branded experiences, and interactive features for enhanced engagement.", icon: Sparkles, gradient: "from-rose-500 to-pink-500", link: "/products/rcs-solutions" },
    { title: "VoIP Solutions", description: "Cost-effective voice communication with HD call quality, call routing, and advanced telephony features.", icon: Headphones, gradient: "from-fuchsia-500 to-purple-500", link: "/products/voip-solutions" },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-semibold mb-4 text-lg">Our Solutions & Products</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Reach Your Customers with our{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">Cutting-Edge APIs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with your customers across all channels. Deliver personalized messages, run targeted campaigns, and gain valuable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlowingCard key={index} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="glass-premium rounded-2xl p-6 h-full group border border-primary/10 hover:border-primary/30">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">{service.description}</p>
                <Link to={service.link}>
                  <Button variant="ghost" className="mt-2 text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold group/btn">
                    Learn More <span className="inline-block group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Button>
                </Link>
              </div>
            </GlowingCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
