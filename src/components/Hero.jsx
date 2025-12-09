import { ArrowDown, Github, Linkedin, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:100px_100px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 sm:mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">Available for Opportunities</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[1.1] mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm
            <br />
            <span className="text-gradient glow-text">Suraj Makwana</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-up px-4" style={{ animationDelay: "0.2s" }}>
            Full Stack Developer crafting <span className="text-foreground font-medium">beautiful</span> & <span className="text-foreground font-medium">scalable</span> web applications with the MERN stack
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up px-4" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="w-full sm:w-auto bg-gradient hover:opacity-90 shadow-hover text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6" asChild>
              <a href="#projects">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-border/50 hover:bg-secondary/50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-14 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://github.com/Surya1712"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-2xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-soft transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/suraj-makwana1712"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-2xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-soft transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="inline-flex flex-col items-center justify-center mt-16 sm:mt-20 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs sm:text-sm mb-2 opacity-60">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;