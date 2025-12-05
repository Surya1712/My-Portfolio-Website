import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Full-Stack Developer & Designer
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Crafting Digital
            <br />
            <span className="text-gradient">Experiences</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            I'm John Doe, a passionate developer and designer based in New York. 
            I create beautiful, functional websites and applications that help businesses grow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
          
          <a 
            href="#about" 
            className="inline-flex items-center justify-center mt-20 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
