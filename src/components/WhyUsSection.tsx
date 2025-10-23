import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const WhyUsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Why Us?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            At Neom Engage, we are dedicated to providing top-notch communication solutions that meet your business needs. Our services are designed to be reliable, scalable, and secure, ensuring that you can focus on what you do best. Join the hundreds of businesses that trust us to enhance their communication strategies.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/contact')}
            className="hover-lift"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
