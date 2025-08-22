import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import LogoWithBackground from "@/components/LogoWithBackground";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-strong border-b border-purple-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <LogoWithBackground className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-smooth relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-smooth relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-smooth relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="hover-glow">Sign In</Button>
            <Button variant="cyber" className="hover-lift">
              <Zap className="w-4 h-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden glass p-2 rounded-lg hover-glow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 glass-strong rounded-2xl p-6">
            <a href="#services" className="block text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#solutions" className="block text-foreground hover:text-primary transition-smooth">
              Solutions
            </a>
            <a href="#products" className="block text-foreground hover:text-primary transition-smooth">
              Products
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
            <div className="flex flex-col space-y-3 pt-4 border-t border-purple-500/20">
              <Button variant="ghost" className="hover-glow">Sign In</Button>
              <Button variant="cyber" className="hover-lift">
                <Zap className="w-4 h-4" />
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;