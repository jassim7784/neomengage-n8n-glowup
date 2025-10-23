import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSlider from "@/components/ServicesSlider";
import WhyUsSection from "@/components/WhyUsSection";
import IndustriesSlider from "@/components/IndustriesSlider";
import FeaturesSlider from "@/components/FeaturesSlider";
import ProductsList from "@/components/ProductsList";
import EnquireSection from "@/components/EnquireSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesSlider />
        <WhyUsSection />
        <IndustriesSlider />
        <FeaturesSlider />
        <ProductsList />
        <EnquireSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
