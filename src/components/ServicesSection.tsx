import { Send, Megaphone, Code2, Mic, Globe, MessageSquare, Mail, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import GlowingCard from "@/components/ui/GlowingCard";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const services = [
    { title: "SMS Solutions", description: "Reach your customers with reliable, fast, and secure SMS messaging. Perfect for OTP, alerts, and promotional campaigns.", icon: Send, gradient: "from-blue-500 to-cyan-500" },
    { title: "WhatsApp Business API", description: "Connect with customers on their preferred platform. Send rich media messages, notifications, and enable two-way conversations.", icon: MessageSquare, gradient: "from-green-500 to-emerald-500" },
    { title: "Voice Solutions", description: "Deliver automated voice calls, OTP verification, and interactive voice response systems with crystal-clear quality.", icon: Mic, gradient: "from-purple-500 to-pink-500" },
    { title: "Email Solutions", description: "Professional email marketing and transactional email services with high deliverability and detailed analytics.", icon: Mail, gradient: "from-orange-500 to-red-500" },
    { title: "Chatbot Solutions", description: "AI-powered chatbots that handle customer queries 24/7, improve engagement, and reduce support costs.", icon: Bot, gradient: "from-indigo-500 to-blue-500" },
    { title: "Rich Communication Services", description: "Next-generation messaging with rich media, branded experiences, and interactive features for enhanced engagement.", icon: Globe, gradient: "from-teal-500 to-cyan-500" },
    { title: "VoIP Solutions", description: "Cost-effective voice communication with HD call quality, call routing, and advanced telephony features.", icon: Megaphone, gradient: "from-rose-500 to-pink-500" },
    { title: "API Integration", description: "Developer-friendly APIs with comprehensive documentation, SDKs, and 99.9% uptime for seamless integration.", icon: Code2, gradient: "from-amber-500 to-orange-500" }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-semibold mb-4 text-lg">Our Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Reach Your Customers with our{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">Cutting-Edge APIs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with your customers across all channels. Deliver personalized messages, run targeted campaigns, and gain valuable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <GlowingCard key={index} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="glass-premium rounded-2xl p-6 h-full group border border-primary/10 hover:border-primary/30">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">{service.description}</p>
                <Button variant="ghost" className="mt-2 text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold group/btn">
                  Learn More <span className="inline-block group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </GlowingCard>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" className="px-8 hover:shadow-neon transition-all">Explore All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
