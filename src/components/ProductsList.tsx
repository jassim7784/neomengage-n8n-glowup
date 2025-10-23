import { Server, Code2, Globe2, Smartphone } from "lucide-react";

const ProductsList = () => {
  const products = [
    {
      icon: Server,
      title: "Wholesale SMS Service",
      description: "High-volume SMS solutions for service providers and enterprises with competitive wholesale pricing and premium routing."
    },
    {
      icon: Code2,
      title: "SMPP Connectivity",
      description: "Direct SMPP connections for maximum reliability and control over your messaging infrastructure with dedicated throughput."
    },
    {
      icon: Globe2,
      title: "HTTP SMS Web Portal",
      description: "User-friendly web interface for sending SMS campaigns, managing contacts, and tracking delivery reports in real-time."
    },
    {
      icon: Smartphone,
      title: "HTTP SMS API",
      description: "RESTful API endpoints for seamless integration with your applications, featuring comprehensive documentation and SDKs."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Products</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="glass-strong p-8 rounded-3xl hover-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <product.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{product.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
