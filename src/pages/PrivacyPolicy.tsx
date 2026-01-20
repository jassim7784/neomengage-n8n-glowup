import PageLayout from "@/components/PageLayout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Sparkles } from "lucide-react";

const PrivacyPolicy = () => {
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
                Privacy Policy
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
                <p className="text-xl text-foreground mb-4">
                  At <strong>Neom Engage</strong>, your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you visit or interact with our website ("Website").
                </p>
                <p className="text-muted-foreground">
                  By using our Website, you agree to the practices described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We may collect the following information when you interact with <strong>Neom Engage</strong>:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    <p className="text-muted-foreground">
                      Such as your name, email address, phone number, or any details you submit through contact or enquiry forms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Usage Information</h3>
                    <p className="text-muted-foreground">
                      Basic data like pages visited, browser type, device information, and general site usage to help us improve our services.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use your information to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Respond to enquiries or messages</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve website performance and user experience</li>
                  <li>Maintain website security and functionality</li>
                </ul>
                <p className="text-muted-foreground mt-4 font-semibold">
                  We do not sell, rent, or trade your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookies & Tracking</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Neom Engage</strong> may use cookies or similar technologies to enhance your browsing experience and understand website usage.
                </p>
                <p className="text-muted-foreground">
                  You can choose to disable cookies in your browser settings, though some features of the Website may not function properly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We do not share your personal information with third parties except:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>When required by law</li>
                  <li>To protect the rights, safety, or security of <strong>Neom Engage</strong> or its users</li>
                  <li>With trusted service providers who help operate our Website (and who are bound to keep your information confidential)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no method of data transmission over the internet is completely secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. External Links</h2>
                <p className="text-muted-foreground">
                  Our Website may contain links to third-party websites. <strong>Neom Engage</strong> is not responsible for the privacy practices or content of these external sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Choices</h2>
                <p className="text-muted-foreground mb-4">
                  You may choose not to provide personal information, but this may limit your ability to use certain features of the Website.
                </p>
                <p className="text-muted-foreground">
                  You may also contact us if you wish to update, correct, or delete your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  <strong>Neom Engage</strong> does not knowingly collect personal information from children under the age of 13. If you believe such information has been provided, please contact us and we will take appropriate action.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy occasionally to reflect changes in our practices or legal requirements. Any updates will be posted on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions or concerns about this Privacy Policy or how your information is handled, you can reach us at:
                </p>
                <p className="text-primary font-semibold mt-2">Email: support@neomengage.com</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Grievance Officer</h2>
                <p className="text-muted-foreground">
                  In accordance with the Information Technology Act, 2000, grievances may be addressed to:
                </p>
                <p className="text-primary font-semibold mt-2">Email: support@neomengage.com</p>
              </div>

              <div className="pt-8 border-t border-border text-center">
                <p className="text-xl text-foreground font-semibold mb-2">
                  Thank you for trusting <strong>Neom Engage</strong>.
                </p>
                <p className="text-muted-foreground">
                  We're committed to keeping your information safe and transparent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;