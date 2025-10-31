import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Vote, Headphones, Shield, Users, PhoneOff, Lock, MessageSquare, Volume2 } from "lucide-react";

const VoiceSolutions = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Phone,
      title: "Voice Broadcast (OBD)",
      description: "Eliminate language and literacy obstacles by providing tailored and localized content that speaks to your audience in a language they comprehend and connect with.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Vote,
      title: "Voting and Polling",
      description: "With the PCN or missed call-based feature, customers can participate and register their votes at no cost, providing them with the opportunity to share their opinions or make decisions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Headphones,
      title: "Hosted IVRs",
      description: "Experience the convenience of an interactive telephony system with our centralized IVR platform. Our platform allows you to create custom or pre-defined IVR solutions for inbound or outbound calls using a 10-digit virtual number or toll-free number (TFN).",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Call Masking",
      description: "Maintain the confidentiality and security of customer information while connecting calls between multiple parties, without revealing actual phone numbers. Use additional authentication mechanisms, such as a PIN, to ensure privacy.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Audio Conference Solution (ACS)",
      description: "Establish a multi-party conference without the need for prior reservations, allowing internal teams, vendors, and customers located in different geographical regions to collaborate seamlessly.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: PhoneOff,
      title: "Missed Call",
      description: "Attract budget-conscious customers with the widely used Missed Call feature, offering a Call-to-Action option that boasts high engagement rates, particularly among the primarily pre-paid mobile user base in India.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Lock,
      title: "One Time Password (OTP)",
      description: "Mitigate the risk of online frauds by employing Voice OTP for instant one-time password authentication. Strengthen your security measures with two-factor authentication using Voice OTP and use it as a backup mechanism for SMS and other channels.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Feedback/Survey",
      description: "Improve your customer service experience by providing end-to-end support to your customers throughout their service journey.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Volume2,
      title: "Text-To-Speech (TTS)",
      description: "Deliver your text messages with a personalized and engaging touch, using a human-like voice and the ability to convert Indian regional languages, enhancing the overall user experience.",
      gradient: "from-red-500 to-orange-500"
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
              Give Voice to your campaigns
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Neom Engage offers voice products and solutions that enables enterprises to leverage our enhanced voice communication capabilities for both their inbound and outbound customer interactions.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                OUR SERVICES - <span className="text-primary">we take care of</span>
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
              Ready to Transform Your Voice Communications?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let Neom Engage help you leverage the power of voice solutions to enhance customer engagement and drive business growth.
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

export default VoiceSolutions;
