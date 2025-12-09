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
            Neom Engage is your gateway to smarter, stronger customer communication. We deliver a powerful omnichannel platform built for scale, reliability, and global reach. From transactional SMS and secure user verification to promotional emails, missed call solutions, voice broadcasts, polling, WhatsApp, and RCS — we equip businesses with everything they need to engage customers effortlessly. Backed by robust compliance and an experienced team, Neom Engage helps brands create exceptional customer experiences and drive results that truly matter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="glass p-10 rounded-2xl border transition-smooth hover-lift">
            <CheckCircle className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">One Connection. Infinite Possibilities.</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reach your customers across every channel from one powerful platform — and scale your communication as fast as your business grows.
            </p>
          </div>
          
          <div className="glass p-10 rounded-2xl border transition-smooth hover-lift">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-bold text-primary">7.8X</div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Smarter Growth</h3>
            <p className="text-muted-foreground leading-relaxed">
              Unlock outstanding ROI with our cost-efficient communication suite. Amplify your marketing impact while keeping costs dramatically lower.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
