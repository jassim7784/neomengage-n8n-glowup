import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare, BarChart, Shield } from "lucide-react";

const A2PSMSService = () => {
  const features = [
    "High delivery rates with premium routes",
    "Real-time delivery reports",
    "Two-way messaging capabilities",
    "Enterprise-grade security",
    "Global reach and coverage",
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
                A2P SMS Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Scalable, reliable SMS messaging to engage customers and drive growth. 
                Connect with your audience through our premium A2P messaging platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our A2P SMS Service?</h2>
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
                <BarChart className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Delivery Rate</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">1B+</div>
                <div className="text-muted-foreground">Messages Delivered</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our A2P SMS service to engage customers effectively.
            </p>
            <Button size="lg" className="hover-lift">
              Contact Sales Team
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default A2PSMSService;