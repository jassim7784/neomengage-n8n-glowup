import FeatureCard from "./FeatureCard";
import { 
  MessageSquare, 
  Smartphone, 
  BarChart3, 
  Globe, 
  Zap, 
  Shield,
  Code,
  Settings
} from "lucide-react";

const FeaturesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "A2P SMS Service",
      description: "Enterprise-grade Application-to-Person SMS service with global reach and 99.9% uptime guarantee.",
      gradient: true
    },
    {
      icon: Smartphone,
      title: "Bulk SMS Marketing",
      description: "Scale your marketing campaigns with our enterprise bulk SMS platform designed for high-volume sending."
    },
    {
      icon: Code,
      title: "SMS API Integration",
      description: "Seamlessly integrate SMS capabilities into your applications with our robust RESTful APIs."
    },
    {
      icon: Globe,
      title: "Omnichannel Platform",
      description: "Connect with customers across multiple channels including SMS, WhatsApp, and voice from one platform.",
      gradient: true
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Advanced analytics and real-time reporting to track campaign performance and optimize engagement."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, GDPR ready, and advanced data protection protocols."
    },
    {
      icon: Zap,
      title: "Wholesale SMS",
      description: "High-volume SMS solutions for service providers and enterprises with competitive pricing.",
      gradient: true
    },
    {
      icon: Settings,
      title: "SMPP Connectivity",
      description: "Direct SMPP connections for maximum reliability and control over your messaging infrastructure."
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="glass-strong px-8 py-4 rounded-full inline-block mb-8">
            <span className="text-sm font-semibold gradient-text-neon uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-glow">Power Your Business</span>
            <br />
            <span className="gradient-text">With Next-Gen Messaging</span>
          </h2>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From enterprise SMS solutions to omnichannel communication platforms, 
            we provide the infrastructure you need to reach customers globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="glass-strong p-12 rounded-3xl max-w-4xl mx-auto hover-lift">
            <h3 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Communication?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses already using our platform to engage customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="glass-strong px-10 py-4 rounded-2xl hover-glow transition-all duration-300 text-lg font-semibold">
                Start Free Trial
              </button>
              <button className="bg-gradient-primary px-10 py-4 rounded-2xl text-white hover-lift pulse-neon transition-all duration-300 text-lg font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;