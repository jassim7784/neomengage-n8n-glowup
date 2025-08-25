import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Monitor, Users, BarChart } from "lucide-react";

const HTTPSMSWebPortal = () => {
  const features = [
    "Intuitive web-based interface",
    "Campaign management tools",
    "Real-time analytics dashboard",
    "Contact list management",
    "Message scheduling and automation",
    "Multi-user account support"
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
                HTTP SMS Web Portal
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                User-friendly web interface to send, manage, and track your SMS campaigns. 
                Complete messaging control through our powerful web portal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <Monitor className="w-5 h-5 mr-2" />
                  Access Portal
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Portal Features</h2>
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

        {/* Interface Preview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Portal Interface</h2>
            <div className="max-w-4xl mx-auto glass p-8 rounded-xl">
              <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Monitor className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold">Interactive Web Portal</p>
                  <p className="text-muted-foreground">Intuitive dashboard for all your SMS needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass p-8 rounded-xl">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">Multi-User</div>
                <div className="text-muted-foreground">Team Collaboration</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <BarChart className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">Real-time</div>
                <div className="text-muted-foreground">Analytics & Reports</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Portal Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Using Our Web Portal</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the simplicity and power of our web-based SMS management platform.
            </p>
            <Button size="lg" className="hover-lift">
              Get Portal Access
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HTTPSMSWebPortal;