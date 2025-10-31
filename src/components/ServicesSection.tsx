import { Send, Megaphone, Code2, Mic, Globe, MessageSquare, Mail, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "SMS Solutions",
      description: "Reach your customers with reliable, fast, and secure SMS messaging. Perfect for OTP, alerts, and promotional campaigns.",
      icon: Send,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "WhatsApp Business API",
      description: "Connect with customers on their preferred platform. Send rich media messages, notifications, and enable two-way conversations.",
      icon: MessageSquare,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Voice Solutions",
      description: "Deliver automated voice calls, OTP verification, and interactive voice response systems with crystal-clear quality.",
      icon: Mic,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Email Solutions",
      description: "Professional email marketing and transactional email services with high deliverability and detailed analytics.",
      icon: Mail,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Chatbot Solutions",
      description: "AI-powered chatbots that handle customer queries 24/7, improve engagement, and reduce support costs.",
      icon: Bot,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Rich Communication Services",
      description: "Next-generation messaging with rich media, branded experiences, and interactive features for enhanced engagement.",
      icon: Globe,
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "VoIP Solutions",
      description: "Cost-effective voice communication with HD call quality, call routing, and advanced telephony features.",
      icon: Megaphone,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      title: "API Integration",
      description: "Developer-friendly APIs with comprehensive documentation, SDKs, and 99.9% uptime for seamless integration.",
      icon: Code2,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 text-lg">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Reach Your Customers with our{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Cutting-Edge APIs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with your customers across all channels. Deliver personalized messages, run targeted campaigns, 
            and gain valuable insights into customer behavior with our comprehensive suite of communication solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 hover-lift transition-all duration-300 border border-border/50 hover:border-primary/50"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {service.description}
              </p>
              
              <Button 
                variant="ghost" 
                className="mt-2 text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold"
              >
                Learn More →
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="px-8">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;