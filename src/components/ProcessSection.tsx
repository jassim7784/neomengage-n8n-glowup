import { Target, Link, Users } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Target,
      title: "Understand Your Needs",
      description: "We begin by understanding your unique communication challenges and goals. Our team works closely with you to define your target audience and tailor our solutions to your specific needs."
    },
    {
      icon: Link,
      title: "Seamless Integration",
      description: "Our robust APIs and SDKs enable easy integration with your existing systems. This ensures a smooth communication flow and allows you to focus on building stronger customer relationships."
    },
    {
      icon: Users,
      title: "Reach Your Customers",
      description: "Connect with your customers across all channels, including SMS, WhatsApp, email, and more. Deliver personalized messages, run targeted campaigns, and gain valuable insights into customer behavior."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="glass p-8 rounded-2xl border transition-smooth hover-lift h-full">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
