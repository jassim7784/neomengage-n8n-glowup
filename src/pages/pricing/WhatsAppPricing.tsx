import PageLayout from "@/components/PageLayout";
import { MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter – Free Forever",
    price: "£0",
    priceSuffix: "",
    tagline: "For Developers & Small Teams",
    highlight: "Includes 1,000 messages/month",
    features: [
      "1 WhatsApp number",
      "Template messages",
      "Basic analytics",
      "Webhook support",
      "Email support",
    ],
    cta: "Get started for free",
    ctaLink: "/contact",
    popular: false,
  },
  {
    name: "Growth",
    price: "£149",
    priceSuffix: "/month",
    tagline: "For Early & Growing Businesses",
    highlight: "Includes 25,000 messages/month (£6 per 1K additional messages)",
    features: [
      "Everything in Starter, plus...",
      "3 WhatsApp numbers",
      "Template & session messages",
      "Advanced analytics dashboard",
      "API access & webhooks",
      "Priority email & chat support",
      "Multi-language templates",
      "Unlimited contacts",
    ],
    cta: "Get started",
    ctaLink: "/contact",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "(starts from)",
    tagline: "For Large Businesses & Enterprises",
    highlight: "Custom Volume Based Pricing",
    features: [
      "Everything in Growth+",
      "Unlimited WhatsApp numbers",
      "Dedicated account manager",
      "Custom SLA & 24/7 priority support",
      "Dedicated solutions architect",
      "Custom integrations & data exports",
      "Private cloud or on-prem deployment",
      "SSO, SOC 2, GDPR compliance",
    ],
    cta: "Book a demo",
    ctaLink: "/contact",
    popular: false,
  },
];

const WhatsAppPricing = () => {
  return (
    <PageLayout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Business API
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Simple, Transparent Pricing
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border flex flex-col h-full transition-all duration-300 ${
                  plan.popular
                    ? "border-primary bg-card shadow-primary scale-[1.02]"
                    : "border-border bg-card/60 hover:border-primary/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6">
                    <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-primary">
                      <Sparkles className="w-3 h-3" /> Popular
                    </span>
                  </div>
                )}

                {/* Plan name & price */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    {plan.priceSuffix && (
                      <span className="text-muted-foreground text-sm">{plan.priceSuffix}</span>
                    )}
                  </div>
                  <p className="text-primary text-sm font-medium">{plan.tagline}</p>
                </div>

                {/* Highlight */}
                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-sm text-foreground font-medium leading-relaxed">
                    {plan.highlight}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${i === 0 && plan.popular ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                      {i === 0 && plan.popular ? null : (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={plan.ctaLink}
                  className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary"
                      : "bg-transparent border border-border hover:border-primary/50 text-foreground hover:bg-accent"
                  }`}
                >
                  {plan.cta} {!plan.popular && "›"}
                </Link>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-center text-muted-foreground text-sm mt-10">
            All plans include SSL encryption, 99.9% uptime SLA, and GDPR compliance. <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for custom requirements.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default WhatsAppPricing;
