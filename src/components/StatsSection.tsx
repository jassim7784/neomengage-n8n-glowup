const StatsSection = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
              1K+
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              We've successfully partnered with over 1,000+ businesses to deliver impactful communication solutions.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              "Omnichannel Communication",
              "Personalized Engagement",
              "Data-Driven Insights",
              "Seamless Integrations"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 glass rounded-lg border">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;