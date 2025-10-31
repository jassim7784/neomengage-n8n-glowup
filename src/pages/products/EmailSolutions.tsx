import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Shield, FileText, Send } from "lucide-react";

const EmailSolutions = () => {
  const navigate = useNavigate();

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
    }
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Reliable, Enterprise Grade E-Mail Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Neom Engage offers a reliable email delivery infrastructure that is ideal for enterprises seeking to send out critical, content-heavy, and important customer communications on a regular basis. With a high availability and the ability to scale for high volume traffic, Neom Engage ensures that messages are delivered promptly and reliably.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
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
                  <Card 
                    key={index} 
                    className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-2"
                  >
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        onClick={handleContactClick}
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        variant="outline"
                      >
                        Contact Us
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Email Communications?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let Neom Engage help you leverage the power of enterprise-grade email solutions to enhance customer engagement and drive business growth.
            </p>
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="text-lg px-8"
            >
              Contact Our Team
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EmailSolutions;
