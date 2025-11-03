export interface SEORoute {
  path: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
}

export const seoRoutes: SEORoute[] = [
  {
    path: "/",
    title: "AI Signature Generator - Create Your Perfect Digital Signature Free",
    description: "Generate unique AI-powered signatures instantly. Create professional digital signatures with our free AI signature generator. Choose from multiple styles and download immediately.",
    keywords: "AI signature generator, digital signature, signature creator, free signature maker",
    h1: "AI Signature Generator"
  },
  {
    path: "/ai-signature-generator",
    title: "AI Signature Generator - Create Custom Signatures with AI Technology",
    description: "Advanced AI signature generator creates personalized signatures in seconds. Generate professional, unique signatures with AI-powered design. Free and instant download.",
    keywords: "AI signature generator, AI signature design, artificial intelligence signature, automated signature creator",
    h1: "AI Signature Generator"
  },
  {
    path: "/ai-signature-maker",
    title: "AI Signature Maker - Make Your Perfect Signature with AI",
    description: "Professional AI signature maker crafts beautiful signatures instantly. Make custom digital signatures with artificial intelligence. Try our free AI-powered signature maker now.",
    keywords: "AI signature maker, make signature with AI, AI signature design tool, signature making software",
    h1: "AI Signature Maker"
  },
  {
    path: "/ai-signature-creator",
    title: "AI Signature Creator - Design Unique Signatures Instantly",
    description: "Create stunning signatures with our AI signature creator. Design personalized, professional signatures using advanced AI. Easy to use, instant results, completely free.",
    keywords: "AI signature creator, create signature online, AI signature design, signature creation tool",
    h1: "AI Signature Creator"
  },
  {
    path: "/ai-signature-generator-free",
    title: "Free AI Signature Generator - Create Signatures at No Cost",
    description: "100% free AI signature generator with no hidden fees. Create unlimited professional signatures using AI technology. Download instantly without watermarks or limitations.",
    keywords: "free AI signature generator, free signature maker, no cost signature creator, free digital signature",
    h1: "Free AI Signature Generator"
  },
  {
    path: "/ai-free-signature-generator",
    title: "AI Free Signature Generator - No Cost Digital Signature Creation",
    description: "Generate professional signatures completely free with AI. No signup, no payment, unlimited use. Create your perfect signature in seconds with our free AI tool.",
    keywords: "AI free signature generator, free online signature, no cost AI signature, signature generator no charge",
    h1: "AI Free Signature Generator"
  }
];

export const getSEOConfig = (pathname: string): SEORoute => {
  const route = seoRoutes.find(r => r.path === pathname);
  return route || seoRoutes[0];
};
