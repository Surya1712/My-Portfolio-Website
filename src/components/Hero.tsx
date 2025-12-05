import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Full Stack Developer
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Hi, I'm
            <br />
            <span className="text-gradient">Suraj Makwana</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Motivated Full Stack Developer specializing in the MERN stack. 
            I build responsive, scalable web applications with clean, maintainable code.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://github.com/Surya1712"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/suraj-makwana1712"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="inline-flex items-center justify-center mt-16 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
