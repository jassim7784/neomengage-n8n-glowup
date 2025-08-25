import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Globe, ShieldCheck } from "lucide-react";

const WholesaleSMSService = () => {
  const features = [
    "Competitive wholesale pricing",
    "High-volume message handling",
    "Global carrier relationships",
    "Dedicated account management",
    "Custom routing options",
    "24/7 technical support"
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
                Wholesale SMS Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                High-volume SMS messaging solutions for resellers, aggregators, and enterprise clients. 
                Scale your messaging operations with our wholesale infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Get Wholesale Pricing
                </Button>
                <Button variant="outline" size="lg">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Wholesale Features</h2>
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

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass p-8 rounded-xl">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Countries & Territories</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">10B+</div>
                <div className="text-muted-foreground">Messages/Month</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Network Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Scale Your SMS Business</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with us for reliable, high-volume SMS solutions with competitive wholesale rates.
            </p>
            <Button size="lg" className="hover-lift">
              Contact Wholesale Team
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WholesaleSMSService;