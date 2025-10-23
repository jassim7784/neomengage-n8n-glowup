import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import LogoWithBackground from "./LogoWithBackground";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <LogoWithBackground className="w-10 h-10" alt="NeoMengage Logo" />
              <span className="text-xl font-bold text-foreground">Neom Engage</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Neom Engage offers advanced communication solutions, enhancing business connectivity through reliable SMS, voice, and omnichannel services.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth" aria-label="Threads">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.544 2.717-1.398 1.736-2.082 4.18-2.098 7.475.013 3.293.696 5.737 2.092 7.47 1.433 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142c-.126-.742-.375-1.332-.74-1.76-.396-.465-.942-.7-1.626-.7-1.018 0-1.766.388-2.222 1.154-.166.279-.303.582-.41.909l-1.95-.48c.15-.55.37-1.076.657-1.568.733-1.255 1.96-1.89 3.64-1.89 1.231 0 2.283.374 3.125 1.113.876.77 1.425 1.873 1.632 3.284.193 1.313.05 2.602-.424 3.831-.474 1.227-1.22 2.237-2.22 3.002-1.002.767-2.256 1.156-3.73 1.156h-.014c-3.583-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@neomengage.com" className="text-muted-foreground hover:text-primary transition-smooth" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-foreground">Contact Us</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <p>71 A Meadowlands, Downpatrick,<br />Co Down, BT30 6HG, UK</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <p>+44 7436787758</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <p>info@neomengage.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            COPYRIGHT © 2025 neom engage
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;