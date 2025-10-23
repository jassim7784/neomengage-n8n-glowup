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
      description: "Enterprise-grade Application-to-Person SMS with global carrier partnerships and premium routing for OTP delivery, transactional notifications, and real-time alerts.",
      features: [
        "High deliverability rates",
        "Global reach capabilities",
        "OTP & transactional SMS",
        "Real-time delivery reports"
      ],
      gradient: "gradient-primary"
    },
    {
      icon: Smartphone,
      title: "Bulk SMS Marketing",
      description: "Scale your marketing campaigns with mass messaging, marketing automation, and customer engagement tools for enterprise bulk SMS.",
      features: [
        "Mass messaging campaigns",
        "Marketing automation",
        "Customer engagement tools",
        "Performance analytics"
      ],
      gradient: "gradient-neon"
    },
    {
      icon: Code,
      title: "SMS API Integration",
      description: "Developer-friendly APIs with system integration capabilities, real-time message tracking, and automated communication workflows.",
      features: [
        "RESTful API interface",
        "Easy integration process",
        "Scalable messaging infrastructure",
        "Secure communication protocols"
      ],
      gradient: "gradient-cyber"
    },
    {
      icon: Globe,
      title: "Voice SMS",
      description: "Audio message delivery with voice-based notifications, multi-language support, and interactive voice response integration.",
      features: [
        "Audio message delivery",
        "Voice-based notifications",
        "Multi-language support",
        "IVR integration"
      ],
      gradient: "gradient-hologram"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            Enterprise-Grade Communication Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-strong p-10 rounded-3xl hover-lift group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
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