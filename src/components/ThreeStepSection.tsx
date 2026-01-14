import { MessageCircle, Code, Send } from "lucide-react";

const ThreeStepSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Engage",
      subtitle: "Discuss Your Communication Goals",
      description: "Connect with our team to explore how our solutions can help you reach your customers more effectively."
    },
    {
      icon: Code,
      title: "Integrate",
      subtitle: "Seamless API Integration",
      description: "Easy integration with your existing systems through our robust APIs and comprehensive documentation."
    },
    {
      icon: Send,
      title: "Reach Customers",
      subtitle: "Personalized Messaging",
      description: "Start sending personalized messages across multiple channels and watch your engagement soar."
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="glass p-8 rounded-2xl border transition-smooth hover-lift h-full">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-primary font-semibold mb-4">{step.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepSection;
