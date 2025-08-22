import { 
  MessageSquare, 
  Smartphone, 
  Code, 
  Globe, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "A2P SMS Service",
      description: "Enterprise-grade Application-to-Person SMS with global carrier partnerships and premium routing.",
      features: [
        "99.9% uptime guarantee",
        "Global coverage 200+ countries",
        "Premium carrier connections",
        "Real-time delivery reports"
      ],
      gradient: "gradient-primary"
    },
    {
      icon: Smartphone,
      title: "Bulk SMS Marketing",
      description: "Scale your marketing campaigns with our enterprise bulk SMS platform for high-volume sending.",
      features: [
        "High-volume processing",
        "Campaign scheduling",
        "Audience segmentation",
        "Performance analytics"
      ],
      gradient: "gradient-neon"
    },
    {
      icon: Code,
      title: "SMS API Integration",
      description: "Seamlessly integrate SMS capabilities with our robust RESTful APIs and comprehensive documentation.",
      features: [
        "RESTful API architecture",
        "Multiple programming languages",
        "Webhook notifications",
        "24/7 developer support"
      ],
      gradient: "gradient-cyber"
    },
    {
      icon: Globe,
      title: "Omnichannel Platform",
      description: "Connect across SMS, WhatsApp, Voice, and Email from one unified communication platform.",
      features: [
        "Multi-channel messaging",
        "Unified conversation view",
        "Smart routing",
        "Cross-channel analytics"
      ],
      gradient: "gradient-hologram"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl floating-element" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="glass-strong px-8 py-4 rounded-full inline-block mb-8">
            <span className="text-sm font-semibold gradient-text-neon uppercase tracking-wider">Premium Services</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-glow">Enterprise-Grade</span>
            <br />
            <span className="gradient-text">Communication Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-strong p-10 rounded-3xl hover-lift group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-${service.gradient} opacity-5 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-${service.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 gradient-text">{service.title}</h3>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="cyber" className="w-full group-hover:bg-purple-500/30 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;