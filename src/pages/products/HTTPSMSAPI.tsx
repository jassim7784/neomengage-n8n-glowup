import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code, Globe, Zap } from "lucide-react";

const HTTPSMSAPI = () => {
  const features = [
    "RESTful HTTP API endpoints",
    "JSON/XML response formats",
    "OAuth 2.0 authentication",
    "Rate limiting and quotas",
    "Comprehensive error handling",
    "Detailed API documentation"
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
                HTTP SMS API
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Programmatic SMS control via web-based API. Simple HTTP requests 
                for sending, receiving, and managing SMS messages in your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <Code className="w-5 h-5 mr-2" />
                  API Documentation
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
              <h2 className="text-3xl font-bold text-center mb-12">API Features</h2>
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

        {/* API Examples */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">API Examples</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Send SMS</h3>
                <pre className="text-sm overflow-x-auto bg-card p-4 rounded">
                  <code className="text-primary">
{`curl -X POST https://api.neomengage.com/v1/sms/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+1234567890",
    "from": "YourBrand",
    "message": "Hello from HTTP SMS API!"
  }'`}
                  </code>
                </pre>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Check Message Status</h3>
                <pre className="text-sm overflow-x-auto bg-card p-4 rounded">
                  <code className="text-primary">
{`curl -X GET https://api.neomengage.com/v1/sms/status/MESSAGE_ID \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* API Stats */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass p-8 rounded-xl">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">REST</div>
                <div className="text-muted-foreground">HTTP API Standard</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">&lt;50ms</div>
                <div className="text-muted-foreground">Average Response Time</div>
              </div>
              <div className="text-center glass p-8 rounded-xl">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">API Reliability</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Integrate SMS Today</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get started with our HTTP SMS API and add messaging capabilities to your applications.
            </p>
            <Button size="lg" className="hover-lift">
              Start Integration
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HTTPSMSAPI;