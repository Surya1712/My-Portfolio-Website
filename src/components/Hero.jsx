import { ArrowDown, Github, Linkedin, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:100px_100px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 sm:mb-10 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">Available for Opportunities</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Greeting */}
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-muted-foreground">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Hello, I'm a Full Stack Developer
              </span>
            </div>

            {/* Name with Creative Layout */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-none">
                <span className="text-foreground">Suraj</span>
                <br />
                <span className="text-gradient inline-block mt-2">Makwana</span>
              </h1>
            </div>

            {/* Animated Tagline */}
            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-muted-foreground">
                <span>I build</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient text-primary-foreground rounded-full font-semibold text-sm sm:text-base">
                  beautiful
                </span>
                <span>&</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-primary text-primary rounded-full font-semibold text-sm sm:text-base">
                  scalable
                </span>
                <span>web apps</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-up px-4" style={{ animationDelay: "0.4s" }}>
              Specializing in MERN stack development, creating responsive and user-friendly applications with clean, maintainable code.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up pt-4" style={{ animationDelay: "0.5s" }}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient hover:opacity-90 shadow-hover text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6" asChild>
                <a href="#projects">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View My Work
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-border hover:border-primary hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 pt-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
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
          </div>
          
          {/* Scroll Indicator */}
          <a 
            href="#about" 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs mb-2 opacity-60">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;