import { Button } from "@/components/ui/button";
import { 
  Menu, X, Zap, ChevronDown,
  MessageSquare, Send, Code, Layers, Globe,
  MessagesSquare, MessageCircle, Phone, Mail, Bot, Sparkles, Headphones
} from "lucide-react";
import { useState, useEffect } from "react";
import LogoWithBackground from "@/components/LogoWithBackground";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-purple-500/20 rounded-b-3xl transition-all duration-300 ${
      isScrolled ? 'h-[70px] md:h-[70px]' : 'h-[70px] md:h-[100px]'
    }`}>
      <nav className={`container mx-auto pl-2 pr-4 md:px-8 h-full flex items-center transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-3 md:py-4'
      }`}>
        <div className="flex items-center justify-between w-full relative">
          <a href="/" className="flex items-center">
            <LogoWithBackground 
              className={`hidden md:block transition-all duration-300 ${
                isScrolled ? 'w-[280px] h-[70px]' : 'w-[350px] h-[90px]'
              }`} 
            />
            <LogoWithBackground className="md:hidden w-[260px] h-[65px]" />
          </a>

          {/* Desktop Navigation - Centered with offset for logo */}
          <NavigationMenu className="hidden md:flex absolute left-[calc(50%+80px)] transform -translate-x-1/2">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="text-foreground hover:text-primary transition-smooth px-4 py-2 bg-transparent">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background/95 backdrop-blur-xl border border-purple-500/20 shadow-xl">
                    <li>
                      <NavigationMenuLink href="/services/a2p-sms" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <MessageSquare className="w-4 h-4 text-blue-400" />
                          A2P SMS Service
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/bulk-sms-marketing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <Send className="w-4 h-4 text-green-400" />
                          Bulk SMS Marketing Enterprise
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/sms-api-integration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <Code className="w-4 h-4 text-orange-400" />
                          SMS API Integration
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/cpaas-omnichannel" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <Layers className="w-4 h-4 text-pink-400" />
                          CPaaS/Omnichannel
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/web-design-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <Globe className="w-4 h-4 text-cyan-400" />
                          Web Design & Development
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background/95 backdrop-blur-xl border border-purple-500/20 shadow-xl">
                    <li>
                      <NavigationMenuLink href="/products/sms-solutions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <MessagesSquare className="w-4 h-4 text-violet-400" />
                          SMS Solutions
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/products/whatsapp-solutions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <MessageCircle className="w-4 h-4 text-emerald-400" />
                          WhatsApp Solution
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/products/voice-solutions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <Phone className="w-4 h-4 text-yellow-400" />
                          Voice Solution
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/products/email-solutions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <Mail className="w-4 h-4 text-red-400" />
                          Email Solution
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/products/chatbot-solutions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <Bot className="w-4 h-4 text-indigo-400" />
                          Chatbot Solution
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/products/rcs-solutions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          Rich Communication Solution
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/products/voip-solutions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center gap-3 text-sm font-medium leading-none">
                          <Headphones className="w-4 h-4 text-teal-400" />
                          VoIP Solution
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="https://www.linkedin.com/company/neomengage/posts/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-smooth px-4 py-2 bg-transparent">
                  Blogs
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="text-foreground hover:text-primary transition-smooth px-4 py-2 bg-transparent">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden glass p-2 rounded-lg hover-glow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[hsl(12,8%,5%)] rounded-2xl p-6 border border-purple-500/20 shadow-2xl max-h-[80vh] overflow-y-auto z-50">
            <a href="/" onClick={closeMenu} className="block py-3 text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="border-t border-purple-500/10">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-3 text-foreground hover:text-primary transition-smooth font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  <a href="/services/a2p-sms" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    A2P SMS Service
                  </a>
                  <a href="/services/bulk-sms-marketing" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <Send className="w-4 h-4 text-green-400" />
                    Bulk SMS Marketing Enterprise
                  </a>
                  <a href="/services/sms-api-integration" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <Code className="w-4 h-4 text-orange-400" />
                    SMS API Integration
                  </a>
                  <a href="/services/cpaas-omnichannel" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <Layers className="w-4 h-4 text-pink-400" />
                    CPaaS/Omnichannel
                  </a>
                  <a href="/services/web-design-development" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    Web Design & Development
                  </a>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="border-t border-purple-500/10">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full py-3 text-foreground hover:text-primary transition-smooth font-medium"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  <a href="/products/sms-solutions" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <MessagesSquare className="w-4 h-4 text-violet-400" />
                    SMS Solutions
                  </a>
                  <a href="/products/whatsapp-solutions" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    WhatsApp Solution
                  </a>
                  <a href="/products/voice-solutions" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    Voice Solution
                  </a>
                  <a href="/products/email-solutions" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <Mail className="w-4 h-4 text-red-400" />
                    Email Solution
                  </a>
                  <a href="/products/chatbot-solutions" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <Bot className="w-4 h-4 text-indigo-400" />
                    Chatbot Solution
                  </a>
                  <a href="/products/rcs-solutions" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Rich Communication Solution
                  </a>
                  <a href="/products/voip-solutions" onClick={closeMenu} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
                    <Headphones className="w-4 h-4 text-teal-400" />
                    VoIP Solution
                  </a>
                </div>
              )}
            </div>

            <a href="https://www.linkedin.com/company/neomengage/posts/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="block py-3 text-foreground hover:text-primary transition-smooth font-medium border-t border-purple-500/10">
              Blogs
            </a>

            <a href="/contact" onClick={closeMenu} className="block py-3 text-foreground hover:text-primary transition-smooth font-medium border-t border-purple-500/10">
              Contact
            </a>
            
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;