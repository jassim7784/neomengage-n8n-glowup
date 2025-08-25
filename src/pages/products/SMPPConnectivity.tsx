import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Network, Shield } from "lucide-react";

const SMPPConnectivity = () => {
  const features = [
    "High-speed SMPP protocol support",
    "Direct carrier connections",
    "Load balancing and failover",
    "Real-time delivery reports",
    "Customizable connection parameters",
    "Enterprise-grade security"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                SMPP Connectivity
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                High-speed SMS messaging via SMPP protocol. Direct carrier connections 
                for maximum throughput and reliability in enterprise environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <Network className="w-5 h-5 mr-2" />
                  Setup SMPP
                </Button>
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">SMPP Features</h2>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 glass p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
            <div className="max-w-4xl mx-auto glass p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Protocol Support</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• SMPP v3.4 & v5.0</li>
                    <li>• TLS/SSL encryption</li>
                    <li>• Bind transmitter/receiver/transceiver</li>
                    <li>• Keep-alive monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Performance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Up to 1000 TPS per connection</li>
                    <li>• Multiple concurrent connections</li>
                    <li>• Auto-reconnection handling</li>
                    <li>• Rate limiting controls</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass p-8 rounded-xl">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">1000</div>
                <div className="text-muted-foreground">TPS per Connection</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Network className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
                <div className="text-muted-foreground">Connection Uptime</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">256-bit</div>
                <div className="text-muted-foreground">SSL Encryption</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for High-Speed Messaging?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect directly to our SMPP gateway for maximum performance and reliability.
            </p>
            <Button size="lg" className="hover-lift">
              Request SMPP Access
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SMPPConnectivity;