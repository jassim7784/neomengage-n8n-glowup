import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Phone, Mail, MessageSquare } from "lucide-react";

const CPaaSOMnichannel = () => {
  const channels = [
    { icon: MessageSquare, name: "SMS", description: "Text messaging" },
    { icon: Phone, name: "Voice", description: "Voice calls & IVR" },
    { icon: Mail, name: "Email", description: "Email campaigns" },
    { icon: MessageCircle, name: "Chat", description: "Live chat support" }
  ];

  const features = [
    "Unified communication platform",
    "Multi-channel customer journeys",
    "Real-time interaction analytics",
    "Automated workflow triggers",
    "Seamless channel switching",
    "Advanced personalization"
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
                CPaaS / Omnichannel
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Integrate voice, SMS, email, chat, and social media into a unified engagement platform. 
                Create seamless customer experiences across all touchpoints.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Explore Platform
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Channels Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Communication Channels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channels.map((channel, index) => (
                <div key={index} className="text-center glass p-6 rounded-xl hover-lift">
                  <channel.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{channel.name}</h3>
                  <p className="text-muted-foreground">{channel.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
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
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass p-8 rounded-xl">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">360°</div>
                <div className="text-muted-foreground">Customer View</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries Supported</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Platform Reliability</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Transform Customer Engagement</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unify all your communication channels and create exceptional customer experiences.
            </p>
            <Button size="lg" className="hover-lift">
              Start Free Trial
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CPaaSOMnichannel;