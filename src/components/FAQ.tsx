import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const getFaqs = (variant: 'generator' | 'maker' | 'creator' | 'free') => {
  const baseFaqs = {
    generator: [
      {
        question: "How does the AI signature generator work?",
        answer: "Our AI signature generator uses advanced machine learning algorithms trained on millions of handwriting samples. Simply enter your name, and the AI analyzes letter patterns, connections, and styles to automatically generate 10 unique professional signatures in seconds.",
      },
      {
        question: "What makes this AI generator different?",
        answer: "Unlike basic text-to-cursive converters, our AI generator understands handwriting nuances like stroke variations, pressure points, and natural letter flow. It produces signatures that look authentically handwritten rather than computer-generated.",
      },
      {
        question: "Can I generate multiple signature variations?",
        answer: "Yes! Each generation produces 10 unique signature designs. You can generate as many times as you want, giving you unlimited options to find your perfect signature.",
      },
      {
        question: "Is the AI signature generator really free?",
        answer: "Absolutely! Our generator is 100% free with no hidden costs, trials, or premium upsells. Generate unlimited signatures without any payment or signup required.",
      },
      {
        question: "What file formats can I download?",
        answer: "You can download your AI-generated signature in PNG (perfect for documents and images) or SVG (scalable vector format that maintains quality at any size).",
      },
      {
        question: "Are the generated signatures legally valid?",
        answer: "Yes! AI-generated signatures can be used legally. However, legal requirements vary by jurisdiction and document type, so consult with legal professionals for important documents.",
      },
    ],
    maker: [
      {
        question: "How do I make a signature with AI?",
        answer: "Enter your name in our AI signature maker, and it instantly creates 10 custom signature designs for you. Browse through the options, select your favorite, customize the color, and download in your preferred format.",
      },
      {
        question: "Can I customize the signatures I make?",
        answer: "Yes! Our maker offers color customization so you can match your brand or personal preference. You can also regenerate with different options to explore various styles.",
      },
      {
        question: "What makes a good signature?",
        answer: "A good signature balances readability with style, maintains consistent proportions, and reflects your personality. Our AI maker automatically creates balanced, professional signatures that meet these criteria.",
      },
      {
        question: "Is there a limit to how many signatures I can make?",
        answer: "No limits! Make as many signatures as you want. Generate different variations, try different names, or explore various styles - all completely free.",
      },
      {
        question: "Can I use the signature maker on mobile?",
        answer: "Absolutely! Our AI signature maker works perfectly on all devices - smartphones, tablets, and computers. The interface adapts seamlessly to your screen size.",
      },
      {
        question: "Do I need design skills to make a professional signature?",
        answer: "Not at all! Our AI maker handles all the design work for you. Just enter your name and let the AI create professional-quality signatures instantly.",
      },
    ],
    creator: [
      {
        question: "What can I create with the AI signature creator?",
        answer: "Our creator generates unique, artistic signatures that reflect your personal style. Create signatures for business branding, artistic works, professional documents, or personal use - all designed with AI precision.",
      },
      {
        question: "How creative are the AI-generated designs?",
        answer: "Very creative! Our creator produces 10 distinct design variations ranging from minimalist modern to elaborate classical styles, each exploring different aesthetic directions while maintaining professional quality.",
      },
      {
        question: "Can I create signatures for my brand?",
        answer: "Absolutely! Our creator is perfect for personal branding. The AI designs signatures that work as distinctive brand marks, suitable for logos, watermarks, and professional identity.",
      },
      {
        question: "What's the difference between creating and generating a signature?",
        answer: "Creating implies a more artistic, design-focused approach. Our creator emphasizes aesthetic quality and unique character, perfect for those who want signatures with personality and visual impact.",
      },
      {
        question: "Can I create different styles for different purposes?",
        answer: "Yes! Create multiple signature styles - formal ones for business, creative ones for artwork, or casual ones for personal use. There's no limit to what you can create.",
      },
      {
        question: "Is the creation process instant?",
        answer: "Yes! Despite the sophisticated AI design process, creation happens in seconds. You'll see 10 unique signature designs almost instantly after entering your name.",
      },
    ],
    free: [
      {
        question: "Is this really 100% free?",
        answer: "Yes! Completely free forever. No trials, no premium plans, no hidden costs. Every feature you see is free to use unlimited times with no restrictions whatsoever.",
      },
      {
        question: "Why is it free? What's the catch?",
        answer: "No catch! We believe professional signature creation should be accessible to everyone. Our sustainable model allows us to provide premium AI technology at no cost to users.",
      },
      {
        question: "Do free users get lower quality signatures?",
        answer: "Absolutely not! Everyone gets the same high-quality AI-generated signatures. There are no quality tiers, reduced resolution, or limited features for free users.",
      },
      {
        question: "Are there watermarks on free downloads?",
        answer: "No watermarks ever! Your downloads are clean, professional, and ready to use immediately. What you see is exactly what you get.",
      },
      {
        question: "Will this always be free?",
        answer: "Yes! Our commitment to being free is permanent. We won't suddenly introduce charges or convert to a paid model. Free means free forever.",
      },
      {
        question: "Do I need to sign up to use the free generator?",
        answer: "No signup required! Access all features instantly without creating an account, providing email, or sharing any personal information.",
      },
    ],
  };

  return baseFaqs[variant];
};

interface FAQProps {
  variant?: 'generator' | 'maker' | 'creator' | 'free';
}

export const FAQ = ({ variant = 'generator' }: FAQProps) => {
  const faqs = getFaqs(variant);
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
