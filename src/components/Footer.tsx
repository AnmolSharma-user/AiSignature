import { BookOpen, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export const Footer = () => {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToFAQ = () => {
    document.getElementById("faq")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <footer className="bg-gradient-to-br from-background via-secondary/5 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground font-signature">SignatureAI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Create stunning professional signatures instantly with our free AI-powered generator. No signup required.
            </p>
            <div className="flex gap-2">
              <Button onClick={scrollToGenerator} size="sm" className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                <Sparkles className="w-4 h-4 mr-2" />
                Try Now
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={scrollToGenerator} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Signature Generator
                </button>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <button onClick={scrollToFAQ} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Tools */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">Popular Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-signature-generator" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI Signature Generator
                </Link>
              </li>
              <li>
                <Link to="/ai-signature-maker" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI Signature Maker
                </Link>
              </li>
              <li>
                <Link to="/ai-signature-creator" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI Signature Creator
                </Link>
              </li>
              <li>
                <Link to="/ai-signature-generator-free" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Free AI Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">Get In Touch</h3>
            <p className="text-sm text-muted-foreground">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <a href="mailto:signaturereform.com@gmail.com" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
              <Mail className="w-4 h-4" />
              signaturereform.com@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
            <Link to="/ai-signature-generator" className="px-3 py-1 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">AI Signature Generator</Link>
            <Link to="/ai-signature-maker" className="px-3 py-1 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">AI Signature Maker</Link>
            <Link to="/ai-signature-creator" className="px-3 py-1 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">AI Signature Creator</Link>
            <Link to="/ai-signature-generator-free" className="px-3 py-1 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">Free AI Generator</Link>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <span className="text-border">|</span>
            <span>© 2025 SignatureAI</span>
          </div>
        </div>
      </div>
    </footer>;
};