import { CheckCircle } from "lucide-react";

const WhyUsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="text-primary">Neom Engage</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Neom Engage is a leading provider of omnichannel communication solutions, helping businesses enhance their customer outreach and engagement. With a global reach and a strong focus on reliability and compliance, Neom Engage offers a variety of services including transactional SMS, user verification, promotional emails, missed call services, voice broadcasts, voting & polling, WhatsApp, Rich Communication Solution. Our trusted platform and experienced team empower businesses to deliver exceptional customer experiences and achieve measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="glass p-10 rounded-2xl border transition-smooth hover-lift">
            <CheckCircle className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">One Connection. Infinite Possibilities.</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connect with your customers through multiple channels from a single platform. Scale your communication effortlessly as your business grows.
            </p>
          </div>
          
          <div className="glass p-10 rounded-2xl border transition-smooth hover-lift">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-bold text-primary">7.8X</div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Economical Growth</h3>
            <p className="text-muted-foreground leading-relaxed">
              Achieve exceptional ROI with our cost-effective communication solutions. Maximize your marketing impact while minimizing expenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
