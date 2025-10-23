import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-strong rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Empowering Your Business with Advanced Communication Solutions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Experience the future of business communication with our cutting-edge services. From bulk SMS to web development, we provide the tools you need to connect, engage, and grow.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/contact')}
            className="hover-lift text-lg px-8"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
