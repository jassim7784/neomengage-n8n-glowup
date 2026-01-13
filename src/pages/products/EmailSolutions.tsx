import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Shield, FileText, Send, BarChart, Layout, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TiltCard from "@/components/ui/TiltCard";
import GlowingCard from "@/components/ui/GlowingCard";

const EmailSolutions = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const services = [
    {
      icon: Shield,
      title: "OTP, Transactional Alerts and Business Critical Messaging",
      description: "Enhance your application's functionality with our business-critical emailing solution, designed to facilitate OTP user verification, authentication requests, and the distribution of critical updates to your customers.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Automated Batch Emails with Attachment",
      description: "Easily manage automated batch email processing for invoices, statements, reports, and more using our reliable APIs. With zero integration effort, our APIs ensure dependable and fail-proof delivery of emails with attachments and embedded media.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Send,
      title: "Promotional Campaigns",
      description: "Schedule and send out advance email campaigns connecting with our rich GUI.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Mail,
      title: "Transactional Emails",
      description: "Send automated transactional emails including order confirmations, receipts, and account notifications with high deliverability.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Track email performance with detailed analytics including open rates, click-through rates, and delivery statistics.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Layout,
      title: "Template Management",
      description: "Access professionally designed email templates for various use cases and customize them to match your brand.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-orb" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-orb" style={{ animationDelay: '-5s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Enterprise Email
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Reliable, Enterprise Grade{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                E-Mail Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Neom Engage offers a reliable email delivery infrastructure that is ideal for enterprises seeking to send out critical, content-heavy, and important customer communications on a regular basis. With a high availability and the ability to scale for high volume traffic, Neom Engage ensures that messages are delivered promptly and reliably.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 text-lg">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We Take Care Of
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <TiltCard key={index}>
                  <GlowingCard>
                    <Card className="h-full glass-premium border-primary/10 hover:border-primary/30 transition-all group">
                      <CardHeader>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                        <Button 
                          onClick={handleContactClick}
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                          variant="outline"
                        >
                          Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </GlowingCard>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-premium rounded-3xl p-12 text-center max-w-4xl mx-auto border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 aurora-bg opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Email Communications?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let Neom Engage help you leverage the power of enterprise-grade email solutions to enhance customer engagement and drive business growth.
              </p>
              <Button 
                onClick={handleContactClick}
                size="lg"
                className="px-10 py-6 rounded-full hover:shadow-neon transition-all"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EmailSolutions;
