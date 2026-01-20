/**
 * Contact Page
 * 
 * Full contact page with multiple sections:
 * - Hero section with animated heading
 * - Contact methods (Email, Phone, Live Chat)
 * - Contact form that submits to Lovable Cloud database
 * - Office locations grid
 * - Business hours information
 */
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  // Animation hook for scroll-based reveal effects
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state management for all input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    consent: false
  });

  /**
   * Handle form submission
   * - Validates consent checkbox
   * - Submits data to contact_submissions table in database
   * - Shows success/error toast notifications
   * - Resets form on success
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate consent is checked
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive communications before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Insert form data into contact_submissions table
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          consent: formData.consent
        });

      if (error) throw error;

      // Show success message and reset form
      toast({ 
        title: "Message Sent!", 
        description: "We'll get back to you soon." 
      });
      setFormData({ name: "", email: "", phone: "", service: "", consent: false });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: Mail, title: "Email Us", description: "Get in touch via email", contact: "info@neomengage.com", action: "mailto:info@neomengage.com" },
    { icon: Phone, title: "Call Us", description: "Speak with our team", contact: "+44 7436787758", action: "tel:+447436787758" },
    { icon: MessageCircle, title: "Live Chat", description: "Chat with support", contact: "Available 24/7", action: "#" }
  ];

  const offices = [
    { city: "UK Office", address: "71 A Meadowlands, Downpatrick", details: "Co Down, BT30 6HG, UK" },
    { city: "London", address: "456 Tech Street, Floor 5", details: "London, UK EC1A 1BB" },
    { city: "Singapore", address: "789 Innovation Drive, Level 10", details: "Singapore 018956" }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-orb" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your customer engagement? Let's discuss how we can help your business grow with our messaging solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <TiltCard key={index}>
                <GlowingCard>
                  <Card className="glass-premium text-center h-full border-primary/10 hover:border-primary/30 transition-all group">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{method.description}</p>
                      <a href={method.action} className="text-primary font-semibold hover:text-primary/80 transition-colors animated-underline">
                        {method.contact}
                      </a>
                    </CardContent>
                  </Card>
                </GlowingCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <GlowingCard>
              <Card className="glass-premium border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                      <Input
                        type="tel"
                        placeholder="Phone*"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Service you are looking for?"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent-contact"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                        className="mt-1"
                      />
                      <label htmlFor="consent-contact" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        I agree to receive all updates via SMS, WhatsApp, RCS, Email, and any other communication channel.
                      </label>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full py-6 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all group" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</span>
                      ) : (
                        <span className="flex items-center gap-2"><Send className="w-5 h-5" /> Get In Touch</span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </GlowingCard>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-glow">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <TiltCard key={index}>
                <Card className="glass-premium text-center h-full border-primary/10 hover:border-primary/30 transition-all group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{office.city}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{office.address}<br />{office.details}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-2xl mx-auto glass-premium p-10 rounded-3xl border border-primary/20">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-8">Business Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold mb-3 text-primary">Sales & Support</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM EST</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-primary">Technical Support</h3>
                <p className="text-muted-foreground">Available 24/7</p>
                <p className="text-muted-foreground">Emergency hotline available</p>
                <p className="text-muted-foreground">Live chat support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;