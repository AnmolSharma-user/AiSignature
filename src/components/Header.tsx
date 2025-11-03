import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3" opacity="0.7"/>
            </svg>
          </div>
          <span className="font-extrabold text-lg md:text-xl text-foreground" style={{ fontFamily: "'Dancing Script', cursive" }}>
            SignatureAI
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#generator" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
            Generator
          </a>
          <a href="#faq" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button 
            onClick={scrollToGenerator} 
            size="sm" 
            className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 text-white font-bold px-5 md:px-6 h-9 md:h-10 rounded-xl transition-all duration-300"
          >
            Start Free
          </Button>
        </div>
      </div>
    </header>
  );
};
