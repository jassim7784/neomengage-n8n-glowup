import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, TrendingUp, Users } from "lucide-react";

const BulkSMSMarketing = () => {
  const features = [
    "Advanced campaign management",
    "Real-time analytics and reporting",
    "Automated scheduling and triggers",
    "Contact list segmentation",
    "A/B testing capabilities",
    "Compliance management tools"
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
                Bulk SMS Marketing Enterprise
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Powerful SMS campaign solution with high delivery rates, real-time analytics, 
                scalable infrastructure, and cost-effective pricing for enterprise customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <Target className="w-5 h-5 mr-2" />
                  Launch Campaign
                </Button>
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Enterprise Marketing Features</h2>
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

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass p-8 rounded-xl">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <div className="text-muted-foreground">ROI Increase</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Open Rate</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">5M+</div>
                <div className="text-muted-foreground">Messages/Hour</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Scale Your Marketing Efforts</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your customer engagement with our enterprise-grade bulk SMS marketing platform.
            </p>
            <Button size="lg" className="hover-lift">
              Request Enterprise Demo
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BulkSMSMarketing;