import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of communication solutions including bulk SMS marketing, SMS API integration, A2P SMS service, voice SMS, and more."
    },
    {
      question: "How can I start using your service?",
      answer: "You can get started by signing up on our website or contacting our support team for assistance."
    },
    {
      question: "Are your services secure?",
      answer: "Yes, we prioritize security and use advanced encryption and authentication protocols to ensure the safety of your messages."
    },
    {
      question: "Do you provide support?",
      answer: "Yes, our dedicated support team is available 24/7 to assist you with any issues or queries."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Got Questions?</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-strong border-0 rounded-2xl px-6"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
