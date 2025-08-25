import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Monitor, Smartphone, Zap, Palette } from "lucide-react";

const WebDesignDevelopment = () => {
  const services = [
    "Custom web application development",
    "Responsive design and mobile optimization",
    "E-commerce platform development",
    "API integration and backend services",
    "UI/UX design and user research",
    "Performance optimization and SEO"
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
                Web Design & Development
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Create stunning, high-performance websites and web applications that drive engagement 
                and deliver exceptional user experiences across all devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <Palette className="w-5 h-5 mr-2" />
                  Start Project
                </Button>
                <Button variant="outline" size="lg">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Development Services</h2>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-4 glass p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Discovery</h3>
                <p className="text-sm text-muted-foreground">Understanding your needs and goals</p>
              </div>
              <div className="text-center glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">Creating wireframes and visual designs</p>
              </div>
              <div className="text-center glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Development</h3>
                <p className="text-sm text-muted-foreground">Building your web application</p>
              </div>
              <div className="text-center glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">Launch</h3>
                <p className="text-sm text-muted-foreground">Testing, deployment, and support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass p-8 rounded-xl">
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Mobile Responsive</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">2 weeks</div>
                <div className="text-muted-foreground">Average Delivery</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a web presence that stands out and drives results for your business.
            </p>
            <Button size="lg" className="hover-lift">
              Get Free Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDesignDevelopment;