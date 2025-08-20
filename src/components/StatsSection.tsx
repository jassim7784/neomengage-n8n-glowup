const StatsSection = () => {
  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "98%", label: "Uptime" },
    { number: "150+", label: "Integrations" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Leading Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of companies that chose NeoMengage to transform their customer engagement
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;