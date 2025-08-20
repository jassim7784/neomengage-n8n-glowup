import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary"></div>
            <span className="text-2xl font-bold gradient-text">NeoMengage</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-smooth">
              Solutions
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-smooth">
              Pricing
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="gradient">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#solutions" className="block text-foreground hover:text-primary transition-smooth">
              Solutions
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary transition-smooth">
              Pricing
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost">Sign In</Button>
              <Button variant="gradient">Get Started</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;