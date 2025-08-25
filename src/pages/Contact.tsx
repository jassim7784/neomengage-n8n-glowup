import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@neomengage.com",
      action: "mailto:hello@neomengage.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with support",
      contact: "Available 24/7",
      action: "#"
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 100",
      details: "New York, NY 10001"
    },
    {
      city: "London",
      address: "456 Tech Street, Floor 5",
      details: "London, UK EC1A 1BB"
    },
    {
      city: "Singapore",
      address: "789 Innovation Drive, Level 10",
      details: "Singapore 018956"
    }
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
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ready to transform your customer engagement? Let's discuss how we can help 
                your business grow with our messaging solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="glass hover-lift text-center">
                  <CardHeader>
                    <method.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <a 
                      href={method.action}
                      className="text-primary font-semibold hover:underline"
                    >
                      {method.contact}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select className="w-full px-4 py-2 rounded-lg bg-background border border-border">
                      <option>Select a service</option>
                      <option>A2P SMS Service</option>
                      <option>Bulk SMS Marketing</option>
                      <option>SMS API Integration</option>
                      <option>CPaaS / Omnichannel</option>
                      <option>Web Design & Development</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>
                  <Button className="w-full hover-lift">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 glass-subtle">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card key={index} className="glass text-center">
                  <CardHeader>
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle>{office.city}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {office.address}<br />
                      {office.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-20 glass-strong">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Business Hours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-2">Sales & Support</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM EST</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Support</h3>
                  <p className="text-muted-foreground">Available 24/7</p>
                  <p className="text-muted-foreground">Emergency hotline available</p>
                  <p className="text-muted-foreground">Live chat support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;