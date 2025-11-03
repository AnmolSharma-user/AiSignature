import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the AI signature generator really free?",
    answer: "Yes! Our AI signature generator is completely free to use. You can create unlimited signatures without any sign-up or payment required.",
  },
  {
    question: "How does the AI signature generator work?",
    answer: "Simply enter your name, and our AI will generate 10 unique, professional signature variations for you. The AI analyzes different handwriting styles and creates personalized signatures based on your name.",
  },
  {
    question: "Can I download the signatures I create?",
    answer: "Absolutely! You can download any signature you like in both PNG and SVG formats. PNG is great for documents, while SVG maintains perfect quality at any size.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No account needed! Our AI signature maker works instantly without any registration. Just enter your name and start creating beautiful signatures.",
  },
  {
    question: "What signature styles are available?",
    answer: "Our AI generates 10 different signature variations, each with unique characteristics - from elegant cursive to modern minimalist styles. You can choose the one that best represents you.",
  },
  {
    question: "Can I use these signatures legally?",
    answer: "Yes! The signatures generated are yours to use. However, for legal documents, we recommend consulting with legal professionals in your jurisdiction about digital signature requirements.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our AI signature generator
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
