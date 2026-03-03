import PageLayout from "@/components/PageLayout";

const RCSPricing = () => {
  return (
    <PageLayout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">RCS Pricing</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Rich Communication Services — the next generation of SMS with images, carousels, and verified branding.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "£59", msgs: "Up to 5,000 messages/mo", features: ["Basic RCS messages", "Text & images", "Basic analytics", "Email support"] },
              { name: "Growth", price: "£179", msgs: "Up to 25,000 messages/mo", features: ["Full RCS rich media", "Carousels & cards", "Advanced analytics", "Priority support", "API access"], highlight: true },
              { name: "Enterprise", price: "Custom", msgs: "Unlimited messages", features: ["Unlimited volume", "Verified sender badge", "Dedicated account manager", "SLA guarantee", "Custom integrations"] },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 border ${plan.highlight ? 'border-primary bg-primary/10' : 'border-purple-500/20 bg-card'}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-1">{plan.price}</div>
                <p className="text-muted-foreground text-sm mb-6">{plan.msgs}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="text-amber-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="block text-center py-2 px-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors">
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RCSPricing;
