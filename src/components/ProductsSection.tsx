import { 
  Server, 
  Code2, 
  Globe2, 
  Smartphone,
  ArrowRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const products = [
    {
      icon: Server,
      title: "Wholesale SMS Service",
      description: "High-volume SMS solutions for service providers and enterprises with competitive wholesale pricing and premium routing.",
      features: ["Carrier-grade infrastructure", "Volume discounts", "Direct operator connections"],
      price: "Starting at $0.02/SMS",
      popular: false
    },
    {
      icon: Code2,
      title: "SMPP Connectivity",
      description: "Direct SMPP connections for maximum reliability and control over your messaging infrastructure with dedicated throughput.",
      features: ["Dedicated connections", "Custom throughput", "Real-time monitoring"],
      price: "Custom Pricing",
      popular: true
    },
    {
      icon: Globe2,
      title: "HTTP SMS Web Portal",
      description: "User-friendly web interface for sending SMS campaigns, managing contacts, and tracking delivery reports in real-time.",
      features: ["Intuitive dashboard", "Contact management", "Campaign scheduling"],
      price: "Starting at $0.05/SMS",
      popular: false
    },
    {
      icon: Smartphone,
      title: "HTTP SMS API",
      description: "RESTful API endpoints for seamless integration with your applications, featuring comprehensive documentation and SDKs.",
      features: ["RESTful architecture", "Multiple SDKs", "Webhook support"],
      price: "Starting at $0.04/SMS",
      popular: false
    }
  ];

  return (
    <section id="products" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="glass-strong px-8 py-4 rounded-full inline-block mb-8">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Products & Solutions</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            Choose Your Perfect Solution
          </h2>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From wholesale SMS to enterprise APIs, find the right product for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`glass-strong p-8 rounded-3xl hover-lift group relative overflow-hidden ${
                product.popular ? 'ring-2 ring-purple-500/50' : ''
              }`}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute -top-2 -right-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Popular</span>
                  </div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">{product.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass-strong p-12 rounded-3xl max-w-3xl mx-auto hover-lift">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Need a Custom Solution?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our experts to discuss your specific requirements and get a tailored solution.
            </p>
            <Button variant="default" size="lg" className="hover-lift" asChild>
              <a href="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;