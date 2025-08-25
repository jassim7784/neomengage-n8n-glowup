import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code, Zap, Monitor } from "lucide-react";

const SMSAPIIntegration = () => {
  const features = [
    "RESTful API architecture",
    "Real-time message tracking",
    "Webhook support for callbacks",
    "Multiple programming language SDKs",
    "Rate limiting and throttling",
    "Comprehensive API documentation"
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
                SMS API Integration
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Enable seamless send/receive SMS functionality, automation, and real-time message 
                tracking via our powerful and flexible API integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <Code className="w-5 h-5 mr-2" />
                  View API Docs
                </Button>
                <Button variant="outline" size="lg">
                  Get API Key
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">API Integration Features</h2>
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

        {/* Code Example Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Quick Integration</h2>
              <div className="glass p-8 rounded-xl">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-primary">
{`// Send SMS via API
fetch('https://api.neomengage.com/v1/sms/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '+1234567890',
    message: 'Hello from NeoMengage!',
    from: 'YourBrand'
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data));`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass p-8 rounded-xl">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">&lt;100ms</div>
                <div className="text-muted-foreground">API Response Time</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
                <div className="text-muted-foreground">API Uptime</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Programming Languages</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Building Today</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Integrate SMS functionality into your applications with our developer-friendly API.
            </p>
            <Button size="lg" className="hover-lift">
              Get Started with API
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SMSAPIIntegration;