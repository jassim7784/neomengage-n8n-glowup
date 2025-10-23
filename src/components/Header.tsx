import { Button } from "@/components/ui/button";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { useState } from "react";
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

  return (
    <header className="fixed top-0 w-full z-50 glass-strong border-b border-purple-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <LogoWithBackground className="hidden md:block w-[320px] h-[96px]" />
            <LogoWithBackground className="md:hidden w-[220px] h-[66px]" />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2">
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
                  <ul className="grid w-[400px] gap-3 p-4 glass-strong border-0">
                    <li>
                      <NavigationMenuLink href="/services/a2p-sms" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">A2P SMS Service</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/bulk-sms" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Bulk SMS Marketing Enterprise</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/sms-api" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">SMS API Integration</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/cpaas" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">CPaaS/Omnichannel</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/web-design" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Web Design & Development</div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  Product & Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 glass-strong border-0">
                    <li>
                      <NavigationMenuLink href="/products/wholesale-sms" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Wholesale SMS Service</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/products/smpp" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">SMPP Connectivity</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/products/web-portal" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">HTTPS SMS Web Portal</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/products/http-api" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">HTTP SMS API</div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/blogs" className="text-foreground hover:text-primary transition-smooth px-4 py-2 bg-transparent">
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
            <a href="/" className="block text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground">Services</div>
              <a href="/services/a2p-sms" className="block text-foreground hover:text-primary transition-smooth pl-4">
                A2P SMS Service
              </a>
              <a href="/services/bulk-sms" className="block text-foreground hover:text-primary transition-smooth pl-4">
                Bulk SMS Marketing Enterprise
              </a>
              <a href="/services/sms-api" className="block text-foreground hover:text-primary transition-smooth pl-4">
                SMS API Integration
              </a>
              <a href="/services/cpaas" className="block text-foreground hover:text-primary transition-smooth pl-4">
                CPaaS/Omnichannel
              </a>
              <a href="/services/web-design" className="block text-foreground hover:text-primary transition-smooth pl-4">
                Web Design & Development
              </a>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground">Product & Solutions</div>
              <a href="/products/wholesale-sms" className="block text-foreground hover:text-primary transition-smooth pl-4">
                Wholesale SMS Service
              </a>
              <a href="/products/smpp" className="block text-foreground hover:text-primary transition-smooth pl-4">
                SMPP Connectivity
              </a>
              <a href="/products/web-portal" className="block text-foreground hover:text-primary transition-smooth pl-4">
                HTTPS SMS Web Portal
              </a>
              <a href="/products/http-api" className="block text-foreground hover:text-primary transition-smooth pl-4">
                HTTP SMS API
              </a>
            </div>
            <a href="/blogs" className="block text-foreground hover:text-primary transition-smooth">
              Blogs
            </a>
            <a href="/contact" className="block text-foreground hover:text-primary transition-smooth">
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