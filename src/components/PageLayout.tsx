import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import FloatingParticles from "@/components/ui/FloatingParticles";

interface PageLayoutProps {
  children: React.ReactNode;
  showParticles?: boolean;
}

const PageLayout = ({ children, showParticles = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <Header />
      {showParticles && <FloatingParticles count={15} className="fixed inset-0 pointer-events-none opacity-50" />}
      <main className="pt-[70px] md:pt-[100px] relative z-10">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default PageLayout;
