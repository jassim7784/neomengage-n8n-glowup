import PageLayout from "@/components/PageLayout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Sparkles } from "lucide-react";

const TermsAndConditions = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section ref={ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Legal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Terms and Conditions
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <div className="glass-strong p-8 md:p-12 rounded-3xl space-y-8">
              <div>
                <p className="text-xl text-foreground mb-4">Welcome to <strong>Neom Engage</strong>!</p>
                <p className="text-muted-foreground">
                  By accessing or using our website ("Website"), you agree to these Terms and Conditions ("T&C") and our Privacy Policy. If you do not agree, please refrain from using the Website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. About Our Content</h2>
                <p className="text-muted-foreground">
                  The content on <strong>Neom Engage</strong> is shared for general information purposes. We may update or change content at any time without prior notice to keep things fresh and relevant.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Accuracy & Availability</h2>
                <p className="text-muted-foreground mb-4">
                  While we strive to keep our content accurate and up to date, <strong>Neom Engage</strong> does not guarantee completeness, accuracy, or suitability for any specific purpose.
                </p>
                <p className="text-muted-foreground">
                  Our Website is primarily intended for users in India. If you access it from elsewhere, please ensure your usage complies with local laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Using Neom Engage Responsibly</h2>
                <p className="text-muted-foreground mb-4">We ask that you use the Website in a lawful and respectful manner. Please do not:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the Website for illegal activities</li>
                  <li>Attempt to bypass security or access restricted areas</li>
                  <li>Use bots, scripts, or automated tools</li>
                  <li>Share content that violates laws or others' rights</li>
                  <li>Disrupt or interfere with Website functionality</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We reserve the right to restrict or terminate access if these terms are violated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Communication From Us</h2>
                <p className="text-muted-foreground">
                  By interacting with <strong>Neom Engage</strong> or submitting your details, you agree to receive electronic communications from us, including emails and Website updates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Responsibility</h2>
                <p className="text-muted-foreground">
                  You agree to protect <strong>Neom Engage</strong> from any claims or losses arising from misuse of the Website or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. External Links</h2>
                <p className="text-muted-foreground">
                  Our Website may contain links to third-party websites for convenience. <strong>Neom Engage</strong> does not control or endorse these sites and is not responsible for their content or practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  <strong>Neom Engage</strong> is not liable for any damages resulting from your use of the Website or reliance on its content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. If Part of This Isn't Enforceable</h2>
                <p className="text-muted-foreground">
                  If any section of these T&C is found unenforceable, the remaining sections will still apply.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Transfer of Terms</h2>
                <p className="text-muted-foreground">
                  These T&C cannot be transferred or assigned without our written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms are governed by the laws of India, and any disputes will be handled by courts in India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Updates to These Terms</h2>
                <p className="text-muted-foreground">
                  We may update these T&C from time to time. Continued use of the Website means you accept the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Get in Touch</h2>
                <p className="text-muted-foreground">
                  If you have questions or concerns about these Terms, feel free to contact us through the details provided on the Website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Grievance Officer</h2>
                <p className="text-muted-foreground">
                  As required under the Information Technology Act, 2000, you may reach our Grievance Officer at:
                </p>
                <p className="text-primary font-semibold mt-2">Email: support@neomengage.com</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Ownership & Usage</h2>
                <p className="text-muted-foreground">
                  All content on this Website—including design, layout, and visuals—is owned by or licensed to <strong>Neom Engage</strong>. Unauthorized use may lead to legal action.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-xl text-foreground font-semibold text-center">
                  Thanks for being part of <strong>Neom Engage</strong>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsAndConditions;