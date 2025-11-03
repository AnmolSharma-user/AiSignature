export interface SEORoute {
  path: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  heroSubtitle: string;
  variant: 'generator' | 'maker' | 'creator' | 'free';
  uniqueContent: string;
  schemaType: string;
}

export const seoRoutes: SEORoute[] = [
  {
    path: "/",
    title: "AI Signature Generator - Create Your Perfect Digital Signature Free",
    description: "Generate unique AI-powered signatures instantly. Create professional digital signatures with our free AI signature generator. Choose from multiple styles and download immediately.",
    keywords: "AI signature generator, digital signature, signature creator, free signature maker",
    h1: "AI Signature Generator",
    heroSubtitle: "Generate 10 unique, professional signature styles instantly with AI-powered automation",
    variant: 'generator',
    uniqueContent: "Our AI Signature Generator revolutionizes the way you create digital signatures by leveraging advanced machine learning algorithms trained on millions of handwriting samples. The technology behind our generator analyzes calligraphic patterns, letter formations, and stylistic elements to produce signatures that look authentically handwritten. Unlike traditional signature tools that simply convert text to cursive fonts, our AI understands the subtle nuances of personal handwriting styles, including pressure variations, stroke connections, and character spacing. This results in signatures that capture the organic flow of natural handwriting while maintaining perfect digital clarity. The generator produces ten distinct variations per request, each offering unique characteristics from elegant formal styles to contemporary casual signatures. Whether you need a signature for business contracts, legal documents, email correspondence, or personal branding, our AI generator delivers professional-quality results in seconds.",
    schemaType: "SoftwareApplication"
  },
  {
    path: "/ai-signature-generator",
    title: "AI Signature Generator - Create Custom Signatures with AI Technology",
    description: "Advanced AI signature generator creates personalized signatures in seconds. Generate professional, unique signatures with AI-powered design. Free and instant download.",
    keywords: "AI signature generator, AI signature design, artificial intelligence signature, automated signature creator",
    h1: "Advanced AI Signature Generator",
    heroSubtitle: "Harness cutting-edge AI technology to automatically generate professional signatures",
    variant: 'generator',
    uniqueContent: "Experience the power of artificial intelligence in signature generation with our state-of-the-art AI Signature Generator. Built on advanced neural networks and deep learning models, this tool represents the pinnacle of automated signature creation technology. Our system has been trained on extensive datasets comprising diverse handwriting styles from around the world, enabling it to understand and replicate the intricate patterns that make each signature unique. The generator employs sophisticated algorithms to analyze your name's letter combinations, automatically selecting optimal connections and flourishes that create visual harmony. What sets our AI generator apart is its ability to produce consistently high-quality results while maintaining variability - no two generation sessions produce identical signatures. The technology adapts to different name lengths and character combinations, ensuring balanced proportions and aesthetic appeal regardless of your specific input. Perfect for professionals seeking quick signature solutions, our generator eliminates the time-consuming process of manual signature design while delivering results that rival hand-crafted alternatives.",
    schemaType: "SoftwareApplication"
  },
  {
    path: "/ai-signature-maker",
    title: "AI Signature Maker - Make Your Perfect Signature with AI",
    description: "Professional AI signature maker crafts beautiful signatures instantly. Make custom digital signatures with artificial intelligence. Try our free AI-powered signature maker now.",
    keywords: "AI signature maker, make signature with AI, AI signature design tool, signature making software",
    h1: "Professional AI Signature Maker",
    heroSubtitle: "Make stunning custom signatures with our intelligent AI-powered signature maker",
    variant: 'maker',
    uniqueContent: "Transform your name into a professional signature with our intuitive AI Signature Maker, designed specifically for users who want hands-on control over their signature creation process. Unlike passive generators, our maker empowers you to actively participate in crafting your perfect signature through intelligent customization options. The AI assists your creative process by suggesting stylistic variations, optimal letter connections, and aesthetic improvements based on your preferences. Input your name and watch as the maker provides real-time previews of ten distinct signature styles, each carefully crafted to reflect different personality traits and professional contexts. Want something bold and assertive for business contracts? Or perhaps elegant and refined for formal correspondence? Our maker adapts to your needs. The system intelligently balances artistic flair with readability, ensuring your signature remains recognizable while standing out from generic text. Color customization allows you to match your brand identity or personal preference, while format options (PNG and SVG) ensure compatibility with any document type. The making process is straightforward yet powerful, giving you professional designer-level results without requiring any design expertise.",
    schemaType: "WebApplication"
  },
  {
    path: "/ai-signature-creator",
    title: "AI Signature Creator - Design Unique Signatures Instantly",
    description: "Create stunning signatures with our AI signature creator. Design personalized, professional signatures using advanced AI. Easy to use, instant results, completely free.",
    keywords: "AI signature creator, create signature online, AI signature design, signature creation tool",
    h1: "Creative AI Signature Creator",
    heroSubtitle: "Create and design one-of-a-kind signatures that perfectly capture your identity",
    variant: 'creator',
    uniqueContent: "Unleash your creative potential with our AI Signature Creator, the ultimate tool for designing signatures that truly represent your unique identity. This creator focuses on the artistic and design aspects of signature development, helping you craft a visual representation of your personal or professional brand. The AI acts as your creative partner, offering design suggestions while respecting your artistic vision. Start the creation process by entering your name, and the system immediately presents ten creatively diverse signature designs, each exploring different aesthetic directions. From minimalist modern designs to elaborate classical flourishes, the creator showcases the full spectrum of signature possibilities. The technology behind our creator analyzes compositional balance, visual weight, and aesthetic harmony to ensure each design option is not just functional but genuinely beautiful. You're not limited to pre-set styles - the creator encourages experimentation with different looks until you discover the signature that resonates with your personality. Whether you're an entrepreneur building a personal brand, an artist signing creative works, or a professional seeking a distinctive mark, our creator delivers signatures with character and impact. The creation process is both fun and functional, turning the practical task of obtaining a signature into an engaging design experience.",
    schemaType: "CreativeWork"
  },
  {
    path: "/ai-signature-generator-free",
    title: "Free AI Signature Generator - Create Signatures at No Cost",
    description: "100% free AI signature generator with no hidden fees. Create unlimited professional signatures using AI technology. Download instantly without watermarks or limitations.",
    keywords: "free AI signature generator, free signature maker, no cost signature creator, free digital signature",
    h1: "100% Free AI Signature Generator",
    heroSubtitle: "Premium signature generation, absolutely free - no hidden costs, no watermarks, unlimited use",
    variant: 'free',
    uniqueContent: "Discover truly free signature generation with our AI Signature Generator Free tool - no subscriptions, no hidden fees, no premium upsells, just unlimited professional signatures at zero cost. In a digital landscape filled with free trials that convert to paid plans and freemium models with restricted features, our commitment to being completely free forever stands out. We believe professional signature creation should be accessible to everyone, from students and job seekers to small business owners and corporate professionals. That's why every feature you see is completely free to use without restrictions. Generate unlimited signature variations, download in multiple formats (PNG and SVG), customize colors to your preference, and use your signatures commercially - all without spending a penny. There are no daily limits, no reduced quality for free users, and absolutely no watermarks on your downloads. Our free AI technology delivers the same sophisticated algorithms and high-quality results as expensive signature design services, democratizing access to professional signature creation. Whether you need one signature or one hundred, whether you use it once a month or every day, you'll never see a paywall or receive a bill. This is signature generation as it should be - powerful, professional, and perpetually free.",
    schemaType: "WebApplication"
  },
  {
    path: "/ai-free-signature-generator",
    title: "AI Free Signature Generator - No Cost Digital Signature Creation",
    description: "Generate professional signatures completely free with AI. No signup, no payment, unlimited use. Create your perfect signature in seconds with our free AI tool.",
    keywords: "AI free signature generator, free online signature, no cost AI signature, signature generator no charge",
    h1: "AI Free Signature Generator - Zero Cost",
    heroSubtitle: "Professional AI signatures without any cost - no signup required, instant access forever",
    variant: 'free',
    uniqueContent: "Experience the freedom of professional signature creation with our AI Free Signature Generator, where advanced technology meets complete accessibility. We've eliminated every possible barrier to professional signature creation - no account registration, no credit card requirements, no software downloads, and certainly no charges of any kind. Simply visit our platform, enter your name, and within seconds you'll have access to ten professionally designed AI-generated signatures ready for immediate use. Our free approach isn't a marketing gimmick or temporary promotion; it's our fundamental philosophy. We've built a sustainable model that allows us to provide enterprise-level signature generation technology to everyone at no cost. The AI powering our free generator is the same sophisticated system used by premium services, trained on extensive datasets and capable of producing signatures indistinguishable from those created by professional designers. You get full access to all features including style customization, color selection, and high-resolution downloads in both PNG and SVG formats. Use your signatures for any purpose - business contracts, email headers, document signing, personal correspondence, or creative projects. There are no usage limits, no quality degradation, and no annoying advertisements interrupting your experience. This is truly free signature generation in its purest form - powerful AI technology available to anyone, anywhere, anytime.",
    schemaType: "WebApplication"
  }
];

export const getSEOConfig = (pathname: string): SEORoute => {
  const route = seoRoutes.find(r => r.path === pathname);
  return route || seoRoutes[0];
};
