import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ThreeStepSection from "@/components/ThreeStepSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import EnquireSection from "@/components/EnquireSection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main className="pt-[70px] md:pt-[100px]">
        <CTASection />
        <StatsSection />
        <ProcessSection />
        <WhyUsSection />
        <ServicesSection />
        <TrustSection />
        <ThreeStepSection />
        <TestimonialsSection />
        <BlogSection />
        <EnquireSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
