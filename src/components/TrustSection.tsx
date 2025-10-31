import { FileText, BarChart3, Lightbulb } from "lucide-react";

const TrustSection = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Information Collection",
      description: "Understand Your Needs. We start by understanding your unique business challenges and communication goals. Our team works closely with you to define your target audience and tailor our solutions to your specific needs."
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Projection Report Analysis",
      description: "Data-Driven Insights. We analyze your communication data to identify areas for improvement and provide actionable insights to optimize your campaigns."
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "Consultation Solution",
      description: "Tailored Solutions. We provide customized communication strategies and solutions to help you achieve your business objectives."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Driven by <span className="text-primary">Trust.</span> Fueled by <span className="text-primary">Technology.</span> Guided by <span className="text-primary">Transparency.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="glass p-8 rounded-2xl border transition-smooth hover-lift">
              <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="glass p-8 rounded-2xl border text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            We offer a best-in-class CPaaS solution for your business.
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-lg font-medium">Satisfaction guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-lg font-medium">Ontime delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
