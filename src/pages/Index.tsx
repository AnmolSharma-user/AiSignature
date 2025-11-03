import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SignatureGenerator } from "@/components/SignatureGenerator";
import { SEOContent } from "@/components/SEOContent";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onGetStarted={scrollToGenerator} />
      <SignatureGenerator />
      <Features />
      <SEOContent />
      <Testimonials />
      <FAQ />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
